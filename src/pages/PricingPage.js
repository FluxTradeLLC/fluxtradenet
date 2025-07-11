import React from 'react';
import { Link } from 'react-router-dom';

import fluxLogo from '../assets/logo.png';

export function PricingPage() {
    return (
        <div className="bg-gray-900 text-white min-h-screen">
            <header className="p-4 flex flex-col-reverse md:flex-row md:items-center justify-end">
                <div className="flex items-center mt-[20px] flex-col md:flex-row">
                <img src={fluxLogo} alt="Flux Trade Logo" className="h-[75px]" />
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold italic ml-[40px] text-center">FluxTrade</h1>
            </div>
            <nav className="flex w-full md:w-auto justify-center md:justify-end items-center space-x-8 p-6 rounded-lg md:ml-[100px] md:-mt-[50px]">
                <ul><Link to="/">Home</Link></ul>
                <ul><a>My Account</a></ul>
                <ul><a href="https://discord.gg/UTcxDRQ26U">Free Discord</a></ul>
            </nav>
            </header>
            <div className="text-center mb-12 mt-12">
                <h1 className="text-5xl font-extrabold mb-4">Choose Your Plan</h1>
                <p className="text-lg text-gray-400">Unlock the full potential of FluxTrade with our tailored plans.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-8 pb-16">
                <div className="bg-gray-800 rounded-lg p-6 w-full max-w-sm border border-gray-700 transform hover:scale-105 transition-transform duration-300">
                    <h2 className="text-3xl font-bold text-center mb-4">Standard</h2>
                    <p className="text-center text-4xl font-extrabold mb-6">$49<span className="text-lg font-medium text-gray-400">/mo</span></p>
                    <ul className="space-y-4 text-gray-300 mb-8">
                        <li className="flex items-center">
                            <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                            <span>Access to all our indicators</span>
                        </li>
                        <li className="flex items-center">
                            <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                            <span>24/7 customer support</span>
                        </li>
                        <li className="flex items-center">
                            <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                            <span>Cancel anytime</span>
                        </li>
                    </ul>
                    <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300">
                        Get Started
                    </button>
                </div>

                {/* Pro Plan */}
                <div className="bg-gray-800 rounded-lg p-6 w-full max-w-sm border-2 border-indigo-500 transform hover:scale-105 transition-transform duration-300 relative">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-indigo-500 text-white text-sm font-bold px-4 py-1 rounded-full">
                        MOST POPULAR
                    </div>
                    <h2 className="text-3xl font-bold text-center mb-4 text-indigo-400">Pro</h2>
                    <p className="text-center text-4xl font-extrabold mb-6">$99<span className="text-lg font-medium text-gray-400">/mo</span></p>
                    <ul className="space-y-4 text-gray-300 mb-8">
                        <li className="flex items-center">
                            <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                            <span>All features in Standard</span>
                        </li>
                        <li className="flex items-center">
                            <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                            <span>Access to all automated strategies</span>
                        </li>
                        <li className="flex items-center">
                            <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                            <span>Direct access to new features</span>
                        </li>
                    </ul>
                    <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300">
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    );
}