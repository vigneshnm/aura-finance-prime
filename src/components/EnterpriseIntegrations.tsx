
import React from 'react';
import { Link, Zap, Settings, Code } from 'lucide-react';

export const EnterpriseIntegrations = () => {
  const systemCategories = [
    {
      title: "ERP Systems",
      systems: ["SAP S/4HANA", "Oracle ERP Cloud", "Microsoft Dynamics 365", "NetSuite", "Workday Financials"]
    },
    {
      title: "Financial Systems",
      systems: ["BlackLine", "Hyperion", "Anaplan", "Adaptive Planning", "IBM Planning Analytics"]
    },
    {
      title: "Data Platforms",
      systems: ["Snowflake", "Databricks", "AWS", "Azure", "Google Cloud Platform"]
    },
    {
      title: "Treasury & Banking",
      systems: ["SWIFT", "Bloomberg Terminal", "Refinitiv Eikon", "Kyriba", "GTreasury"]
    }
  ];

  return (
    <section className="py-20 px-6 bg-slate-800/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-emerald-100 bg-clip-text text-transparent">
            Enterprise Integrations
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Connect with your existing financial infrastructure through pre-built connectors and custom APIs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {systemCategories.map((category, index) => (
            <div key={index} className="p-6 bg-slate-800/50 rounded-xl border border-slate-600/50">
              <h3 className="font-bold text-white mb-4 text-center">{category.title}</h3>
              <div className="space-y-3">
                {category.systems.map((system, systemIndex) => (
                  <div key={systemIndex} className="p-3 bg-slate-700/50 rounded-lg text-center">
                    <div className="text-slate-300 text-sm font-medium">{system}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center p-6 bg-gradient-to-br from-blue-600/20 to-emerald-600/20 rounded-xl border border-blue-500/30">
            <Link className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h3 className="font-bold text-white mb-2">Pre-built Connectors</h3>
            <p className="text-slate-300 text-sm">50+ enterprise systems ready for immediate integration</p>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-emerald-600/20 to-blue-600/20 rounded-xl border border-emerald-500/30">
            <Zap className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
            <h3 className="font-bold text-white mb-2">Real-time Sync</h3>
            <p className="text-slate-300 text-sm">Bi-directional data flow with millisecond latency</p>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-amber-600/20 to-orange-600/20 rounded-xl border border-amber-500/30">
            <Code className="w-12 h-12 text-amber-400 mx-auto mb-4" />
            <h3 className="font-bold text-white mb-2">Custom APIs</h3>
            <p className="text-slate-300 text-sm">Tailored integration development for unique requirements</p>
          </div>
        </div>

        <div className="text-center">
          <button className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105">
            View Integration Catalog
          </button>
          <p className="text-slate-400 text-sm mt-3">Custom integration assessment available</p>
        </div>
      </div>
    </section>
  );
};
