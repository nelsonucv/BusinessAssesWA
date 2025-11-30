import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { questions } from '../data/questions';
import { ChevronRight, ChevronLeft, CheckCircle } from 'lucide-react';

export const Assessment: React.FC = () => {
    const navigate = useNavigate();
    const [currentStep, setCurrentStep] = useState(0);
    const [answers, setAnswers] = useState<Record<string, any>>({});

    const question = questions[currentStep];
    const isLastQuestion = currentStep === questions.length - 1;

    const handleAnswer = (value: any) => {
        setAnswers((prev) => ({ ...prev, [question.id]: value }));
    };

    const handleNext = () => {
        if (isLastQuestion) {
            // Save answers to local storage for now
            localStorage.setItem('assessment_answers', JSON.stringify(answers));
            navigate('/results');
        } else {
            setCurrentStep((prev) => prev + 1);
        }
    };

    const handleBack = () => {
        if (currentStep > 0) {
            setCurrentStep((prev) => prev - 1);
        }
    };

    const progress = ((currentStep + 1) / questions.length) * 100;

    return (
        <div className="max-w-2xl mx-auto">
            <div className="mb-8">
                <div className="flex justify-between text-sm font-medium text-gray-500 mb-2">
                    <span>Question {currentStep + 1} of {questions.length}</span>
                    <span>{Math.round(progress)}% Completed</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                        className="bg-primary h-2.5 rounded-full transition-all duration-300 ease-in-out"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>
            </div>

            <div className="bg-white shadow sm:rounded-lg p-8 transition-all duration-500">
                <div className="mb-6">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary mb-4">
                        {question.category}
                    </span>
                    <h2 className="text-2xl font-serif font-bold text-gray-900">{question.text}</h2>
                </div>

                <div className="space-y-4 mb-8">
                    {question.type === 'single_choice' && question.options?.map((option) => (
                        <button
                            key={option.value.toString()}
                            onClick={() => handleAnswer(option.value)}
                            className={`w-full text-left px-4 py-3 border rounded-lg flex items-center justify-between transition-colors ${answers[question.id] === option.value
                                ? 'border-primary bg-primary/5 ring-1 ring-primary'
                                : 'border-gray-300 hover:bg-gray-50'
                                }`}
                        >
                            <span className={`font-medium ${answers[question.id] === option.value ? 'text-primary' : 'text-gray-900'}`}>
                                {option.label}
                            </span>
                            {answers[question.id] === option.value && (
                                <CheckCircle className="w-5 h-5 text-primary" />
                            )}
                        </button>
                    ))}

                    {(question.type === 'number' || question.type === 'currency') && (
                        <div className="relative rounded-md shadow-sm">
                            {question.type === 'currency' && (
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <span className="text-gray-500 sm:text-sm">$</span>
                                </div>
                            )}
                            <input
                                type="number"
                                className={`focus:ring-primary focus:border-primary block w-full sm:text-sm border-gray-300 rounded-md p-3 ${question.type === 'currency' ? 'pl-7' : ''
                                    }`}
                                placeholder="0"
                                value={answers[question.id] || ''}
                                onChange={(e) => handleAnswer(Number(e.target.value))}
                            />
                        </div>
                    )}
                </div>

                <div className="flex justify-between pt-6 border-t border-gray-200">
                    <button
                        onClick={handleBack}
                        disabled={currentStep === 0}
                        className={`inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 ${currentStep === 0 ? 'opacity-50 cursor-not-allowed' : ''
                            }`}
                    >
                        <ChevronLeft className="w-4 h-4 mr-2" />
                        Back
                    </button>
                    <button
                        onClick={handleNext}
                        disabled={answers[question.id] === undefined}
                        className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-light ${answers[question.id] === undefined ? 'opacity-50 cursor-not-allowed' : ''
                            }`}
                    >
                        {isLastQuestion ? 'See Results' : 'Next'}
                        {!isLastQuestion && <ChevronRight className="w-4 h-4 ml-2" />}
                    </button>
                </div>
            </div>
        </div>
    );
};
