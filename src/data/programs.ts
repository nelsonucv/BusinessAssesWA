import type { Program } from '../types';

export const programs: Program[] = [
    {
        id: 'small_business_growth_grant',
        name: 'Small Business Growth Grants',
        description: 'Funding up to $10,000 for strategic planning, marketing, and business improvement.',
        agency: 'SBDC',
        url: 'https://www.smallbusiness.wa.gov.au/grants-and-funding',
        category: 'Grant',
        tags: ['Growth', 'Planning', 'Marketing'],
        eligibility: {
            minTurnover: 100000,
            regions: ['Metro', 'Regional'],
        },
    },
    {
        id: 'lcf_digital',
        name: 'Local Capability Fund - Digital Transformation',
        description: 'Grants to assist SMEs in adopting digital technology to improve productivity and competitiveness.',
        agency: 'JTSI',
        url: 'https://www.wa.gov.au/organisation/department-of-jobs-tourism-science-and-innovation/local-capability-fund',
        category: 'Grant',
        tags: ['Digital', 'Technology'],
        eligibility: {
            requiredAnswerIds: ['cloud_usage:low', 'cloud_usage:medium'], // Logic handled in mapping engine
        },
    },
    {
        id: 'lcf_regional',
        name: 'Local Capability Fund - Regional Stream',
        description: 'Support for regional businesses to become suppliers to major projects and markets.',
        agency: 'JTSI',
        url: 'https://www.wa.gov.au/organisation/department-of-jobs-tourism-science-and-innovation/local-capability-fund',
        category: 'Grant',
        tags: ['Regional', 'Supply Chain'],
        eligibility: {
            regions: ['Regional'],
        },
    },
    {
        id: 'agrifood_voucher',
        name: 'Agrifood and Beverage Voucher Program',
        description: 'Expert advice vouchers for food and beverage manufacturers to build resilience and scale.',
        agency: 'DPIRD',
        url: 'https://www.agric.wa.gov.au/agrifood-and-beverage-voucher-program',
        category: 'Voucher',
        tags: ['Agribusiness', 'Food & Beverage'],
        eligibility: {
            industries: ['Food & Beverage', 'Agribusiness'],
            minTurnover: 100000,
        },
    },
    {
        id: 'access_asia',
        name: 'Access Asia Business Grants',
        description: 'Funding to support WA businesses entering or expanding into Asian markets.',
        agency: 'JTSI',
        url: 'https://www.wa.gov.au/organisation/department-of-jobs-tourism-science-and-innovation/access-asia-business-grants',
        category: 'Grant',
        tags: ['Export', 'Asia'],
        eligibility: {
            requiredAnswerIds: ['export_intent:exporting', 'export_intent:planning'],
        },
    },
    {
        id: 'charge_up',
        name: 'Charge Up Workplace Grants',
        description: 'Funding for EV charging equipment at workplaces.',
        agency: 'Energy Policy WA',
        url: 'https://www.wa.gov.au/organisation/energy-policy-wa/charge-workplace-grants',
        category: 'Grant',
        tags: ['Sustainability', 'EV'],
        eligibility: {
            requiredAnswerIds: ['ev_charging:true'],
        },
    },
];
