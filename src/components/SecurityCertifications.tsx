
import React from 'react';
import { Shield, Lock, CheckCircle, Globe } from 'lucide-react';

export const SecurityCertifications = () => {
  const certifications = [
    {
      name: "SOC 2 Type II",
      description: "Certified",
      icon: Shield
    },
    {
      name: "ISO 27001",
      description: "Compliant",
      icon: Lock
    },
    {
      name: "GDPR",
      description: "Compliant",
      icon: Globe
    },
    {
      name: "CCPA",
      description: "Compliant",
      icon: CheckCircle
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-emerald-100 bg-clip-text text-transparent">
          Enterprise-Grade Security
        </h2>
        <p className="text-xl text-slate-300 mb-8">
          Bank-level encryption and Fortune 100-approved infrastructure
        </p>
        <p className="text-lg text-blue-300 mb-12">
          Trusted by 50+ Fortune 500 companies
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <div key={index} className="p-6 bg-slate-800/50 rounded-xl border border-slate-600/50 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300">
                <Icon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="font-bold text-white mb-2">{cert.name}</h3>
                <p className="text-emerald-400 text-sm font-semibold">{cert.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-xl p-8 border border-green-500/30">
          <h3 className="text-2xl font-bold text-white mb-4">Security Highlights</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-emerald-400 mb-2">256-bit</div>
              <div className="text-slate-300">AES Encryption</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-2">99.9%</div>
              <div className="text-slate-300">Uptime SLA</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-400 mb-2">24/7</div>
              <div className="text-slate-300">Security Monitoring</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
