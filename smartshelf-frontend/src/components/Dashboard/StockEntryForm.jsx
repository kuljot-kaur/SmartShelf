import React, { useState } from 'react'
import { addItem } from '../../api'

export default function StockEntryForm({ onItemAdded }) {
  const [form, setForm] = useState({ name: '', qty: '', expiry_date: '', category: 'Dairy', unit: 'kg', price: '' });
  const [msg, setMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg('');
    try {
      const res = await addItem(form);
      if (res.data.success) {
        setMsg('✓ Item committed to ledger!');
        setForm({ name: '', qty: '', expiry_date: '', category: 'Dairy', unit: 'kg', price: '' });
        if (onItemAdded) onItemAdded();
      }
    } catch (err) {
      setMsg('✗ Error: ' + (err.response?.data?.error || err.message));
    }
  };

  return (
    <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm border border-outline-variant/10">
      <h3 className="font-headline font-bold text-lg mb-6">Stock Entry</h3>
      <form className="space-y-5" onSubmit={handleSubmit}>
        <div className="space-y-1.5">
          <label className="text-label-sm font-bold text-on-surface-variant">Item Name</label>
          <input className="w-full bg-surface-container-high border-none rounded-lg py-3 px-4 focus:ring-2 focus:ring-primary/10 transition-shadow" placeholder="e.g. Paneer" type="text" value={form.name} onChange={e => setForm({...form, name: e.target.value})} required />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-label-sm font-bold text-on-surface-variant">Quantity</label>
            <input className="w-full bg-surface-container-high border-none rounded-lg py-3 px-4 focus:ring-2 focus:ring-primary/10" placeholder="0" type="number" value={form.qty} onChange={e => setForm({...form, qty: e.target.value})} required />
          </div>
          <div className="space-y-1.5">
            <label className="text-label-sm font-bold text-on-surface-variant">Expiry Date</label>
            <input className="w-full bg-surface-container-high border-none rounded-lg py-3 px-4 focus:ring-2 focus:ring-primary/10" type="date" value={form.expiry_date} onChange={e => setForm({...form, expiry_date: e.target.value})} required />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-label-sm font-bold text-on-surface-variant">Category</label>
            <select className="w-full bg-surface-container-high border-none rounded-lg py-3 px-4 focus:ring-2 focus:ring-primary/10 text-on-surface-variant" value={form.category} onChange={e => setForm({...form, category: e.target.value})}>
              <option>Dairy</option>
              <option>Vegetables</option>
              <option>Bakery</option>
              <option>Grains</option>
              <option>Beverages</option>
              <option>Snacks</option>
            </select>
          </div>
          <div className="space-y-1.5">
            <label className="text-label-sm font-bold text-on-surface-variant">Price (₹)</label>
            <input className="w-full bg-surface-container-high border-none rounded-lg py-3 px-4 focus:ring-2 focus:ring-primary/10" placeholder="0" type="number" value={form.price} onChange={e => setForm({...form, price: e.target.value})} required />
          </div>
        </div>
        {msg && <p className={`text-sm font-bold ${msg.startsWith('✓') ? 'text-secondary' : 'text-error'}`}>{msg}</p>}
        <button className="w-full bg-primary text-on-primary font-bold py-4 rounded-full mt-4 flex items-center justify-center gap-2 hover:opacity-90 transition-opacity" type="submit">
          <span className="material-symbols-outlined">save</span>
          Commit to Ledger
        </button>
      </form>
    </div>
  )
}
