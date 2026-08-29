import React, { useState, useEffect } from 'react';
import { PageTab, ResourceArticle, InteractiveChecklist } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomeView } from './components/HomeView';
import { AboutView } from './components/AboutView';
import { ResourcesView } from './components/ResourcesView';
import { GetInvolvedView } from './components/GetInvolvedView';
import { ContactView } from './components/ContactView';
import { ResourceDetailModal } from './components/ResourceDetailModal';
import { InteractiveChecklistModal } from './components/InteractiveChecklistModal';
import { AiChatAssistant } from './components/AiChatAssistant';
import { ScrollToTop } from './components/ScrollToTop';

export default function App() {
  const [activeTab, setActiveTab] = useState<PageTab>('home');
  const [selectedArticle, setSelectedArticle] = useState<ResourceArticle | null>(null);
  const [selectedChecklist, setSelectedChecklist] = useState<InteractiveChecklist | null>(null);
  const [isChatOpen, setIsChatOpen] = useState(false);

  // Sync window URL hash if needed for direct navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (['home', 'about', 'resources', 'get-involved', 'contact'].includes(hash)) {
        setActiveTab(hash as PageTab);
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleTabChange = (tab: PageTab) => {
    setActiveTab(tab);
    window.location.hash = tab;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* Primary Navigation */}
      <Navbar 
        activeTab={activeTab} 
        setActiveTab={handleTabChange} 
        onOpenAssistant={() => setIsChatOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <HomeView
            setActiveTab={handleTabChange}
            onSelectArticle={(art) => setSelectedArticle(art)}
            onSelectChecklist={(chk) => setSelectedChecklist(chk)}
          />
        )}

        {activeTab === 'about' && (
          <AboutView setActiveTab={handleTabChange} />
        )}

        {activeTab === 'resources' && (
          <ResourcesView
            onSelectArticle={(art) => setSelectedArticle(art)}
            onSelectChecklist={(chk) => setSelectedChecklist(chk)}
            setActiveTab={handleTabChange}
          />
        )}

        {activeTab === 'get-involved' && (
          <GetInvolvedView setActiveTab={handleTabChange} />
        )}

        {activeTab === 'contact' && (
          <ContactView />
        )}
      </main>

      {/* Modals */}
      {selectedArticle && (
        <ResourceDetailModal
          article={selectedArticle}
          onClose={() => setSelectedArticle(null)}
          onContactClick={() => handleTabChange('contact')}
        />
      )}

      {selectedChecklist && (
        <InteractiveChecklistModal
          checklist={selectedChecklist}
          onClose={() => setSelectedChecklist(null)}
        />
      )}

      {/* Floating Interactive AI Parent Education Assistant */}
      <AiChatAssistant
        isOpen={isChatOpen}
        onToggle={() => setIsChatOpen(!isChatOpen)}
        onOpenContact={() => {
          setIsChatOpen(false);
          handleTabChange('contact');
        }}
      />

      {/* Floating Scroll to Top Button */}
      <ScrollToTop />

      {/* Primary Footer */}
      <Footer 
        setActiveTab={handleTabChange} 
        onOpenAssistant={() => setIsChatOpen(true)}
      />
    </div>
  );
}
