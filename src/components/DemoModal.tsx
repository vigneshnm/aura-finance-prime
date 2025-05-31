
import React, { useState } from 'react';
import { X, Users, Building, Target, Settings } from 'lucide-react';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DemoModal = ({ isOpen, onClose }: DemoModalProps) => {
  const [formData, setFormData] = useState({
    companyName: '',
    companySize: '',
    industry: '',
    useCase: '',
    currentSystem: '',
    demoFormat: 'executive-briefing'
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Demo request submitted:', formData);
    // Handle form submission
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-slate-800 rounded-xl p-8 w-full max-w-2xl mx-4 border border-slate-600">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">Request Enterprise Demo</h2>
          <button onClick={onClose} className="text-slate-400 hover:text-white">
            <X className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Company Name *
              </label>
              <input
                type="text"
                required
                value={formData.companyName}
                onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-blue-500 focus:outline-none"
                placeholder="Your company name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Company Size *
              </label>
              <select
                required
                value={formData.companySize}
                onChange={(e) => setFormData({...formData, companySize: e.target.value})}
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:border-blue-500 focus:outline-none"
              >
                <option value="">Select size</option>
                <option value="1000-5000">1,000 - 5,000 employees</option>
                <option value="5000-25000">5,000 - 25,000 employees</option>
                <option value="25000+">25,000+ employees</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Industry *
              </label>
              <select
                required
                value={formData.industry}
                onChange={(e) => setFormData({...formData, industry: e.target.value})}
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:border-blue-500 focus:outline-none"
              >
                <option value="">Select industry</option>
                <option value="financial-services">Financial Services</option>
                <option value="manufacturing">Manufacturing</option>
                <option value="healthcare">Healthcare</option>
                <option value="technology">Technology</option>
                <option value="energy">Energy</option>
                <option value="retail">Retail</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Primary Use Case
              </label>
              <select
                value={formData.useCase}
                onChange={(e) => setFormData({...formData, useCase: e.target.value})}
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:border-blue-500 focus:outline-none"
              >
                <option value="">Select use case</option>
                <option value="month-end-close">Faster Month-End Close</option>
                <option value="fraud-detection">Fraud Detection</option>
                <option value="compliance">Regulatory Compliance</option>
                <option value="cash-flow">Cash Flow Optimization</option>
                <option value="forecasting">Financial Forecasting</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Current Finance System
            </label>
            <input
              type="text"
              value={formData.currentSystem}
              onChange={(e) => setFormData({...formData, currentSystem: e.target.value})}
              className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-blue-500 focus:outline-none"
              placeholder="e.g., SAP, Oracle, NetSuite"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-4">
              Preferred Demo Format
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="flex items-center p-4 bg-slate-700/50 rounded-lg border border-slate-600 cursor-pointer hover:border-blue-500 transition-colors">
                <input
                  type="radio"
                  name="demoFormat"
                  value="executive-briefing"
                  checked={formData.demoFormat === 'executive-briefing'}
                  onChange={(e) => setFormData({...formData, demoFormat: e.target.value})}
                  className="sr-only"
                />
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-blue-400" />
                  <div>
                    <div className="font-medium text-white">Executive Briefing</div>
                    <div className="text-sm text-slate-400">C-level presentation</div>
                  </div>
                </div>
              </label>
              <label className="flex items-center p-4 bg-slate-700/50 rounded-lg border border-slate-600 cursor-pointer hover:border-blue-500 transition-colors">
                <input
                  type="radio"
                  name="demoFormat"
                  value="technical-demo"
                  checked={formData.demoFormat === 'technical-demo'}
                  onChange={(e) => setFormData({...formData, demoFormat: e.target.value})}
                  className="sr-only"
                />
                <div className="flex items-center space-x-3">
                  <Settings className="w-5 h-5 text-emerald-400" />
                  <div>
                    <div className="font-medium text-white">Technical Demo</div>
                    <div className="text-sm text-slate-400">Deep dive walkthrough</div>
                  </div>
                </div>
              </label>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              type="submit"
              className="flex-1 bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              Schedule Demo
            </button>
            <button
              type="button"
              className="flex-1 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              Get Custom ROI Analysis
            </button>
          </div>
        </form>

        <p className="text-slate-400 text-sm text-center mt-4">
          Custom implementation roadmap and ROI analysis included
        </p>
      </div>
    </div>
  );
};
