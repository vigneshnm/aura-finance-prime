
import React from 'react';
import { TrendingUp, Mail, Phone, MapPin, Shield, Globe, Lock, CheckCircle } from 'lucide-react';

export const Footer = () => {
  const productLinks = [
    "Revenue Intelligence",
    "Risk & Compliance", 
    "Operational Efficiency",
    "Strategic Decisions",
    "Enterprise Solutions",
    "Security & Compliance"
  ];

  const resourceLinks = [
    "Case Studies",
    "Implementation Guide", 
    "API Documentation",
    "Training & Certification",
    "Help Center"
  ];

  const legalLinks = [
    "Privacy Policy",
    "Terms of Service",
    "Security & Compliance",
    "Cookie Policy", 
    "Data Processing Agreement"
  ];

  const certifications = [
    { name: "SOC 2 Type II", icon: Shield },
    { name: "ISO 27001", icon: Lock },
    { name: "GDPR", icon: Globe },
    { name: "CCPA", icon: CheckCircle }
  ];

  return (
    <footer className="bg-slate-900 border-t border-slate-700">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold text-white">Apex Finance AI</span>
                <div className="text-xs text-blue-400 font-medium">Finance.AI</div>
              </div>
            </div>
            <p className="text-slate-300 mb-6">
              Enterprise-grade AI for Fortune 100 finance teams
            </p>
            <div className="space-y-3 text-slate-400">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">New York, NY • London • Singapore</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span className="text-sm">enterprise@apexfinance.ai</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Products</h3>
            <ul className="space-y-2">
              {productLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              {resourceLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-white mb-4">Legal & Compliance</h3>
            <ul className="space-y-2">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Security Certifications */}
        <div className="border-t border-slate-700 pt-8 mb-8">
          <h3 className="font-semibold text-white mb-4 text-center">Security Certifications</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {certifications.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <div key={index} className="flex items-center justify-center p-3 bg-slate-800/50 rounded-lg border border-slate-600/50">
                  <Icon className="w-4 h-4 text-blue-400 mr-2" />
                  <span className="text-slate-300 text-xs font-medium">{cert.name}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            © 2024 Apex Finance AI. All rights reserved.
          </p>
          <p className="text-slate-500 text-xs mt-2 md:mt-0">
            SOC 2 Type II Certified • ISO 27001 Compliant • GDPR Ready
          </p>
        </div>
      </div>
    </footer>
  );
};
