
import React, { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Target, TrendingUp, Calculator, FileText, Sliders } from 'lucide-react';

const scenarioData = [
  { month: 'Q1', conservative: 8500, base: 9200, aggressive: 10100 },
  { month: 'Q2', conservative: 8800, base: 9800, aggressive: 11200 },
  { month: 'Q3', conservative: 9100, base: 10200, aggressive: 12100 },
  { month: 'Q4', conservative: 9300, base: 10800, aggressive: 13200 }
];

const maScenarios = [
  { scenario: 'Target A (Tech)', synergies: 125, integration: 18, npv: 450 },
  { scenario: 'Target B (Retail)', synergies: 89, integration: 24, npv: 320 },
  { scenario: 'Target C (Manufacturing)', synergies: 156, integration: 36, npv: 380 }
];

export const StrategicDecisions = () => {
  const [selectedScenario, setSelectedScenario] = useState('base');
  const [maTarget, setMaTarget] = useState(0);
  const [transferPricingRate, setTransferPricingRate] = useState(25);

  return (
    <section id="strategic" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">Strategic Decision Support</h2>
          <p className="text-slate-300 text-lg">Advanced modeling and predictive analytics for executive decision-making</p>
        </div>

        {/* Multi-Scenario Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2 bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-600/50">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold text-white">Multi-Scenario Stress Testing</h3>
              <div className="flex space-x-2">
                {['conservative', 'base', 'aggressive'].map((scenario) => (
                  <button
                    key={scenario}
                    onClick={() => setSelectedScenario(scenario)}
                    className={`px-3 py-1 rounded-lg text-sm transition-all ${
                      selectedScenario === scenario
                        ? 'bg-blue-600 text-white'
                        : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                    }`}
                  >
                    {scenario.charAt(0).toUpperCase() + scenario.slice(1)}
                  </button>
                ))}
              </div>
            </div>
            
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={scenarioData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="month" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1F2937', 
                    border: '1px solid #374151',
                    borderRadius: '8px',
                    color: '#fff'
                  }} 
                />
                <Area 
                  type="monotone" 
                  dataKey="conservative" 
                  stackId="1" 
                  stroke="#EF4444" 
                  fill="#EF4444" 
                  fillOpacity={0.1}
                  name="Conservative"
                />
                <Area 
                  type="monotone" 
                  dataKey="base" 
                  stackId="2" 
                  stroke="#3B82F6" 
                  fill="#3B82F6" 
                  fillOpacity={0.2}
                  name="Base Case"
                />
                <Area 
                  type="monotone" 
                  dataKey="aggressive" 
                  stackId="3" 
                  stroke="#10B981" 
                  fill="#10B981" 
                  fillOpacity={0.1}
                  name="Aggressive"
                />
              </AreaChart>
            </ResponsiveContainer>

            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="text-center p-3 bg-red-600/10 rounded-lg border border-red-500/30">
                <div className="text-lg font-bold text-red-400">$35.7M</div>
                <div className="text-xs text-slate-400">Conservative Revenue</div>
              </div>
              <div className="text-center p-3 bg-blue-600/10 rounded-lg border border-blue-500/30">
                <div className="text-lg font-bold text-blue-400">$40.0M</div>
                <div className="text-xs text-slate-400">Base Case Revenue</div>
              </div>
              <div className="text-center p-3 bg-green-600/10 rounded-lg border border-green-500/30">
                <div className="text-lg font-bold text-green-400">$46.6M</div>
                <div className="text-xs text-slate-400">Aggressive Revenue</div>
              </div>
            </div>
          </div>

          {/* Scenario Controls */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-600/50">
            <h3 className="text-xl font-semibold text-white mb-6">Scenario Parameters</h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm text-slate-400 mb-2">Market Growth Rate</label>
                <input
                  type="range"
                  min="0"
                  max="15"
                  defaultValue="8"
                  className="w-full accent-blue-500"
                />
                <div className="text-center mt-2 text-blue-400 font-semibold">8.5%</div>
              </div>

              <div>
                <label className="block text-sm text-slate-400 mb-2">Competitive Pressure</label>
                <input
                  type="range"
                  min="1"
                  max="10"
                  defaultValue="6"
                  className="w-full accent-amber-500"
                />
                <div className="text-center mt-2 text-amber-400 font-semibold">Medium</div>
              </div>

              <div>
                <label className="block text-sm text-slate-400 mb-2">Economic Headwinds</label>
                <input
                  type="range"
                  min="1"
                  max="10"
                  defaultValue="4"
                  className="w-full accent-red-500"
                />
                <div className="text-center mt-2 text-red-400 font-semibold">Low</div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-lg border border-purple-500/30">
              <div className="flex items-center mb-2">
                <Target className="w-4 h-4 text-purple-400 mr-2" />
                <span className="text-purple-400 font-semibold text-sm">Risk-Adjusted NPV</span>
              </div>
              <div className="text-2xl font-bold text-white">$284.5M</div>
              <div className="text-slate-300 text-xs">+12.3% vs base case</div>
            </div>
          </div>
        </div>

        {/* M&A Impact Calculator */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-600/50">
            <h3 className="text-xl font-semibold text-white mb-6">M&A Impact Calculator</h3>
            
            <div className="space-y-4">
              {maScenarios.map((scenario, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg border transition-all cursor-pointer ${
                    maTarget === index
                      ? 'bg-blue-600/20 border-blue-500/50'
                      : 'bg-slate-700/30 border-slate-600/50 hover:border-slate-500'
                  }`}
                  onClick={() => setMaTarget(index)}
                >
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-semibold text-white">{scenario.scenario}</h4>
                    <TrendingUp className="w-4 h-4 text-green-400" />
                  </div>
                  
                  <div className="grid grid-cols-3 gap-3 text-sm">
                    <div>
                      <span className="text-slate-400">Synergies:</span>
                      <div className="text-green-400 font-semibold">${scenario.synergies}M</div>
                    </div>
                    <div>
                      <span className="text-slate-400">Integration:</span>
                      <div className="text-amber-400 font-semibold">{scenario.integration}mo</div>
                    </div>
                    <div>
                      <span className="text-slate-400">NPV:</span>
                      <div className="text-blue-400 font-semibold">${scenario.npv}M</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-lg border border-green-500/30">
              <h4 className="text-green-400 font-semibold mb-2">Selected Target Analysis</h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-slate-400">IRR:</span>
                  <span className="text-green-400 font-semibold ml-2">18.4%</span>
                </div>
                <div>
                  <span className="text-slate-400">Payback:</span>
                  <span className="text-blue-400 font-semibold ml-2">4.2 years</span>
                </div>
              </div>
            </div>
          </div>

          {/* Transfer Pricing Generator */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-600/50">
            <h3 className="text-xl font-semibold text-white mb-6">Transfer Pricing Documentation</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-slate-400 mb-2">Transfer Pricing Rate (%)</label>
                <div className="flex items-center space-x-4">
                  <input
                    type="range"
                    min="15"
                    max="35"
                    value={transferPricingRate}
                    onChange={(e) => setTransferPricingRate(Number(e.target.value))}
                    className="flex-1 accent-blue-500"
                  />
                  <span className="text-blue-400 font-semibold w-12">{transferPricingRate}%</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 bg-slate-700/30 rounded-lg">
                  <div className="text-slate-400 text-sm">Arm's Length Range</div>
                  <div className="text-white font-semibold">22% - 28%</div>
                </div>
                <div className="p-3 bg-slate-700/30 rounded-lg">
                  <div className="text-slate-400 text-sm">Tax Efficiency</div>
                  <div className="text-green-400 font-semibold">Optimal</div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
                  <span className="text-slate-300 text-sm">Economic Analysis</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-green-400 text-sm">Complete</span>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
                  <span className="text-slate-300 text-sm">Benchmarking Study</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-green-400 text-sm">Complete</span>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
                  <span className="text-slate-300 text-sm">Documentation Package</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
                    <span className="text-amber-400 text-sm">Generating...</span>
                  </div>
                </div>
              </div>
            </div>

            <button className="w-full mt-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2">
              <FileText className="w-4 h-4" />
              <span>Generate Documentation</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
