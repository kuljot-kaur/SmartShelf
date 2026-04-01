import React from 'react'

export default function SettingsView() {
  return (
    <div className="max-w-7xl">
      <header className="mb-16">
        <h1 className="text-display-lg font-headline font-light text-on-surface mb-2 tracking-tight" style={{ fontSize: '3.5rem' }}>Configuration Hub</h1>
        <p className="text-on-surface-variant font-body max-w-2xl leading-relaxed">Precision-tune the SmartShelf engine. Define threshold sensitivity, partner routing, and ecosystem synchronization parameters.</p>
      </header>
      
      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* 1. AI Calibration Section */}
        <section className="lg:col-span-8 space-y-8">
          <div className="bg-surface-container-lowest p-10 rounded-xl border border-outline-variant/15 shadow-sm">
            <div className="flex items-start justify-between mb-8">
              <div>
                <span className="text-label-sm font-label text-primary uppercase tracking-widest mb-2 block">Core Logic</span>
                <h2 className="text-headline-md font-headline font-medium text-on-surface">AI Calibration</h2>
              </div>
              <span className="material-symbols-outlined text-primary-container p-3 bg-primary-fixed rounded-full">psychology</span>
            </div>
            <div className="space-y-10">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="font-headline font-medium text-on-surface">Discount Sensitivity</label>
                  <span className="text-secondary font-bold text-lg">74%</span>
                </div>
                <div className="h-2 w-full bg-surface-variant rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-secondary to-secondary-fixed-dim rounded-full" style={{ width: '74%' }}></div>
                </div>
                <div className="flex justify-between mt-3 text-xs text-on-surface-variant font-label uppercase tracking-tighter">
                  <span>Conservative (High Margin)</span>
                  <span>Aggressive (Waste Elimination)</span>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-surface-container-low rounded-lg border border-outline-variant/10">
                  <h4 className="text-title-sm font-headline mb-3 flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm">trending_down</span>
                    Flash Sale Trigger
                  </h4>
                  <p className="text-body-md text-on-surface-variant mb-6">Threshold for automatic markdowns on perishables.</p>
                  <select className="w-full bg-surface-container-high border-none rounded-lg text-sm font-medium py-3 px-4 focus:ring-2 focus:ring-primary/20">
                    <option>24 Hours Before Expiry</option>
                    <option defaultValue>12 Hours Before Expiry</option>
                    <option>6 Hours Before Expiry</option>
                  </select>
                </div>
                <div className="p-6 bg-surface-container-low rounded-lg border border-outline-variant/10">
                  <h4 className="text-title-sm font-headline mb-3 flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm">auto_graph</span>
                    Predictive Restock
                  </h4>
                  <p className="text-body-md text-on-surface-variant mb-6">AI confidence score required for auto-ordering.</p>
                  <select className="w-full bg-surface-container-high border-none rounded-lg text-sm font-medium py-3 px-4 focus:ring-2 focus:ring-primary/20">
                    <option>High (95%+ Confidence)</option>
                    <option defaultValue>Standard (85%+ Confidence)</option>
                    <option>Experimental (70%+ Confidence)</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          
          {/* 2. Redistribution Partners Section */}
          <div className="bg-surface-container-lowest p-10 rounded-xl border border-outline-variant/15 shadow-sm">
            <div className="flex items-start justify-between mb-8">
              <div>
                <span className="text-label-sm font-label text-secondary uppercase tracking-widest mb-2 block">ESG Commitment</span>
                <h2 className="text-headline-md font-headline font-medium text-on-surface">Redistribution Partners</h2>
              </div>
              <span className="material-symbols-outlined text-on-secondary-container p-3 bg-secondary-container rounded-full" style={{ fontVariationSettings: "'FILL' 1" }}>volunteer_activism</span>
            </div>
            <div className="space-y-4">
              {/* Partner Row 1 */}
              <div className="flex items-center justify-between p-4 bg-white hover:bg-surface transition-colors rounded-xl border border-outline-variant/10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-surface-container overflow-hidden">
                    <img className="w-full h-full object-cover" data-alt="close up of colorful fresh organic vegetables in a wooden crate to represent food bank donation" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBs5e0LQr0zCYD_ASRx619_vz9SVAMcjWBJUF_QTvF0E_kFg-YTIMjTlUUWN_okdHtJNaWutMBm5qsH6oS9uDMaWjoIEWr8iImi9mOWVhcDgoSnAkRoAFM7brX6CdpkbH6lUPBrMbnwhiF6SSaO6mIYqt7xJoQaBN_iH7lqtS8ekF-3EjF7-Er9IT3axd6q1aPM46NKUpA7EWiUT8hO5-riuToyMXbzzObytGAf-4Ez5EpWJOc_aUyYIQ3A3-8yPT4MSry5qczp0AmZ"/>
                  </div>
                  <div>
                    <h5 className="text-title-sm font-headline text-on-surface">Second Harvest Alliance</h5>
                    <p className="text-xs text-on-surface-variant">Regional Logistics Focus • <span className="text-secondary font-bold">Primary</span></p>
                  </div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input defaultChecked className="sr-only peer" type="checkbox"/>
                  <div className="w-11 h-6 bg-surface-container-high peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-secondary"></div>
                </label>
              </div>
              {/* Partner Row 2 */}
              <div className="flex items-center justify-between p-4 bg-white hover:bg-surface transition-colors rounded-xl border border-outline-variant/10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-surface-container overflow-hidden">
                    <img className="w-full h-full object-cover" data-alt="warm and inviting interior of a community kitchen with steam rising from large soup pots" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC39UyLl-k1Gos9gjmqMltC_ytUYo-QEt_ohUiEttGyQ_PZ_-uGKov3dFc0ZgJx2dYBCB7e7etAc3uw-6qYqP1_wLRPBb7Xy8q2YYiQT7fzHPCUL9tYkHF7gNUviA4jRH-38oe9qCU3AWjcbmWfKzhSWMvY-SMEBJUMOggYdNIXfDN8u2a-NDpb_SVgcj1vu4wFRLweWrusftrzcygXhsotdmihBXoe15hf63ZqNe-z5E0_PvXUqPS2ZRFpEerup70NjpL2cFsrufgH"/>
                  </div>
                  <div>
                    <h5 className="text-title-sm font-headline text-on-surface">Green Plate NGO</h5>
                    <p className="text-xs text-on-surface-variant">Inner-city Meal Programs • Secondary</p>
                  </div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input defaultChecked className="sr-only peer" type="checkbox"/>
                  <div className="w-11 h-6 bg-surface-container-high peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-secondary"></div>
                </label>
              </div>
            </div>
            <button className="mt-8 text-primary font-bold text-sm flex items-center gap-2 hover:translate-x-1 transition-transform">
              Connect New Partner
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>
        </section>
        
        {/* Sidebar Controls */}
        <section className="lg:col-span-4 space-y-8">
          {/* 3. Notification Rules */}
          <div className="bg-surface-container-low p-8 rounded-xl border border-outline-variant/15">
            <div className="flex items-center gap-3 mb-6">
              <span className="material-symbols-outlined text-tertiary-container">notifications_active</span>
              <h3 className="text-title-sm font-headline">Notification Rules</h3>
            </div>
            <div className="space-y-6">
              <div className="space-y-3">
                <div className="flex justify-between items-end">
                  <span className="text-xs font-label uppercase text-on-surface-variant tracking-wide">Expiry Window</span>
                  <span className="text-sm font-bold text-on-surface">48 Hours</span>
                </div>
                <input className="w-full h-1 bg-surface-container-highest rounded-lg appearance-none cursor-pointer accent-primary" type="range"/>
              </div>
              <div className="flex items-center justify-between py-2">
                <span className="text-sm text-on-surface font-medium">Critical Waste Alerts</span>
                <div className="w-8 h-4 bg-secondary rounded-full flex items-center justify-end px-1"><div className="w-2 h-2 bg-white rounded-full"></div></div>
              </div>
              <div className="flex items-center justify-between py-2">
                <span className="text-sm text-on-surface font-medium">Weekly Executive Report</span>
                <div className="w-8 h-4 bg-secondary rounded-full flex items-center justify-end px-1"><div className="w-2 h-2 bg-white rounded-full"></div></div>
              </div>
              <div className="flex items-center justify-between py-2">
                <span className="text-sm text-on-surface-variant">Beta: Anomaly Detection</span>
                <div className="w-8 h-4 bg-surface-variant rounded-full flex items-center justify-start px-1"><div className="w-2 h-2 bg-white rounded-full"></div></div>
              </div>
            </div>
          </div>
          
          {/* 4. Integration Hub */}
          <div className="bg-primary text-on-primary p-8 rounded-xl relative overflow-hidden group">
            <div className="relative z-10">
              <h3 className="text-title-sm font-headline mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary-fixed">sync</span>
                Integration Hub
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/10 hover:bg-white/10 transition-colors cursor-pointer">
                  <div className="w-8 h-8 rounded bg-white/10 flex items-center justify-center">
                    <span className="material-symbols-outlined text-sm">point_of_sale</span>
                  </div>
                  <div className="flex-1">
                    <div className="text-xs font-bold">Square POS</div>
                    <div className="text-[10px] opacity-60">Connected • Real-time</div>
                  </div>
                  <span className="material-symbols-outlined text-secondary-fixed text-sm">check_circle</span>
                </div>
                <div className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/10 hover:bg-white/10 transition-colors cursor-pointer">
                  <div className="w-8 h-8 rounded bg-white/10 flex items-center justify-center">
                    <span className="material-symbols-outlined text-sm">shopping_bag</span>
                  </div>
                  <div className="flex-1">
                    <div className="text-xs font-bold">Shopify E-comm</div>
                    <div className="text-[10px] opacity-60">Syncing every 15m</div>
                  </div>
                  <span className="material-symbols-outlined text-secondary-fixed text-sm">check_circle</span>
                </div>
                <button className="w-full py-3 text-xs font-bold border border-white/20 rounded-lg hover:bg-white/5 transition-colors">
                  Add Custom API Endpoint
                </button>
              </div>
            </div>
            {/* Decorative AI Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-container to-slate-900 opacity-50"></div>
          </div>
          
          {/* Active Sessions / User Access */}
          <div className="p-8 bg-surface-container-highest/30 rounded-xl border border-dashed border-outline-variant">
            <h3 className="text-label-sm font-label uppercase tracking-widest text-on-surface-variant mb-6">User Access Control</h3>
            <div className="flex -space-x-3 mb-4">
              <img className="w-8 h-8 rounded-full border-2 border-surface object-cover" data-alt="close-up portrait of a woman with curly hair looking directly at camera with professional lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdbWmn5FOdAzBVVhCXvVnf6phEzzqUuSiB33quSaeXIZcqXlDbytrphSo5BtISipwktXj4pReriT6CG0pdu9WGl-etkUFCgxb5-D0lBf7vQH4kaiLdmuPaPmoFgU8gpq_QuyQbwMUQMGSiy8N_y1PraViqHUUiXtRFpuFbwxBQkQVt5g6HuTEaso1m9qKpP-hiDz-9spV5D0nTJb-4_OYO4nZqxzNX7kgy44u-619CbytcDICq2Ch0twkbYM8acmFopE7-OnxPlY6j"/>
              <img className="w-8 h-8 rounded-full border-2 border-surface object-cover" data-alt="modern businessman with stylish beard and glasses smiling warmly in outdoor natural light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4b2CPhguLS9loe_G95Yxs_AmoaZPkjvH15T0iwEPyBskCNFghzjM7VXd_1dJdl_Rg8eqzze6GXJYjbjP7eMmdYVkn_unep9KxYcmGIHrg20cTYGP5Ty2UJbdVYCx3lodPrLLf7LHQz4jbkQLoKik9LCFKcsqib85zSZRwpY1kLWwb-6nuHnaCUG1fTE5KTmtZ5PcxQ486J8it3fpsUnoFB7K4FHD2XlzC6Hp3WSi4Fktr72Xt7rIp4VZszw2zO0YJRplkw9U71DCW"/>
              <img className="w-8 h-8 rounded-full border-2 border-surface object-cover" data-alt="executive woman in soft morning sunlight with a subtle blurred office background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6Y0YDNEUbWoNT4ws3TwxQCIqzPhmAal9z3TP-YgqwQ06m6wd4-sTO50kymECYpAB5PgN7WH8a7aGh0CAFj3zumoiAfJhKN53nsoYq2zhFcQejKHoG0KCDk658Rp9i8diJ_MeEc4lS5oCX5zeHQhLmqT2jGSA4XmluCyy7pZaYc9GgrtJyOVQHuM8DVVOOZLah9vWNYKcHS7IbKOsCccdop_tuJgzWM5JX0y4wH_l_KK7i_-RNuPNnGwIFiJGJcRVOFNRNUewTNd6S"/>
              <div className="w-8 h-8 rounded-full border-2 border-surface bg-surface-container-high flex items-center justify-center text-[10px] font-bold">+12</div>
            </div>
            <p className="text-xs text-on-surface-variant mb-6">Manage roles and permissions for store-level managers and redistribution liaisons.</p>
            <button className="text-sm font-bold text-primary">Manage Team Assets</button>
          </div>
        </section>
      </div>
      
      {/* Danger Zone */}
      <div className="mt-20 pt-12 border-t border-outline-variant/20">
        <h3 className="text-headline-md font-headline font-medium text-error mb-4">Danger Zone</h3>
        <div className="p-8 bg-error-container/20 rounded-xl border border-error-container flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h5 className="text-title-sm font-headline text-on-error-container">Purge Inventory History</h5>
            <p className="text-sm text-on-surface-variant">Irreversibly delete all AI training data and history for this ledger. This cannot be undone.</p>
          </div>
          <button className="bg-error text-on-error px-6 py-3 rounded-full font-bold text-sm hover:bg-on-error-container transition-colors scale-98-on-click">
            Execute Purge
          </button>
        </div>
      </div>
    </div>
  )
}
