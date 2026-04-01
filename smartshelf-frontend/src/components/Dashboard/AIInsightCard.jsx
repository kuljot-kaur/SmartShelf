import React from 'react'

export default function AIInsightCard() {
  return (
    <div className="relative bg-gradient-to-br from-primary to-primary-container p-8 rounded-xl text-white overflow-hidden group">
      <div className="relative z-10">
        <span className="material-symbols-outlined text-secondary-fixed mb-4" data-weight="fill">auto_awesome</span>
        <h4 className="font-headline text-lg font-medium mb-2">Shelf Optimization</h4>
        <p className="text-sm opacity-70 leading-relaxed">Based on current sales velocity, redistributing 3kg of Ribeye to the Downtown NGO center will claim a $45 tax credit.</p>
        <button className="mt-6 text-sm font-bold border-b border-white/30 hover:border-white transition-all inline-flex items-center gap-1">
          Review AI Strategy
          <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
        </button>
      </div>
      <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1574333084133-a4a926a7bca9?auto=format&fit=crop&q=80&w=800')] bg-cover mix-blend-overlay" data-alt="abstract blurred warehouse shelving with soft blue and white highlights"></div>
    </div>
  )
}
