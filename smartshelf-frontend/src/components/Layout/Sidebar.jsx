import React from 'react'

export default function Sidebar({ activeTab, setActiveTab }) {
  const tabs = [
    { name: 'Dashboard', icon: 'dashboard_customize' },
    { name: 'Inventory', icon: 'inventory_2' },
    { name: 'Planner', icon: 'auto_awesome_motion' },
    { name: 'Redistribution', icon: 'volunteer_activism' },
    { name: 'Reports', icon: 'analytics' },
    { name: 'Settings', icon: 'settings' },
  ];

  return (
    <aside className="hidden lg:flex flex-col h-screen w-72 left-0 top-0 fixed bg-slate-50 dark:bg-slate-900 p-6 pt-24 space-y-2 z-40 border-r border-slate-200 dark:border-slate-800">
      <div className="mb-8 px-4">
        <h2 className="font-manrope font-bold text-lg uppercase tracking-widest text-slate-900">Inventory Ledger</h2>
        <p className="text-xs text-slate-500 font-manrope">AI Executive View</p>
      </div>
      <nav className="flex-1 space-y-1">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.name;
          return (
            <button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                isActive
                  ? 'text-slate-900 dark:text-white bg-white dark:bg-slate-800 font-bold shadow-sm'
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 font-medium'
              }`}
            >
              <span className="material-symbols-outlined" data-icon={tab.icon}>{tab.icon}</span>
              <span className="font-manrope text-sm">{tab.name}</span>
            </button>
          );
        })}
      </nav>
      <button className="bg-primary text-on-primary rounded-full py-4 px-6 flex items-center justify-center gap-2 font-manrope font-bold text-sm scale-98-on-click duration-200">
        <span className="material-symbols-outlined">add</span>
        New Optimization
      </button>
    </aside>
  )
}
