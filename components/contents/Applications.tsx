
import React from 'react';
import { Fuel, Leaf, Recycle, Beaker, ArrowRight, CheckCircle2 } from 'lucide-react';

export const ApplicationsContent: React.FC<{ subModuleId: string }> = ({ subModuleId }) => {
  if (subModuleId === 'biodiesel') {
    return (
      <div className="space-y-8 animate-in slide-in-from-bottom-5 duration-500">
        <div className="flex items-center gap-4 mb-2">
            <div className="p-4 bg-orange-100 rounded-2xl border border-orange-200 shadow-sm">
                <Fuel className="w-10 h-10 text-orange-600" />
            </div>
            <div>
                <h2 className="text-2xl font-bold text-gray-800">Energi Alternatif: Biodiesel</h2>
                <p className="text-orange-600 font-medium">Dari minyak goreng ke tangki mesin</p>
            </div>
        </div>
        
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-orange-100">
            <p className="text-gray-700 leading-relaxed mb-6">
                Biodiesel adalah bahan bakar terbarukan yang dapat dipakai sebagai alternatif atau campuran solar (diesel fosil). Di Indonesia, program B30/B35 berarti campuran 30-35% biodiesel dengan solar.
            </p>

            <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                <Beaker className="w-5 h-5 text-orange-500" />
                Proses Pembuatan (Transesterifikasi)
            </h3>
            <div className="bg-orange-50 p-4 rounded-xl border border-orange-200 text-sm md:text-base font-mono text-center text-orange-900 mb-6 overflow-x-auto">
                Minyak Nabati + Metanol <span className="text-orange-400">⟶(Katalis)⟶</span> Biodiesel + Gliserol
            </div>

            <div className="space-y-4">
                 <h3 className="font-bold text-gray-800 mb-2">Keunggulan Kimia Hijau:</h3>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex gap-3 p-3 bg-gray-50 rounded-lg">
                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                        <span className="text-sm text-gray-600">Menggunakan limbah <strong>minyak jelantah</strong> mengurangi pencemaran air.</span>
                    </div>
                    <div className="flex gap-3 p-3 bg-gray-50 rounded-lg">
                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                        <span className="text-sm text-gray-600">Bebas sulfur (belerang), sehingga tidak menyebabkan hujan asam.</span>
                    </div>
                    <div className="flex gap-3 p-3 bg-gray-50 rounded-lg">
                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                        <span className="text-sm text-gray-600">Pelarut atau katalis dapat digunakan kembali (recycle).</span>
                    </div>
                 </div>
            </div>
        </div>
      </div>
    );
  }

  if (subModuleId === 'bioplastik') {
    return (
      <div className="space-y-8 animate-in slide-in-from-bottom-5 duration-500">
        <div className="flex items-center gap-4 mb-2">
            <div className="p-4 bg-green-100 rounded-2xl border border-green-200 shadow-sm">
                <Leaf className="w-10 h-10 text-green-600" />
            </div>
             <div>
                <h2 className="text-2xl font-bold text-gray-800">Bioplastik</h2>
                <p className="text-green-600 font-medium">Solusi sampah plastik dunia</p>
            </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
                <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <Recycle className="w-5 h-5 text-green-500" />
                    Apa Bedanya?
                </h3>
                <div className="space-y-4">
                    <div className="p-3 bg-red-50 rounded-lg border-l-4 border-red-400">
                        <h4 className="font-bold text-red-800 text-sm">Plastik Konvensional</h4>
                        <p className="text-xs text-red-600 mt-1">Bahan: Minyak Bumi (Polimer Sintetis)</p>
                        <p className="text-xs text-red-600">Urai: 100 - 1000 tahun</p>
                    </div>
                    <div className="flex justify-center">
                        <ArrowRight className="w-5 h-5 text-gray-400 rotate-90 md:rotate-0" />
                    </div>
                    <div className="p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                        <h4 className="font-bold text-green-800 text-sm">Bioplastik</h4>
                        <p className="text-xs text-green-600 mt-1">Bahan: Pati Singkong, Jagung, Tebu</p>
                        <p className="text-xs text-green-600">Urai: 2 - 6 bulan (Kompos)</p>
                    </div>
                </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
                <h3 className="font-bold text-gray-800 mb-4">Jenis Bioplastik</h3>
                <ul className="space-y-4">
                    <li className="pb-4 border-b border-gray-100 last:border-0">
                        <span className="font-bold text-emerald-700 block mb-1">PLA (Polylactic Acid)</span>
                        <span className="text-sm text-gray-600">Terbuat dari fermentasi gula tebu atau jagung. Sering dipakai untuk gelas cup dingin dan wadah makanan.</span>
                    </li>
                    <li className="pb-4 border-b border-gray-100 last:border-0">
                        <span className="font-bold text-emerald-700 block mb-1">Starch-based (Pati)</span>
                        <span className="text-sm text-gray-600">Campuran pati singkong dengan plasticizer (gliserol). Sering untuk kantong belanja yang larut air panas.</span>
                    </li>
                     <li className="pb-4 border-b border-gray-100 last:border-0">
                        <span className="font-bold text-emerald-700 block mb-1">PHA (Polyhydroxyalkanoate)</span>
                        <span className="text-sm text-gray-600">Dihasilkan oleh bakteri yang memfermentasi gula atau lipid. Sifatnya mirip plastik biasa tapi biodegradable.</span>
                    </li>
                </ul>
            </div>
        </div>
      </div>
    );
  }

  return <div className="p-8 text-center text-gray-400 italic">Konten sedang dimuat...</div>;
};
