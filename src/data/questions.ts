import type { Question } from '../types';

export const questions: Question[] = [
    // Section 1: Business Profile
    {
        id: 'turnover',
        section: 'Business Profile',
        text: 'What is your annual turnover?',
        type: 'single_choice',
        options: [
            { label: 'Less than $100k', value: 'lt_100k' },
            { label: '$100k - $200k', value: '100k_200k' },
            { label: '$200k - $1M', value: '200k_1m' },
            { label: 'More than $1M', value: 'gt_1m' },
        ],
    },
    {
        id: 'employees',
        section: 'Business Profile',
        text: 'How many full-time equivalent employees do you have?',
        type: 'number',
    },
    {
        id: 'location',
        section: 'Business Profile',
        text: 'Where is your primary place of business?',
        type: 'single_choice',
        options: [
            { label: 'Perth Metropolitan Area', value: 'Metro' },
            { label: 'Regional Western Australia', value: 'Regional' },
        ],
    },
    {
        id: 'industry',
        section: 'Business Profile',
        text: 'What is your primary industry?',
        type: 'single_choice',
        options: [
            { label: 'Agriculture, Forestry & Fishing', value: 'Agribusiness' },
            { label: 'Manufacturing', value: 'Manufacturing' },
            { label: 'Food & Beverage', value: 'Food & Beverage' },
            { label: 'Other', value: 'Other' },
        ],
    },
    {
        id: 'aboriginal_business',
        section: 'Business Profile',
        text: 'Are you a registered Aboriginal business?',
        type: 'single_choice',
        options: [
            { label: 'Yes', value: true },
            { label: 'No', value: false },
        ],
    },

    // Section 2: Operational Maturity
    {
        id: 'strategic_plan',
        section: 'Operational Maturity',
        text: 'Do you have a documented strategic business plan?',
        type: 'single_choice',
        options: [
            { label: 'Yes, and we review it regularly', value: 'yes_active' },
            { label: 'Yes, but it is outdated', value: 'yes_outdated' },
            { label: 'No', value: 'no' },
        ],
    },

    // Section 3: Digital Capability
    {
        id: 'cloud_usage',
        section: 'Digital Capability',
        text: 'Do you currently use cloud-based software for finance or operations?',
        type: 'single_choice',
        options: [
            { label: 'Yes, extensively', value: 'high' },
            { label: 'Some (e.g., Xero/MYOB only)', value: 'medium' },
            { label: 'No, mostly paper/spreadsheets', value: 'low' },
        ],
    },
    {
        id: 'cyber_plan',
        section: 'Digital Capability',
        text: 'Do you have a cybersecurity incident response plan?',
        type: 'single_choice',
        options: [
            { label: 'Yes', value: true },
            { label: 'No', value: false },
        ],
    },

    // Section 4: Market & Export
    {
        id: 'export_intent',
        section: 'Market & Export',
        text: 'Are you currently exporting or planning to export to Asia?',
        type: 'single_choice',
        options: [
            { label: 'Yes, currently exporting', value: 'exporting' },
            { label: 'Planning to export soon', value: 'planning' },
            { label: 'No', value: 'no' },
        ],
    },

    // Section 5: Innovation & Sustainability
    {
        id: 'ev_charging',
        section: 'Innovation & Sustainability',
        text: 'Are you looking to install EV charging stations at your workplace?',
        type: 'single_choice',
        options: [
            { label: 'Yes', value: true },
            { label: 'No', value: false },
        ],
    },
    {
        id: 'new_product',
        section: 'Innovation & Sustainability',
        text: 'Are you developing a new food or beverage product?',
        type: 'single_choice',
        options: [
            { label: 'Yes', value: true },
            { label: 'No', value: false },
        ],
    },

    // Section 6: Value Drivers (ROI Inputs)
    {
        id: 'manual_hours',
        section: 'Value Drivers',
        text: 'How many hours per week do you spend on manual data entry?',
        type: 'number',
    },
    {
        id: 'hourly_wage',
        section: 'Value Drivers',
        text: 'What is the average hourly cost of your administrative staff?',
        type: 'currency',
    },
];
