import type { Program, AssessmentAnswer } from '../types';
import { programs } from '../data/programs';

export const getRecommendedPrograms = (answers: AssessmentAnswer[]): Program[] => {
    // Helper to get answer value
    const getAnswer = (id: string) => answers.find((a) => a.questionId === id)?.value;

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

    return programs.filter((program) => {
        const { eligibility, tags } = program;

        // 1. Turnover Check
        if (eligibility.minTurnover && turnoverValue < eligibility.minTurnover) {
            return false;
        }

        // 2. Location Check
        if (eligibility.mustBeInWA && location !== 'regional' && location !== 'metro') {
            // Assuming all users are in WA for this MVP, but if they selected nothing?
            // Let's assume strict check if we had a "Not in WA" option.
        }
        if (eligibility.regions && eligibility.regions.includes('Regional Western Australia') && location !== 'regional') {
            return false;
        }

        // 3. Industry/Sector Check
        if (eligibility.sectors) {
            const isAgri = industry === 'agriculture' || industry === 'food_beverage';
            const programIsAgri = eligibility.sectors.includes('Agriculture') || eligibility.sectors.includes('Food & Beverage');

            if (programIsAgri && !isAgri) {
                return false;
            }
        }

        // 4. Goal Matching (Strategic Intent)
        if (goal) {
            if (goal === 'innovation' && !tags.includes('Innovation') && !tags.includes('Commercialization')) return false;
            if (goal === 'digital' && !tags.includes('Digital')) return false;
            if (goal === 'export_asia' && !tags.includes('Export') && !tags.includes('Asia')) return false;
            if (goal === 'infrastructure' && !tags.includes('Infrastructure')) return false;
        }

        // 5. Co-contribution Check
        if (program.usefulInfo?.includes('50%') && coContribution !== '50_percent') {
            // Strict check: if program needs 50% and user can't give 50%, exclude?
            // Maybe too strict. Let's keep it as a soft filter or just prioritize.
            // For now, let's exclude if they explicitly said "No" to any contribution.
            if (coContribution === 'no') return false;
        }

        // 6. Years Operating Check
        if (eligibility.minYearsOperating && yearsOperating < eligibility.minYearsOperating) {
            return false;
        }

        return true;
    });
};
