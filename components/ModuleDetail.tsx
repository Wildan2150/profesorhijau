
import React, { useState, useEffect } from 'react';
import { ArrowLeft, BookOpen, BrainCircuit, CheckCircle, XCircle, RefreshCw } from 'lucide-react';
import { ModuleCategory, SubModule } from '../types';
import { generateQuizQuestion } from '../services/geminiService';
import { GeminiTutor } from './GeminiTutor';
import { getModuleComponent } from './ModuleRegistry';

interface ModuleDetailProps {
  category: ModuleCategory;
  onBack: () => void;
}

export const ModuleDetail: React.FC<ModuleDetailProps> = ({ category, onBack }) => {
  const [activeSubModule, setActiveSubModule] = useState<SubModule>(category.subModules?.[0]);
  const [quizData, setQuizData] = useState<any>(null);
  const [quizLoading, setQuizLoading] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [quizResult, setQuizResult] = useState<'correct' | 'incorrect' | null>(null);

  // Get the content component from the registry
  const ContentComponent = getModuleComponent(category.id);

  const fetchQuiz = async () => {
    setQuizLoading(true);
    setQuizData(null);
    setSelectedAnswer(null);
    setQuizResult(null);
    
    const data = await generateQuizQuestion(activeSubModule.title);
    setQuizData(data);
    setQuizLoading(false);
  };

  useEffect(() => {
    // Reset state when changing submodule
    setQuizData(null);
    setSelectedAnswer(null);
    setQuizResult(null);
  }, [activeSubModule]);

  const handleAnswerCheck = (option: string) => {
    if (selectedAnswer) return; // Prevent multiple clicks
    const optionLetter = option.charAt(0);
    setSelectedAnswer(optionLetter);
    if (optionLetter === quizData.answer) {
        setQuizResult('correct');
    } else {
        setQuizResult('incorrect');
    }
  };

  if (!activeSubModule) return <div>Loading module...</div>;

  return (
    <div className="min-h-screen bg-green-50 flex flex-col md:flex-row">
      {/* Sidebar Navigation */}
      <aside className="w-full md:w-72 bg-white border-r border-emerald-100 flex-shrink-0 md:h-screen md:sticky md:top-0 overflow-y-auto">
        <div className="p-6">
            <button 
                onClick={onBack}
                className="flex items-center gap-2 text-emerald-600 hover:text-emerald-800 font-semibold mb-8 transition-colors"
            >
                <ArrowLeft className="w-5 h-5" />
                Kembali
            </button>
            <h2 className="text-xl font-bold text-gray-800 mb-2">{category.title}</h2>
            <p className="text-sm text-gray-500 mb-6">{category.description}</p>
            
            <nav className="space-y-2">
                {category.subModules?.map(sub => (
                    <button
                        key={sub.id}
                        onClick={() => setActiveSubModule(sub)}
                        className={`w-full text-left p-3 rounded-xl text-sm font-medium transition-all ${
                            activeSubModule.id === sub.id 
                            ? 'bg-emerald-100 text-emerald-800 shadow-sm border border-emerald-200' 
                            : 'text-gray-600 hover:bg-gray-50 hover:text-emerald-600'
                        }`}
                    >
                        {sub.title}
                    </button>
                ))}
            </nav>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-6 md:p-12 overflow-y-auto">
        <div className="max-w-3xl mx-auto space-y-8">
            {/* Header */}
            <div className="border-b border-emerald-100 pb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                    <BookOpen className="w-3 h-3" />
                    Materi Pembelajaran
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                    {activeSubModule.title}
                </h1>
            </div>

            {/* Content Body */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-emerald-50">
                {ContentComponent ? (
                    <ContentComponent subModuleId={activeSubModule.id} />
                ) : (
                    <div className="text-gray-500 italic">Konten untuk modul ini belum tersedia secara visual.</div>
                )}
                
                <div className="mt-8 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg">
                    <p className="text-sm text-yellow-800 italic">
                        <strong>💡 Info Penting:</strong> Pelajari konsep ini baik-baik sebelum melanjutkan ke kuis AI.
                    </p>
                </div>
            </div>

            {/* AI Interactive Section */}
            <div className="mt-12">
                <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                        <BrainCircuit className="w-7 h-7 text-emerald-600" />
                        Uji Pemahamanmu
                    </h3>
                    {!quizData && !quizLoading && (
                        <button 
                            onClick={fetchQuiz}
                            className="px-6 py-2 bg-emerald-600 text-white rounded-full font-semibold hover:bg-emerald-700 transition-shadow shadow-md hover:shadow-lg flex items-center gap-2"
                        >
                            <RefreshCw className="w-4 h-4" />
                            Buat Kuis AI
                        </button>
                    )}
                </div>

                {quizLoading && (
                    <div className="h-48 flex flex-col items-center justify-center bg-white rounded-2xl border border-dashed border-gray-300">
                        <div className="animate-spin text-emerald-500 mb-3">
                            <RefreshCw className="w-8 h-8" />
                        </div>
                        <p className="text-gray-500 animate-pulse">Professor Hijau sedang membuat soal...</p>
                    </div>
                )}

                {quizData && (
                    <div className="bg-white rounded-2xl shadow-lg border border-emerald-100 overflow-hidden">
                        <div className="bg-emerald-600 p-6 text-white">
                            <h4 className="font-bold text-lg mb-2">Tantangan Kuis AI</h4>
                            <p className="opacity-90">{quizData.question}</p>
                        </div>
                        <div className="p-6 space-y-3">
                            {/* Check for options existence before mapping with optional chaining */}
                            {quizData.options && Array.isArray(quizData.options) ? (
                                quizData.options.map((option: string) => {
                                    const isSelected = selectedAnswer === option.charAt(0);
                                    const isCorrect = quizData.answer === option.charAt(0);
                                    
                                    let btnClass = "w-full text-left p-4 rounded-xl border transition-all text-sm font-medium flex justify-between items-center ";
                                    if (selectedAnswer) {
                                        if (isSelected && quizResult === 'correct') btnClass += "bg-green-100 border-green-500 text-green-800";
                                        else if (isSelected && quizResult === 'incorrect') btnClass += "bg-red-100 border-red-500 text-red-800";
                                        else if (!isSelected && isCorrect) btnClass += "bg-green-50 border-green-300 text-green-700"; // Show correct answer
                                        else btnClass += "bg-gray-50 border-gray-200 opacity-50";
                                    } else {
                                        btnClass += "bg-white border-gray-200 hover:border-emerald-500 hover:bg-emerald-50 text-gray-700";
                                    }

                                    return (
                                        <button
                                            key={option}
                                            onClick={() => handleAnswerCheck(option)}
                                            disabled={!!selectedAnswer}
                                            className={btnClass}
                                        >
                                            <span>{option}</span>
                                            {selectedAnswer && isCorrect && <CheckCircle className="w-5 h-5 text-green-600" />}
                                            {isSelected && quizResult === 'incorrect' && <XCircle className="w-5 h-5 text-red-600" />}
                                        </button>
                                    );
                                })
                            ) : (
                                <div className="text-center text-gray-500 py-4">
                                    <p>Gagal memuat opsi jawaban. Silakan coba lagi.</p>
                                    <button onClick={fetchQuiz} className="mt-2 text-emerald-600 font-bold underline">Muat Ulang</button>
                                </div>
                            )}
                        </div>
                        
                        {selectedAnswer && (
                             <div className="px-6 pb-6 animate-in slide-in-from-top-2">
                                <div className={`p-4 rounded-xl text-sm ${quizResult === 'correct' ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-red-50 text-red-800 border border-red-200'}`}>
                                    <p className="font-bold mb-1">{quizResult === 'correct' ? '🎉 Benar Sekali!' : '😅 Kurang Tepat...'}</p>
                                    <p>{quizData.explanation}</p>
                                    <button 
                                        onClick={fetchQuiz}
                                        className="mt-3 text-xs font-bold underline hover:no-underline"
                                    >
                                        Coba soal lain
                                    </button>
                                </div>
                             </div>
                        )}
                    </div>
                )}
            </div>
        </div>
      </main>

      {/* AI Assistant Context Aware */}
      <GeminiTutor 
        contextTitle={activeSubModule.title} 
        contextContent={activeSubModule.aiContext}
        suggestedQuestions={activeSubModule.suggestedQuestions}
      />
    </div>
  );
};
