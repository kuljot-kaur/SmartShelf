import React from 'react'

export default function ReportsView() {
  return (
    <div className="max-w-7xl mx-auto space-y-12">
      {/* Hero Header */}
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-2">
          <span className="text-label-sm font-semibold uppercase tracking-[0.2em] text-on-primary-container">Quarterly Performance</span>
          <h1 className="text-[3.5rem] font-light leading-tight font-manrope text-on-surface">Intelligent Ledger <br/><span className="font-bold">Insights</span></h1>
        </div>
        <div className="flex gap-4">
          <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm min-w-[200px] border-l-4 border-secondary-fixed">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Waste Score</p>
            <p className="text-3xl font-manrope font-bold text-on-surface">-12.4%</p>
            <p className="text-[10px] text-on-secondary-container bg-secondary-container/30 px-2 py-0.5 rounded-full inline-block mt-2">Target Achieved</p>
          </div>
        </div>
      </header>

      {/* Bento Grid Section: Financial & Environmental */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Financial Impact Card */}
        <div className="md:col-span-8 bg-surface-container-lowest p-8 rounded-xl shadow-sm flex flex-col justify-between overflow-hidden relative group">
          <div className="relative z-10">
            <div className="flex justify-between items-start mb-8">
              <div>
                <h3 className="text-headline-md font-manrope font-medium mb-1">Financial Impact</h3>
                <p className="text-body-md text-on-surface-variant">Recovered revenue through dynamic AI pricing strategies.</p>
              </div>
              <span className="material-symbols-outlined text-primary-fixed-dim text-4xl">trending_up</span>
            </div>
            <div className="flex items-baseline gap-2 mb-10">
              <span className="text-[4rem] font-manrope font-light text-primary">$42.8k</span>
              <span className="text-secondary font-bold text-lg">+18% YoY</span>
            </div>
            {/* Visual Representation of Trend (Simplified SVG Chart) */}
            <div className="w-full h-48 mt-4 flex items-end gap-2">
              <div className="bg-primary-container w-full h-[40%] rounded-t-sm opacity-20"></div>
              <div className="bg-primary-container w-full h-[55%] rounded-t-sm opacity-30"></div>
              <div className="bg-primary-container w-full h-[45%] rounded-t-sm opacity-40"></div>
              <div className="bg-primary-container w-full h-[70%] rounded-t-sm opacity-60"></div>
              <div className="bg-primary-container w-full h-[65%] rounded-t-sm opacity-80"></div>
              <div className="bg-primary w-full h-[95%] rounded-t-sm"></div>
              <div className="bg-primary-container w-full h-[85%] rounded-t-sm opacity-90"></div>
            </div>
          </div>
          {/* Decorative Gradient */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary-fixed/20 to-transparent rounded-full -mr-32 -mt-32 blur-3xl"></div>
        </div>
        
        {/* ESG Metrics Card */}
        <div className="md:col-span-4 space-y-8">
          <div className="bg-primary text-white p-8 rounded-xl shadow-lg relative overflow-hidden h-full flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase opacity-60">Environmental Impact</span>
              <h3 className="text-2xl font-manrope font-medium mt-2">ESG Footprint</h3>
            </div>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-end mb-2">
                  <span className="text-sm font-medium opacity-80">CO2 Saved</span>
                  <span className="text-xl font-bold">12.4 Tons</span>
                </div>
                <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-secondary-fixed w-[78%]"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-end mb-2">
                  <span className="text-sm font-medium opacity-80">Water Saved</span>
                  <span className="text-xl font-bold">4.2M Liters</span>
                </div>
                <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-secondary-fixed w-[62%]"></div>
                </div>
              </div>
            </div>
            <div className="pt-6 border-t border-white/10 mt-4">
              <p className="text-xs opacity-60">Equivalent to planting 640 trees this quarter.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Waste Composition & Distribution */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Donut Chart Composition */}
        <div className="lg:col-span-1 bg-surface-container-lowest p-8 rounded-xl shadow-sm">
          <h3 className="text-title-sm font-bold mb-8">Waste Composition</h3>
          <div className="relative flex justify-center items-center py-8">
            {/* Custom CSS-only Donut Simulation */}
            <div className="w-48 h-48 rounded-full border-[16px] border-surface-container flex items-center justify-center relative">
              <div className="absolute inset-0 rounded-full border-[16px] border-primary border-t-transparent border-r-transparent rotate-45"></div>
              <div className="absolute inset-0 rounded-full border-[16px] border-secondary-fixed border-l-transparent border-b-transparent -rotate-12"></div>
              <div className="text-center">
                <span className="block text-2xl font-bold font-manrope">842kg</span>
                <span className="text-[10px] uppercase font-bold text-slate-400">Total Lost</span>
              </div>
            </div>
          </div>
          <div className="mt-8 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-primary"></div>
                <span className="text-sm font-medium">Produce</span>
              </div>
              <span className="text-sm font-bold">42%</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-secondary-fixed"></div>
                <span className="text-sm font-medium">Dairy</span>
              </div>
              <span className="text-sm font-bold">31%</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-surface-container-highest"></div>
                <span className="text-sm font-medium">Meat & Poultry</span>
              </div>
              <span className="text-sm font-bold">27%</span>
            </div>
          </div>
        </div>
        
        {/* Redistribution Strategy */}
        <div className="lg:col-span-2 bg-surface-container-lowest p-8 rounded-xl shadow-sm flex flex-col">
          <div className="flex justify-between items-center mb-10">
            <h3 className="text-title-sm font-bold">Redistribution Efficiency</h3>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-surface-container rounded-full text-[10px] font-bold">WEEKLY</span>
              <span className="px-3 py-1 border border-outline-variant rounded-full text-[10px] font-bold">MONTHLY</span>
            </div>
          </div>
          <div className="flex-grow space-y-8">
            <div className="flex items-start gap-6 group">
              <div className="p-4 bg-tertiary-fixed rounded-lg group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-on-tertiary-fixed-variant">volunteer_activism</span>
              </div>
              <div className="flex-grow">
                <div className="flex justify-between mb-1">
                  <p className="font-bold text-sm">NGO Donations</p>
                  <p className="text-sm text-secondary font-bold">642 units</p>
                </div>
                <p className="text-xs text-on-surface-variant mb-3">Targeted to local food banks via automated dispatch.</p>
                <div className="w-full h-1 bg-surface-container rounded-full">
                  <div className="h-full bg-tertiary-fixed-dim w-[85%] rounded-full"></div>
                </div>
              </div>
            </div>
            <div className="flex items-start gap-6 group">
              <div className="p-4 bg-secondary-container rounded-lg group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-on-secondary-container">sell</span>
              </div>
              <div className="flex-grow">
                <div className="flex justify-between mb-1">
                  <p className="font-bold text-sm">Dynamic Markdown</p>
                  <p className="text-sm text-secondary font-bold">1,204 units</p>
                </div>
                <p className="text-xs text-on-surface-variant mb-3">Price adjustments based on real-time expiry forecasting.</p>
                <div className="w-full h-1 bg-surface-container rounded-full">
                  <div className="h-full bg-secondary-fixed-dim w-[92%] rounded-full"></div>
                </div>
              </div>
            </div>
            <div className="flex items-start gap-6 group">
              <div className="p-4 bg-primary-fixed rounded-lg group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-on-primary-fixed-variant">local_shipping</span>
              </div>
              <div className="flex-grow">
                <div className="flex justify-between mb-1">
                  <p className="font-bold text-sm">Intra-Store Transfer</p>
                  <p className="text-sm text-secondary font-bold">218 units</p>
                </div>
                <p className="text-xs text-on-surface-variant mb-3">Redistributing stock to high-demand local branches.</p>
                <div className="w-full h-1 bg-surface-container rounded-full">
                  <div className="h-full bg-primary-fixed-dim w-[45%] rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Table / Editorial List */}
      <section className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden">
        <div className="p-8 border-b border-surface-container">
          <h3 className="text-title-sm font-bold">Critical Stock Analysis</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-surface-container-low text-[10px] font-bold uppercase tracking-widest text-outline">
                <th className="px-8 py-4">SKU Content</th>
                <th className="px-8 py-4">Waste Risk</th>
                <th className="px-8 py-4">Forecasted Loss</th>
                <th className="px-8 py-4">AI Recommendation</th>
                <th className="px-8 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="text-sm divide-y divide-surface-container">
              <tr className="hover:bg-surface-container-low/50 transition-colors">
                <td className="px-8 py-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded bg-surface-container-high flex items-center justify-center">
                      <span className="material-symbols-outlined text-outline">egg</span>
                    </div>
                    <div>
                      <p className="font-bold text-on-surface">Organic Grade-A Eggs</p>
                      <p className="text-xs text-on-surface-variant">Batch #77421</p>
                    </div>
                  </div>
                </td>
                <td className="px-8 py-6">
                  <span className="px-3 py-1 bg-error-container text-on-error-container text-[10px] font-bold rounded-full">CRITICAL</span>
                </td>
                <td className="px-8 py-6 font-manrope font-bold">$1,240.00</td>
                <td className="px-8 py-6 text-on-surface-variant">Apply 40% Markdown immediately</td>
                <td className="px-8 py-6 text-right">
                  <button className="text-primary hover:underline font-bold text-xs">Execute Strategy</button>
                </td>
              </tr>
              <tr className="hover:bg-surface-container-low/50 transition-colors">
                <td className="px-8 py-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded bg-surface-container-high flex items-center justify-center">
                      <span className="material-symbols-outlined text-outline">nutrition</span>
                    </div>
                    <div>
                      <p className="font-bold text-on-surface">Artisan Sourdough</p>
                      <p className="text-xs text-on-surface-variant">Batch #90212</p>
                    </div>
                  </div>
                </td>
                <td className="px-8 py-6">
                  <span className="px-3 py-1 bg-tertiary-fixed text-on-tertiary-fixed-variant text-[10px] font-bold rounded-full">ELEVATED</span>
                </td>
                <td className="px-8 py-6 font-manrope font-bold">$412.50</td>
                <td className="px-8 py-6 text-on-surface-variant">Donate to NGO: Bread for All</td>
                <td className="px-8 py-6 text-right">
                  <button className="text-primary hover:underline font-bold text-xs">Execute Strategy</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}
