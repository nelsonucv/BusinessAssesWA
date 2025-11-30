import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, TrendingUp, ShieldCheck } from 'lucide-react';

const LandingPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-surface font-sans text-gray-900">
            {/* Hero Section */}
            <div className="relative bg-primary text-white overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1589820296156-2454bb8a4292?q=80&w=2574&auto=format&fit=crop')] bg-cover bg-center" />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
                    <div className="lg:w-2/3">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight mb-6">
                            Unlock Government Support for Your Business
                        </h1>
                        <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-2xl">
                            Discover grants, vouchers, and programs tailored to your WA business in less than 5 minutes.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                to="/assessment"
                                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-semibold rounded-lg text-white bg-secondary hover:bg-secondary-light transition-colors shadow-lg"
                            >
                                Start Assessment
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                            <a
                                href="#how-it-works"
                                className="inline-flex items-center justify-center px-8 py-4 border border-white text-lg font-semibold rounded-lg text-white hover:bg-white/10 transition-colors"
                            >
                                How It Works
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div id="how-it-works" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-serif font-bold text-primary mb-4">Your Pathway to Growth</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            We simplify the complex landscape of government support into three easy steps.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12">
                        <div className="text-center p-6 rounded-xl bg-surface hover:shadow-xl transition-shadow">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                <CheckCircle className="h-8 w-8 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">1. Assess Eligibility</h3>
                            <p className="text-gray-600">
                                Answer a few questions about your business size, industry, and goals to check your eligibility.
                            </p>
                        </div>

                        <div className="text-center p-6 rounded-xl bg-surface hover:shadow-xl transition-shadow">
                            <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                <ShieldCheck className="h-8 w-8 text-secondary" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">2. Match Programs</h3>
                            <p className="text-gray-600">
                                Our engine instantly matches you with over 20+ WA Government grants and support services.
                            </p>
                        </div>

                        <div className="text-center p-6 rounded-xl bg-surface hover:shadow-xl transition-shadow">
                            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                <TrendingUp className="h-8 w-8 text-accent" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">3. Realize Value</h3>
                            <p className="text-gray-600">
                                See the projected ROI and monetary value of implementing digital changes in your business.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-primary-dark py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-serif font-bold text-white mb-8">
                        Ready to find your opportunities?
                    </h2>
                    <Link
                        to="/assessment"
                        className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-semibold rounded-lg text-primary bg-white hover:bg-blue-50 transition-colors shadow-lg"
                    >
                        Get Started Now
                    </Link>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-4 gap-8">
                        <div className="col-span-2">
                            <h3 className="text-lg font-bold mb-4">WA Business Opportunity Framework</h3>
                            <p className="text-gray-400 max-w-sm">
                                Helping Western Australian businesses navigate the support landscape and achieve sustainable growth.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-4">Resources</h4>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-gray-300 hover:text-white">Grant Finder</a></li>
                                <li><a href="#" className="text-gray-300 hover:text-white">Business Advice</a></li>
                                <li><a href="#" className="text-gray-300 hover:text-white">Workshops</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-4">Legal</h4>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-gray-300 hover:text-white">Privacy Policy</a></li>
                                <li><a href="#" className="text-gray-300 hover:text-white">Terms of Use</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
                        &copy; 2025 Government of Western Australia. All rights reserved.
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;
