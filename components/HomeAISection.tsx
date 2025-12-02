
import React, { useState } from 'react';
import { Send, Sparkles, BookOpen, BrainCircuit, Leaf, Lightbulb, ChevronRight, Search } from 'lucide-react';

interface HomeAISectionProps {
    onStartChat: (initialMessage: string) => void;
}

export const HomeAISection: React.FC<HomeAISectionProps> = ({ onStartChat }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSend = (textOverride?: string) => {
    const text = textOverride || inputValue;
    if (text.trim()) {
        onStartChat(text);
    }
  };

  const suggestions = [
    { 
      icon: <BookOpen className="w-4 h-4 text-emerald-600" />, 
      title: "Konsep Dasar", 
      prompt: "Jelaskan apa itu Kimia Hijau dengan bahasa yang mudah dimengerti." 
    },
    { 
      icon: <BrainCircuit className="w-4 h-4 text-purple-600" />, 
      title: "Kuis Cepat", 
      prompt: "Berikan saya satu pertanyaan kuis yang menantang tentang prinsip kimia hijau." 
    },
    { 
      icon: <Leaf className="w-4 h-4 text-green-600" />, 
      title: "Contoh Nyata", 
      prompt: "Berikan contoh penerapan kimia hijau di rumah." 
    },
    { 
      icon: <Lightbulb className="w-4 h-4 text-yellow-600" />, 
      title: "Fakta Unik", 
      prompt: "Ceritakan fakta mengejutkan tentang dampak kimia konvensional." 
    }
  ];

  return (
    <div className="w-full max-w-3xl mx-auto mt-8 animate-in slide-in-from-bottom-8 duration-700">
      
      {/* Seamless Input Bar */}
      <div className="relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full blur opacity-25 group-hover:opacity-40 transition-opacity"></div>
        <div className="relative flex items-center bg-white rounded-full shadow-xl border border-emerald-50 transition-all focus-within:ring-4 focus-within:ring-emerald-100/50">
            <div className="pl-6 text-emerald-500">
                <Sparkles className="w-6 h-6 animate-pulse" />
            </div>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Tanya Professor Hijau..."
                className="w-full bg-transparent text-gray-800 px-4 py-5 text-lg placeholder-gray-400 focus:outline-none rounded-full"
            />
            <button
                onClick={() => handleSend()}
                disabled={!inputValue.trim()}
                className="mr-2 p-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full transition-all shadow-md hover:shadow-lg disabled:opacity-50 disabled:shadow-none hover:scale-105"
            >
                <Send className="w-5 h-5" />
            </button>
        </div>
      </div>

      {/* Floating Suggestions (Integrated Look) */}
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        {suggestions.map((item, idx) => (
            <button
                key={idx}
                onClick={() => handleSend(item.prompt)}
                className="flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-md border border-white/50 rounded-full shadow-sm hover:shadow-md hover:bg-white hover:scale-105 transition-all text-sm text-gray-700 group"
            >
                {item.icon}
                <span>{item.title}</span>
            </button>
        ))}
      </div>
    </div>
  );
};
