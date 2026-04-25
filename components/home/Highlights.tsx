import React from "react";
import SectionTitle from "../global/SectionTitle";

const highlightsData = [
  {
    id: "h1",
    title: "Multi-Tenant SaaS Migration",
    desc: "Led transformation from 20 separate single-tenant deployments into a unified architecture. Migrated all clients, then scaled to onboard 120+ more on the unified platform.",
    metrics: "20 instances → 1 unified SaaS",
    icon: "🚀"
  },
  {
    id: "h2",
    title: "MongoDB Zero-Downtime Re-Architecture",
    desc: "Re-architected deeply nested schema and rewrote backward-compatible APIs to support scaling and complex queries. Executed cutover during an 8-hour window without major issues.",
    metrics: "8M+ docs migrated | 70% query performance boost",
    icon: "🗄️"
  },
  {
    id: "h3",
    title: "AWS Cost & Infra Optimization",
    desc: "Strategically migrated to Graviton ARM instances, consolidated Load Balancers, and optimized storage across the stack while maintaining 99.99% uptime.",
    metrics: "40-70% AWS cost reduction",
    icon: "📉"
  },
  {
    id: "h4",
    title: "Data Ingestion & Latency",
    desc: "Re-engineered SuperAdmin analytics API and influencer ingestion pipelines with SQS queues, Firebase RTDB, query profiling, and strategic SQL indexing.",
    metrics: "99% latency drop (90s → 800ms)",
    icon: "⚡"
  }
];

function Highlights() {
  return (
    <div id="highlights" className="flex flex-col text-left justify-between pt-6 relative">
      <SectionTitle title="Engineering Highlights" />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 items-start">
        {highlightsData.map((item) => (
          <div
            key={item.id}
            className="w-full relative rounded-xl border-fun-gray border p-6 transition hover:-translate-y-2 hover:border-fun-pink hover:shadow-lg bg-[#0a192f] group"
          >
            <div className="flex items-center gap-4 mb-3">
              <span className="text-4xl">{item.icon}</span>
              <h3 className="text-xl font-bold group-hover:text-fun-pink transition-colors">{item.title}</h3>
            </div>
            <p className="text-fun-gray text-left text-sm leading-relaxed mb-4">{item.desc}</p>
            <div className="mt-auto pt-4 border-t border-fun-gray-darker">
              <span className="text-fun-pink font-semibold text-sm">{item.metrics}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Highlights;
