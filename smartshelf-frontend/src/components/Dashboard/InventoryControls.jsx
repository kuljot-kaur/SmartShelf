import React from 'react'

export default function InventoryControls() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
      <div className="flex items-center gap-4 bg-surface-container-low p-1 rounded-full">
        <button className="bg-surface-container-lowest text-primary px-6 py-2 rounded-full text-sm font-bold shadow-sm">All Inventory</button>
        <button className="text-on-surface-variant px-6 py-2 rounded-full text-sm font-medium hover:bg-white/50 transition-colors">Near Expiry</button>
        <button className="text-on-surface-variant px-6 py-2 rounded-full text-sm font-medium hover:bg-white/50 transition-colors">Out of Stock</button>
        <button className="text-on-surface-variant px-6 py-2 rounded-full text-sm font-medium hover:bg-white/50 transition-colors">High Demand</button>
      </div>
      <div className="flex items-center gap-4 bg-surface-container-lowest px-6 py-3 rounded-full shadow-sm border border-outline-variant/10">
        <span className="text-sm font-medium text-on-surface-variant">Auto-apply AI suggested discounts</span>
        <label className="relative inline-flex items-center cursor-pointer">
          <input defaultChecked className="sr-only peer" type="checkbox" value=""/>
          <div className="w-11 h-6 bg-surface-container-highest rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-secondary"></div>
        </label>
      </div>
    </div>
  )
}
