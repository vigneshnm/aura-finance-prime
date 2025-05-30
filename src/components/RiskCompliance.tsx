
import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { Shield, AlertTriangle, Check, Clock, ChevronDown, ChevronUp, Calculator } from 'lucide-react';

const riskData = [
  { name: 'Low Risk', value: 70, color: '#10B981' },
  { name: 'Medium Risk', value: 22, color: '#F59E0B' },
  { name: 'High Risk', value: 8, color: '#EF4444' }
];

const complianceData = [
  { regulation: 'SOX 404', status: 98, trend: '+2%' },
  { regulation: 'GDPR', status: 96, trend: '+1%' },
  { regulation: 'Basel III', status: 94, trend: '+5%' },
  { regulation: 'IFRS 17', status: 97, trend: '+3%' },
  { regulation: 'CECL', status: 95, trend: '+4%' },
  { regulation: 'ASC 842', status: 99, trend: '+1%' }
];

const fraudPatterns = [
  { time: '09:00', anomalies: 2, severity: 'low' },
  { time: '10:00', anomalies: 1, severity: 'low' },
  { time: '11:00', anomalies: 0, severity: 'none' },
  { time: '12:00', anomalies: 3, severity: 'medium' },
  { time: '13:00', anomalies: 1, severity: 'low' },
  { time: '14:00', anomalies: 5, severity: 'high' },
  { time: '15:00', anomalies: 2, severity: 'medium' },
  { time: '16:00', anomalies: 1, severity: 'low' }
];

const predictiveComplianceUseCases = [
  {
    title: "Regulatory change impact quantification (EU, US, APAC)",
    description: "AI monitoring of 500+ regulatory sources with impact analysis",
    benefit: "90-day early warning system"
  },
  {
    title: "Automated SOX testing with exception management",
    description: "Continuous control testing with intelligent exception workflows",
    benefit: "80% reduction in audit prep time"
  },
  {
    title: "Real-time GDPR compliance monitoring across data flows",
    description: "Automated data mapping and privacy impact assessments",
    benefit: "99.7% compliance score maintenance"
  },
  {
    title: "Tax law change impact assessment with strategy recommendations",
    description: "Global tax regulation monitoring with optimization strategies",
    benefit: "15% effective tax rate improvement"
  }
];

const advancedFraudUseCases = [
  {
    title: "Intelligent whistleblower pattern detection (pre-fraud indicators)",
    description: "Behavioral analysis identifying potential fraud before it occurs",
    benefit: "95% accuracy in pre-fraud detection"
  },
  {
    title: "Behavioral anomaly detection in expense reports",
    description: "ML-powered analysis of spending patterns and approval workflows",
    benefit: "Identifies $2.3M in fraudulent claims annually"
  },
  {
    title: "Vendor fraud risk scoring with payment pattern analysis",
    description: "Comprehensive vendor risk assessment with payment behavior analytics",
    benefit: "Prevents 98% of vendor fraud attempts"
  },
  {
    title: "Insider trading pattern recognition across employee transactions",
    description: "Real-time monitoring of employee trading with compliance alerts",
    benefit: "100% regulatory compliance maintenance"
  }
];

const enterpriseRiskUseCases = [
  {
    title: "Autonomous financial scenario stress testing (1000+ scenarios)",
    description: "Monte Carlo simulations across multiple risk dimensions",
    benefit: "Comprehensive risk quantification"
  },
  {
    title: "Credit risk assessment with real-time market data",
    description: "Dynamic credit scoring with market condition integration",
    benefit: "30% improvement in credit decision accuracy"
  },
  {
    title: "Operational risk quantification across business units",
    description: "Enterprise-wide risk aggregation with correlation analysis",
    benefit: "Optimizes capital allocation by 18%"
  },
  {
    title: "Cyber security financial impact modeling",
    description: "Quantitative assessment of cyber risks and financial exposure",
    benefit: "Reduces cyber insurance costs by 25%"
  }
];

const auditControlUseCases = [
  {
    title: "Continuous audit with real-time exception reporting",
    description: "24/7 automated auditing with intelligent anomaly detection",
    benefit: "Reduces audit costs by 60%"
  },
  {
    title: "Three lines of defense automation",
    description: "Automated coordination between risk management functions",
    benefit: "95% control effectiveness improvement"
  },
  {
    title: "Internal control deficiency prediction",
    description: "Predictive analytics identifying control weaknesses before failures",
    benefit: "Prevents 87% of control deficiencies"
  },
  {
    title: "Audit evidence collection with blockchain verification",
    description: "Immutable audit trails with cryptographic verification",
    benefit: "100% audit trail integrity"
  }
];

export const RiskCompliance = () => {
  const [riskThreshold, setRiskThreshold] = useState(15);
  const [animatedValues, setAnimatedValues] = useState<Record<string, number>>({});
  const [showAdvancedFraud, setShowAdvancedFraud] = useState(false);
  const [showEnterpriseRisk, setShowEnterpriseRisk] = useState(false);
  const [showAuditControl, setShowAuditControl] = useState(false);
  const [transactionVolume, setTransactionVolume] = useState(500);
  const [complianceScope, setComplianceScope] = useState(25);

  useEffect(() => {
    complianceData.forEach((item, index) => {
      setTimeout(() => {
        setAnimatedValues(prev => ({ ...prev, [item.regulation]: item.status }));
      }, index * 200);
    });
  }, []);

  const calculateComplianceROI = () => {
    const avoidedPenalties = (transactionVolume * 0.1) / 1000; // Convert to millions
    const auditSavings = complianceScope * 0.2; // $200K per jurisdiction
    const operationalSavings = (transactionVolume * 0.05) / 1000;
    
    return {
      annual: Math.round((avoidedPenalties + auditSavings + operationalSavings) * 100) / 100,
      monthly: Math.round(((avoidedPenalties + auditSavings + operationalSavings) / 12) * 100) / 100
    };
  };

  const roi = calculateComplianceROI();

  return (
    <section id="risk" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">Risk & Compliance Center</h2>
          <p className="text-slate-300 text-lg">Autonomous risk management with predictive compliance intelligence</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Risk Meter */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-600/50">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold text-white">Enterprise Risk Distribution</h3>
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
              <label className="block text-sm text-slate-400 mb-2">Materiality Threshold (%)</label>
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

            <div className="mt-4 text-center">
              <div className="text-lg font-bold text-green-400">99.2%</div>
              <div className="text-xs text-slate-400">Risk Detection Accuracy</div>
            </div>
          </div>

          {/* Enhanced Compliance Grid */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-600/50">
            <h3 className="text-xl font-semibold text-white mb-6">Global Compliance Status</h3>
            
            <div className="space-y-3 max-h-64 overflow-y-auto">
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
              <div className="text-2xl font-bold text-white">96.8%</div>
              <div className="text-slate-300 text-xs">+3.1% vs last quarter</div>
            </div>
          </div>

          {/* ROI Calculator */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-600/50">
            <div className="flex items-center mb-6">
              <Calculator className="w-6 h-6 text-emerald-400 mr-3" />
              <h3 className="text-xl font-semibold text-white">Compliance ROI</h3>
            </div>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm text-slate-400 mb-2">Transaction Volume ($B)</label>
                <input
                  type="range"
                  min="100"
                  max="2000"
                  value={transactionVolume}
                  onChange={(e) => setTransactionVolume(Number(e.target.value))}
                  className="w-full accent-emerald-500"
                />
                <div className="text-center mt-1 text-emerald-400 font-semibold">${transactionVolume}B</div>
              </div>

              <div>
                <label className="block text-sm text-slate-400 mb-2">Compliance Jurisdictions</label>
                <input
                  type="range"
                  min="5"
                  max="50"
                  value={complianceScope}
                  onChange={(e) => setComplianceScope(Number(e.target.value))}
                  className="w-full accent-blue-500"
                />
                <div className="text-center mt-1 text-blue-400 font-semibold">{complianceScope}</div>
              </div>

              <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-lg p-4 border border-green-500/30">
                <div className="flex items-center mb-2">
                  <Shield className="w-4 h-4 text-green-400 mr-2" />
                  <span className="text-green-400 font-semibold text-sm">Risk Reduction Value</span>
                </div>
                <div className="text-2xl font-bold text-white">${roi.annual}M</div>
                <div className="text-slate-300 text-sm">${roi.monthly}M monthly</div>
              </div>
            </div>
          </div>
        </div>

        {/* Fraud Detection Timeline */}
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-600/50 mb-12">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-semibold text-white">Real-Time Fraud Pattern Detection</h3>
            <AlertTriangle className="w-6 h-6 text-amber-400" />
          </div>
          
          <div className="grid grid-cols-4 md:grid-cols-8 gap-3 mb-6">
            {fraudPatterns.map((pattern, index) => (
              <div key={pattern.time} className="flex flex-col items-center p-3 bg-slate-700/30 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <Clock className="w-3 h-3 text-slate-400" />
                  <span className="text-slate-300 text-xs">{pattern.time}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-white text-sm font-semibold">{pattern.anomalies}</span>
                  <div className={`w-2 h-2 rounded-full ${
                    pattern.severity === 'high' ? 'bg-red-500' :
                    pattern.severity === 'medium' ? 'bg-amber-500' :
                    pattern.severity === 'low' ? 'bg-green-500' : 'bg-slate-500'
                  }`} />
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center p-4 bg-gradient-to-r from-red-600/10 to-amber-600/10 rounded-lg border border-red-500/30">
              <div className="text-xl font-bold text-red-400">14</div>
              <div className="text-xs text-slate-400">Total Anomalies Detected</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-r from-green-600/10 to-emerald-600/10 rounded-lg border border-green-500/30">
              <div className="text-xl font-bold text-green-400">99.2%</div>
              <div className="text-xs text-slate-400">Detection Accuracy</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-lg border border-blue-500/30">
              <div className="text-xl font-bold text-blue-400">$500B+</div>
              <div className="text-xs text-slate-400">Transactions Monitored</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-r from-amber-600/10 to-orange-600/10 rounded-lg border border-amber-500/30">
              <div className="text-xl font-bold text-amber-400">1.3 sec</div>
              <div className="text-xs text-slate-400">Average Response Time</div>
            </div>
          </div>
        </div>

        {/* Predictive Compliance Use Cases */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-white mb-6">Predictive Compliance</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {predictiveComplianceUseCases.map((useCase, index) => (
              <div 
                key={index}
                className="p-6 rounded-lg bg-slate-800/30 hover:bg-slate-700/30 transition-all duration-300 border border-slate-600/30 hover:border-emerald-500/50"
              >
                <h4 className="font-semibold text-white mb-2">{useCase.title}</h4>
                <p className="text-slate-300 text-sm mb-2">{useCase.description}</p>
                <div className="text-emerald-400 text-sm font-semibold">{useCase.benefit}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Advanced Fraud Detection Use Cases */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-semibold text-white">Advanced Fraud Detection</h3>
            <button
              onClick={() => setShowAdvancedFraud(!showAdvancedFraud)}
              className="flex items-center text-blue-400 hover:text-blue-300 transition-colors"
            >
              <span className="mr-2">{showAdvancedFraud ? 'Show Less' : 'Show More'}</span>
              {showAdvancedFraud ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>
          
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 transition-all duration-300 ${
            showAdvancedFraud ? 'opacity-100 max-h-none' : 'opacity-60 max-h-64 overflow-hidden'
          }`}>
            {advancedFraudUseCases.map((useCase, index) => (
              <div 
                key={index}
                className="p-4 rounded-lg bg-slate-800/20 hover:bg-slate-700/20 transition-all duration-300 border border-slate-600/20"
              >
                <h4 className="font-semibold text-white mb-2 text-sm">{useCase.title}</h4>
                <p className="text-slate-300 text-xs mb-2">{useCase.description}</p>
                <div className="text-red-400 text-xs font-semibold">{useCase.benefit}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Enterprise Risk Analytics */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-semibold text-white">Enterprise Risk Analytics</h3>
            <button
              onClick={() => setShowEnterpriseRisk(!showEnterpriseRisk)}
              className="flex items-center text-blue-400 hover:text-blue-300 transition-colors"
            >
              <span className="mr-2">{showEnterpriseRisk ? 'Show Less' : 'Show More'}</span>
              {showEnterpriseRisk ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>
          
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 transition-all duration-300 ${
            showEnterpriseRisk ? 'opacity-100 max-h-none' : 'opacity-60 max-h-64 overflow-hidden'
          }`}>
            {enterpriseRiskUseCases.map((useCase, index) => (
              <div 
                key={index}
                className="p-4 rounded-lg bg-slate-800/20 hover:bg-slate-700/20 transition-all duration-300 border border-slate-600/20"
              >
                <h4 className="font-semibold text-white mb-2 text-sm">{useCase.title}</h4>
                <p className="text-slate-300 text-xs mb-2">{useCase.description}</p>
                <div className="text-amber-400 text-xs font-semibold">{useCase.benefit}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Audit & Control Automation */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-semibold text-white">Audit & Control Automation</h3>
            <button
              onClick={() => setShowAuditControl(!showAuditControl)}
              className="flex items-center text-blue-400 hover:text-blue-300 transition-colors"
            >
              <span className="mr-2">{showAuditControl ? 'Show Less' : 'Show More'}</span>
              {showAuditControl ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>
          
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 transition-all duration-300 ${
            showAuditControl ? 'opacity-100 max-h-none' : 'opacity-60 max-h-64 overflow-hidden'
          }`}>
            {auditControlUseCases.map((useCase, index) => (
              <div 
                key={index}
                className="p-4 rounded-lg bg-slate-800/20 hover:bg-slate-700/20 transition-all duration-300 border border-slate-600/20"
              >
                <h4 className="font-semibold text-white mb-2 text-sm">{useCase.title}</h4>
                <p className="text-slate-300 text-xs mb-2">{useCase.description}</p>
                <div className="text-green-400 text-xs font-semibold">{useCase.benefit}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
