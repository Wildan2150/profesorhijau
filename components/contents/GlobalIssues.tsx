
import React from 'react';
import { Globe, Microscope, Thermometer, AlertTriangle, CheckCircle, CloudFog, Sun, Flame } from 'lucide-react';

export const GlobalIssuesContent: React.FC<{ subModuleId: string }> = ({ subModuleId }) => {
  if (subModuleId === 'pemanasan_global') {
    return (
      <div className="space-y-8 animate-in slide-in-from-bottom-5 duration-500">
        <div className="relative bg-gradient-to-br from-blue-900 to-indigo-800 rounded-3xl p-8 text-white overflow-hidden shadow-xl">
            <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                    <Globe className="w-10 h-10 text-blue-300" />
                    <h2 className="text-3xl font-bold">Pemanasan Global</h2>
                </div>
                <p className="text-blue-100 leading-relaxed text-lg max-w-2xl">
                    Fenomena peningkatan suhu rata-rata atmosfer, laut, dan daratan Bumi secara bertahap. Ini bukan sekadar "cuaca panas", tapi perubahan sistem iklim planet kita.
                </p>
            </div>
            {/* Abstract visuals */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500 rounded-full filter blur-[80px] opacity-20 translate-x-10 -translate-y-10 animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-400 rounded-full filter blur-[60px] opacity-20 -translate-x-10 translate-y-10"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-gray-200">
                <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <CloudFog className="w-5 h-5 text-gray-500" />
                    Efek Rumah Kaca
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                    Gas-gas tertentu di atmosfer menahan panas matahari seperti dinding kaca pada rumah kaca tanaman.
                </p>
                <div className="space-y-2">
                    <div className="flex justify-between items-center text-sm p-2 bg-gray-50 rounded">
                        <span className="font-semibold text-gray-700">Karbon Dioksida (CO2)</span>
                        <span className="text-xs px-2 py-1 bg-gray-200 rounded text-gray-600">Pembakaran Fosil</span>
                    </div>
                    <div className="flex justify-between items-center text-sm p-2 bg-gray-50 rounded">
                        <span className="font-semibold text-gray-700">Metana (CH4)</span>
                        <span className="text-xs px-2 py-1 bg-gray-200 rounded text-gray-600">Peternakan & Sampah</span>
                    </div>
                    <div className="flex justify-between items-center text-sm p-2 bg-gray-50 rounded">
                        <span className="font-semibold text-gray-700">N2O</span>
                        <span className="text-xs px-2 py-1 bg-gray-200 rounded text-gray-600">Pupuk Kimia</span>
                    </div>
                </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200 border-l-4 border-l-red-500">
                <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-red-500" />
                    Dampak Nyata
                </h3>
                <ul className="space-y-3">
                    <li className="flex gap-3 text-sm text-gray-700">
                        <Thermometer className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                        <span>Suhu ekstrem memicu gelombang panas dan gagal panen.</span>
                    </li>
                    <li className="flex gap-3 text-sm text-gray-700">
                        <div className="w-4 h-4 shrink-0 flex items-center justify-center mt-0.5">🌊</div>
                        <span>Es kutub mencair, menaikkan permukaan laut (banjir rob).</span>
                    </li>
                    <li className="flex gap-3 text-sm text-gray-700">
                        <Flame className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                        <span>Kebakaran hutan menjadi lebih sering dan sulit padam.</span>
                    </li>
                </ul>
            </div>
        </div>
      </div>
    );
  }

  if (subModuleId === 'konsep_nano') {
    return (
      <div className="space-y-8 animate-in slide-in-from-bottom-5 duration-500">
        <div className="bg-indigo-50 p-8 rounded-3xl border border-indigo-100 flex flex-col md:flex-row items-center gap-8">
             <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-indigo-100 rounded-xl">
                        <Microscope className="w-8 h-8 text-indigo-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-indigo-900">Dunia Nano</h2>
                </div>
                <p className="text-indigo-800 leading-relaxed mb-4">
                    Nanoteknologi adalah rekayasa materi pada skala atom dan molekul (1-100 nanometer). Pada skala ini, hukum fisika dan kimia bisa berubah drastis!
                </p>
                <div className="text-sm font-bold text-indigo-600 bg-white inline-block px-4 py-2 rounded-full shadow-sm">
                    1 nm = 10<sup>-9</sup> meter
                </div>
            </div>
            <div className="w-full md:w-1/3 aspect-square bg-white rounded-2xl shadow-sm p-4 flex flex-col items-center justify-center text-center border border-indigo-100">
                <div className="w-24 h-24 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full mb-4 animate-pulse flex items-center justify-center text-white font-bold text-xs">
                    PARTIKEL<br/>NANO
                </div>
                <p className="text-xs text-gray-500">Lebih kecil dari virus,<br/>lebih besar dari atom.</p>
            </div>
        </div>
        
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Mengapa Nano Itu Unik?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h4 className="font-bold text-indigo-600 mb-2">1. Luas Permukaan Besar</h4>
                    <p className="text-sm text-gray-600 mb-3">
                        Semakin kecil partikel, semakin besar luas permukaan totalnya dibandingkan volumenya.
                    </p>
                    <div className="bg-gray-100 p-3 rounded-lg text-xs text-gray-500">
                        <strong>Analogi:</strong> Satu bongkah gula larut lebih lama daripada gula yang ditumbuk halus (bubuk). Partikel nano seperti gula bubuk super halus—sangat reaktif!
                    </div>
                </div>
                <div>
                    <h4 className="font-bold text-indigo-600 mb-2">2. Efek Kuantum</h4>
                    <p className="text-sm text-gray-600 mb-3">
                        Sifat optik, listrik, dan magnetik berubah.
                    </p>
                    <ul className="text-sm space-y-2">
                        <li className="flex items-center gap-2">
                            <span className="w-3 h-3 bg-yellow-400 rounded-full border border-gray-300"></span>
                            <span className="text-gray-600">Emas Bulk: Kuning, Inert</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                            <span className="text-gray-600 font-semibold">Emas Nano: Merah/Ungu, Katalis Kuat</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
      </div>
    );
  }

  if (subModuleId === 'aplikasi_nano') {
    return (
      <div className="space-y-8 animate-in slide-in-from-bottom-5 duration-500">
        <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-teal-100 rounded-full">
                <Sun className="w-8 h-8 text-teal-600" />
            </div>
            <div>
                <h2 className="text-2xl font-bold text-gray-800">Nanoteknologi & Lingkungan</h2>
                <p className="text-teal-600">Solusi kecil untuk masalah besar</p>
            </div>
        </div>

        <div className="grid grid-cols-1 gap-4">
            <div className="flex flex-col md:flex-row gap-6 bg-white p-6 rounded-2xl border border-teal-50 shadow-sm hover:shadow-md transition-shadow">
                <div className="md:w-1/4 flex flex-col items-center justify-center bg-teal-50 rounded-xl p-4">
                    <CheckCircle className="w-10 h-10 text-teal-500 mb-2" />
                    <span className="font-bold text-teal-800 text-center">Nanokatalis</span>
                </div>
                <div className="flex-1">
                    <h4 className="text-lg font-bold text-gray-800 mb-2">Efisiensi Industri</h4>
                    <p className="text-gray-600 text-sm leading-relaxed mb-3">
                        Katalis berukuran nano memiliki luas permukaan sangat besar, sehingga reaksi kimia berjalan lebih cepat, pada suhu lebih rendah, dan lebih hemat energi.
                    </p>
                    <div className="inline-block px-3 py-1 bg-gray-100 text-gray-500 text-xs rounded-full">
                        Contoh: Konverter katalitik pada knalpot mobil
                    </div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 bg-white p-6 rounded-2xl border border-teal-50 shadow-sm hover:shadow-md transition-shadow">
                <div className="md:w-1/4 flex flex-col items-center justify-center bg-teal-50 rounded-xl p-4">
                    <Sun className="w-10 h-10 text-teal-500 mb-2" />
                    <span className="font-bold text-teal-800 text-center">Sel Surya</span>
                </div>
                <div className="flex-1">
                    <h4 className="text-lg font-bold text-gray-800 mb-2">Energi Bersih</h4>
                    <p className="text-gray-600 text-sm leading-relaxed mb-3">
                        Nanomaterial (seperti Titanium Dioksida) pada sel surya dapat menyerap spektrum cahaya lebih luas, membuat panel surya lebih efisien dan murah (sel surya lapis tipis).
                    </p>
                </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 bg-white p-6 rounded-2xl border border-teal-50 shadow-sm hover:shadow-md transition-shadow">
                <div className="md:w-1/4 flex flex-col items-center justify-center bg-teal-50 rounded-xl p-4">
                    <Globe className="w-10 h-10 text-teal-500 mb-2" />
                    <span className="font-bold text-teal-800 text-center">Nanofiltrasi</span>
                </div>
                <div className="flex-1">
                    <h4 className="text-lg font-bold text-gray-800 mb-2">Air Bersih</h4>
                    <p className="text-gray-600 text-sm leading-relaxed mb-3">
                        Membran filter dengan pori-pori ukuran nano dapat menyaring virus, bakteri, bahkan logam berat dari air yang tercemar, menghasilkan air minum dengan biaya rendah.
                    </p>
                </div>
            </div>
        </div>
      </div>
    );
  }

  return <div className="p-8 text-center text-gray-400 italic">Konten sedang dimuat...</div>;
};
