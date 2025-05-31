
import React, { useState } from 'react';
import { Bell, TrendingUp, Shield, Settings, Menu, X, CheckCircle } from 'lucide-react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm border-b border-slate-700 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="text-xl font-bold text-white">Apex Finance AI</span>
              <div className="text-xs text-blue-400 font-medium">Finance.AI</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#revenue" className="text-slate-300 hover:text-white transition-colors">Revenue Intelligence</a>
            <a href="#risk" className="text-slate-300 hover:text-white transition-colors">Risk & Compliance</a>
            <a href="#operations" className="text-slate-300 hover:text-white transition-colors">Operations</a>
            <a href="#strategic" className="text-slate-300 hover:text-white transition-colors">Strategic Decisions</a>
            <a href="#enterprise" className="text-slate-300 hover:text-white transition-colors">Enterprise Solutions</a>
          </nav>

          {/* Status Indicators */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span className="text-sm">Live System Status: <span className="text-green-400 font-semibold">✓ Online</span></span>
            </div>
            <div className="flex items-center space-x-2">
              <Bell className="w-4 h-4 text-blue-400 animate-pulse" />
              <span className="text-sm">Active Insights: <span className="text-blue-400 font-semibold">247</span></span>
            </div>
            <button className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300">
              Request Demo
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-slate-700 pt-4">
            <div className="flex flex-col space-y-3">
              <a href="#revenue" className="text-slate-300 hover:text-white transition-colors">Revenue Intelligence</a>
              <a href="#risk" className="text-slate-300 hover:text-white transition-colors">Risk & Compliance</a>
              <a href="#operations" className="text-slate-300 hover:text-white transition-colors">Operations</a>
              <a href="#strategic" className="text-slate-300 hover:text-white transition-colors">Strategic Decisions</a>
              <a href="#enterprise" className="text-slate-300 hover:text-white transition-colors">Enterprise Solutions</a>
            </div>
            <div className="mt-4 pt-4 border-t border-slate-700 space-y-2">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span className="text-sm">Live System Status: <span className="text-green-400 font-semibold">✓ Online</span></span>
              </div>
              <div className="flex items-center space-x-2">
                <Bell className="w-4 h-4 text-blue-400 animate-pulse" />
                <span className="text-sm">Active Insights: <span className="text-blue-400 font-semibold">247</span></span>
              </div>
              <button className="w-full bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 mt-3">
                Request Demo
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
