
import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { Shield, AlertTriangle, Check, Clock } from 'lucide-react';

const riskData = [
  { name: 'Low Risk', value: 65, color: '#10B981' },
  { name: 'Medium Risk', value: 25, color: '#F59E0B' },
  { name: 'High Risk', value: 10, color: '#EF4444' }
];

const complianceData = [
  { regulation: 'SOX 404', status: 98, trend: '+2%' },
  { regulation: 'GDPR', status: 95, trend: '+1%' },
  { regulation: 'Basel III', status: 92, trend: '+5%' },
  { regulation: 'IFRS 16', status: 97, trend: '+3%' }
];

const fraudPatterns = [
  { time: '09:00', anomalies: 2, severity: 'low' },
  { time: '10:00', anomalies: 1, severity: 'low' },
  { time: '11:00', anomalies: 0, severity: 'none' },
  { time: '12:00', anomalies: 3, severity: 'medium' },
  { time: '13:00', anomalies: 1, severity: 'low' },
  { time: '14:00', anomalies: 5, severity: 'high' },
  { time: '15:00', anomalies: 2, severity: 'medium' }
];

export const RiskCompliance = () => {
  const [riskThreshold, setRiskThreshold] = useState(15);
  const [animatedValues, setAnimatedValues] = useState<Record<string, number>>({});

  useEffect(() => {
    complianceData.forEach((item, index) => {
      setTimeout(() => {
        setAnimatedValues(prev => ({ ...prev, [item.regulation]: item.status }));
      }, index * 200);
    });
  }, []);

  return (
    <section id="risk" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">Risk & Compliance Center</h2>
          <p className="text-slate-300 text-lg">Proactive risk management with AI-powered compliance monitoring</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Risk Meter */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-600/50">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold text-white">Risk Distribution</h3>
              <Shield className="w-6 h-6 text-green-400" />
            </div>
            
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={riskData}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={80}
                  dataKey="value"
                >
                  {riskData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>

            <div className="mt-4">
              <label className="block text-sm text-slate-400 mb-2">Materiality Threshold</label>
              <input
                type="range"
                min="5"
                max="25"
                value={riskThreshold}
                onChange={(e) => setRiskThreshold(Number(e.target.value))}
                className="w-full accent-blue-500"
              />
              <div className="text-center mt-2 text-blue-400 font-semibold">{riskThreshold}%</div>
            </div>
          </div>

          {/* Compliance Grid */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-600/50">
            <h3 className="text-xl font-semibold text-white mb-6">Compliance Status</h3>
            
            <div className="space-y-4">
              {complianceData.map((item, index) => (
                <div key={item.regulation} className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Check className="w-4 h-4 text-green-400" />
                    <span className="text-white text-sm">{item.regulation}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-12 h-2 bg-slate-600 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-green-400 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${animatedValues[item.regulation] || 0}%` }}
                      />
                    </div>
                    <span className="text-green-400 text-sm font-semibold">{item.status}%</span>
                    <span className="text-blue-400 text-xs">{item.trend}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-lg border border-green-500/30">
              <div className="text-green-400 font-semibold text-sm">Overall Compliance Score</div>
              <div className="text-2xl font-bold text-white">95.5%</div>
              <div className="text-slate-300 text-xs">+2.3% vs last quarter</div>
            </div>
          </div>

          {/* Fraud Detection Timeline */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-600/50">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold text-white">Fraud Pattern Detection</h3>
              <AlertTriangle className="w-6 h-6 text-amber-400" />
            </div>
            
            <div className="space-y-3">
              {fraudPatterns.map((pattern, index) => (
                <div key={pattern.time} className="flex items-center justify-between p-2">
                  <div className="flex items-center space-x-3">
                    <Clock className="w-4 h-4 text-slate-400" />
                    <span className="text-slate-300 text-sm">{pattern.time}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-white text-sm">{pattern.anomalies}</span>
                    <div className={`w-3 h-3 rounded-full ${
                      pattern.severity === 'high' ? 'bg-red-500' :
                      pattern.severity === 'medium' ? 'bg-amber-500' :
                      pattern.severity === 'low' ? 'bg-green-500' : 'bg-slate-500'
                    }`} />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-xl font-bold text-red-400">14</div>
                <div className="text-xs text-slate-400">Total Anomalies</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-green-400">99.2%</div>
                <div className="text-xs text-slate-400">Detection Rate</div>
              </div>
            </div>
          </div>
        </div>

        {/* Comparison Panel */}
        <div className="mt-12 bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-xl p-8 border border-slate-600/50">
          <h3 className="text-2xl font-semibold text-white mb-6 text-center">Traditional vs AI-Enhanced Risk Management</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-red-600/10 rounded-lg border border-red-500/30">
              <h4 className="text-red-400 font-semibold mb-4">Traditional Approach</h4>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>• Manual risk assessments quarterly</li>
                <li>• Reactive fraud detection</li>
                <li>• 72-hour compliance reporting</li>
                <li>• Limited predictive capabilities</li>
                <li>• Human-dependent processes</li>
              </ul>
            </div>
            
            <div className="p-6 bg-green-600/10 rounded-lg border border-green-500/30">
              <h4 className="text-green-400 font-semibold mb-4">AI-Enhanced Solution</h4>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>• Real-time risk monitoring</li>
                <li>• Predictive fraud prevention</li>
                <li>• Instant compliance validation</li>
                <li>• 99.7% accuracy in pattern detection</li>
                <li>• Automated regulatory updates</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
