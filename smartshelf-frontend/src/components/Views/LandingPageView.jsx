import React from 'react'

export default function LandingPageView({ onLogin, onRequestAccess }) {
  return (
    <div className="bg-surface text-on-surface selection:bg-secondary-fixed selection:text-on-secondary-fixed min-h-screen font-body">
      {/* TopNavBar Implementation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-50/80 dark:bg-slate-950/80 backdrop-blur-xl">
        <div className="flex justify-between items-center px-10 py-6 max-w-screen-2xl mx-auto">
          <div className="text-xl font-light tracking-tight text-slate-900 dark:text-slate-50">SmartShelf</div>

          <div className="flex items-center gap-6">
            <button className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-50 transition-all duration-200 active:opacity-80 active:scale-[0.99] font-label text-[0.6875rem] uppercase tracking-wider" onClick={onLogin}>Login</button>
            <button className="bg-primary text-on-primary px-6 py-2 rounded-full font-label text-[0.6875rem] uppercase tracking-widest transition-all duration-200 hover:opacity-90 active:scale-[0.99]" onClick={onRequestAccess}>Sign Up</button>
          </div>
        </div>
      </nav>

      {/* Main Content Canvas */}
      <main className="min-h-screen pt-32 pb-20 px-6 flex flex-col items-center justify-center relative overflow-hidden">
        {/* Background Aesthetic Elements */}
        <div className="absolute top-0 right-0 w-[50vw] h-[512px] bg-secondary-fixed/5 blur-[120px] rounded-full -z-10 translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[40vw] h-[409px] bg-primary/5 blur-[100px] rounded-full -z-10 -translate-x-1/4 translate-y-1/4"></div>
        
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          {/* Hero Messaging */}
          <div className="md:col-span-7 space-y-8 pr-0 md:pr-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container font-label text-[0.6875rem] uppercase tracking-widest">Enterprise Intelligence</span>
            <h1 className="text-display-lg leading-[1.1] font-light text-on-surface text-5xl md:text-7xl">
              The Curated Ledger <br/>
              <span className="font-medium text-primary">for Modern Supply.</span>
            </h1>
            <p className="text-on-surface-variant text-lg max-w-lg leading-relaxed font-body">
              Access the SmartShelf Inventory Ledger to monitor health, predict waste, and synchronize global logistics with editorial precision.
            </p>

          </div>
          
          {/* Auth Card Component */}
          <div className="md:col-span-5 relative">
            <div className="bg-surface-container-lowest p-10 md:p-12 rounded-xl shadow-[0px_12px_32px_rgba(25,28,29,0.04)] border border-outline-variant/10 relative z-10">
              <div className="mb-10 text-center md:text-left">
                <h2 className="text-2xl font-headline font-medium text-on-surface mb-2">Welcome Back</h2>
                <p className="text-on-surface-variant font-body text-sm">Secure access to your intelligent shelf metrics.</p>
              </div>
              
              <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); onLogin(); }}>
                <div className="space-y-1.5">
                  <label className="font-label text-[0.6875rem] uppercase tracking-wider text-on-surface ml-1">Work Email</label>
                  <div className="relative group">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm" style={{ fontVariationSettings: "'opsz' 20" }}>mail</span>
                    <input className="w-full pl-11 pr-4 py-3.5 bg-surface-container-high rounded-lg border-none focus:ring-2 focus:ring-primary/10 transition-all font-body text-sm placeholder:text-outline" placeholder="name@company.com" type="email" />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center ml-1">
                    <label className="font-label text-[0.6875rem] uppercase tracking-wider text-on-surface">Security Key</label>
                    <a className="font-label text-[0.6875rem] uppercase tracking-wider text-secondary hover:text-on-secondary-container transition-colors" href="#">Forgot?</a>
                  </div>
                  <div className="relative group">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm" style={{ fontVariationSettings: "'opsz' 20" }}>lock</span>
                    <input className="w-full pl-11 pr-4 py-3.5 bg-surface-container-high rounded-lg border-none focus:ring-2 focus:ring-primary/10 transition-all font-body text-sm placeholder:text-outline" placeholder="••••••••" type="password" />
                  </div>
                </div>
                <div className="flex items-center gap-3 pt-2">
                  <input className="w-4 h-4 rounded border-outline-variant text-primary focus:ring-primary/20" id="remember" type="checkbox" />
                  <label className="text-xs text-on-surface-variant font-body" htmlFor="remember">Keep me logged in for 30 days</label>
                </div>
                
                <button type="submit" className="w-full bg-primary text-on-primary py-4 rounded-full font-label text-[0.75rem] uppercase tracking-widest transition-all duration-300 hover:bg-primary-container active:scale-[0.98] mt-4 flex items-center justify-center gap-2">
                  Authorize Access
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </form>
              
              <div className="mt-10 pt-8 border-t border-outline-variant/10 flex flex-col gap-4">
                <button className="w-full flex items-center justify-center gap-3 py-3.5 bg-surface-container-low rounded-full border border-outline-variant/20 hover:bg-surface-container-high transition-all text-sm font-body text-on-surface" onClick={onLogin}>
                  <img alt="Google" className="w-5 h-5" data-alt="clean minimal google logo on transparent background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQZPkwe5_taOuiOTqQSgAZBpzni2CcSSeHsk2hYbrbGi4Mfa4HbvgNzW66Gxs20dIGZ8DS6fckpH2Y8Z927IxWOQ2CPlXnp2pGQxDiPdJteoWECbmPjAVOnWrjZJWxko9ywsd90gFG-Slo4y-v-D2ImxTk8uHc3BIOQbXYM5r0FTbFhLadWOKrfOYrCFr1QLKDjdkOfI0P7dy7ZgCd_7UIEQPSEBCj6zlQe260wwpVf-HFOEYcBhDwSPzLUg-KQSMFcNdriqA7g0rc" />
                  Continue with Enterprise SSO
                </button>
              </div>
              <p className="mt-8 text-center text-xs text-on-surface-variant font-body">
                Don't have an account? <button className="text-secondary font-semibold hover:underline decoration-2 underline-offset-4" onClick={onRequestAccess}>Request Access</button>
              </p>
            </div>
            {/* Decorative Layering */}
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-surface-container-low -z-10 rounded-xl"></div>
          </div>
        </div>
        

      </main>

      {/* Footer Implementation */}
      <footer className="w-full border-t border-slate-200/10 bg-slate-100 dark:bg-slate-900">
        <div className="flex flex-col md:flex-row justify-between items-center px-10 py-12 gap-8 max-w-screen-2xl mx-auto">
          <div className="flex flex-col gap-2">
            <div className="text-lg font-light text-slate-900 dark:text-slate-50">SmartShelf</div>
            <p className="text-slate-500 dark:text-slate-400 font-body text-[0.875rem]">© 2024 SmartShelf. The Intelligent Curated Ledger.</p>
          </div>
          <div className="flex gap-10">
            <a className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 transition-all duration-200 underline-offset-4 hover:underline font-label text-[0.6875rem] uppercase tracking-wider" href="#">Privacy Policy</a>
            <a className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 transition-all duration-200 underline-offset-4 hover:underline font-label text-[0.6875rem] uppercase tracking-wider" href="#">Terms of Service</a>
            <a className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 transition-all duration-200 underline-offset-4 hover:underline font-label text-[0.6875rem] uppercase tracking-wider" href="#">Security</a>
            <a className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 transition-all duration-200 underline-offset-4 hover:underline font-label text-[0.6875rem] uppercase tracking-wider" href="#">Status</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
