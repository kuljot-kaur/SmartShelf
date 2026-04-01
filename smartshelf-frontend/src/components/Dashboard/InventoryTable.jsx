import React, { useState, useEffect } from 'react'
import { getInventory, deleteItem } from '../../api'

export default function InventoryTable({ refreshKey, onItemDeleted }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getInventory().then(res => setItems(res.data.data)).catch(console.error);
  }, [refreshKey]);

  const handleDelete = async (id) => {
    try {
      await deleteItem(id);
      setItems(prev => prev.filter(i => i.id !== id));
      if (onItemDeleted) onItemDeleted();
    } catch (err) {
      console.error('Delete failed:', err);
    }
  };

  const getStatusBadge = (item) => {
    if (item.status === 'expired') {
      return (
        <button className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-error-container text-on-error-container hover:bg-error hover:text-white transition-all">
          Redistribute Now
          <span className="material-symbols-outlined text-[14px]">local_shipping</span>
        </button>
      );
    }
    if (item.status === 'expiring_soon' && item.discount_pct > 0) {
      return (
        <button className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-tertiary-fixed text-on-tertiary-fixed-variant border border-tertiary-fixed-dim/20 hover:scale-105 transition-transform">
          {item.discount_pct}% Discount
          <span className="material-symbols-outlined text-[14px]">bolt</span>
        </button>
      );
    }
    return (
      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-secondary-container text-on-secondary-container">
        Optimal
      </span>
    );
  };

  const getStockColor = (item) => {
    if (item.status === 'expired') return 'bg-error';
    if (item.status === 'expiring_soon') return 'bg-tertiary-fixed-dim';
    return 'bg-secondary';
  };

  const getStockPct = (item) => {
    // Normalize qty to a percentage (max ~200 for visual)
    return Math.min(Math.round((item.qty / 200) * 100), 100);
  };

  return (
    <div className="xl:col-span-3">
      <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-[0px_12px_32px_rgba(25,28,29,0.04)]">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-surface-container-low border-none">
              <th className="px-8 py-5 text-label-sm font-bold uppercase tracking-wider text-on-surface-variant">Item Name</th>
              <th className="px-6 py-5 text-label-sm font-bold uppercase tracking-wider text-on-surface-variant">Category</th>
              <th className="px-6 py-5 text-label-sm font-bold uppercase tracking-wider text-on-surface-variant">Stock Level</th>
              <th className="px-6 py-5 text-label-sm font-bold uppercase tracking-wider text-on-surface-variant">Expiry Date</th>
              <th className="px-6 py-5 text-label-sm font-bold uppercase tracking-wider text-on-surface-variant text-right">AI Status</th>
              <th className="px-4 py-5 text-label-sm font-bold uppercase tracking-wider text-on-surface-variant text-center w-16"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-outline-variant/10">
            {items.length === 0 && (
              <tr>
                <td colSpan="6" className="px-8 py-12 text-center text-on-surface-variant">Loading inventory data…</td>
              </tr>
            )}
            {items.map((item, idx) => (
              <tr key={item.id || idx} className="hover:bg-surface-container-low/30 transition-colors">
                <td className="px-8 py-6 font-medium text-slate-900">{item.name}</td>
                <td className="px-6 py-6 text-sm text-on-surface-variant">{item.category}</td>
                <td className="px-6 py-6">
                  <div className="flex items-center gap-2">
                    <div className="w-24 h-1.5 bg-surface-variant rounded-full overflow-hidden">
                      <div className={`${getStockColor(item)} h-full`} style={{ width: `${getStockPct(item)}%` }}></div>
                    </div>
                    <span className={`text-xs font-bold ${item.status === 'expired' ? 'text-error' : ''}`}>{item.qty} {item.unit}</span>
                  </div>
                </td>
                <td className={`px-6 py-6 text-sm ${item.status === 'expired' ? 'font-bold text-error' : item.status === 'expiring_soon' ? 'font-bold text-on-tertiary-container' : 'text-on-surface-variant'}`}>
                  {item.expiry_date}
                </td>
                <td className="px-6 py-6 text-right">
                  {getStatusBadge(item)}
                </td>
                <td className="px-4 py-6 text-center">
                  <button onClick={() => handleDelete(item.id)} className="p-1.5 rounded-lg hover:bg-error-container/30 text-on-surface-variant hover:text-error transition-colors" title="Delete item">
                    <span className="material-symbols-outlined text-lg">delete</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
