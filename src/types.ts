export interface Program {
    id: string;
    name: string;
    description: string;
    agency: string;
    url: string;
    category: 'Grant' | 'Service' | 'Training' | 'Voucher';
    tags: string[];
    eligibility: {
        minTurnover?: number;
        maxTurnover?: number;
        regions?: ('Metro' | 'Regional')[];
        industries?: string[];
        requiredAnswerIds?: string[];
    };
}

export interface Question {
    id: string;
    text: string;
    type: 'single_choice' | 'multi_choice' | 'number' | 'currency';
    options?: { label: string; value: any; tags?: string[] }[];
    section: string;
}

export interface AssessmentAnswer {
    questionId: string;
    value: any;
}
