import type { Program } from '../types';

export function getRecommendedPrograms(programs: Program[], answers: Record<string, any>): Program[] {
    return programs.filter((program) => {
        const { eligibility } = program;
        if (!eligibility) return true;

        // Check Turnover
        if (eligibility.minTurnover) {
            const turnoverMap: Record<string, number> = {
                'lt_100k': 50000,
                '100k_200k': 150000,
                '200k_1m': 500000,
                'gt_1m': 1000000,
            };
            const userTurnover = turnoverMap[answers['turnover'] as string] || 0;
            if (userTurnover < eligibility.minTurnover) return false;
        }

        // Check Region
        if (eligibility.regions) {
            const userRegion = answers['location'];
            if (userRegion && !eligibility.regions.includes(userRegion)) return false;
        }

        // Check Industry
        if (eligibility.industries) {
            const userIndustry = answers['industry'];
            if (userIndustry && !eligibility.industries.includes(userIndustry)) return false;
        }

        // Check Specific Answers (Required Answer IDs)
        if (eligibility.requiredAnswerIds) {
            for (const req of eligibility.requiredAnswerIds) {
                const [key, val] = req.split(':');
                // Handle boolean strings vs actual booleans
                const userVal = answers[key];
                const expectedVal = val === 'true' ? true : val === 'false' ? false : val;

                // Loose equality to handle string/number mismatches if any
                if (userVal != expectedVal) return false;
            }
        }

        return true;
    });
}
