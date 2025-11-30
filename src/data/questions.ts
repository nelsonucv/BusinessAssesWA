import type { Question } from '../types';

export const questions: Question[] = [
    {
        id: 'q_turnover',
        text: 'What is your annual turnover?',
        type: 'single_choice',
        options: [
            { label: 'Less than $75k', value: 'lt_75k' },
            { label: '$75k - $100k', value: '75k_100k' },
            { label: '$100k - $200k', value: '100k_200k' },
            { label: '$200k - $500k', value: '200k_500k' },
            { label: '$500k - $1M', value: '500k_1m' },
            { label: 'More than $1M', value: 'gt_1m' },
        ],
        category: 'Business Profile',
    },
    {
        id: 'q_employees',
        text: 'How many full-time equivalent (FTE) employees do you have?',
        type: 'number',
        category: 'Business Profile',
    },
    {
        id: 'q_years_operating',
        text: 'How many years have you been operating?',
        type: 'number',
        category: 'Business Profile',
    },
    {
        id: 'q_location',
        text: 'Where is your primary place of business?',
        type: 'single_choice',
        options: [
            { label: 'Perth Metropolitan Area', value: 'metro' },
            { label: 'Regional Western Australia', value: 'regional' },
        ],
        category: 'Business Profile',
    },
    {
        id: 'q_aboriginal',
        text: 'Are you an Aboriginal-owned business?',
        type: 'single_choice',
        options: [
            { label: 'Yes', value: 'yes' },
            { label: 'No', value: 'no' },
        ],
        category: 'Business Profile',
    },
    {
        id: 'q_industry',
        text: 'Which industry best describes your business?',
        type: 'single_choice',
        options: [
            { label: 'Agriculture, Forestry & Fishing', value: 'agriculture' },
            { label: 'Food & Beverage Manufacturing', value: 'food_beverage' },
            { label: 'Mining & METS', value: 'mining' },
            { label: 'Tourism & Events', value: 'tourism' },
            { label: 'Construction', value: 'construction' },
            { label: 'Professional Services', value: 'services' },
            { label: 'Other', value: 'other' },
        ],
        category: 'Business Profile',
    },
    {
        id: 'q_goal',
        text: 'What is your primary goal right now?',
        type: 'single_choice',
        options: [
            { label: 'Commercialize a new innovation', value: 'innovation' },
            { label: 'Improve digital systems & efficiency', value: 'digital' },
            { label: 'Expand to Asian markets', value: 'export_asia' },
            { label: 'Buy new equipment or infrastructure', value: 'infrastructure' },
            { label: 'General business growth & planning', value: 'growth' },
        ],
        category: 'Strategic Intent',
    },
    {
        id: 'q_co_contribution',
        text: 'Are you able to provide a cash co-contribution for a grant?',
        type: 'single_choice',
        options: [
            { label: 'Yes, at least 50%', value: '50_percent' },
            { label: 'Yes, at least 20%', value: '20_percent' },
            { label: 'No', value: 'no' },
        ],
        category: 'Financial',
    },
    {
        id: 'q_export',
        text: 'Are you currently exporting or planning to export?',
        type: 'single_choice',
        options: [
            { label: 'Yes, currently exporting', value: 'exporting' },
            { label: 'Planning to export', value: 'planning' },
            { label: 'No', value: 'no' },
        ],
        category: 'Market & Export',
    },
    // Value Realization Inputs
    {
        id: 'q_manual_hours',
        text: 'How many hours per week does your team spend on manual data entry or repetitive tasks?',
        type: 'number',
        category: 'Value Drivers',
    },
    {
        id: 'q_hourly_wage',
        text: 'What is the average hourly wage for these roles?',
        type: 'number',
        category: 'Value Drivers',
    },
];
