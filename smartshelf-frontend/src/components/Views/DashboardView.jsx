import React, { useState, useEffect } from 'react'
import { getWasteScore, getExpiryAlerts } from '../../api'

export default function DashboardView() {
  const [wasteData, setWasteData] = useState(null);
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    getWasteScore().then(res => setWasteData(res.data.data)).catch(console.error);
    getExpiryAlerts().then(res => setAlerts(res.data.data)).catch(console.error);
  }, []);

  const efficiency = wasteData ? Math.round(100 - wasteData.waste_score) : 0;
  const dashOffset = wasteData ? 628 - (628 * efficiency / 100) : 628;

  return (
    <div className="max-w-7xl mx-auto space-y-10">
      {/* Hero Header & Quick Actions */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="font-headline text-3xl font-medium text-primary mb-1">Executive Overview</h1>
          <p className="text-on-surface-variant font-body">Sustainable operations and waste intelligence tracking.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <button className="flex items-center gap-2 px-5 py-2.5 bg-surface-container-lowest text-primary text-sm font-semibold rounded-full hover:bg-surface-container-high transition-colors">
            <span className="material-symbols-outlined text-lg">add</span> Add Inventory
          </button>
          <button className="flex items-center gap-2 px-5 py-2.5 bg-surface-container-lowest text-primary text-sm font-semibold rounded-full hover:bg-surface-container-high transition-colors">
            <span className="material-symbols-outlined text-lg">percent</span> Review Discounts
          </button>
          <button className="flex items-center gap-2 px-6 py-2.5 bg-primary text-on-primary text-sm font-semibold rounded-full hover:opacity-90 transition-opacity shadow-lg shadow-primary/10">
            Start Redistribution
          </button>
        </div>
      </div>
      {/* Dashboard Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
        {/* Waste Score Gauge */}
        <div className="xl:col-span-4 bg-surface-container-lowest rounded-xl p-8 flex flex-col items-center justify-center text-center space-y-6">
          <div className="relative w-56 h-56 flex items-center justify-center">
            <svg className="w-full h-full transform -rotate-90">
              <circle className="text-surface-container-high" cx="112" cy="112" fill="transparent" r="100" stroke="currentColor" strokeWidth="8"></circle>
              <circle className="text-secondary" cx="112" cy="112" fill="transparent" r="100" stroke="currentColor" strokeDasharray="628" strokeDashoffset={dashOffset} strokeLinecap="round" strokeWidth="12" style={{ transition: 'stroke-dashoffset 1s ease-in-out' }}></circle>
            </svg>
            <div className="absolute flex flex-col items-center">
              <span className="text-6xl font-headline font-light tracking-tighter text-primary">{efficiency}%</span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant">Efficiency</span>
            </div>
          </div>
          <div className="space-y-2">
            <h3 className="font-headline font-medium text-lg text-primary">Executive Waste Score</h3>
            <p className="text-sm text-on-surface-variant max-w-[240px] leading-relaxed">
              {wasteData
                ? `${wasteData.expired_items} of ${wasteData.total_items} items expired. ${wasteData.safe_items} items are safe.`
                : 'Loading waste intelligence data…'}
            </p>
          </div>
          <div className="w-full pt-4 border-t border-outline-variant/15 flex justify-between px-2">
            <div className="text-center">
              <p className="text-[10px] uppercase font-bold text-outline">Total</p>
              <p className="font-headline font-semibold text-primary">{wasteData?.total_items ?? '—'}</p>
            </div>
            <div className="text-center">
              <p className="text-[10px] uppercase font-bold text-outline">Expired</p>
              <p className="font-headline font-semibold text-error">{wasteData?.expired_items ?? '—'}</p>
            </div>
            <div className="text-center">
              <p className="text-[10px] uppercase font-bold text-outline">Safe</p>
              <p className="font-headline font-semibold text-secondary">{wasteData?.safe_items ?? '—'}</p>
            </div>
          </div>
        </div>
        {/* Impact Highlights */}
        <div className="xl:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-3 bg-surface-container-lowest rounded-xl p-8">
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-headline font-medium text-lg text-primary">Waste & Efficiency Trends</h3>
              <div className="flex gap-4">
                <div className="flex items-center gap-2 text-xs font-semibold">
                  <span className="w-3 h-3 rounded-full bg-secondary"></span> Sales
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold">
                  <span className="w-3 h-3 rounded-full bg-primary-fixed-dim"></span> Waste
                </div>
              </div>
            </div>
            {/* Mockup Line Chart */}
            <div className="h-48 w-full flex items-end justify-between gap-1 relative overflow-hidden">
              <div className="absolute inset-0 flex flex-col justify-between py-1 opacity-50">
                <div className="border-t border-outline-variant/10 w-full"></div>
                <div className="border-t border-outline-variant/10 w-full"></div>
                <div className="border-t border-outline-variant/10 w-full"></div>
              </div>
              {[['40%','75%'],['35%','82%'],['55%','70%'],['25%','90%'],['30%','85%'],['20%','95%'],['45%','80%']].map(([waste,sales], i) => (
                <div key={i} className="flex-1 bg-surface-container flex flex-col justify-end group cursor-pointer h-full mx-1 rounded-t-sm">
                  <div className="w-full bg-primary-fixed-dim rounded-t-sm transition-all" style={{ height: waste }}></div>
                  <div className="w-full bg-secondary rounded-t-sm -mt-4 transition-all" style={{ height: sales }}></div>
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-4 px-2">
              {['Mon','Tue','Wed','Thu','Fri','Sat','Sun'].map(d => (
                <span key={d} className="text-[10px] font-bold text-outline uppercase tracking-widest">{d}</span>
              ))}
            </div>
          </div>
          <div className="bg-primary p-6 rounded-xl flex flex-col justify-between text-on-primary min-h-[160px]">
            <span className="material-symbols-outlined text-secondary-fixed text-3xl">payments</span>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest opacity-60 mb-1">Total Items</p>
              <h4 className="text-3xl font-headline font-light">{wasteData?.total_items ?? '—'}</h4>
            </div>
          </div>
          <div className="bg-surface-container-lowest p-6 rounded-xl flex flex-col justify-between border border-secondary/10 min-h-[160px]">
            <span className="material-symbols-outlined text-secondary text-3xl">eco</span>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-1">Safe Items</p>
              <h4 className="text-3xl font-headline font-light text-primary">{wasteData?.safe_items ?? '—'}</h4>
            </div>
          </div>
          <div className="bg-surface-container-lowest p-6 rounded-xl flex flex-col justify-between border border-primary/5 min-h-[160px]">
            <span className="material-symbols-outlined text-tertiary-fixed-dim text-3xl">co2</span>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-1">Waste Score</p>
              <h4 className="text-3xl font-headline font-light text-primary">{wasteData ? `${wasteData.waste_score}%` : '—'}</h4>
            </div>
          </div>
        </div>
        {/* Top Alerts — Driven by /expiry-alerts */}
        <div className="xl:col-span-12">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-headline font-medium text-lg text-primary">Top Intelligent Alerts</h3>
            <span className="text-sm font-semibold text-secondary">{alerts.length} Active Alerts</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {alerts.length === 0 && (
              <p className="text-on-surface-variant col-span-3 text-sm">No urgent alerts — all items are within safe shelf-life.  🎉</p>
            )}
            {alerts.slice(0, 6).map((alert, idx) => {
              const isExpired = alert.days_left < 0;
              const isUrgent = alert.days_left <= 1;
              const borderColor = isExpired ? 'border-error' : isUrgent ? 'border-tertiary-fixed' : 'border-secondary';
              const bgIcon = isExpired ? 'bg-error-container/20' : isUrgent ? 'bg-tertiary-fixed/20' : 'bg-secondary-container/20';
              const iconColor = isExpired ? 'text-on-error-container' : isUrgent ? 'text-on-tertiary-container' : 'text-on-secondary-container';
              const icon = isExpired ? 'error' : isUrgent ? 'warning' : 'volunteer_activism';
              const label = isExpired ? 'Expired' : `Expires in ${alert.days_left}d`;

              return (
                <div key={idx} className={`bg-surface-container-lowest p-6 rounded-xl border-l-4 ${borderColor} shadow-sm hover:shadow-md transition-shadow`}>
                  <div className="flex justify-between items-start mb-4">
                    <div className={`${bgIcon} p-2 rounded-lg`}>
                      <span className={`material-symbols-outlined ${iconColor}`}>{icon}</span>
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 bg-surface-container-high rounded-full uppercase tracking-tighter">{label}</span>
                  </div>
                  <h4 className="font-headline font-bold text-primary mb-1">{alert.qty} units of {alert.name}</h4>
                  <p className="text-sm text-on-surface-variant mb-5">
                    {isExpired ? 'Item expired. Consider redistribution to local NGO partners.' : `Expiry: ${alert.expiry_date}. Apply discount or schedule redistribution.`}
                  </p>
                  <div className="flex items-center gap-3">
                    <button className={`flex-1 py-2 ${isExpired ? 'bg-error text-on-error' : 'bg-primary text-on-primary'} text-xs font-bold rounded-lg`}>
                      {isExpired ? 'Redistribute Now' : 'Apply Discount'}
                    </button>
                    <button className="px-3 py-2 bg-surface-container-high text-primary rounded-lg">
                      <span className="material-symbols-outlined text-sm">more_horiz</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
