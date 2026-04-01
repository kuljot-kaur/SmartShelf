import React from 'react'

export default function RedistributionView() {
  return (
    <>
      {/* Hero Editorial Section */}
      <section className="mb-12">
        <div className="max-w-4xl">
          <span className="inline-block px-3 py-1 bg-secondary-container text-on-secondary-container rounded-full text-[10px] font-bold uppercase tracking-widest mb-4">Zero-Waste Mission</span>
          <h1 className="font-headline text-[3.5rem] leading-tight font-light text-primary mb-6">Transforming food systems into <span className="font-extrabold italic">zero-waste</span> ecosystems.</h1>
          <p className="font-body text-on-surface-variant max-w-2xl leading-relaxed">Our AI redistribution engine ensures that every unsold item finds its way to a table, prioritizing community impact over industrial waste.</p>
        </div>
      </section>
      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Impact Ledger (Bento Large) */}
        <div className="md:col-span-8 bg-surface-container-lowest rounded-xl p-8 flex flex-col justify-between relative overflow-hidden">
          <div className="z-10">
            <h3 className="font-label text-label-sm text-outline-variant mb-8 uppercase tracking-widest">IMPACT LEDGER • CURRENT MONTH</h3>
            <div className="flex items-baseline gap-4">
              <span className="font-headline text-6xl lg:text-8xl font-light text-primary tracking-tighter">1,248</span>
              <span className="font-headline text-2xl font-medium text-secondary">Meals Provided</span>
            </div>
          </div>
          <div className="mt-12 flex flex-wrap gap-12 z-10">
            <div>
              <p className="font-label text-label-sm text-outline-variant uppercase">CO2 Offset</p>
              <p className="font-headline text-2xl font-bold">2.4 Tons</p>
            </div>
            <div>
              <p className="font-label text-label-sm text-outline-variant uppercase">Total NGO Partners</p>
              <p className="font-headline text-2xl font-bold">14 Active</p>
            </div>
            <div>
              <p className="font-label text-label-sm text-outline-variant uppercase">Community Savings</p>
              <p className="font-headline text-2xl font-bold">$4,820</p>
            </div>
          </div>
          {/* Subtle Texture */}
          <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-secondary-container/10 to-transparent pointer-events-none"></div>
        </div>
        {/* Logistics & Pickup Scheduler */}
        <div className="md:col-span-4 bg-primary text-on-primary rounded-xl p-8 flex flex-col">
          <div className="flex justify-between items-start mb-8">
            <h3 className="font-label text-label-sm text-primary-fixed-dim uppercase tracking-widest">Active Pickups</h3>
            <span className="material-symbols-outlined text-secondary-fixed animate-pulse" data-icon="radio_button_checked">radio_button_checked</span>
          </div>
          <div className="space-y-6 flex-grow">
            <div className="flex gap-4">
              <div className="h-10 w-10 rounded-full bg-primary-container flex items-center justify-center">
                <span className="material-symbols-outlined text-secondary-fixed" data-icon="local_shipping">local_shipping</span>
              </div>
              <div>
                <p className="font-headline text-sm font-bold">Food Bank Van</p>
                <p className="text-xs text-primary-fixed-dim opacity-70">Arriving in 18 mins</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="h-10 w-10 rounded-full bg-primary-container flex items-center justify-center">
                <span className="material-symbols-outlined text-secondary-fixed" data-icon="schedule">schedule</span>
              </div>
              <div>
                <p className="font-headline text-sm font-bold">City Shelter #4</p>
                <p className="text-xs text-primary-fixed-dim opacity-70">Scheduled for 4:30 PM</p>
              </div>
            </div>
          </div>
          <button className="mt-8 w-full py-4 bg-secondary text-on-secondary rounded-xl font-bold text-xs uppercase tracking-widest hover:brightness-110 transition-all">
            Coordinate Next
          </button>
        </div>
        {/* Donation Queue */}
        <div className="md:col-span-7 bg-surface-container-low rounded-xl p-8">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-headline text-xl font-medium">Donation Queue</h3>
            <span className="font-label text-label-sm text-outline uppercase tracking-wider">Ready for Transfer</span>
          </div>
          <div className="space-y-3">
            <div className="bg-surface-container-lowest p-4 rounded-lg flex items-center justify-between">
              <div className="flex items-center gap-4">
                <img className="w-12 h-12 rounded-lg object-cover" data-alt="close up of fresh green organic kale and spinach in a produce bin" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDthj6mTPAkjZtqZGXY6IuzwxQw29zmP9QS_PwQq71QnjbOIj-5IzQ6jstUe0reYfMEneWlATVII5j1pRfPYMKGeaGgSpevaicCjrwS5DSayRLo2_BMYs7qBbZj3DG7324BOrXVokArCJGJZrS9jfN9Dc688TYwtxDLgnlxvvnFYNSDKAdi-5uz79K7hUwBCijky4egjUe2PsPDxdhinynjt2ABd-TX9GRasYXWAZI9AIwOo-kbZBAxg_yXqLJVNKPnzqG8HHmMrQ1F" />
                <div>
                  <p className="font-bold text-sm">Organic Leafy Greens</p>
                  <p className="text-xs text-on-surface-variant">14 Units • Expiring in 6h</p>
                </div>
              </div>
              <span className="px-3 py-1 bg-secondary-container text-on-secondary-container text-[10px] font-bold rounded-full">HIGH PRIORITY</span>
            </div>
            <div className="bg-surface-container-lowest p-4 rounded-lg flex items-center justify-between">
              <div className="flex items-center gap-4">
                <img className="w-12 h-12 rounded-lg object-cover" data-alt="selection of artisanal sourdough bread loaves on a rustic wooden shelf" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXtVIeH9xbgBBoHudZgQ2KJi_zXZu15ykjJbqrDDnirQJyb8coFNmrjScewdQVZ-rS9Jh8ocgWBKwcMlfyI3YmGQLx6qZWmj1FjZDYIeFiE6UJRiG06OQLTOQ8KosLSzN-qXi5gYkXQ6bn6wjUJN7-fNEegiJkbcwJgSvJyvp3Gz9SVxRKF-Q-XxvwAzFRSAtQS1tbsLUCVy6W94-_oQ2-QxgLW7PX6yMZmbzkm8DLLBcA6U8zXz9KeBS76XA1ed42baY3MowJiyOg" />
                <div>
                  <p className="font-bold text-sm">Artisanal Bakery Mix</p>
                  <p className="text-xs text-on-surface-variant">22 Items • Ready for NGO</p>
                </div>
              </div>
              <span className="px-3 py-1 bg-surface-container-high text-on-surface-variant text-[10px] font-bold rounded-full">STAGED</span>
            </div>
            <div className="bg-surface-container-lowest p-4 rounded-lg flex items-center justify-between">
              <div className="flex items-center gap-4">
                <img className="w-12 h-12 rounded-lg object-cover" data-alt="vibrant salad bowl with fresh tomatoes, chickpeas, and mixed greens on a light table" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_isNCjP61eHSuSZ458rh8E3Il8KPz6w1mrHhQB_ZdicXOO4fU0oe-inqz25WV4286kOIeBjeJ85ewQeZJUJ0o-POhGsYgiLmsHhyqofWuEHGmC2mU9eOah_MupjliQJbfyS3Ug6E4m3ZVI24v78KfMNiWpP-g5rmcd7RjrhpGFa8TFHjTNma3QVLc4PPhPFrUupSCX9KiNNMsQq537VvinxsPGhfTDqCE468oxi9CSV0XnuHZpvCr-uW4TafUx-R2xCPQ215WYnf7" />
                <div>
                  <p className="font-bold text-sm">Prepared Deli Trays</p>
                  <p className="text-xs text-on-surface-variant">8 Trays • Cold Chain Intact</p>
                </div>
              </div>
              <span className="px-3 py-1 bg-tertiary-fixed text-on-tertiary-fixed text-[10px] font-bold rounded-full">LOGISTICS ALERT</span>
            </div>
          </div>
        </div>
        {/* Redistribution Analytics Chart */}
        <div className="md:col-span-5 bg-white rounded-xl p-8 border border-outline-variant/10">
          <h3 className="font-headline text-xl font-medium mb-8">Redistribution Efficiency</h3>
          <div className="flex items-end justify-between h-48 gap-4 mb-4">
            <div className="flex-grow flex flex-col items-center">
              <div className="w-full bg-secondary rounded-t-lg transition-all" style={{ height: '82%' }}></div>
              <span className="mt-2 font-label text-[10px] uppercase">Redistributed</span>
            </div>
            <div className="flex-grow flex flex-col items-center">
              <div className="w-full bg-surface-container-high rounded-t-lg transition-all" style={{ height: '12%' }}></div>
              <span className="mt-2 font-label text-[10px] uppercase">Compost</span>
            </div>
            <div className="flex-grow flex flex-col items-center">
              <div className="w-full bg-error-container rounded-t-lg transition-all" style={{ height: '6%' }}></div>
              <span className="mt-2 font-label text-[10px] uppercase">Landfill</span>
            </div>
          </div>
          <div className="bg-surface-container-low p-4 rounded-lg">
            <p className="text-xs leading-relaxed italic text-on-surface-variant">"Redistribution rates have increased by 14% since implementing AI shelf-life forecasting."</p>
          </div>
        </div>
        {/* NGO Connection Map */}
        <div className="md:col-span-6 bg-surface-container-high rounded-xl overflow-hidden relative min-h-[400px]">
          <div className="absolute inset-0 grayscale opacity-40 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800')] bg-cover" data-alt="abstract minimalist map pattern with clean geometric shapes and light grey tones"></div>
          {/* Map UI Elements */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              <div className="absolute -top-12 -left-12 p-3 bg-white rounded-xl shadow-lg flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary" data-icon="location_on" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
                <span className="text-xs font-bold">Downtown Mission</span>
              </div>
              <div className="absolute top-20 left-20 p-3 bg-white rounded-xl shadow-lg flex items-center gap-2 border-2 border-secondary">
                <span className="material-symbols-outlined text-secondary" data-icon="storefront" style={{ fontVariationSettings: "'FILL' 1" }}>storefront</span>
                <span className="text-xs font-bold">SmartShelf (HQ)</span>
              </div>
              <div className="absolute -bottom-8 right-0 p-3 bg-white rounded-xl shadow-lg flex items-center gap-2">
                <span className="material-symbols-outlined text-tertiary-fixed-dim" data-icon="home" style={{ fontVariationSettings: "'FILL' 1" }}>home</span>
                <span className="text-xs font-bold">The Haven Shelter</span>
              </div>
            </div>
          </div>
          <div className="absolute top-6 left-6 z-10">
            <h3 className="font-headline text-lg font-bold">Partner Network</h3>
            <p className="text-xs opacity-70">Real-time logistics proximity</p>
          </div>
          <div className="absolute bottom-6 right-6">
            <button className="bg-white/90 backdrop-blur px-4 py-2 rounded-full text-xs font-bold shadow-sm">Expand Map</button>
          </div>
        </div>
        {/* NGO Portfolio */}
        <div className="md:col-span-6 flex flex-col gap-6">
          <h3 className="font-headline text-xl font-medium">NGO Portfolio</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-surface-container-lowest p-5 rounded-xl border border-outline-variant/10 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-secondary" data-icon="soup_kitchen">soup_kitchen</span>
              </div>
              <h4 className="font-bold text-sm mb-1">Community Roots</h4>
              <p className="text-[10px] text-on-surface-variant mb-4 uppercase tracking-tighter">Focus: Family Nutrition</p>
              <p className="text-xs text-on-surface-variant leading-relaxed">Prioritizes fresh produce and dairy for low-income families.</p>
            </div>
            <div className="bg-surface-container-lowest p-5 rounded-xl border border-outline-variant/10 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-tertiary-fixed/20 flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-tertiary-fixed-dim" data-icon="night_shelter">night_shelter</span>
              </div>
              <h4 className="font-bold text-sm mb-1">Night Haven</h4>
              <p className="text-[10px] text-on-surface-variant mb-4 uppercase tracking-tighter">Focus: Emergency Housing</p>
              <p className="text-xs text-on-surface-variant leading-relaxed">Requests high-calorie prepared meals for nightly intakes.</p>
            </div>
            <div className="bg-surface-container-lowest p-5 rounded-xl border border-outline-variant/10 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-primary" data-icon="school">school</span>
              </div>
              <h4 className="font-bold text-sm mb-1">Bright Start</h4>
              <p className="text-[10px] text-on-surface-variant mb-4 uppercase tracking-tighter">Focus: Student Support</p>
              <p className="text-xs text-on-surface-variant leading-relaxed">Seeking shelf-stable snacks and healthy breakfast items.</p>
            </div>
            <div className="bg-surface-container-lowest p-5 rounded-xl border border-outline-variant/10 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-secondary-container/30 flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-on-secondary-container" data-icon="spa">spa</span>
              </div>
              <h4 className="font-bold text-sm mb-1">Green Plate</h4>
              <p className="text-[10px] text-on-surface-variant mb-4 uppercase tracking-tighter">Focus: Zero-Waste Education</p>
              <p className="text-xs text-on-surface-variant leading-relaxed">Processes bulk surplus into canned preservation items.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
