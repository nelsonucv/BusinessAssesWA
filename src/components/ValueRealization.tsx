import React from 'react';
import { TrendingUp, DollarSign, Clock } from 'lucide-react';

interface ValueRealizationProps {
    answers: Record<string, any>;
}

export const ValueRealization: React.FC<ValueRealizationProps> = ({ answers }) => {
    const manualHours = Number(answers['manual_hours'] || 0);
    const hourlyWage = Number(answers['hourly_wage'] || 0);

    // Assumptions
    const efficiencyGain = 0.5; // 50% time saved
    const weeksPerYear = 52;

    const weeklyCost = manualHours * hourlyWage;
    const annualCost = weeklyCost * weeksPerYear;
    const annualSavings = annualCost * efficiencyGain;

    const savings1Year = annualSavings;
    const savings3Year = annualSavings * 3; // Simple projection
    const savings5Year = annualSavings * 5;

    if (annualSavings === 0) return null;

    const formatCurrency = (val: number) =>
        new Intl.NumberFormat('en-AU', { style: 'currency', currency: 'AUD', maximumFractionDigits: 0 }).format(val);

    return (
        <div className="bg-white shadow rounded-lg p-6 mt-8 border border-indigo-100">
            <div className="flex items-center mb-6">
                <div className="p-2 bg-indigo-100 rounded-lg mr-4">
                    <TrendingUp className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                    <h2 className="text-xl font-bold text-gray-900">Value Realization Projection</h2>
                    <p className="text-sm text-gray-500">Estimated financial impact of digital transformation</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center text-gray-500 mb-2">
                        <Clock className="w-4 h-4 mr-2" />
                        <span>Hours Saved / Year</span>
                    </div>
                    <p className="text-2xl font-bold text-gray-900">{Math.round(manualHours * weeksPerYear * efficiencyGain)} hrs</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center text-gray-500 mb-2">
                        <DollarSign className="w-4 h-4 mr-2" />
                        <span>Annual Savings</span>
                    </div>
                    <p className="text-2xl font-bold text-green-600">{formatCurrency(annualSavings)}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center text-gray-500 mb-2">
                        <TrendingUp className="w-4 h-4 mr-2" />
                        <span>5-Year Value</span>
                    </div>
                    <p className="text-2xl font-bold text-indigo-600">{formatCurrency(savings5Year)}</p>
                </div>
            </div>

            <div className="space-y-4">
                <h3 className="text-sm font-medium text-gray-700">Cumulative Value Realized</h3>
                <div className="relative pt-1">
                    {/* 1 Year */}
                    <div className="mb-2 flex items-center">
                        <div className="w-24 text-sm text-gray-600">1 Year</div>
                        <div className="flex-1 ml-2">
                            <div className="h-8 bg-indigo-100 rounded-r-full relative" style={{ width: '20%' }}>
                                <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-xs font-bold text-indigo-800">
                                    {formatCurrency(savings1Year)}
                                </span>
                            </div>
                        </div>
                    </div>
                    {/* 3 Year */}
                    <div className="mb-2 flex items-center">
                        <div className="w-24 text-sm text-gray-600">3 Years</div>
                        <div className="flex-1 ml-2">
                            <div className="h-8 bg-indigo-300 rounded-r-full relative" style={{ width: '60%' }}>
                                <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-xs font-bold text-indigo-900">
                                    {formatCurrency(savings3Year)}
                                </span>
                            </div>
                        </div>
                    </div>
                    {/* 5 Year */}
                    <div className="flex items-center">
                        <div className="w-24 text-sm text-gray-600">5 Years</div>
                        <div className="flex-1 ml-2">
                            <div className="h-8 bg-indigo-600 rounded-r-full relative" style={{ width: '100%' }}>
                                <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-xs font-bold text-white">
                                    {formatCurrency(savings5Year)}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
