
import React from 'react';
import { Shield, Zap, Settings, Globe, Lock, Users, Cloud, BarChart3 } from 'lucide-react';

export const EnterpriseSolutions = () => {
  const integrationFeatures = [
    {
      icon: Settings,
      title: "Native SAP, Oracle, Workday, and 50+ ERP integrations",
      description: "Seamless connectivity with your existing enterprise systems"
    },
    {
      icon: Zap,
      title: "Real-time data synchronization across enterprise systems",
      description: "Instant updates and bi-directional data flow"
    },
    {
      icon: Lock,
      title: "Single sign-on (SSO) with Active Directory and SAML 2.0",
      description: "Secure, unified access management"
    },
    {
      icon: Cloud,
      title: "API-first architecture with 99.9% uptime SLA",
      description: "Enterprise-grade reliability and performance"
    }
  ];

  const securityFeatures = [
    {
      icon: Shield,
      title: "SOC 2 Type II certified infrastructure",
      description: "Independently verified security controls"
    },
    {
      icon: Lock,
      title: "ISO 27001 compliance with military-grade encryption",
      description: "Bank-level security standards"
    },
    {
      icon: Globe,
      title: "GDPR, CCPA, and global privacy regulation compliance",
      description: "Worldwide regulatory adherence"
    },
    {
      icon: Users,
      title: "Zero-trust security architecture with role-based access",
      description: "Granular permission controls"
    }
  ];

  const deploymentFeatures = [
    {
      icon: Cloud,
      title: "Private cloud, hybrid, or on-premise deployment options",
      description: "Flexible infrastructure to meet your requirements"
    },
    {
      icon: Users,
      title: "Dedicated customer success manager and 24/7 support",
      description: "White-glove service and continuous support"
    },
    {
      icon: Settings,
      title: "Custom training programs for finance teams",
      description: "Comprehensive onboarding and skill development"
    },
    {
      icon: BarChart3,
      title: "Phased implementation with 90-day value realization",
      description: "Rapid deployment with measurable ROI"
    }
  ];

  const scaleFeatures = [
    {
      icon: Zap,
      title: "Process 10M+ transactions per minute",
      description: "Unlimited scalability for enterprise volume"
    },
    {
      icon: Globe,
      title: "Support for 100+ subsidiaries and entities",
      description: "Multi-entity consolidation and reporting"
    },
    {
      icon: Settings,
      title: "Multi-currency, multi-language, multi-jurisdiction ready",
      description: "Global operations support"
    },
    {
      icon: Shield,
      title: "Enterprise data retention and disaster recovery",
      description: "Business continuity assurance"
    }
  ];

  const FeatureGrid = ({ features, title }: { features: any[], title: string }) => (
    <div className="mb-12">
      <h3 className="text-2xl font-bold text-white mb-6">{title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div key={index} className="p-6 bg-slate-800/50 rounded-xl border border-slate-600/50 hover:border-slate-500 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <Icon className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-white mb-2">{feature.title}</h4>
                  <p className="text-slate-300 text-sm">{feature.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <section id="enterprise" className="py-20 px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-emerald-100 bg-clip-text text-transparent">
            Enterprise Solutions
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Purpose-built for Fortune 100 finance organizations with enterprise-grade security, 
            compliance, and scalability requirements.
          </p>
        </div>

        <FeatureGrid features={integrationFeatures} title="Enterprise Integration Hub" />
        <FeatureGrid features={securityFeatures} title="Security & Compliance" />
        <FeatureGrid features={deploymentFeatures} title="Enterprise Deployment" />
        <FeatureGrid features={scaleFeatures} title="Scale & Performance" />

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105">
            Schedule Enterprise Demo
          </button>
          <p className="text-slate-400 text-sm mt-3">Custom implementation roadmap included</p>
        </div>
      </div>
    </section>
  );
};
