import React, { useEffect, useState } from 'react';
import { evaluatePrograms } from '../utils/mappingEngine';
import type { ProgramResult } from '../utils/mappingEngine';
import { CheckCircle, XCircle, Filter, AlertCircle } from 'lucide-react';

export const ProcessBreakdown: React.FC = () => {
    const [results, setResults] = useState<ProgramResult[] | null>(null);
    const [filter, setFilter] = useState<'all' | 'match' | 'rejected'>('all');

    useEffect(() => {
        const stored = localStorage.getItem('assessment_answers');
        if (stored) {
            const parsed = JSON.parse(stored);
            setResults(evaluatePrograms(parsed));
        } else {
            setResults(null);
        }
    }, []);

    if (!results) {
        return (
            <div className="max-w-5xl mx-auto text-center py-20">
                <div className="bg-surface rounded-xl p-12 inline-block">
                    <h2 className="text-2xl font-serif font-bold text-primary mb-4">No Assessment Data Found</h2>
                    <p className="text-gray-600 mb-8 max-w-md mx-auto">
                        Please complete the business assessment to see a breakdown of eligible programs.
                    </p>
                    <a
                        href="/assessment"
                        className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-light transition-colors"
                    >
                        Start Assessment
                    </a>
                </div>
            </div>
        );
    }

    const filteredResults = results.filter(r => filter === 'all' || r.status === filter);

    return (
        <div className="max-w-5xl mx-auto">
            <div className="mb-8">
                <h1 className="text-3xl font-serif font-bold text-primary mb-4">Process Breakdown</h1>
                <p className="text-gray-600 text-lg">
                    Transparency is key. Here is a detailed breakdown of how each program was evaluated against your business profile.
                </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex space-x-4 mb-8 border-b border-gray-200 pb-1">
                <button
                    onClick={() => setFilter('all')}
                    className={`pb-3 px-1 text-sm font-medium border-b-2 transition-colors ${filter === 'all'
                        ? 'border-primary text-primary'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                        }`}
                >
                    All Programs ({results.length})
                </button>
                <button
                    onClick={() => setFilter('match')}
                    className={`pb-3 px-1 text-sm font-medium border-b-2 transition-colors ${filter === 'match'
                        ? 'border-green-500 text-green-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                        }`}
                >
                    Eligible Matches ({results.filter(r => r.status === 'match').length})
                </button>
                <button
                    onClick={() => setFilter('rejected')}
                    className={`pb-3 px-1 text-sm font-medium border-b-2 transition-colors ${filter === 'rejected'
                        ? 'border-red-500 text-red-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                        }`}
                >
                    Discarded ({results.filter(r => r.status === 'rejected').length})
                </button>
            </div>

            <div className="space-y-4">
                {filteredResults.map((result) => (
                    <div
                        key={result.program.id}
                        className={`bg-white rounded-lg border p-6 transition-all ${result.status === 'match'
                            ? 'border-green-200 shadow-sm hover:shadow-md'
                            : 'border-gray-200 opacity-90 hover:opacity-100'
                            }`}
                    >
                        <div className="flex items-start justify-between">
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-2">
                                    <h3 className={`text-lg font-bold ${result.status === 'match' ? 'text-primary' : 'text-gray-700'
                                        }`}>
                                        {result.program.name}
                                    </h3>
                                    {result.status === 'match' ? (
                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                            <CheckCircle className="w-3 h-3 mr-1" />
                                            Recommended
                                        </span>
                                    ) : (
                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-600">
                                            <XCircle className="w-3 h-3 mr-1" />
                                            Not Eligible
                                        </span>
                                    )}
                                </div>
                                <p className="text-gray-500 text-sm mb-3">{result.program.description}</p>

                                {result.status === 'rejected' && (
                                    <div className="bg-red-50 rounded-md p-3 mt-3">
                                        <h4 className="text-xs font-bold text-red-800 uppercase tracking-wide mb-2 flex items-center">
                                            <AlertCircle className="w-3 h-3 mr-1" />
                                            Why it was discarded:
                                        </h4>
                                        <ul className="list-disc list-inside text-sm text-red-700 space-y-1">
                                            {result.reasons.map((reason, idx) => (
                                                <li key={idx}>{reason}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}

                {filteredResults.length === 0 && (
                    <div className="text-center py-12 bg-gray-50 rounded-lg border border-dashed border-gray-300">
                        <Filter className="mx-auto h-12 w-12 text-gray-400" />
                        <h3 className="mt-2 text-sm font-medium text-gray-900">No programs found</h3>
                        <p className="mt-1 text-sm text-gray-500">Try adjusting your filter or retaking the assessment.</p>
                    </div>
                )}
            </div>
        </div>
    );
};
