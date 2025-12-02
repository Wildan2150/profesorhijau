import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Sparkles, Loader2, Lightbulb } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { askGeminiTutor } from '../services/geminiService';
import { ChatMessage } from '../types';

interface GeminiTutorProps {
  contextTitle: string;
  contextContent: string;
  suggestedQuestions?: string[];
}

export const GeminiTutor: React.FC<GeminiTutorProps> = ({ contextTitle, contextContent, suggestedQuestions }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      text: `Halo! Saya Professor Hijau 🌱. Ada yang ingin ditanyakan tentang "${contextTitle}"?`
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen]);

  // Reset chat when context changes, but keep it if closed
  useEffect(() => {
    setMessages([
        {
            id: 'welcome-' + Date.now(),
            role: 'model',
            text: `Halo! Saya Professor Hijau 🌱. Ada yang ingin ditanyakan tentang "${contextTitle}"?`
        }
    ]);
  }, [contextTitle]);

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

    const context = `Topik: ${contextTitle}. Konten Dasar: ${contextContent}`;
    const responseText = await askGeminiTutor(userMsg.text, context);

    const modelMsg: ChatMessage = {
      id: (Date.now() + 1).toString(),
      role: 'model',
      text: responseText
    };

    setMessages(prev => [...prev, modelMsg]);
    setIsLoading(false);
  };

  // Markdown styling components (Simpler for widget)
  const MarkdownComponents = {
    p: ({node, ...props}: any) => <p className="mb-2 last:mb-0" {...props} />,
    ul: ({node, ...props}: any) => <ul className="list-disc pl-4 mb-2 space-y-1" {...props} />,
    ol: ({node, ...props}: any) => <ol className="list-decimal pl-4 mb-2 space-y-1" {...props} />,
    li: ({node, ...props}: any) => <li className="pl-0.5" {...props} />,
    strong: ({node, ...props}: any) => <span className="font-bold text-emerald-700" {...props} />,
    code: ({node, ...props}: any) => <code className="bg-gray-100 px-1 py-0.5 rounded text-xs" {...props} />,
  };

  // Basic parser for widget (mainly for text, buttons are less likely needed here or can be simplified)
  // Note: The main tutor might not need the button parser if recommendations redirect away from the current context view
  // But we'll keep it simple: just render markdown.
  const renderMessageContent = (text: string) => {
    // If the tutor suggests a module via tag, we might want to just show the text part or handle it.
    // For the widget, simple text replacement might be cleaner to avoid navigation jumps inside the widget context.
    // However, let's strip the tag for now or just render it as text if we don't want complex navigation here.
    const cleanText = text.replace(/\[\[MODUL:[a-zA-Z0-9_]+\]\]/g, ''); 
    
    return (
        <ReactMarkdown components={MarkdownComponents}>
            {text} 
        </ReactMarkdown>
    );
  };

  return (
    <>
      {/* Floating Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-gradient-to-r from-emerald-500 to-teal-500 text-white p-4 rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all z-50 flex items-center gap-2 animate-bounce"
        >
          <Sparkles className="w-6 h-6" />
          <span className="font-bold">Tanya AI</span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 max-w-[90vw] h-[600px] max-h-[80vh] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-emerald-100 z-50 animate-in slide-in-from-bottom-10 fade-in duration-300">
          {/* Header */}
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-4 flex justify-between items-center text-white shrink-0">
            <div className="flex items-center gap-2">
              <div className="bg-white/20 p-1.5 rounded-lg">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-sm">Professor Hijau</h3>
                <p className="text-xs text-emerald-100">Asisten Belajar Pintar</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-1 rounded-full transition">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages?.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl p-3 text-sm leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-emerald-600 text-white rounded-br-none whitespace-pre-wrap'
                      : 'bg-white text-gray-700 shadow-sm border border-gray-100 rounded-bl-none'
                  }`}
                >
                  {msg.role === 'model' ? renderMessageContent(msg.text) : msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
               <div className="flex justify-start">
                   <div className="bg-white p-3 rounded-2xl rounded-bl-none shadow-sm border border-gray-100 flex items-center gap-2">
                       <Loader2 className="w-4 h-4 animate-spin text-emerald-600" />
                       <span className="text-xs text-gray-500">Sedang berpikir...</span>
                   </div>
               </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Suggested Questions Area */}
          {Array.isArray(suggestedQuestions) && suggestedQuestions.length > 0 && !isLoading && (
            <div className="px-4 py-2 bg-white border-t border-gray-50 overflow-x-auto flex gap-2 no-scrollbar shrink-0">
                {suggestedQuestions.map((q, idx) => (
                    <button
                        key={idx}
                        onClick={() => handleSend(q)}
                        className="flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 text-emerald-700 text-xs rounded-full border border-emerald-100 hover:bg-emerald-100 hover:border-emerald-200 transition-colors whitespace-nowrap"
                    >
                        <Lightbulb className="w-3 h-3" />
                        {q}
                    </button>
                ))}
            </div>
          )}

          {/* Input Area */}
          <div className="p-3 bg-white border-t border-gray-100 shrink-0">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Tanya sesuatu..."
                className="flex-1 bg-gray-100 border-0 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all outline-none"
              />
              <button
                onClick={() => handleSend()}
                disabled={isLoading || !inputValue.trim()}
                className="bg-emerald-600 text-white p-3 rounded-xl hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};