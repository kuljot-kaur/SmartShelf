import React, { useState } from 'react'

export default function RegistrationView({ onBack, onComplete }) {
  const [step, setStep] = useState(1);

  const getProgressWidthText = () => {
    switch(step) {
      case 1: return { width: 'w-1/4', text: 'Step 1 of 4', percent: '25%' };
      case 2: return { width: 'w-2/4', text: 'Step 2 of 4', percent: '50%' };
      case 3: return { width: 'w-3/4', text: 'Step 3 of 4', percent: '75%' };
      case 4: return { width: 'w-full', text: 'Final Step', percent: '100%' };
      default: return { width: 'w-1/4', text: 'Step 1 of 4', percent: '25%' };
    }
  };

  const { width, text, percent } = getProgressWidthText();

  return (
    <div className="min-h-screen flex flex-col font-body bg-surface text-on-surface selection:bg-secondary-container selection:text-on-secondary-container relative z-0 overflow-hidden">
      
      {/* Background Decorative Element */}
      <div className="fixed -bottom-32 -right-32 w-[600px] h-[600px] bg-secondary-container/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>
      <div className="fixed top-24 -left-24 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[80px] pointer-events-none -z-10"></div>

      {/* TopAppBar */}
      <header className="fixed top-0 left-0 w-full z-50 bg-surface/80 dark:bg-primary/80 backdrop-blur-xl flex justify-between items-center px-12 py-6 border-b border-surface-variant/30">
        <div className="flex items-center gap-4">
          <button onClick={onBack} className="flex items-center justify-center p-2 rounded-full hover:bg-surface-variant/50 transition-colors">
            <span className="material-symbols-outlined text-primary dark:text-white">arrow_back</span>
          </button>
          <div className="text-xl font-extrabold tracking-tighter text-primary dark:text-white font-headline uppercase">
              SmartShelf
          </div>
        </div>
        <div className="flex items-center gap-8">
          <nav className="hidden md:flex gap-8 items-center">
            <span className="text-primary dark:text-white font-bold font-headline tracking-tight hover:opacity-80 transition-opacity cursor-pointer">Registration</span>
          </nav>
          <button className="material-symbols-outlined text-primary dark:text-surface scale-95 active:scale-100 transition-transform hover:opacity-80">help_outline</button>
        </div>
      </header>

      <div className="flex flex-grow pt-24 lg:pt-0 lg:flex min-h-screen">
        {/* Unified SideNavBar */}
        <aside className="fixed left-0 top-0 h-full w-80 bg-surface-container-low dark:bg-[#0a1521] hidden lg:flex flex-col py-10 pt-32 z-40 border-r border-outline-variant/10">
          <div className="px-8 mb-12">
            <h1 className="text-lg font-bold text-primary dark:text-white font-headline mb-1">Registration</h1>
            <p className="font-label text-[10px] uppercase tracking-widest text-slate-500">Onboarding Progress</p>
          </div>
          
          <nav className="flex flex-col gap-2">
            {/* Step 1 */}
            <div className={`flex items-center gap-4 py-4 px-8 cursor-pointer transition-colors duration-200 ${step === 1 ? 'text-primary dark:text-secondary-fixed font-bold border-r-4 border-primary dark:border-secondary-fixed bg-surface-variant/30' : 'text-slate-400 dark:text-slate-600 hover:bg-surface-variant/20'}`} onClick={() => setStep(1)}>
              <span className="material-symbols-outlined">business</span>
              <span className="font-label text-sm uppercase tracking-widest">Business Details</span>
            </div>
            
            {/* Step 2 */}
            <div className={`flex items-center gap-4 py-4 px-8 cursor-pointer transition-colors duration-200 ${step === 2 ? 'text-primary dark:text-secondary-fixed font-bold border-r-4 border-primary dark:border-secondary-fixed bg-surface-variant/30' : 'text-slate-400 dark:text-slate-600 hover:bg-surface-variant/20'}`} onClick={() => setStep(2)}>
              <span className="material-symbols-outlined">account_tree</span>
              <span className="font-label text-sm uppercase tracking-widest">Entity Selection</span>
            </div>
            
            {/* Step 3 */}
            <div className={`flex items-center gap-4 py-4 px-8 cursor-pointer transition-colors duration-200 ${step === 3 ? 'text-primary dark:text-secondary-fixed font-bold border-r-4 border-primary dark:border-secondary-fixed bg-surface-variant/30' : 'text-slate-400 dark:text-slate-600 hover:bg-surface-variant/20'}`} onClick={() => setStep(3)}>
              <span className="material-symbols-outlined">contact_page</span>
              <span className="font-label text-sm uppercase tracking-widest">Contact Info</span>
            </div>
            
            {/* Step 4 */}
            <div className={`flex items-center gap-4 py-4 px-8 cursor-pointer transition-colors duration-200 ${step === 4 ? 'text-primary dark:text-secondary-fixed font-bold border-r-4 border-primary dark:border-secondary-fixed bg-surface-variant/30' : 'text-slate-400 dark:text-slate-600 hover:bg-surface-variant/20'}`} onClick={() => setStep(4)}>
              <span className="material-symbols-outlined" style={{ fontVariationSettings: step === 4 ? "'FILL' 1" : "'FILL' 0" }}>verified_user</span>
              <span className="font-label text-sm uppercase tracking-widest">Verification</span>
            </div>
          </nav>
          
          {/* Progress Bar Container */}
          <div className="mt-auto px-8">
            <div className="p-6 rounded-xl bg-surface-container-high/50 border border-outline-variant/5">
              <div className="flex justify-between items-end mb-2">
                <span className="text-[10px] font-bold uppercase tracking-tighter text-on-surface-variant">Completion</span>
                <span className="text-xl font-headline font-light text-primary">{percent}</span>
              </div>
              <div className="h-1.5 w-full bg-surface-variant rounded-full overflow-hidden">
                <div className={`h-full bg-gradient-to-r from-secondary to-secondary-fixed-dim transition-all duration-500 ease-in-out ${width}`}></div>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content Canvas */}
        <main className="lg:ml-80 flex-grow bg-transparent p-8 md:p-12 lg:p-20 flex flex-col items-center pt-32 lg:pt-24 z-10 w-full overflow-x-hidden">
          
          {/* STEP 1: BUSINESS DETAILS */}
          {step === 1 && (
            <div className="w-full max-w-4xl mx-auto">
              <header className="mb-16 space-y-4">
                <h1 className="font-headline text-4xl md:text-[3.5rem] leading-tight font-light tracking-tight text-primary">Create Your Intelligent Ledger Profile</h1>
                <p className="font-body text-lg text-on-surface-variant max-w-2xl">Join the next generation of India's optimized food supply networks.</p>
              </header>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                <div className="md:col-span-8">
                  <form className="space-y-10" onSubmit={(e) => { e.preventDefault(); setStep(2); }}>
                    <div className="space-y-8">
                      <div className="group">
                        <label className="block font-label text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant mb-3">Legal Business Name</label>
                        <input required className="w-full bg-surface-container-high border-none rounded-xl px-5 py-4 focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-highest transition-all text-on-surface placeholder:text-outline/50 font-body text-sm" placeholder="e.g. Annapurna Supply Chain Solutions" type="text"/>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="group">
                          <label className="block font-label text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant mb-3">GSTIN / Tax ID</label>
                          <input required className="w-full bg-surface-container-high border-none rounded-xl px-5 py-4 focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-highest transition-all text-on-surface placeholder:text-outline/50 font-body text-sm" placeholder="22AAAAA0000A1Z5" type="text"/>
                        </div>
                        <div className="group">
                          <label className="block font-label text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant mb-3">Operating Region</label>
                          <select required className="w-full bg-surface-container-high border-none rounded-xl px-5 py-4 focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-highest transition-all text-on-surface font-body text-sm appearance-none">
                            <option>North India</option>
                            <option>South India</option>
                            <option>West India</option>
                            <option>East India</option>
                            <option>Central India</option>
                            <option>North-East India</option>
                          </select>
                        </div>
                      </div>
                      <div className="group">
                        <label className="block font-label text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant mb-3">Primary Facility Address</label>
                        <textarea required className="w-full bg-surface-container-high border-none rounded-xl px-5 py-4 focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-highest transition-all text-on-surface placeholder:text-outline/50 font-body text-sm resize-none" placeholder="Enter full headquarters address (e.g., MIDC Industrial Area, Mumbai)..." rows="3"></textarea>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between pt-8 border-t border-outline-variant/10">
                      <button className="font-label text-xs font-bold uppercase tracking-widest text-primary hover:opacity-70 transition-opacity" type="button">Save Draft</button>
                      <button className="bg-primary text-on-primary px-10 py-5 rounded-full font-label font-bold text-xs uppercase tracking-widest hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg flex items-center gap-2" type="submit">
                        Continue to Entity Type
                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                      </button>
                    </div>
                  </form>
                </div>
                
                <div className="md:col-span-4 space-y-8">
                  <div className="p-8 bg-surface-container-lowest shadow-[0px_12px_32px_rgba(25,28,29,0.06)] rounded-xl border border-outline-variant/10">
                    <h3 className="font-headline text-lg font-bold mb-6 text-on-surface">Verification Hub</h3>
                    <ul className="space-y-5">
                      <li className="flex items-start gap-4">
                        <span className="material-symbols-outlined text-secondary text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                        <span className="font-body text-sm font-medium text-on-surface-variant">Business structure validated</span>
                      </li>
                      <li className="flex items-start gap-4 opacity-40">
                        <span className="material-symbols-outlined text-outline text-xl">radio_button_unchecked</span>
                        <span className="font-body text-sm text-on-surface-variant">GST/Identity document pending</span>
                      </li>
                      <li className="flex items-start gap-4 opacity-40">
                        <span className="material-symbols-outlined text-outline text-xl">radio_button_unchecked</span>
                        <span className="font-body text-sm text-on-surface-variant">Facility audit required</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="relative overflow-hidden rounded-xl h-56 bg-primary flex items-center justify-center">
                    <img alt="SmartShelf Ecosystem" className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay" data-alt="Modern organic grocery store interior with artisanal bread display and soft warm lighting creating an editorial feel" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHjWjpbz7sf_9ARbXpt3_YMx5xnN5Rj9dDqo6A-8V4sLmwCXfB56L0FsWsbF5Eteh1bUcBnVL35ALbRX-hYzJoxtoZCImoCwMJnBrWRiKVLpU9nJWUacxFiEdxCAvbPuIuQAnOJzi_0uXTx7Pnz3iqDXGhnq7oc6AY-Y25GD-LOUyAtK71VDSaA8WqGhrbtQsZFR_5QL1gY1GWLpc5DxVEULjF0cLXzsqTCSyM0UhYba_VSccs57C2pkpFRQT4Fiu-nEq5I6_8WF_f"/>
                    <div className="relative z-10 text-center px-6">
                      <div className="font-headline text-white text-3xl font-light tracking-tight mb-2">50,000+</div>
                      <div className="font-label text-[10px] font-bold uppercase tracking-[0.2em] text-secondary-fixed">Units Tracked Daily</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: ENTITY SELECTION */}
          {step === 2 && (
            <div className="w-full max-w-5xl mx-auto">
              <div className="mb-16">
                <h2 className="font-headline text-[3.5rem] leading-tight font-light text-primary mb-4 tracking-tight">Define your supply <span className="font-bold">footprint.</span></h2>
                <p className="font-body text-lg text-on-surface-variant max-w-2xl">Select the entity type that best represents your operations. SmartShelf tailors its intelligent forecasting and waste-mitigation tools based on your specific dynamics.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <label className="group cursor-pointer">
                  <input className="sr-only peer" name="entity" type="radio" defaultChecked />
                  <div className="relative h-full flex flex-col p-10 rounded-2xl bg-surface-container-lowest border border-outline-variant/10 transition-all duration-300 peer-checked:ring-2 peer-checked:ring-primary peer-checked:shadow-[0px_12px_32px_rgba(25,28,29,0.08)] hover:shadow-md">
                    <div className="mb-8 w-14 h-14 flex items-center justify-center rounded-full bg-surface-container group-hover:bg-secondary-container/50 transition-colors">
                      <span className="material-symbols-outlined text-primary text-2xl">store</span>
                    </div>
                    <h3 className="font-headline text-xl font-medium text-primary mb-3">Independent Supermarket</h3>
                    <p className="font-body text-sm text-on-surface-variant leading-relaxed mb-8">Direct-to-consumer retail focusing on fresh produce shelf-life optimization and inventory precision.</p>
                    <div className="mt-auto flex items-center text-[10px] font-label tracking-widest text-secondary font-bold uppercase">
                      Optimized for Freshness
                    </div>
                  </div>
                </label>

                <label className="group cursor-pointer">
                  <input className="sr-only peer" name="entity" type="radio" />
                  <div className="relative h-full flex flex-col p-10 rounded-2xl bg-surface-container-lowest border border-outline-variant/10 transition-all duration-300 peer-checked:ring-2 peer-checked:ring-primary peer-checked:shadow-[0px_12px_32px_rgba(25,28,29,0.08)] hover:shadow-md">
                    <div className="mb-8 w-14 h-14 flex items-center justify-center rounded-full bg-surface-container group-hover:bg-secondary-container/50 transition-colors">
                      <span className="material-symbols-outlined text-primary text-2xl">restaurant_menu</span>
                    </div>
                    <h3 className="font-headline text-xl font-medium text-primary mb-3">Restaurant Group</h3>
                    <p className="font-body text-sm text-on-surface-variant leading-relaxed mb-8">Multi-unit operations requiring centralized procurement intelligence and menu-item yield analysis.</p>
                    <div className="mt-auto flex items-center text-[10px] font-label tracking-widest text-secondary font-bold uppercase">
                      Procurement Sync
                    </div>
                  </div>
                </label>

                <label className="group cursor-pointer">
                  <input className="sr-only peer" name="entity" type="radio" />
                  <div className="relative h-full flex flex-col p-10 rounded-2xl bg-surface-container-lowest border border-outline-variant/10 transition-all duration-300 peer-checked:ring-2 peer-checked:ring-primary peer-checked:shadow-[0px_12px_32px_rgba(25,28,29,0.08)] hover:shadow-md">
                    <div className="mb-8 w-14 h-14 flex items-center justify-center rounded-full bg-surface-container group-hover:bg-secondary-container/50 transition-colors">
                      <span className="material-symbols-outlined text-primary text-2xl">delivery_dining</span>
                    </div>
                    <h3 className="font-headline text-xl font-medium text-primary mb-3">Cloud Kitchen</h3>
                    <p className="font-body text-sm text-on-surface-variant leading-relaxed mb-8">High-velocity, delivery-only models needing rapid stock turnover alerts and dark-store inventory logic.</p>
                    <div className="mt-auto flex items-center text-[10px] font-label tracking-widest text-secondary font-bold uppercase">
                      Velocity Tracking
                    </div>
                  </div>
                </label>

                <label className="group cursor-pointer">
                  <input className="sr-only peer" name="entity" type="radio" />
                  <div className="relative h-full flex flex-col p-10 rounded-2xl bg-surface-container-lowest border border-outline-variant/10 transition-all duration-300 peer-checked:ring-2 peer-checked:ring-primary peer-checked:shadow-[0px_12px_32px_rgba(25,28,29,0.08)] hover:shadow-md">
                    <div className="mb-8 w-14 h-14 flex items-center justify-center rounded-full bg-surface-container group-hover:bg-secondary-container/50 transition-colors">
                      <span className="material-symbols-outlined text-primary text-2xl">volunteer_activism</span>
                    </div>
                    <h3 className="font-headline text-xl font-medium text-primary mb-3">NGO / Shelter</h3>
                    <p className="font-body text-sm text-on-surface-variant leading-relaxed mb-8">Community-driven distribution points focused on donation management and targeted local redistribution.</p>
                    <div className="mt-auto flex items-center text-[10px] font-label tracking-widest text-secondary font-bold uppercase">
                      Impact Focused
                    </div>
                  </div>
                </label>
              </div>

              <div className="mt-16 bg-primary-container rounded-2xl overflow-hidden relative min-h-[280px] flex flex-col md:flex-row shadow-[0px_24px_48px_rgba(5,17,30,0.12)] border border-primary-fixed-dim/20">
                <div className="flex-1 p-12 z-10 flex flex-col justify-center">
                  <div className="mb-6">
                    <span className="inline-block px-3 py-1 bg-secondary-container text-on-secondary-container rounded-full text-[9px] font-bold tracking-[0.2em] uppercase">AI Insight</span>
                  </div>
                  <h4 className="font-headline text-2xl text-white mb-4 font-medium">Smart Distribution Logic</h4>
                  <p className="text-on-primary-container font-body leading-relaxed max-w-md text-sm">Your choice influences how the <strong>Veridian Algorithm</strong> maps local redistribution routes. This connects excess supply directly to high-need organizations in your district.</p>
                  <div className="mt-8">
                    <button className="px-6 py-2.5 bg-white text-primary rounded-full font-label text-xs font-bold tracking-widest hover:bg-secondary-container transition-colors uppercase">View Methodology</button>
                  </div>
                </div>
                <div className="flex-1 relative overflow-hidden h-64 md:h-auto">
                  <img className="absolute inset-0 w-full h-full object-cover grayscale opacity-30 mix-blend-overlay" alt="Abstract Logistics Node" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSCFSOEz1fg2n19n4RqOEV3cFh_aoQDgEeb08hZ7ZS5GFDQNerWB9AOueBeG1-Ek3mpOYt4n_enSVOjFTvHHgmAbHvROPfJ6jvuWVrVzmghm4C9M6O0aK5efZ0Ge0D1i2kwvdAoUdavMNK-JIUx2hh4tPewng_YxamSL33k-IBDXiECnjqPeCEZEdXZ495GhjAxBpWbAhu8lyNYHjxIDMB636bmdjcugqgwaMkrLIyg-M1GSfJ7p2rZ5JAa5eJ2DFt5SwJvi5ogZuU" />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-container via-primary-container/80 to-transparent"></div>
                </div>
              </div>

              <div className="mt-16 flex justify-between items-center border-t border-outline-variant/10 pt-8">
                <button className="px-6 py-4 text-primary font-label text-xs font-bold uppercase tracking-widest flex items-center gap-2 hover:bg-surface-variant/30 rounded-full transition-colors" onClick={() => setStep(1)}>
                  <span className="material-symbols-outlined text-lg">arrow_back</span>
                  Back to Details
                </button>
                <button className="px-10 py-5 bg-primary text-on-primary rounded-full font-label text-xs font-bold uppercase tracking-widest flex items-center gap-3 hover:scale-[1.02] active:scale-[0.98] shadow-lg transition-all" onClick={() => setStep(3)}>
                  Continue to Contact Info
                  <span className="material-symbols-outlined text-lg">arrow_forward</span>
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: CONTACT INFO */}
          {step === 3 && (
            <div className="w-full max-w-5xl mx-auto relative relative">
              <div className="mb-16">
                <h1 className="text-[3.5rem] font-headline font-light leading-tight tracking-tight text-primary mb-4">Stakeholder <span className="font-medium">Matrix.</span></h1>
                <p className="text-on-surface-variant font-body text-lg max-w-2xl">Define the human intelligence behind your supply chain. We require primary administrative contacts and a dedicated lead for redistribution operations.</p>
              </div>
              <form className="space-y-20 relative z-10" onSubmit={(e) => { e.preventDefault(); setStep(4); }}>
                {/* Section: Primary Contact */}
                <section>
                  <div className="flex items-baseline gap-4 mb-10">
                    <h2 className="text-[1.75rem] font-headline font-medium text-primary">Primary Administrator</h2>
                    <div className="h-[1px] flex-grow bg-outline-variant opacity-20"></div>
                    <span className="text-[0.6875rem] font-label font-bold uppercase tracking-[0.2em] text-secondary">Required</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-10">
                    <div className="space-y-3">
                      <label className="text-[0.6875rem] font-label font-bold uppercase tracking-[0.2em] text-on-surface-variant ml-1">Full Legal Name</label>
                      <input required className="w-full bg-surface-container-high border-none rounded-xl py-4 px-6 focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-highest transition-all duration-200 text-on-surface font-body text-sm placeholder:text-outline-variant" placeholder="e.g. Arjun Sharma" type="text"/>
                    </div>
                    <div className="space-y-3">
                      <label className="text-[0.6875rem] font-label font-bold uppercase tracking-[0.2em] text-on-surface-variant ml-1">Corporate Role</label>
                      <input required className="w-full bg-surface-container-high border-none rounded-xl py-4 px-6 focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-highest transition-all duration-200 text-on-surface font-body text-sm placeholder:text-outline-variant" placeholder="e.g. Director of Operations" type="text"/>
                    </div>
                    <div className="space-y-3">
                      <label className="text-[0.6875rem] font-label font-bold uppercase tracking-[0.2em] text-on-surface-variant ml-1">Direct Work Email</label>
                      <input required className="w-full bg-surface-container-high border-none rounded-xl py-4 px-6 focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-highest transition-all duration-200 text-on-surface font-body text-sm placeholder:text-outline-variant" placeholder="a.sharma@enterprise.in" type="email"/>
                    </div>
                    <div className="space-y-3">
                      <label className="text-[0.6875rem] font-label font-bold uppercase tracking-[0.2em] text-on-surface-variant ml-1">Phone Number</label>
                      <input required className="w-full bg-surface-container-high border-none rounded-xl py-4 px-6 focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-highest transition-all duration-200 text-on-surface font-body text-sm placeholder:text-outline-variant" placeholder="+91 98765 43210" type="tel"/>
                    </div>
                  </div>
                </section>
                
                {/* Section: Logistics Liaison */}
                <section className="bg-surface-container-low p-12 rounded-2xl border border-outline-variant/10 shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-2 h-full bg-secondary"></div>
                  <div className="flex items-center gap-6 mb-12 relative z-10">
                    <div className="w-16 h-16 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container shadow-sm">
                      <span className="material-symbols-outlined text-3xl">local_shipping</span>
                    </div>
                    <div>
                      <h2 className="text-[1.75rem] font-headline font-medium text-primary">Logistics Liaison</h2>
                      <p className="text-body text-sm text-on-surface-variant mt-1.5 max-w-lg leading-relaxed">Responsible for managing real-time redistribution pickups and resolving local waste-score alerts.</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 mb-10 p-5 bg-surface-container-lowest rounded-xl border border-outline-variant/20 shadow-sm">
                    <input className="w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary/20 cursor-pointer" type="checkbox"/>
                    <span className="text-sm font-bold font-body text-on-surface cursor-pointer select-none">Same as Primary Administrator</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-10 relative z-10">
                    <div className="space-y-3">
                      <label className="text-[0.6875rem] font-label font-bold uppercase tracking-[0.2em] text-on-surface-variant ml-1">Liaison Name</label>
                      <input className="w-full bg-surface-container-highest border-none rounded-xl py-4 px-6 focus:ring-2 focus:ring-primary/20 transition-all duration-200 text-sm font-body" placeholder="e.g. Neha Gupta" type="text"/>
                    </div>
                    <div className="space-y-3">
                      <label className="text-[0.6875rem] font-label font-bold uppercase tracking-[0.2em] text-on-surface-variant ml-1">Contact Email</label>
                      <input className="w-full bg-surface-container-highest border-none rounded-xl py-4 px-6 focus:ring-2 focus:ring-primary/20 transition-all duration-200 text-sm font-body" placeholder="n.gupta@enterprise.in" type="email"/>
                    </div>
                  </div>
                </section>
                
                {/* Form Actions */}
                <div className="flex justify-between items-center pt-8 border-t border-outline-variant/10">
                  <button className="px-6 py-4 text-primary font-label font-bold text-xs uppercase tracking-widest flex items-center gap-2 hover:bg-surface-variant/30 rounded-full transition-colors" type="button" onClick={() => setStep(2)}>
                    <span className="material-symbols-outlined text-lg">arrow_back</span>
                    Return to Entity Selection
                  </button>
                  <button className="bg-primary text-on-primary font-label font-bold text-xs uppercase tracking-widest px-10 py-5 rounded-full flex items-center gap-3 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg" type="submit">
                    Continue to Verification
                    <span className="material-symbols-outlined text-lg">arrow_forward</span>
                  </button>
                </div>
              </form>

              {/* Decorative Accent */}
              <div className="absolute right-[-100px] top-[40%] -translate-y-1/2 w-32 h-96 opacity-[0.03] pointer-events-none overflow-hidden select-none z-0 mix-blend-multiply">
                <div className="text-[12rem] font-headline font-extrabold text-primary leading-none rotate-90 origin-center whitespace-nowrap">
                  DATA INTELLIGENCE
                </div>
              </div>

              {/* Footer Stats (Floating Insight) */}
              <div className="hidden xl:block absolute top-10 -right-20 bg-surface/80 backdrop-blur-2xl p-6 rounded-2xl border border-outline-variant/20 shadow-2xl max-w-[280px]">
                <div className="flex items-center gap-3 mb-4">
                  <span className="material-symbols-outlined text-secondary bg-secondary-container text-on-secondary-container p-1 rounded-full text-sm">bolt</span>
                  <span className="text-[0.6875rem] font-label font-bold uppercase tracking-widest text-primary">AI Readiness Tip</span>
                </div>
                <p className="text-xs text-on-surface-variant leading-relaxed font-body">
                  SmartShelf uses these contacts to automate pickup scheduling across India. Ensure the Liaison has mobile app access for real-time notifications.
                </p>
              </div>
            </div>
          )}

          {/* STEP 4: VERIFICATION */}
          {step === 4 && (
            <div className="w-full max-w-5xl mx-auto">
              <header className="mb-16">
                <h1 className="font-headline text-[3.5rem] leading-tight font-light text-primary tracking-tight mb-4">
                  Final <span className="font-medium">Verification.</span>
                </h1>
                <p className="text-on-surface-variant font-body text-lg max-w-2xl leading-relaxed">
                  Secure your account by uploading the necessary credentials and reviewing your information for accuracy before deployment.
                </p>
              </header>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                {/* Left: Review Summary */}
                <div className="col-span-1 lg:col-span-7 space-y-12">
                  <section>
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="font-headline text-2xl font-medium text-primary">Information Review</h3>
                      <button className="text-primary text-[10px] bg-primary/5 px-4 py-1.5 rounded-full font-bold uppercase tracking-widest hover:bg-primary/10 transition-colors" onClick={() => setStep(1)}>Edit Details</button>
                    </div>
                    <div className="grid grid-cols-1 gap-px bg-outline-variant/20 rounded-2xl overflow-hidden border border-outline-variant/10 shadow-sm">
                      <div className="bg-surface-container-lowest p-6 flex justify-between items-center transition-colors hover:bg-surface-container-low/50">
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/70 mb-1">Business Name</p>
                          <p className="font-body font-semibold text-primary">Annapurna Supply Chain Solutions</p>
                        </div>
                        <span className="material-symbols-outlined text-secondary text-2xl">check_circle</span>
                      </div>
                      <div className="bg-surface-container-lowest p-6 flex justify-between items-center transition-colors hover:bg-surface-container-low/50">
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/70 mb-1">Entity Type</p>
                          <p className="font-body font-semibold text-primary">Regional Distribution Hub</p>
                        </div>
                        <span className="material-symbols-outlined text-secondary text-2xl">check_circle</span>
                      </div>
                      <div className="bg-surface-container-lowest p-6 flex justify-between items-center transition-colors hover:bg-surface-container-low/50">
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/70 mb-1">Primary Contact</p>
                          <p className="font-body font-semibold text-primary">Arjun Sharma • a.sharma@annapurnasupply.in</p>
                        </div>
                        <span className="material-symbols-outlined text-secondary text-2xl">check_circle</span>
                      </div>
                      <div className="bg-surface-container-lowest p-6 flex justify-between items-center transition-colors hover:bg-surface-container-low/50">
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/70 mb-1">Operating Location</p>
                          <p className="font-body font-semibold text-primary">Mumbai Metropolitan Region, MH</p>
                        </div>
                        <span className="material-symbols-outlined text-secondary text-2xl">check_circle</span>
                      </div>
                    </div>
                  </section>
                  
                  <section>
                    <h3 className="font-headline text-2xl font-medium text-primary mb-6">Compliance Checklist</h3>
                    <div className="space-y-4">
                      <label className="flex items-center p-6 bg-surface-container-lowest rounded-2xl cursor-pointer group hover:bg-surface-container-low transition-colors border border-outline-variant/10 shadow-sm">
                        <input className="w-5 h-5 rounded border-outline-variant text-primary focus:ring-0 mr-5" type="checkbox"/>
                        <div className="flex-1">
                          <p className="font-body font-bold text-sm text-primary">Data Protection Agreement (DPDPA)</p>
                          <p className="text-xs text-on-surface-variant mt-1.5 leading-relaxed">I agree to the automated inventory tracking protocols under Indian data privacy laws.</p>
                        </div>
                      </label>
                      <label className="flex items-center p-6 bg-surface-container-lowest rounded-2xl cursor-pointer group hover:bg-surface-container-low transition-colors border border-outline-variant/10 shadow-sm">
                        <input className="w-5 h-5 rounded border-outline-variant text-primary focus:ring-0 mr-5" type="checkbox"/>
                        <div className="flex-1">
                          <p className="font-body font-bold text-sm text-primary">Platform Terms of Service</p>
                          <p className="text-xs text-on-surface-variant mt-1.5 leading-relaxed">Confirming acceptance of SmartShelf's automated redistribution metrics framework.</p>
                        </div>
                      </label>
                    </div>
                  </section>
                </div>

                {/* Right: Document Uploads & Actions */}
                <div className="col-span-1 lg:col-span-5">
                  <div className="lg:sticky lg:top-32 space-y-8">
                    <div className="p-8 bg-surface-container-lowest rounded-3xl shadow-[0px_16px_48px_rgba(5,17,30,0.06)] border border-outline-variant/10">
                      <h3 className="font-headline text-2xl font-medium text-primary mb-8 px-2">Credential Vault</h3>
                      
                      {/* Upload 1 */}
                      <div className="mb-6">
                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant mb-3 px-2">GST / Incorporation Cert</p>
                        <div className="relative group mx-2">
                          <div className="flex flex-col items-center justify-center p-10 border-2 border-dashed border-outline-variant/40 rounded-2xl bg-surface-container/30 group-hover:bg-surface-container-high transition-colors text-center cursor-pointer">
                            <span className="material-symbols-outlined text-[40px] text-primary/40 mb-4 group-hover:text-primary transition-colors">upload_file</span>
                            <p className="text-xs font-bold font-body text-primary">Drop PDF or Scan here</p>
                            <p className="text-[10px] text-on-surface-variant mt-2 font-body bg-white/50 px-3 py-1 rounded-full">Maximum size: 10MB</p>
                          </div>
                          <input className="absolute inset-0 opacity-0 cursor-pointer w-full h-full" type="file" title=""/>
                        </div>
                      </div>
                      
                      {/* Upload 2 */}
                      <div className="mb-10">
                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant mb-3 px-2">FSSAI License</p>
                        <div className="relative group mx-2">
                          <div className="flex flex-col items-center justify-center p-10 border-2 border-dashed border-outline-variant/40 rounded-2xl bg-surface-container/30 group-hover:bg-surface-container-high transition-colors text-center cursor-pointer">
                            <span className="material-symbols-outlined text-[40px] text-primary/40 mb-4 group-hover:text-primary transition-colors">verified</span>
                            <p className="text-xs font-bold font-body text-primary">Drop Food Safety Certificate</p>
                            <p className="text-[10px] text-on-surface-variant mt-2 font-body bg-white/50 px-3 py-1 rounded-full">Mandatory for network inclusion</p>
                          </div>
                          <input className="absolute inset-0 opacity-0 cursor-pointer w-full h-full" type="file" title=""/>
                        </div>
                      </div>
                      
                      <button className="w-full bg-primary text-on-primary py-5 rounded-full font-label text-xs font-bold tracking-[0.2em] uppercase hover:bg-opacity-90 transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3 shadow-lg" onClick={onComplete}>
                        Complete Registration
                        <span className="material-symbols-outlined text-lg">arrow_forward</span>
                      </button>
                      <p className="text-center text-[10px] text-on-surface-variant mt-6 uppercase tracking-widest leading-relaxed font-body font-semibold opacity-70 px-4">
                        By completing, you authorize SmartShelf to verify credentials via our AI pipeline.
                      </p>
                    </div>

                    {/* Trust Signal Card */}
                    <div className="p-6 bg-secondary-container/20 rounded-2xl flex gap-5 items-start border border-secondary/10">
                      <span className="material-symbols-outlined text-secondary text-2xl bg-white p-2 rounded-full shadow-sm" style={{ fontVariationSettings: "'FILL' 1" }}>security</span>
                      <div>
                        <p className="font-body font-bold text-sm text-on-surface">Encrypted Verification</p>
                        <p className="text-xs text-on-surface-variant leading-relaxed mt-1.5 opacity-80">Credentials are secured by 256-bit AES encryption. Verified immediately by SmartShelf regulatory algorithms.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Final AI Insight / Decorative Element */}
              <div className="mt-20 relative rounded-3xl overflow-hidden p-12 text-on-primary shadow-2xl border border-primary-fixed-dim/10">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-[#0f1f31]" style={{ zIndex: -1 }}></div>
                <img alt="Abstract digital network" className="absolute inset-0 w-full h-full object-cover opacity-[0.15] mix-blend-overlay" data-alt="abstract high-tech network nodes glowing in deep blue" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2jg53zqV6VW5WiIRTAW4rcHhCXCF087ZWyEv64ABFa7VAV6em9bFZvIQ6apNAGJAjhCFPhxNnqHjm-mfjTJey9O8NMzlkFHCB1kMiXiNFBoIKLyNDLDNU1Y_KDIPtqdSQCQw7A7UW75_bUs6xbv_PMguks4grnaPf4-TpJTq5o6zVV7yY6YMe9tBz66ILiRiRkjg4WewB6WE1yUF7Nhm-FvvJWOwCBa5tEPT6uGjJV_zdqzebzIbvcguijSP0imRCwKLYB2w85deU"/>
                <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  <div>
                    <span className="inline-block bg-secondary/10 text-[10px] font-bold uppercase tracking-[0.2em] text-secondary-fixed px-3 py-1 rounded-full border border-secondary/20">System Integrity</span>
                    <h2 className="font-headline text-3xl md:text-4xl font-light mt-6 mb-6 leading-tight">Our automated ledger <span className="font-medium">starts here.</span></h2>
                    <p className="font-body text-sm opacity-80 leading-relaxed mb-10 max-w-md">
                      Once verified, Annapurna Supply Chain Solutions will join a dynamic network of over 4,500 supply points across India, contributing to a massive reduction in organic waste.
                    </p>
                    <div className="flex gap-12">
                      <div>
                        <p className="font-headline text-3xl font-light mb-1 text-white">4.5k</p>
                        <p className="text-[10px] font-bold uppercase tracking-widest opacity-60 text-primary-fixed">Nodes active</p>
                      </div>
                      <div className="w-[1px] h-12 bg-white/10"></div>
                      <div>
                        <p className="font-headline text-3xl font-light mb-1 text-secondary-fixed">99.9%</p>
                        <p className="text-[10px] font-bold uppercase tracking-widest opacity-60 text-primary-fixed">Audit accuracy</p>
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:flex justify-end pr-8">
                    <div className="w-56 h-56 rounded-full border border-secondary/20 flex items-center justify-center p-6 bg-white/[0.02]">
                      <div className="w-full h-full rounded-full border-[6px] border-secondary/30 flex items-center justify-center animate-[pulse_4s_ease-in-out_infinite] bg-secondary/10 backdrop-blur-md">
                        <span className="material-symbols-outlined text-[80px] text-secondary-fixed drop-shadow-[0_0_15px_rgba(96,252,198,0.5)]" style={{ fontVariationSettings: "'FILL' 1" }}>monitoring</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          <footer className="w-full py-8 mt-16 border-t border-outline-variant/10">
            <div className="flex flex-col md:flex-row justify-between items-center w-full mx-auto gap-4 max-w-5xl px-4">
              <div className="font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant font-bold">© 2024 SmartShelf Intelligence India.</div>
              <div className="flex gap-8">
                <a className="font-label text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant hover:text-primary transition-colors" href="#">Privacy Policy</a>
                <a className="font-label text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant hover:text-primary transition-colors" href="#">Terms of Service</a>
                <a className="font-label text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant hover:text-primary transition-colors" href="#">Support</a>
              </div>
            </div>
          </footer>
        </main>
      </div>
    </div>
  )
}
