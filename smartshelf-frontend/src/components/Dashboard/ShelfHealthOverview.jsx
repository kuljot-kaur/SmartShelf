import React, { useState, useEffect } from 'react'
import { getInventory } from '../../api'

export default function ShelfHealthOverview({ refreshKey }) {
  const [stats, setStats] = useState({ integrity: 0, expiringSoon: 0, expired: 0 });

  useEffect(() => {
    getInventory().then(res => {
      const items = res.data.data;
      const total = items.length;
      const expiring = items.filter(i => i.status === 'expiring_soon').length;
      const expired = items.filter(i => i.status === 'expired').length;
      const safe = items.filter(i => i.status === 'safe').length;
      const integrity = total > 0 ? Math.round((safe / total) * 100) : 0;
      setStats({ integrity, expiringSoon: expiring, expired });
    }).catch(console.error);
  }, [refreshKey]);

  return (
    <section className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
      <div className="md:col-span-2 relative overflow-hidden bg-primary-container p-8 rounded-xl flex flex-col justify-between text-white">
        <div className="relative z-10">
          <p className="text-label-sm font-semibold uppercase tracking-widest opacity-60 mb-2">Shelf Integrity</p>
          <h3 className="font-headline font-light text-[3.5rem] leading-none mb-4">{stats.integrity}%</h3>
          <p className="text-body-md opacity-80 max-w-[200px]">Freshness Index across all active SKUs.</p>
        </div>
        <div className="absolute right-0 bottom-0 w-1/2 h-full opacity-20 pointer-events-none">
          <img className="object-cover h-full w-full" data-alt="close-up of fresh green organic vegetables" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCM09_Z0ERFVyrOxHFxJQ4dJRvKBERTtJaiUtUn_-2HJwTwzxbNoqYe5VK_HGbijqMmBjzJXxU7KTFr342xy6isgabCZoT7ufVNRrKBaZujuzJo9sdXrFpJlPpNTDk0URP9HGfA9GIhfFhN6NE-4wIhwrFKJ9QMhEknk1poq5P1ZV72PkPHcvbGc3G1cK0DQZt5hiwqPBgPxlsMTgLE_wltQB_o-B_3O9RqnwT_1Ilm_CSGdREkO9r5ChKTbVG5h-shVOxjSlE6-oEC" alt="" />
        </div>
      </div>
      <div className="bg-surface-container-lowest p-8 rounded-xl flex flex-col justify-center">
        <span className="material-symbols-outlined text-tertiary-fixed-dim text-4xl mb-4">event_busy</span>
        <p className="font-headline text-3xl font-medium">{stats.expiringSoon}</p>
        <p className="text-on-surface-variant text-sm">Items Expiring Soon</p>
      </div>
      <div className="bg-surface-container-lowest p-8 rounded-xl flex flex-col justify-center">
        <span className="material-symbols-outlined text-error text-4xl mb-4">production_quantity_limits</span>
        <p className="font-headline text-3xl font-medium">{stats.expired}</p>
        <p className="text-on-surface-variant text-sm">Expired Items</p>
      </div>
    </section>
  )
}
