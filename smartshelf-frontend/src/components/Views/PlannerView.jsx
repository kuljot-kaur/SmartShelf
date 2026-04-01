import React from 'react'

export default function PlannerView() {
  return (
    <div className="max-w-7xl mx-auto">
      {/* Hero Header Section */}
      <div className="mb-12">
        <span className="text-xs font-semibold text-on-primary-container tracking-widest uppercase">Intelligent Restocking</span>
        <h1 className="font-headline text-3xl md:text-5xl font-light text-on-surface mt-2 mb-4 tracking-tight">Demand & Restock Planner</h1>
        <p className="text-sm text-on-surface-variant max-w-2xl">Leveraging multi-nodal AI to synthesize weather patterns, local events, and historical velocity into precise procurement actions.</p>
      </div>
      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* 1. Demand Forecast Visualization */}
        <section className="md:col-span-8 bg-surface-container-lowest rounded-xl p-8 flex flex-col h-[480px]">
          <div className="flex justify-between items-start mb-8">
            <div>
              <h3 className="text-sm font-bold text-on-surface uppercase tracking-wider mb-1">14-Day Demand Forecast</h3>
              <p className="text-sm text-on-surface-variant italic">Aggregated predicted units vs. actual sales velocity</p>
            </div>
            <div className="flex gap-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-primary"></div>
                <span className="text-xs font-medium">Predicted</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-secondary-fixed-dim"></div>
                <span className="text-xs font-medium">Actual</span>
              </div>
            </div>
          </div>
          <div className="flex-1 relative mt-4 flex items-end justify-between gap-1">
            {/* Simulated Area Chart Bars */}
            <div className="w-full flex items-end justify-between h-full px-4 border-b border-outline-variant/20">
              {/* Mon */}
              <div className="group relative flex flex-col items-center w-8">
                <div className="w-full bg-primary/10 h-[40%] rounded-t-sm relative">
                  <div className="absolute bottom-0 w-full bg-primary h-[85%] rounded-t-sm"></div>
                </div>
                <div className="w-2 bg-secondary-fixed-dim h-[35%] rounded-t-full mt-[-20%] z-10"></div>
                <span className="text-xs mt-4 text-outline">M</span>
              </div>
              {/* Tue */}
              <div className="group relative flex flex-col items-center w-8">
                <div className="w-full bg-primary/10 h-[45%] rounded-t-sm relative">
                  <div className="absolute bottom-0 w-full bg-primary h-[90%] rounded-t-sm"></div>
                </div>
                <div className="w-2 bg-secondary-fixed-dim h-[42%] rounded-t-full mt-[-20%] z-10"></div>
                <span className="text-xs mt-4 text-outline">T</span>
              </div>
              {/* Wed */}
              <div className="group relative flex flex-col items-center w-8">
                <div className="w-full bg-primary/10 h-[65%] rounded-t-sm relative">
                  <div className="absolute bottom-0 w-full bg-primary h-[70%] rounded-t-sm"></div>
                </div>
                <div className="w-2 bg-secondary-fixed-dim h-[60%] rounded-t-full mt-[-20%] z-10"></div>
                <span className="text-xs mt-4 text-outline">W</span>
              </div>
              {/* Thu */}
              <div className="group relative flex flex-col items-center w-8">
                <div className="w-full bg-primary/10 h-[55%] rounded-t-sm relative">
                  <div className="absolute bottom-0 w-full bg-primary h-[95%] rounded-t-sm"></div>
                </div>
                <div className="w-2 bg-secondary-fixed-dim h-[48%] rounded-t-full mt-[-20%] z-10"></div>
                <span className="text-xs mt-4 text-outline">T</span>
              </div>
              {/* Fri - Prediction Spike */}
              <div className="group relative flex flex-col items-center w-8">
                <div className="w-full bg-primary/10 h-[85%] rounded-t-sm relative">
                  <div className="absolute bottom-0 w-full bg-primary h-[100%] rounded-t-sm"></div>
                </div>
                <div className="w-2 bg-secondary-fixed-dim h-[10%] rounded-t-full mt-[-20%] z-10 opacity-50"></div>
                <span className="text-xs mt-4 text-outline font-bold">F</span>
              </div>
              {/* Sat */}
              <div className="group relative flex flex-col items-center w-8">
                <div className="w-full bg-primary/10 h-[95%] rounded-t-sm relative">
                  <div className="absolute bottom-0 w-full bg-primary h-[100%] rounded-t-sm"></div>
                </div>
                <div className="w-2 bg-secondary-fixed-dim h-[5%] rounded-t-full mt-[-20%] z-10 opacity-50"></div>
                <span className="text-xs mt-4 text-outline font-bold">S</span>
              </div>
              {/* Sun */}
              <div className="group relative flex flex-col items-center w-8">
                <div className="w-full bg-primary/10 h-[70%] rounded-t-sm relative">
                  <div className="absolute bottom-0 w-full bg-primary h-[100%] rounded-t-sm"></div>
                </div>
                <div className="w-2 bg-secondary-fixed-dim h-[0%] rounded-t-full mt-[-20%] z-10 opacity-50"></div>
                <span className="text-xs mt-4 text-outline">S</span>
              </div>
            </div>
          </div>
        </section>
        {/* External Factor Impact */}
        <section className="md:col-span-4 flex flex-col gap-6">
          <div className="bg-surface-container-lowest rounded-xl p-6 flex flex-col border-l-4 border-secondary shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>cloud_sync</span>
              <h3 className="text-sm font-bold uppercase tracking-widest">Environmental Factors</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 rounded-lg bg-surface-container-low">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-blue-500">rainy</span>
                  <div>
                    <p className="text-xs font-bold">Rainy Saturday</p>
                    <p className="text-[10px] text-on-surface-variant">Predicted -12% foot traffic</p>
                  </div>
                </div>
                <span className="text-[10px] font-bold text-error">Impact High</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-surface-container-low">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-amber-500">celebration</span>
                  <div>
                    <p className="text-xs font-bold">Local Festival</p>
                    <p className="text-[10px] text-on-surface-variant">Predicted +24% grocery demand</p>
                  </div>
                </div>
                <span className="text-[10px] font-bold text-secondary">Impact Extreme</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-surface-container-low">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-slate-500">trending_down</span>
                  <div>
                    <p className="text-xs font-bold">Logistics Delay</p>
                    <p className="text-[10px] text-on-surface-variant">Supplier port congestion (+2 days)</p>
                  </div>
                </div>
                <span className="text-[10px] font-bold text-tertiary-container text-on-tertiary-container">Moderate</span>
              </div>
            </div>
          </div>
          {/* Procurement Optimization */}
          <div className="bg-primary text-on-primary rounded-xl p-6 flex flex-col relative overflow-hidden h-full">
            <div className="z-10 relative">
              <h3 className="text-sm font-light opacity-80 uppercase tracking-widest mb-4">Savings Optimization</h3>
              <p className="font-headline text-4xl font-light mb-2">$4,280.00</p>
              <p className="text-sm text-secondary-fixed font-medium flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">trending_up</span>
                Potentially saved this month
              </p>
              <p className="text-xs mt-6 opacity-60 leading-relaxed">By consolidating tomato and lettuce orders for the upcoming "Festival Spike", you qualify for Tier 3 bulk discounts.</p>
            </div>
            {/* Abstract Gradient Pattern */}
            <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-secondary/20 rounded-full blur-3xl"></div>
          </div>
        </section>
        {/* Smart Restocking Suggestions */}
        <section className="md:col-span-12 mt-4">
          <div className="flex justify-between items-end mb-6">
            <div>
              <h3 className="font-headline text-2xl font-medium text-on-surface">Smart Restocking Priority</h3>
              <p className="text-sm text-on-surface-variant">AI-generated procurement list based on predicted velocity.</p>
            </div>
            <button className="px-6 py-2 bg-secondary text-white rounded-full text-xs font-bold scale-98-on-click flex items-center gap-2">
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
              Execute All AI Recommendations
            </button>
          </div>
          <div className="space-y-4">
            {/* Restock Item Card */}
            <div className="bg-surface-container-lowest rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 transition-all hover:bg-white hover:shadow-xl group">
              <div className="flex items-center gap-6 flex-1">
                <div className="w-16 h-16 rounded-lg bg-surface-container overflow-hidden">
                  <img alt="Fresh Tomatoes" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrP4NEwJW790370Rx-4U1bZyYbaAgnb8LGr0cvxpGn1AU4jfvNXFh4tSCwDy5bFljzL-cAM3ybqgmJNa3ksdE_BSdGbMuIInWEXl9Q8Cb5Dzg-M2cJzFSImLIw7np38FXqC8VidWDWe3CuXbUZLUxEgjqeXas-aYqAfC4FE-CzjOZHgXatSoIJ7cXDOvfB36uREJn3O7bdwE0PLkmDLhqe6_h4OjaSUCqRpITfzAiuxEBos6dzBrLdtr1Y2Cwj1ZoecaQLWbj-iO_c" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <h4 className="text-sm font-bold text-on-surface">Vine-Ripened Tomatoes</h4>
                    <span className="px-2 py-0.5 rounded bg-error-container text-on-error-container text-[10px] font-bold">High Priority</span>
                  </div>
                  <p className="text-sm text-on-surface-variant mt-1">Suggested: <span className="font-bold text-on-surface">Order 50kg</span> by Friday evening.</p>
                  <div className="flex items-center gap-4 mt-2">
                    <span className="flex items-center gap-1 text-[10px] text-outline font-semibold uppercase">
                      <span className="material-symbols-outlined text-[14px]">history</span>
                      Last ordered: 3d ago
                    </span>
                    <span className="flex items-center gap-1 text-[10px] text-secondary font-semibold uppercase">
                      <span className="material-symbols-outlined text-[14px]">trending_up</span>
                      Predicted Demand: +32%
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4 w-full md:w-auto">
                <div className="flex flex-col items-end mr-4">
                  <p className="text-xs font-bold text-outline">Est. Cost</p>
                  <p className="text-lg font-headline font-bold text-on-surface">$142.50</p>
                </div>
                <button className="flex-1 md:flex-none px-8 py-3 bg-primary text-on-primary rounded-full text-sm font-bold scale-98-on-click flex items-center justify-center gap-2">
                  Restock Now
                </button>
                <button className="p-3 border border-outline-variant/30 rounded-full hover:bg-surface-container-high transition-colors">
                  <span className="material-symbols-outlined">more_vert</span>
                </button>
              </div>
            </div>
            {/* Restock Item Card 2 */}
            <div className="bg-surface-container-lowest rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 transition-all hover:bg-white hover:shadow-xl group">
              <div className="flex items-center gap-6 flex-1">
                <div className="w-16 h-16 rounded-lg bg-surface-container overflow-hidden">
                  <img alt="Avocados" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDz7PTbtGKIQrG0CWxxIoheLo944sgLhf4gEWoBHJ3-SD1x6DDc_iGw6scGsEzT82O4AHNCXIYL5CMWH26H8CanoxN-AjTgQSYV_NxX94RjbaACBsT_H6ZkT_BNCr0LRzCOgmf-kHlDH4AK_0z3ChRk2I21sj5K6LgtBZ9GvJ3uMMyats1zamuUNdCVIeP7ubN0oG_l6WcpsvRq6Fx1f7pkTxXoIssmBnJBkrRQfKKZq_MNN-Ar7ITQ0IzKG2iaKlSV12pKYzXoyTd3" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <h4 className="text-sm font-bold text-on-surface">Hass Avocados (Large)</h4>
                    <span className="px-2 py-0.5 rounded bg-tertiary-fixed text-on-tertiary-fixed text-[10px] font-bold">Moderate</span>
                  </div>
                  <p className="text-sm text-on-surface-variant mt-1">Suggested: <span className="font-bold text-on-surface">Order 12 Cases</span> for Wednesday delivery.</p>
                  <div className="flex items-center gap-4 mt-2">
                    <span className="flex items-center gap-1 text-[10px] text-outline font-semibold uppercase">
                      <span className="material-symbols-outlined text-[14px]">history</span>
                      Last ordered: 5d ago
                    </span>
                    <span className="flex items-center gap-1 text-[10px] text-tertiary-container text-on-tertiary-container font-semibold uppercase">
                      <span className="material-symbols-outlined text-[14px]">trending_flat</span>
                      Steady Demand
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4 w-full md:w-auto">
                <div className="flex flex-col items-end mr-4">
                  <p className="text-xs font-bold text-outline">Est. Cost</p>
                  <p className="text-lg font-headline font-bold text-on-surface">$580.00</p>
                </div>
                <button className="flex-1 md:flex-none px-8 py-3 bg-primary text-on-primary rounded-full text-sm font-bold scale-98-on-click flex items-center justify-center gap-2">
                  Restock Now
                </button>
                <button className="p-3 border border-outline-variant/30 rounded-full hover:bg-surface-container-high transition-colors">
                  <span className="material-symbols-outlined">more_vert</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
