export interface Program {
    id: string;
    name: string;
    description: string;
    agency: string;
    url: string;
    category: 'Grant' | 'Service' | 'Training' | 'Voucher';
    tags: string[];
    deadline?: string;
    usefulInfo?: string;
    eligibility: {
        minTurnover?: number;
        maxTurnover?: number;
        maxEmployees?: number;
        minYearsOperating?: number;
        mustBeRegistered?: boolean;
        mustBeInWA?: boolean;
        regions?: string[];
        sectors?: string[];
        industries?: string[];
        requiredAnswerIds?: string[];
    };
}

export interface Question {
    id: string;
    text: string;
    type: 'text' | 'single_choice' | 'multi_choice' | 'number' | 'currency';
    options?: { label: string; value: string }[];
    category?: string;
}

export interface AssessmentAnswer {
    questionId: string;
    value: any;
}
