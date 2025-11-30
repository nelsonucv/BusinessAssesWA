import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getRecommendedPrograms } from '../utils/mappingEngine';
import { ValueRealization } from './ValueRealization';
import { ExternalLink, ArrowRight, Search } from 'lucide-react';
import type { Program } from '../types';

export const Results: React.FC = () => {
    const [answers, setAnswers] = useState<Record<string, any>>({});
    const [recommended, setRecommended] = useState<Program[]>([]);

    useEffect(() => {
        const stored = localStorage.getItem('assessment_answers');
        if (stored) {
            const parsed = JSON.parse(stored);
            setAnswers(parsed);
            setRecommended(getRecommendedPrograms(parsed));
        }
    }, []);

    const industry = answers['industry'] || 'business';
    const region = answers['location'] || 'Western Australia';
    const fallbackUrl = `https://www.google.com/search?q=business+grants+for+${industry}+in+${region}+WA`;

    return (
        <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
                <h1 className="text-3xl font-serif font-bold text-primary sm:text-4xl">Your Opportunity Roadmap</h1>
                <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                    Based on your assessment, here are the programs and opportunities aligned with your business goals.
                </p>
            </div>

            {/* Value Realization Section */}
            <ValueRealization answers={answers} />

            <div className="mt-12">
                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">Recommended Programs</h2>

                {recommended.length > 0 ? (
                    <div className="grid gap-6 md:grid-cols-2">
                        {recommended.map((program) => (
                            <div key={program.id} className="bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow p-6 flex flex-col">
                                <div className="flex-1">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${program.category === 'Grant' ? 'bg-green-100 text-green-800' :
                                            program.category === 'Voucher' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'
                                            }`}>
                                            {program.category}
                                        </span>
                                        <span className="text-xs text-gray-500">{program.agency}</span>
                                    </div>
                                    <h3 className="text-lg font-bold text-primary mb-2">{program.name}</h3>
                                    <p className="text-gray-500 text-sm mb-4">{program.description}</p>

                                    {/* New Fields: Deadline & Useful Info */}
                                    <div className="mb-4 space-y-1">
                                        {program.deadline && (
                                            <div className="text-xs text-red-600 font-medium">
                                                Deadline: {program.deadline}
                                            </div>
                                        )}
                                        {program.usefulInfo && (
                                            <div className="text-xs text-gray-600 italic">
                                                Note: {program.usefulInfo}
                                            </div>
                                        )}
                                    </div>

                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {program.tags.map(tag => (
                                            <span key={tag} className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-surface text-gray-600">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="mt-4 pt-4 border-t border-gray-100">
                                    <a
                                        href={program.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center w-full px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-light transition-colors"
                                    >
                                        View Program <ExternalLink className="w-4 h-4 ml-2" />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="bg-secondary/10 border-l-4 border-secondary p-4 mb-8">
                        <div className="flex">
                            <div className="flex-shrink-0">
                                <Search className="h-5 w-5 text-secondary" aria-hidden="true" />
                            </div>
                            <div className="ml-3">
                                <p className="text-sm text-gray-700">
                                    We couldn't find specific matches in our curated database, but don't worry!
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {/* Fallback Mechanism */}
                <div className="mt-8 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Explore More Opportunities</h3>
                    <p className="text-gray-500 text-sm mb-4">
                        Search for additional grants and support tailored to your industry and region.
                    </p>
                    <a
                        href={fallbackUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                    >
                        Search on Google <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                </div>
            </div>

            <div className="mt-12 text-center">
                <Link to="/assessment" className="text-primary hover:text-primary-light font-medium">
                    Retake Assessment
                </Link>
            </div>
        </div>
    );
};
