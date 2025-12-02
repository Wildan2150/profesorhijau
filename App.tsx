
import React, { useState } from 'react';
import { ModuleCard } from './components/ModuleCard';
import { ModuleDetail } from './components/ModuleDetail';
import { HomeAISection } from './components/HomeAISection';
import { AIChatView } from './components/AIChatView';
import { LEARNING_MODULES } from './constants';
import { ModuleCategory, ViewState } from './types';
import { Leaf, Search, X, Construction, Bell, ChevronDown, Sparkles } from 'lucide-react';

const App: React.FC = () => {
  const [viewState, setViewState] = useState<ViewState>(ViewState.HOME);
  const [activeModule, setActiveModule] = useState<ModuleCategory | null>(null);
  const [aiInitialMessage, setAiInitialMessage] = useState<string>('');
  
  // State for Coming Soon Modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<string>('');

  const handleModuleSelect = (module: ModuleCategory) => {
    if (module.isComingSoon) {
        setModalContent(module.title);
        setIsModalOpen(true);
    } else {
        setActiveModule(module);
        setViewState(ViewState.MODULE_DETAIL);
    }
  };

  const handleModuleSelectById = (moduleId: string) => {
    const module = LEARNING_MODULES.find(m => m.id === moduleId);
    if (module) {
        handleModuleSelect(module);
    }
  };

  const handleBackToHome = () => {
    setActiveModule(null);
    setViewState(ViewState.HOME);
  };

  const handleStartChat = (initialMessage: string) => {
    setAiInitialMessage(initialMessage);
    setViewState(ViewState.AI_CHAT);
  };

  if (viewState === ViewState.MODULE_DETAIL && activeModule) {
    return <ModuleDetail category={activeModule} onBack={handleBackToHome} />;
  }

  if (viewState === ViewState.AI_CHAT) {
    return (
        <AIChatView 
            initialMessage={aiInitialMessage} 
            onBack={handleBackToHome} 
            onNavigateModule={handleModuleSelectById}
        />
    );
  }

  return (
    <div className="min-h-screen bg-green-50 leaf-pattern flex flex-col relative">
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-40 w-full glass-panel border-b border-white/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.location.reload()}>
              <div className="bg-gradient-to-tr from-emerald-500 to-green-400 p-2 rounded-lg text-white shadow-lg">
                <Leaf className="w-6 h-6" />
              </div>
              <span className="font-bold text-xl tracking-tight text-emerald-900">GreenChem<span className="text-emerald-500">.ID</span></span>
            </div>
            <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-600">
              <a href="#" className="text-emerald-600 font-bold">Beranda</a>
              <a href="#modul" className="hover:text-emerald-600 transition-colors">Modul Belajar</a>
              <a href="#about" className="hover:text-emerald-600 transition-colors">Tentang</a>
            </div>
            <div className="flex items-center gap-3">
               <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-bold">Kelas 10</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with AI Main Feature */}
      <header className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          
          <div className="text-center max-w-3xl mx-auto mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 border border-emerald-100 rounded-full text-emerald-800 text-sm font-semibold mb-6 animate-in fade-in slide-in-from-top-4 duration-500">
                <Sparkles className="w-4 h-4 text-emerald-500" />
                <span>AI Powered Learning</span>
            </div>
            <h1 className="text-4xl tracking-tight font-extrabold text-emerald-900 sm:text-5xl md:text-6xl mb-6">
              Asisten Cerdas untuk
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500 mt-2">Kimia Hijau</span>
            </h1>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Jelajahi prinsip keberlanjutan bersama <strong>Professor Hijau</strong>. Tanyakan apa saja, dan temukan modul belajar yang tepat untukmu.
            </p>
          </div>

          {/* AI Interface as Main Hero Feature (Seamless Search) */}
          <div className="relative z-20">
             <HomeAISection onStartChat={handleStartChat} />
          </div>

          {/* Scroll Indicator - Fixed Design */}
          <div 
            className="absolute -bottom-36 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-30 cursor-pointer group" 
            onClick={() => document.getElementById('modul')?.scrollIntoView({behavior: 'smooth'})}
          >
             <span className="text-[14px] font-extrabold text-emerald-600/80 uppercase tracking-widest group-hover:text-emerald-800 transition-colors">
                Mulai Belajar
             </span>
             <div className="bg-white/50 backdrop-blur-sm border border-emerald-100 p-2 rounded-full shadow-sm group-hover:bg-white group-hover:shadow-md transition-all animate-bounce">
                <ChevronDown className="w-5 h-5 text-emerald-600" />
             </div>
          </div>
        </div>
        
        {/* Decorative Blobs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none overflow-hidden">
            <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-emerald-200 rounded-full mix-blend-multiply filter blur-[120px] opacity-30 animate-pulse"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-teal-200 rounded-full mix-blend-multiply filter blur-[120px] opacity-30 animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
      </header>

      {/* Main Module Grid */}
      <main id="modul" className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 w-full pt-10">
        <div className="flex items-center justify-between mb-10">
            <div>
                <h2 className="text-3xl font-bold text-emerald-900 mb-2">Modul Terstruktur</h2>
                <p className="text-gray-500">Pelajari materi secara bertahap dari dasar hingga aplikasi.</p>
            </div>
            
            <div className="relative hidden md:block">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input 
                    type="text" 
                    placeholder="Cari topik..." 
                    className="pl-9 pr-4 py-2 rounded-full border border-emerald-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm w-64 shadow-sm bg-white/80"
                />
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {LEARNING_MODULES.map((module) => (
            <div key={module.id} className="h-full">
                <ModuleCard category={module} onSelect={handleModuleSelect} />
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer id="about" className="bg-emerald-900 text-emerald-100 py-12 border-t border-emerald-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
                <div className="flex items-center gap-2 mb-4">
                    <Leaf className="w-6 h-6 text-emerald-400" />
                    <span className="font-bold text-xl text-white">GreenChem.ID</span>
                </div>
                <p className="text-sm opacity-80 leading-relaxed">
                    Platform edukasi digital pertama yang mengintegrasikan Artificial Intelligence untuk mendukung pembelajaran Kimia Hijau di sekolah Indonesia.
                </p>
            </div>
            <div>
                <h4 className="font-bold text-white mb-4">Navigasi</h4>
                <ul className="space-y-2 text-sm opacity-80">
                    <li><a href="#" className="hover:text-white transition-colors">Halaman Depan</a></li>
                    <li><a href="#modul" className="hover:text-white transition-colors">Daftar Modul</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Tanya AI</a></li>
                </ul>
            </div>
            <div>
                 <h4 className="font-bold text-white mb-4">Teknologi</h4>
                 <div className="flex flex-col gap-2 text-xs opacity-70">
                    <span className="flex items-center gap-2"><Sparkles className="w-3 h-3"/> Google Gemini 2.5 Flash</span>
                    <span className="flex items-center gap-2"><div className="w-3 h-3 bg-blue-400 rounded-full"></div> React 19 & TypeScript</span>
                    <span className="flex items-center gap-2"><div className="w-3 h-3 bg-teal-400 rounded-full"></div> Tailwind CSS</span>
                 </div>
                 <p className="mt-6 text-xs text-emerald-400">© 2024 GreenChem Education. All rights reserved.</p>
            </div>
        </div>
      </footer>

      {/* Coming Soon Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 animate-in fade-in duration-200">
            {/* Backdrop */}
            <div 
                className="absolute inset-0 bg-black/40 backdrop-blur-sm" 
                onClick={() => setIsModalOpen(false)}
            ></div>
            
            {/* Modal Content */}
            <div className="bg-white rounded-3xl p-8 max-w-sm w-full shadow-2xl relative z-10 text-center animate-in zoom-in-95 duration-200">
                <button 
                    onClick={() => setIsModalOpen(false)}
                    className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
                >
                    <X className="w-5 h-5 text-gray-500" />
                </button>

                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Construction className="w-8 h-8 text-yellow-600" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Segera Hadir!</h3>
                <p className="text-gray-500 mb-6 leading-relaxed">
                    Fitur <span className="font-semibold text-emerald-600">{modalContent}</span> sedang dalam tahap pengembangan.
                </p>
                
                <button 
                    onClick={() => setIsModalOpen(false)}
                    className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-semibold transition-colors flex items-center justify-center gap-2"
                >
                    <Bell className="w-4 h-4" />
                    Oke, Saya Mengerti
                </button>
            </div>
        </div>
      )}
    </div>
  );
};

export default App;
