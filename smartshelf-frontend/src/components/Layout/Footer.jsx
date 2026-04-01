import React from 'react'

export default function Footer() {
  return (
    <footer className="w-full py-12 px-8 bg-white dark:bg-slate-950 tonal-shift border-t border-slate-100 dark:border-slate-800">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto">
        <p className="font-inter text-xs tracking-wide opacity-70 text-slate-500">© 2024 SmartShelf. The Intelligent Curated Ledger.</p>
        <div className="flex gap-8 mt-6 md:mt-0">
          <a className="font-inter text-xs tracking-wide opacity-70 text-slate-500 hover:text-slate-900 transition-opacity" href="#">Privacy Policy</a>
          <a className="font-inter text-xs tracking-wide opacity-70 text-slate-500 hover:text-slate-900 transition-opacity" href="#">Terms of Service</a>
          <a className="font-inter text-xs tracking-wide opacity-70 text-slate-500 hover:text-slate-900 transition-opacity" href="#">NGO Portal</a>
          <a className="font-inter text-xs tracking-wide opacity-70 text-slate-500 hover:text-slate-900 transition-opacity" href="#">Support Center</a>
        </div>
      </div>
    </footer>
  )
}
