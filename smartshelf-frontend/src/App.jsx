import React, { useState } from 'react'
import Header from './components/Layout/Header'
import Sidebar from './components/Layout/Sidebar'
import Footer from './components/Layout/Footer'
import ShelfHealthOverview from './components/Dashboard/ShelfHealthOverview'
import InventoryControls from './components/Dashboard/InventoryControls'
import InventoryTable from './components/Dashboard/InventoryTable'
import StockEntryForm from './components/Dashboard/StockEntryForm'
import AIInsightCard from './components/Dashboard/AIInsightCard'
import DashboardView from './components/Views/DashboardView'
import PlannerView from './components/Views/PlannerView'
import RedistributionView from './components/Views/RedistributionView'
import LandingPageView from './components/Views/LandingPageView'
import SettingsView from './components/Views/SettingsView'
import ReportsView from './components/Views/ReportsView'
import RegistrationView from './components/Views/RegistrationView'

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [authView, setAuthView] = useState('landing');
  const [refreshKey, setRefreshKey] = useState(0);

  if (!isAuthenticated) {
    if (authView === 'register') {
      return <RegistrationView onBack={() => setAuthView('landing')} onComplete={() => setIsAuthenticated(true)} />;
    }
    return <LandingPageView onLogin={() => setIsAuthenticated(true)} onRequestAccess={() => setAuthView('register')} />;
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'Dashboard':
        return <DashboardView />;
      case 'Planner':
        return <PlannerView />;
      case 'Redistribution':
        return <RedistributionView />;
      case 'Reports':
        return <ReportsView />;
      case 'Settings':
        return <SettingsView />;
      case 'Inventory':
        return (
          <>
            <span className="inline-block px-3 py-1 bg-secondary-container text-on-secondary-container rounded-full text-[10px] font-bold uppercase tracking-widest mb-4">Inventory Ledger</span>
            <div className="mb-8">
              <h1 className="font-headline text-3xl font-medium text-primary mb-1">Inventory Management</h1>
              <p className="text-on-surface-variant font-body">Complete overview of all current active SKUs and AI-recommended actions.</p>
            </div>
            <ShelfHealthOverview refreshKey={refreshKey} />
            <InventoryControls />
            <div className="grid grid-cols-1 xl:grid-cols-4 gap-10">
              <InventoryTable refreshKey={refreshKey} onItemDeleted={() => setRefreshKey(k => k + 1)} />
              <div className="xl:col-span-1 space-y-6">
                <StockEntryForm onItemAdded={() => setRefreshKey(k => k + 1)} />
                <AIInsightCard />
              </div>
            </div>
          </>
        );
      default:
        return (
          <div className="flex flex-col items-center justify-center h-[60vh] text-center w-full bg-surface-container-lowest rounded-xl border border-outline-variant/10 shadow-sm p-12">
            <span className="material-symbols-outlined text-outline-variant text-[64px] mb-6">construction</span>
            <h2 className="font-headline text-2xl font-bold text-slate-900 mb-2">{activeTab} Module</h2>
            <p className="text-on-surface-variant max-w-md">Our AI is currently optimizing this section. Check back shortly to access powerful new insights and planning tools!</p>
            <button className="mt-8 px-6 py-3 bg-surface-container-high rounded-full font-bold text-primary hover:bg-surface-container transition-colors" onClick={() => setActiveTab('Dashboard')}>
              Return to Dashboard
            </button>
          </div>
        );
    }
  };

  return (
    <>
      <Header />
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="lg:ml-72 pt-28 pb-12 px-8 min-h-screen">
        {renderContent()}
      </main>
      <Footer />
    </>
  )
}
