import React from 'react'

export default function Header() {
  return (
    <header className="flex items-center justify-between px-8 py-4 w-full fixed top-0 z-50 bg-white/60 dark:bg-slate-950/60 backdrop-blur-xl">
      <div className="flex items-center gap-8">
        <span className="text-xl font-light tracking-tighter text-slate-900 dark:text-slate-50 font-headline">SmartShelf</span>
        <nav className="hidden md:flex items-center gap-6 text-sm font-manrope tracking-tight">
          <a className="text-slate-900 dark:text-white font-bold border-b-2 border-slate-900 dark:border-white" href="#">Inventory</a>
        </nav>
      </div>
      <div className="flex items-center gap-4">
        <div className="relative hidden sm:block">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
          <input className="bg-surface-container-high border-none rounded-full py-2 pl-10 pr-4 text-xs w-64 focus:ring-2 focus:ring-primary/20" placeholder="Quick find item..." type="text"/>
        </div>
        <button className="p-2 hover:bg-slate-100/50 rounded-full transition-colors material-symbols-outlined text-slate-900">notifications_active</button>
        <button className="p-2 hover:bg-slate-100/50 rounded-full transition-colors material-symbols-outlined text-slate-900">settings</button>
        <button className="p-2 hover:bg-slate-100/50 rounded-full transition-colors material-symbols-outlined text-slate-900">account_circle</button>
      </div>
    </header>
  )
}
