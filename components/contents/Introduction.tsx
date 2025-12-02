
import React from 'react';
import { BookOpen, Target, ArrowRight, Shield, Globe, TrendingUp, AlertTriangle, Leaf, RefreshCcw, Factory } from 'lucide-react';

export const IntroductionContent: React.FC<{ subModuleId: string }> = ({ subModuleId }) => {
  if (subModuleId === 'definisi') {
    return (
      <div className="space-y-8 animate-in slide-in-from-bottom-5 duration-500">
        {/* Definition Hero */}
        <div className="bg-emerald-50 p-6 md:p-8 rounded-3xl border border-emerald-100 relative overflow-hidden">
            <div className="relative z-10">
                <h3 className="text-2xl font-bold text-emerald-900 mb-4 flex items-center gap-3">
                    <BookOpen className="w-6 h-6 text-emerald-600" />
                    Definisi Kimia Hijau
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed italic border-l-4 border-emerald-500 pl-4 mb-6 bg-white/50 p-4 rounded-r-lg">
                    "Kimia Hijau (Green Chemistry) adalah filosofi penelitian dan rekayasa kimia yang mendorong perancangan produk dan proses yang <span className="font-bold text-emerald-700">meminimalkan atau menghilangkan</span> penggunaan dan pembentukan zat berbahaya."
                </p>
                <div className="flex items-center gap-2 text-sm font-semibold text-emerald-800">
                    <span className="w-8 h-[1px] bg-emerald-800"></span>
                    Paul Anastas & John Warner (1998)
                </div>
            </div>
            <Leaf className="absolute -bottom-10 -right-10 w-64 h-64 text-emerald-100 opacity-50 rotate-12" />
        </div>
        
        {/* Core Concept */}
        <div className="prose prose-emerald max-w-none text-gray-700">
            <p>
                Sering disebut sebagai <strong>Kimia Berkelanjutan</strong>, konsep ini bukan sekadar tentang "membersihkan sampah", melainkan mengubah cara kita membuat sesuatu sejak awal. Jika kimia tradisional fokus pada hasil produk, Kimia Hijau fokus pada <strong>seluruh siklus hidup produk</strong>—dari bahan baku, proses pembuatan, hingga nasib produk setelah dipakai.
            </p>
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="bg-gray-50 p-4 border-b border-gray-200">
                <h4 className="font-bold text-gray-800 flex items-center gap-2">
                    <RefreshCcw className="w-5 h-5 text-gray-500" />
                    Pergeseran Paradigma
                </h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200">
                <div className="p-6 space-y-3">
                    <div className="flex items-center gap-2 text-red-600 font-bold mb-2">
                        <Factory className="w-5 h-5" />
                        Kimia Konvensional (Lama)
                    </div>
                    <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex gap-2"><AlertTriangle className="w-4 h-4 text-red-400 shrink-0" /> Fokus pada hasil produk saja.</li>
                        <li className="flex gap-2"><AlertTriangle className="w-4 h-4 text-red-400 shrink-0" /> Mengolah limbah setelah terbentuk (Remediasi).</li>
                        <li className="flex gap-2"><AlertTriangle className="w-4 h-4 text-red-400 shrink-0" /> Menggunakan bahan baku tak terbarukan (Minyak Bumi).</li>
                    </ul>
                </div>
                <div className="p-6 space-y-3 bg-emerald-50/50">
                    <div className="flex items-center gap-2 text-emerald-600 font-bold mb-2">
                        <Leaf className="w-5 h-5" />
                        Kimia Hijau (Baru)
                    </div>
                    <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex gap-2"><Shield className="w-4 h-4 text-emerald-500 shrink-0" /> Fokus pada desain proses yang aman.</li>
                        <li className="flex gap-2"><Shield className="w-4 h-4 text-emerald-500 shrink-0" /> Mencegah limbah terbentuk sejak awal (Prevensi).</li>
                        <li className="flex gap-2"><Shield className="w-4 h-4 text-emerald-500 shrink-0" /> Menggunakan bahan baku terbarukan (Biomassa).</li>
                    </ul>
                </div>
            </div>
        </div>
      </div>
    );
  }

  if (subModuleId === 'tujuan') {
    return (
      <div className="space-y-8 animate-in slide-in-from-bottom-5 duration-500">
        <div className="prose prose-emerald max-w-none text-gray-700">
            <p className="text-lg leading-relaxed">
                Tujuan utama Kimia Hijau adalah mendukung <strong>Pembangunan Berkelanjutan (Sustainable Development)</strong>. Kita ingin mewariskan bumi yang sehat untuk generasi mendatang tanpa menghentikan kemajuan teknologi.
            </p>
        </div>

        <h3 className="text-xl font-bold text-gray-800 border-b pb-2">3 Pilar Manfaat Kimia Hijau</h3>

        <div className="grid grid-cols-1 gap-6">
            {/* Environment */}
            <div className="flex gap-5 items-start bg-white p-6 rounded-2xl shadow-sm border border-green-100 hover:border-green-300 transition-colors group">
                <div className="p-4 bg-green-100 rounded-2xl text-green-600 group-hover:scale-110 transition-transform">
                    <Globe className="w-8 h-8" />
                </div>
                <div>
                    <h4 className="text-lg font-bold text-gray-800 mb-2">1. Bagi Lingkungan (Planet)</h4>
                    <ul className="space-y-2 text-gray-600 text-sm">
                        <li className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 mt-2 bg-green-500 rounded-full shrink-0"></span>
                            Mengurangi pencemaran air, udara, dan tanah.
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 mt-2 bg-green-500 rounded-full shrink-0"></span>
                            Menjaga ketersediaan sumber daya alam tak terbarukan.
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 mt-2 bg-green-500 rounded-full shrink-0"></span>
                            Mengurangi dampak pemanasan global dengan mengurangi emisi karbon.
                        </li>
                    </ul>
                </div>
            </div>

            {/* Health */}
            <div className="flex gap-5 items-start bg-white p-6 rounded-2xl shadow-sm border border-blue-100 hover:border-blue-300 transition-colors group">
                <div className="p-4 bg-blue-100 rounded-2xl text-blue-600 group-hover:scale-110 transition-transform">
                    <Shield className="w-8 h-8" />
                </div>
                <div>
                    <h4 className="text-lg font-bold text-gray-800 mb-2">2. Bagi Kesehatan (People)</h4>
                    <ul className="space-y-2 text-gray-600 text-sm">
                        <li className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 mt-2 bg-blue-500 rounded-full shrink-0"></span>
                            Udara dan air yang lebih bersih bagi masyarakat.
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 mt-2 bg-blue-500 rounded-full shrink-0"></span>
                            Keamanan pekerja pabrik dari zat karsinogenik (penyebab kanker).
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 mt-2 bg-blue-500 rounded-full shrink-0"></span>
                            Produk konsumen (sabun, plastik, mainan) yang lebih aman dipakai.
                        </li>
                    </ul>
                </div>
            </div>
            
            {/* Economy */}
            <div className="flex gap-5 items-start bg-white p-6 rounded-2xl shadow-sm border border-yellow-100 hover:border-yellow-300 transition-colors group">
                <div className="p-4 bg-yellow-100 rounded-2xl text-yellow-600 group-hover:scale-110 transition-transform">
                    <TrendingUp className="w-8 h-8" />
                </div>
                <div>
                    <h4 className="text-lg font-bold text-gray-800 mb-2">3. Bagi Ekonomi (Profit)</h4>
                    <ul className="space-y-2 text-gray-600 text-sm">
                        <li className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 mt-2 bg-yellow-500 rounded-full shrink-0"></span>
                            Efisiensi energi dan bahan baku mengurangi biaya produksi.
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 mt-2 bg-yellow-500 rounded-full shrink-0"></span>
                            Mengurangi biaya pengolahan limbah dan kepatuhan regulasi lingkungan.
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 mt-2 bg-yellow-500 rounded-full shrink-0"></span>
                            Meningkatkan daya saing produk di pasar global yang sadar lingkungan.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
      </div>
    );
  }

  return <div className="p-8 text-center text-gray-400 italic">Konten sedang dimuat...</div>;
};
