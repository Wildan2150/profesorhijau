
import React from 'react';
import { 
    ChevronRight, Leaf, BookOpen, Target, Trash2, Atom, FlaskConical, Zap, 
    Droplets, Sprout, Fuel, Globe, Microscope, Thermometer, 
    Beaker, Calculator, Recycle, Blocks, Trophy, Swords, MessageCircle, Image, Lock,
    ShieldCheck, Scissors, Repeat, Activity, AlertTriangle
} from 'lucide-react';
import { ModuleCategory } from '../types';

// Icon mapping
const Icons: Record<string, React.ElementType> = {
    Leaf, BookOpen, Target, Trash2, Atom, FlaskConical, Zap, Droplets, Sprout, Fuel, 
    Globe, Microscope, Thermometer, Beaker, Calculator, Recycle, Blocks, Trophy, 
    Swords, MessageCircle, Image, ShieldCheck, Scissors, Repeat, Activity, AlertTriangle
};

interface ModuleCardProps {
  category: ModuleCategory;
  onSelect: (category: ModuleCategory) => void;
}

export const ModuleCard: React.FC<ModuleCardProps> = ({ category, onSelect }) => {
  // Get first 2 submodules for preview safely
  const previews = category.subModules?.slice(0, 2) || [];
  const isLocked = category.isComingSoon;

  return (
    <div 
      className={`bg-white rounded-2xl shadow-sm transition-all duration-300 overflow-hidden border h-full flex flex-col group cursor-pointer relative
        ${isLocked 
            ? 'border-gray-100 opacity-90 hover:shadow-md' 
            : 'border-emerald-100 hover:shadow-xl'
        }`}
      onClick={() => onSelect(category)}
    >
      {/* Locked Overlay Effect */}
      {isLocked && (
        <div className="absolute top-4 right-4 z-10">
            <div className="bg-gray-100 p-2 rounded-full text-gray-400">
                <Lock className="w-4 h-4" />
            </div>
        </div>
      )}

      <div className="p-6 flex-1">
        <div className="flex items-center gap-3 mb-4">
            <div className={`p-3 rounded-xl transition-colors ${
                isLocked 
                ? 'bg-gray-100 text-gray-500' 
                : 'bg-emerald-100 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white'
            }`}>
                {category.id === 'simulasi' ? <Beaker className="w-6 h-6" /> :
                 category.id === 'kalkulator' ? <Calculator className="w-6 h-6" /> :
                 category.id === 'daur_ulang' ? <Recycle className="w-6 h-6" /> :
                 category.id === 'kompetisi' ? <Trophy className="w-6 h-6" /> :
                 category.id === 'forum' ? <MessageCircle className="w-6 h-6" /> :
                 <Leaf className="w-6 h-6" />
                }
            </div>
            <h3 className={`text-xl font-bold ${isLocked ? 'text-gray-600' : 'text-gray-800'}`}>
                {category.title}
            </h3>
        </div>
        <p className="text-gray-500 mb-6 text-sm leading-relaxed">{category.description}</p>
        
        <div className="space-y-3">
          {previews?.map((sub) => {
            const IconComponent = Icons[sub.iconName] || Leaf;
            return (
                <div key={sub.id} className={`flex items-center gap-3 text-sm p-2 rounded-lg ${isLocked ? 'bg-gray-50 text-gray-400' : 'bg-gray-50 text-gray-500'}`}>
                    <IconComponent className={`w-4 h-4 ${isLocked ? 'text-gray-400' : 'text-emerald-500'}`} />
                    <span className="truncate">{sub.title}</span>
                </div>
            )
          })}
        </div>
      </div>
      
      <div className={`p-4 flex justify-between items-center transition-colors ${
          isLocked 
          ? 'bg-gray-50' 
          : 'bg-emerald-50 group-hover:bg-emerald-600'
      }`}>
        <span className={`text-sm font-semibold ${
            isLocked 
            ? 'text-gray-500' 
            : 'text-emerald-700 group-hover:text-white'
        }`}>
            {isLocked ? 'Segera Hadir' : 'Mulai Belajar'}
        </span>
        <div className={`${
            isLocked 
            ? 'bg-gray-200' 
            : 'bg-white group-hover:translate-x-1'
        } rounded-full p-1 transition-transform`}>
            {isLocked ? (
                <Lock className="w-4 h-4 text-gray-500" />
            ) : (
                <ChevronRight className="w-4 h-4 text-emerald-600" />
            )}
        </div>
      </div>
    </div>
  );
};
