import type { Program } from '../types';
import { programs } from '../data/programs';

export interface ProgramResult {
    program: Program;
    status: 'match' | 'rejected';
    reasons: string[];
}

export const evaluatePrograms = (answers: Record<string, any>): ProgramResult[] => {
    // Helper to get answer value
    const getAnswer = (id: string) => answers[id];

    const turnover = getAnswer('q_turnover');
    const location = getAnswer('q_location');
    const industry = getAnswer('q_industry');
    const goal = getAnswer('q_goal');
    const coContribution = getAnswer('q_co_contribution');
    const yearsOperating = Number(getAnswer('q_years_operating')) || 0;

    // Helper to parse turnover range to min value
    const getMinTurnoverValue = (range: string | number | undefined): number => {
        if (!range) return 0;
        if (range === 'lt_75k') return 0;
        if (range === '75k_100k') return 75000;
        if (range === '100k_200k') return 100000;
        if (range === '200k_500k') return 200000;
        if (range === '500k_1m') return 500000;
        if (range === 'gt_1m') return 1000000;
        return 0;
    };

    const turnoverValue = getMinTurnoverValue(turnover);

    return programs.map((program) => {
        const { eligibility, tags } = program;
        const reasons: string[] = [];

        // 1. Turnover Check
        if (eligibility.minTurnover && turnoverValue < eligibility.minTurnover) {
            reasons.push(`Annual turnover is below the minimum requirement of $${eligibility.minTurnover.toLocaleString()}.`);
        }

        // 2. Location Check
        if (eligibility.regions && eligibility.regions.includes('Regional Western Australia') && location !== 'regional') {
            reasons.push('This program is exclusively for businesses located in Regional Western Australia.');
        }

        // 3. Industry/Sector Check
        if (eligibility.sectors) {
            const isAgri = industry === 'agriculture' || industry === 'food_beverage';
            const programIsAgri = eligibility.sectors.includes('Agriculture') || eligibility.sectors.includes('Food & Beverage');

            if (programIsAgri && !isAgri) {
                reasons.push(`Industry mismatch. This program targets: ${eligibility.sectors.join(', ')}.`);
            }
        }

        // 4. Goal Matching (Strategic Intent)
        if (goal) {
            let goalMismatch = false;
            if (goal === 'innovation' && !tags.includes('Innovation') && !tags.includes('Commercialization')) goalMismatch = true;
            if (goal === 'digital' && !tags.includes('Digital')) goalMismatch = true;
            if (goal === 'export_asia' && !tags.includes('Export') && !tags.includes('Asia')) goalMismatch = true;
            if (goal === 'infrastructure' && !tags.includes('Infrastructure')) goalMismatch = true;
            
            if (goalMismatch) {
                reasons.push(`Does not align with your primary goal (${goal.replace('_', ' ')}).`);
            }
        }

        // 5. Co-contribution Check
        if (program.usefulInfo?.includes('50%') && coContribution !== '50_percent') {
            if (coContribution === 'no') {
                reasons.push('Requires a 50% cash co-contribution.');
            }
        }

        // 6. Years Operating Check
        if (eligibility.minYearsOperating && yearsOperating < eligibility.minYearsOperating) {
            reasons.push(`Business must be operating for at least ${eligibility.minYearsOperating} years.`);
        }

        return {
            program,
            status: reasons.length === 0 ? 'match' : 'rejected',
            reasons
        };
    });
};

export const getRecommendedPrograms = (answers: Record<string, any>): Program[] => {
    return evaluatePrograms(answers)
        .filter(result => result.status === 'match')
        .map(result => result.program);
};
