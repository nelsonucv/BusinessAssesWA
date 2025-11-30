import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { ClipboardList, BarChart3 } from 'lucide-react';

export const Layout: React.FC = () => {
    return (
        <div className="min-h-screen bg-surface text-gray-900 font-sans">
            <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex">
                            <Link to="/" className="flex-shrink-0 flex items-center">
                                <span className="text-xl font-serif font-bold text-primary">GrowthMap WA</span>
                            </Link>
                            <nav className="hidden sm:ml-6 sm:flex sm:space-x-8">
                                <Link
                                    to="/assessment"
                                    className="border-transparent text-gray-500 hover:border-secondary hover:text-primary inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                                >
                                    <ClipboardList className="w-4 h-4 mr-2" />
                                    Assessment
                                </Link>
                                <Link
                                    to="/results"
                                    className="border-transparent text-gray-500 hover:border-secondary hover:text-primary inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                                >
                                    <BarChart3 className="w-4 h-4 mr-2" />
                                    Results
                                </Link>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <Outlet />
            </main>
        </div>
    );
};
