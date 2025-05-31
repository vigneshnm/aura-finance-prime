
import React from 'react';
import { Quote, Star, Award } from 'lucide-react';

export const Testimonials = () => {
  const testimonials = [
    {
      quote: "Reduced our month-end close from 12 days to 3 days, saving $2.4M annually in operational costs.",
      author: "Global Manufacturing CFO",
      company: "Fortune 100 Manufacturing",
      impact: "$2.4M Annual Savings"
    },
    {
      quote: "AI-powered fraud detection prevented $15M in losses while reducing false positives by 80%.",
      author: "Chief Risk Officer",
      company: "Fortune 50 Financial Services",
      impact: "$15M Loss Prevention"
    },
    {
      quote: "Transfer pricing automation across 40 countries cut compliance costs by 65% and eliminated audit findings.",
      author: "Technology Giant CFO",
      company: "Global Technology Leader",
      impact: "65% Cost Reduction"
    },
    {
      quote: "Predictive cash flow modeling helped us optimize $500M in working capital during market volatility.",
      author: "Treasury Director",
      company: "Energy Sector Leader",
      impact: "$500M Capital Optimization"
    }
  ];

  const recognitions = [
    {
      title: "Gartner: Leader in Enterprise Financial AI Solutions",
      year: "2024"
    },
    {
      title: "Forrester: Strong Performer in Finance Automation",
      year: "2024"
    }
  ];

  return (
    <section className="py-20 px-6 bg-slate-800/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-emerald-100 bg-clip-text text-transparent">
            Trusted by Fortune 100 Leaders
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Real results from leading finance organizations worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-8 bg-slate-800/50 rounded-xl border border-slate-600/50 backdrop-blur-sm">
              <Quote className="w-8 h-8 text-blue-400 mb-4" />
              <blockquote className="text-lg text-white mb-6 italic">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex justify-between items-end">
                <div>
                  <div className="font-semibold text-white">{testimonial.author}</div>
                  <div className="text-slate-400 text-sm">{testimonial.company}</div>
                </div>
                <div className="text-right">
                  <div className="text-emerald-400 font-bold text-sm">{testimonial.impact}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Industry Recognition</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {recognitions.map((recognition, index) => (
              <div key={index} className="p-6 bg-gradient-to-r from-blue-600/20 to-emerald-600/20 rounded-xl border border-blue-500/30">
                <Award className="w-8 h-8 text-amber-400 mx-auto mb-3" />
                <div className="font-semibold text-white mb-1">{recognition.title}</div>
                <div className="text-blue-300 text-sm">{recognition.year}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
