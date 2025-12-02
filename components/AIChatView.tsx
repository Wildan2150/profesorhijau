import React, { useState, useRef, useEffect } from 'react';
import { Send, Sparkles, Loader2, ArrowLeft, Leaf, ChevronRight, User } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { askGeminiTutor } from '../services/geminiService';
import { ChatMessage, ModuleCategory } from '../types';
import { LEARNING_MODULES } from '../constants';

interface AIChatViewProps {
  initialMessage?: string;
  onBack: () => void;
  onNavigateModule: (moduleId: string) => void;
}

export const AIChatView: React.FC<AIChatViewProps> = ({ initialMessage, onBack, onNavigateModule }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const initialized = useRef(false);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  useEffect(() => {
    if (!initialized.current && initialMessage) {
        initialized.current = true;
        handleSend(initialMessage);
    }
  }, [initialMessage]);

  const handleSend = async (textOverride?: string) => {
    const textToSend = textOverride || inputValue;
    if (!textToSend.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: textToSend
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsLoading(true);

    const context = `
      Konteks Umum: Halaman Diskusi AI. 
      Siswa sedang bertanya secara umum atau menindaklanjuti topik sebelumnya.
    `;
    
    const responseText = await askGeminiTutor(userMsg.text, context);

    const modelMsg: ChatMessage = {
      id: (Date.now() + 1).toString(),
      role: 'model',
      text: responseText
    };

    setMessages(prev => [...prev, modelMsg]);
    setIsLoading(false);
  };

  // Helper to find module details
  const getModuleById = (id: string) => LEARNING_MODULES.find(m => m.id === id);

  // Markdown styling components
  const MarkdownComponents = {
    p: ({node, ...props}: any) => <p className="mb-3 last:mb-0" {...props} />,
    ul: ({node, ...props}: any) => <ul className="list-disc pl-5 mb-3 space-y-1" {...props} />,
    ol: ({node, ...props}: any) => <ol className="list-decimal pl-5 mb-3 space-y-1" {...props} />,
    li: ({node, ...props}: any) => <li className="pl-1" {...props} />,
    strong: ({node, ...props}: any) => <span className="font-bold text-emerald-800" {...props} />,
    h1: ({node, ...props}: any) => <h1 className="text-lg font-bold mb-2 text-emerald-900" {...props} />,
    h2: ({node, ...props}: any) => <h2 className="text-base font-bold mb-2 text-emerald-800" {...props} />,
    h3: ({node, ...props}: any) => <h3 className="text-sm font-bold mb-1 text-emerald-700" {...props} />,
    blockquote: ({node, ...props}: any) => <blockquote className="border-l-4 border-emerald-300 pl-4 italic bg-emerald-50/50 py-2 rounded my-3 text-gray-600" {...props} />,
    code: ({node, ...props}: any) => <code className="bg-gray-100 text-pink-600 px-1 py-0.5 rounded text-xs font-mono" {...props} />,
  };

  // Parser to render text and module buttons
  const renderMessageContent = (text: string) => {
    // Regex to find [[MODUL:id]]
    const parts = text.split(/(\[\[MODUL:[a-zA-Z0-9_]+\]\])/g);

    return parts.map((part, index) => {
        if (part.startsWith('[[MODUL:') && part.endsWith(']]')) {
            const moduleId = part.replace('[[MODUL:', '').replace(']]', '');
            const module = getModuleById(moduleId);

            if (module) {
                return (
                    <button
                        key={index}
                        onClick={() => onNavigateModule(module.id)}
                        className="block w-full mt-3 mb-3 bg-white border border-emerald-200 rounded-xl p-4 shadow-sm hover:shadow-md hover:border-emerald-400 transition-all group text-left"
                    >
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-emerald-100 rounded-lg text-emerald-600">
                                <Leaf className="w-5 h-5" />
                            </div>
                            <div className="flex-1">
                                <div className="text-xs text-emerald-600 font-bold uppercase tracking-wide mb-0.5">Rekomendasi Modul</div>
                                <div className="font-bold text-gray-800 group-hover:text-emerald-700 transition-colors">{module.title}</div>
                                <div className="text-xs text-gray-500 line-clamp-1">{module.description}</div>
                            </div>
                            <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-emerald-500" />
                        </div>
                    </button>
                );
            }
            return null;
        }
        
        // Render text parts as Markdown
        if (!part.trim()) return null;
        
        return (
            <ReactMarkdown 
                key={index}
                components={MarkdownComponents}
            >
                {part}
            </ReactMarkdown>
        );
    });
  };

  return (
    <div className="min-h-screen bg-green-50 flex flex-col">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-md sticky top-0 z-20 border-b border-emerald-100">
        <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
            <button 
                onClick={onBack}
                className="flex items-center gap-2 text-gray-600 hover:text-emerald-600 transition-colors font-medium"
            >
                <ArrowLeft className="w-5 h-5" />
                <span className="hidden sm:inline">Kembali ke Beranda</span>
            </button>
            
            <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-tr from-emerald-500 to-teal-400 rounded-full flex items-center justify-center shadow-lg">
                    <Sparkles className="w-4 h-4 text-white" />
                </div>
                <div>
                    <h3 className="font-bold text-gray-800 text-sm leading-tight">Professor Hijau</h3>
                    <div className="flex items-center gap-1">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                        <span className="text-[10px] text-gray-500 font-medium">Online</span>
                    </div>
                </div>
            </div>
            
            <div className="w-8"></div> {/* Spacer for center alignment */}
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-4 md:p-6 scroll-smooth">
        <div className="max-w-3xl mx-auto space-y-6">
            {messages.map((msg) => (
                <div
                    key={msg.id}
                    className={`flex w-full ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                    <div className={`flex max-w-[90%] md:max-w-[80%] gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                        {/* Avatar */}
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 shadow-sm mt-1 ${
                            msg.role === 'user' ? 'bg-emerald-600' : 'bg-white border border-emerald-100'
                        }`}>
                            {msg.role === 'user' ? (
                                <User className="w-4 h-4 text-white" />
                            ) : (
                                <Sparkles className="w-4 h-4 text-emerald-600" />
                            )}
                        </div>

                        {/* Bubble */}
                        <div
                            className={`p-4 md:p-5 rounded-2xl text-sm leading-relaxed shadow-sm ${
                                msg.role === 'user'
                                ? 'bg-emerald-600 text-white rounded-tr-none whitespace-pre-wrap'
                                : 'bg-white text-gray-800 border border-gray-100 rounded-tl-none'
                            }`}
                        >
                            {msg.role === 'model' ? renderMessageContent(msg.text) : msg.text}
                        </div>
                    </div>
                </div>
            ))}
            
            {isLoading && (
                <div className="flex justify-start">
                     <div className="flex gap-3 max-w-[80%]">
                        <div className="w-8 h-8 rounded-full bg-white border border-emerald-100 flex items-center justify-center shrink-0 mt-1">
                             <Sparkles className="w-4 h-4 text-emerald-600" />
                        </div>
                        <div className="bg-white p-4 rounded-2xl rounded-tl-none border border-gray-100 flex items-center gap-3 shadow-sm">
                            <Loader2 className="w-4 h-4 animate-spin text-emerald-600" />
                            <span className="text-xs text-gray-500 font-medium">Sedang mengetik...</span>
                        </div>
                    </div>
                </div>
            )}
            <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Area */}
      <div className="bg-white p-4 border-t border-emerald-100 sticky bottom-0 z-20">
        <div className="max-w-3xl mx-auto relative">
             <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Lanjutkan diskusi..."
                className="w-full bg-gray-50 text-gray-800 pl-6 pr-14 py-4 rounded-full focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white border border-gray-200 transition-all shadow-inner"
                disabled={isLoading}
            />
            <button
                onClick={() => handleSend()}
                disabled={isLoading || !inputValue.trim()}
                className="absolute right-2 top-2 p-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full transition-all shadow-md disabled:opacity-50 disabled:shadow-none"
            >
                <Send className="w-5 h-5" />
            </button>
        </div>
      </div>
    </div>
  );
};