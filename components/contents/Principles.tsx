
import React from 'react';
import { 
  Trash2, 
  Atom, 
  FlaskConical, 
  Zap, 
  Droplets, 
  Sprout,
  ShieldCheck,
  Scissors,
  Repeat,
  Recycle,
  Activity,
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Lightbulb,
  Info
} from 'lucide-react';

export const PrinciplesContent: React.FC<{ subModuleId: string }> = ({ subModuleId }) => {

  // Helper untuk komponen section agar kode lebih rapi
  const SectionTitle = ({ children }: { children: React.ReactNode }) => (
    <h4 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2 border-b border-gray-100 pb-2">
      {children}
    </h4>
  );

  const ComparisonBox = ({ bad, good }: { bad: string, good: string }) => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
      <div className="bg-red-50 p-4 rounded-xl border border-red-100">
        <div className="flex items-center gap-2 text-red-700 font-bold mb-2 text-sm">
          <XCircle className="w-4 h-4" />
          Cara Lama (Konvensional)
        </div>
        <p className="text-gray-600 text-sm">{bad}</p>
      </div>
      <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-100">
        <div className="flex items-center gap-2 text-emerald-700 font-bold mb-2 text-sm">
          <CheckCircle2 className="w-4 h-4" />
          Cara Hijau (Modern)
        </div>
        <p className="text-gray-600 text-sm">{good}</p>
      </div>
    </div>
  );

  const FactBox = ({ children }: { children: React.ReactNode }) => (
    <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 flex gap-3 text-sm text-blue-800">
      <Info className="w-5 h-5 shrink-0" />
      <div>{children}</div>
    </div>
  );

  const renderDetail = (
    icon: React.ReactNode, 
    title: string, 
    tagline: string,
    definition: React.ReactNode,
    comparison: { bad: string, good: string },
    example: { title: string, desc: string },
    funFact?: string
  ) => (
    <div className="space-y-8 animate-in slide-in-from-bottom-5 duration-500">
      {/* Header Section */}
      <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-3xl border border-emerald-100">
        <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="bg-white p-4 rounded-2xl shadow-sm text-emerald-600 shrink-0">
                {icon}
            </div>
            <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">{title}</h2>
                <p className="text-emerald-700 font-medium text-lg">{tagline}</p>
            </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-gray-100">
        <SectionTitle><Lightbulb className="w-5 h-5 text-yellow-500" /> Konsep Utama</SectionTitle>
        <div className="text-gray-700 leading-relaxed mb-6 space-y-4">
            {definition}
        </div>

        <SectionTitle><ArrowRight className="w-5 h-5 text-gray-400" /> Perbandingan Proses</SectionTitle>
        <ComparisonBox bad={comparison.bad} good={comparison.good} />

        <SectionTitle><FlaskConical className="w-5 h-5 text-purple-500" /> Studi Kasus Nyata</SectionTitle>
        <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
            <h5 className="font-bold text-gray-800 mb-2">{example.title}</h5>
            <p className="text-gray-600 text-sm leading-relaxed">{example.desc}</p>
        </div>

        {funFact && (
            <div className="mt-6">
                <FactBox>
                    <span className="font-bold block mb-1">Tahukah Kamu?</span>
                    {funFact}
                </FactBox>
            </div>
        )}
      </div>
    </div>
  );

  switch (subModuleId) {
    case 'p1_limbah':
        return renderDetail(
            <Trash2 className="w-10 h-10" />,
            "1. Pencegahan Limbah",
            "Mencegah lebih murah daripada mengobati.",
            <>
                <p>Prinsip ini adalah pondasi utama Kimia Hijau. Idenya sederhana: lebih baik mendesain proses yang tidak menghasilkan sampah sama sekali, daripada pusing memikirkan cara mengolah sampah yang sudah terbentuk.</p>
                <p>Dalam industri kimia, kita mengenal istilah <strong>E-Factor (Environmental Factor)</strong>, yaitu rasio jumlah limbah (kg) per kg produk. Semakin kecil E-Factor, semakin hijau prosesnya.</p>
            </>,
            {
                bad: "Proses menghasilkan banyak produk sampingan berbahaya yang harus ditimbun atau dibakar dengan biaya mahal.",
                good: "Proses dirancang efisien sehingga hampir semua bahan baku berubah menjadi produk yang diinginkan (Zero Waste)."
            },
            {
                title: "Sintesis Ibuprofen (Obat Pereda Nyeri)",
                desc: "Metode lama (Boots Process) membutuhkan 6 langkah reaksi dan membuang 60% bahan baku sebagai limbah (E-Factor tinggi). Metode baru (BHC Process) hanya butuh 3 langkah reaksi dan hampir semua atom bahan baku menjadi ibuprofen (E-Factor mendekati nol)."
            },
            "Industri farmasi dulunya menghasilkan 25-100 kg limbah untuk setiap 1 kg obat yang diproduksi. Kimia Hijau berusaha menurunkan angka ini secara drastis."
        );

    case 'p2_atom':
        return renderDetail(
            <Atom className="w-10 h-10" />,
            "2. Ekonomi Atom",
            "Jangan ada atom yang terbuang percuma.",
            <>
                <p>Jangan bingung antara <strong>Rendemen (Yield)</strong> dengan <strong>Ekonomi Atom</strong>. Rendemen tinggi hanya berarti reaksinya berhasil banyak, tapi bisa saja menghasilkan limbah besar.</p>
                <p>Ekonomi Atom menghitung: <em>(Massa molekul produk yang diinginkan ÷ Total massa molekul semua reaktan) × 100%</em>. Prinsip ini menuntut agar semua atom dari reaktan masuk ke dalam produk akhir.</p>
            </>,
            {
                bad: "Reaksi Substitusi atau Eliminasi seringkali membuang gugus atom tertentu sebagai produk samping.",
                good: "Reaksi Adisi atau Penataan Ulang (Rearrangement) menggabungkan semua atom reaktan menjadi satu produk utuh."
            },
            {
                title: "Reaksi Wittig vs Hidrogenasi Katalitik",
                desc: "Reaksi Wittig (lama) sangat bagus untuk membuat ikatan rangkap, tapi menghasilkan limbah fosfor oksida dalam jumlah besar (Ekonomi Atom rendah). Hidrogenasi katalitik (baru) menambahkan atom hidrogen ke molekul tanpa membuang apapun (Ekonomi Atom 100%)."
            }
        );

    case 'p3_sintesis':
        return renderDetail(
            <FlaskConical className="w-10 h-10" />,
            "3. Sintesis Bahaya Minim",
            "Gunakan bahan yang aman, hasilkan produk aman.",
            <>
                <p>Jika kita ingin membuat kue, kita tidak akan menggunakan tepung yang beracun, bukan? Begitu juga kimia. Prinsip ini menekankan penggunaan bahan kimia (reaktan) yang tidak beracun bagi manusia dan lingkungan dalam proses pembuatan.</p>
                <p>Tujuannya adalah mengurangi bahaya bagi pekerja pabrik dan mencegah pencemaran jika terjadi kebocoran.</p>
            </>,
            {
                bad: "Menggunakan gas Phosgene (sangat beracun, pernah dipakai sebagai senjata perang) untuk membuat plastik polikarbonat.",
                good: "Menggunakan teknologi 'Non-Phosgene' dengan bahan dasar CO2 atau difenil karbonat yang jauh lebih aman."
            },
            {
                title: "Pembuatan Styrofoam",
                desc: "Dulu menggunakan CFC (Chlorofluorocarbon) sebagai blowing agent yang merusak lapisan ozon. Sekarang diganti dengan CO2 atau hidrokarbon ringan yang lebih ramah lingkungan."
            }
        );

    case 'p4_aman':
        return renderDetail(
            <ShieldCheck className="w-10 h-10" />,
            "4. Desain Produk Aman",
            "Efikasi tinggi, Toksisitas rendah.",
            <>
                <p>Produk kimia harus bekerja sesuai fungsinya (efektif) tapi tidak boleh menyebabkan masalah kesehatan (kanker, mutasi gen, gangguan hormon) atau masalah lingkungan.</p>
                <p>Ini adalah tantangan bagi kimiawan: bagaimana membuat molekul obat yang kuat membasmi penyakit, tapi tidak merusak ginjal? Atau pestisida yang membunuh hama tapi aman bagi lebah?</p>
            </>,
            {
                bad: "Pestisida DDT sangat ampuh membunuh nyamuk, tapi tidak bisa terurai dan menumpuk di tubuh burung elang hingga cangkang telurnya rapuh.",
                good: "Pestisida modern dirancang spesifik hanya mempengaruhi enzim hama tertentu dan cepat terurai oleh matahari/air."
            },
            {
                title: "Cat Anti-Fouling Kapal",
                desc: "Dulu cat kapal menggunakan TBT (Tributyltin) agar kerang tidak menempel. Ternyata TBT merusak kelamin siput laut dan ekosistem. Sekarang diganti dengan Sea-Nine yang aman dan cepat terdegradasi di air laut."
            }
        );

    case 'p5_pelarut':
        return renderDetail(
            <Droplets className="w-10 h-10" />,
            "5. Pelarut & Pembantu Aman",
            "Pelarut terbaik adalah tanpa pelarut.",
            <>
                <p>Dalam reaksi kimia, pelarut (solvents) seringkali digunakan dalam jumlah jauh lebih besar daripada bahan bakunya sendiri. Sayangnya, banyak pelarut organik (seperti Benzena, Kloroform) mudah menguap (VOC), mudah terbakar, dan beracun.</p>
                <p>Prinsip ini mendorong penggunaan pelarut hijau (air, CO2 superkritis) atau sistem tanpa pelarut (solvent-free).</p>
            </>,
            {
                bad: "Menggunakan Benzena (penyebab leukemia) atau Kloroform (merusak hati) untuk melarutkan bahan reaksi.",
                good: "Menggunakan Air (pelarut universal teraman), Cairan Ionik, atau Karbon Dioksida Superkritis (Supercritical CO2)."
            },
            {
                title: "Decaffeinated Coffee (Kopi Tanpa Kafein)",
                desc: "Dulu kafein diekstrak dari biji kopi menggunakan pelarut metilen klorida (karsinogenik). Sekarang, industri menggunakan CO2 Superkritis yang aman dan tidak meninggalkan residu kimia pada kopi."
            }
        );

    case 'p6_energi':
        return renderDetail(
            <Zap className="w-10 h-10" />,
            "6. Efisiensi Energi",
            "Hemat energi = Hemat biaya + Lindungi iklim.",
            <>
                <p>Reaksi kimia konvensional seringkali "memasak" bahan pada suhu sangat tinggi (misal 500°C) atau tekanan tinggi. Ini boros bahan bakar fosil dan meningkatkan emisi karbon.</p>
                <p>Kimia hijau mencari cara agar reaksi bisa berjalan lancar pada <strong>suhu dan tekanan ruang (ambient)</strong>.</p>
            </>,
            {
                bad: "Memanaskan reaktor berjam-jam pada suhu tinggi untuk memaksa reaksi berjalan.",
                good: "Menggunakan katalis atau teknologi alternatif (Microwave, Sonokimia/Ultrasound, Fotokimia) untuk mempercepat reaksi dengan energi minimal."
            },
            {
                title: "Enzim sebagai Hemat Energi",
                desc: "Proses biologis dalam tubuh kita terjadi pada suhu 37°C berkat enzim. Industri kini meniru ini (Biokatalisis) untuk membuat obat-obatan pada suhu rendah, menghemat ribuan kilowatt listrik."
            }
        );

    case 'p7_terbarukan':
        return renderDetail(
            <Sprout className="w-10 h-10" />,
            "7. Bahan Baku Terbarukan",
            "Beralih dari fosil ke biomassa.",
            <>
                <p>Sebagian besar produk kimia (plastik, obat, cat) saat ini berasal dari minyak bumi (sumber daya tak terbarukan yang akan habis). Kimia Hijau mendorong penggunaan bahan baku dari pertanian atau limbah biomassa.</p>
                <p>Konsepnya adalah <strong>Siklus Karbon Tertutup</strong>: Tanaman menyerap CO2 -> Diolah jadi produk -> Produk terurai/dibakar melepas CO2 -> Diserap lagi oleh tanaman.</p>
            </>,
            {
                bad: "Membuat plastik (polietilena) dari cracking minyak bumi.",
                good: "Membuat bioplastik dari pati singkong, jagung, atau selulosa limbah kayu."
            },
            {
                title: "Bio-Succinic Acid",
                desc: "Asam suksinat adalah bahan dasar penting industri. Dulu dibuat dari butana (minyak bumi). Sekarang diproduksi melalui fermentasi glukosa (gula tebu/jagung) oleh bakteri, mengurangi jejak karbon secara signifikan."
            }
        );

    case 'p8_turunan':
        return renderDetail(
            <Scissors className="w-10 h-10" />,
            "8. Kurangi Turunan",
            "Sederhanakan langkah reaksi.",
            <>
                <p>Dalam sintesis organik yang rumit, kimiawan sering menggunakan "Gugus Pelindung" (Blocking Groups) untuk melindungi bagian molekul tertentu agar tidak ikut bereaksi. Tapi ini berarti: Pasang pelindung (1 tahap) -> Reaksi Utama -> Lepas pelindung (1 tahap).</p>
                <p>Ini menambah langkah kerja, bahan kimia, dan limbah. Kimia Hijau menyukai reaksi yang selektif yang langsung menuju sasaran tanpa perlu "topeng".</p>
            </>,
            {
                bad: "Proses 10 langkah dimana 3 langkahnya hanya untuk memasang dan melepas gugus pelindung.",
                good: "Menggunakan reagen yang Kemoseselektif (Chemoselective), yang pintar membedakan mana bagian yang harus direaksikan tanpa perlu perlindungan."
            },
            {
                title: "Sintesis Antibiotik Penisilin Semisintetik",
                desc: "Dulu memerlukan banyak tahap perlindungan gugus kimia. Sekarang menggunakan enzim Penisilin Asilase yang sangat spesifik, memangkas tahapan reaksi dan mengurangi limbah pelarut organik."
            }
        );

    case 'p9_katalis':
        return renderDetail(
            <Repeat className="w-10 h-10" />,
            "9. Katalisis",
            "Sedikit bahan, dampak besar.",
            <>
                <p>Katalis adalah zat yang mempercepat reaksi tanpa ikut habis bereaksi. Satu molekul katalis bisa mengubah jutaan molekul reaktan menjadi produk.</p>
                <p>Ini jauh lebih baik daripada reagen stoikiometri yang digunakan sekali langsung habis dan jadi limbah.</p>
            </>,
            {
                bad: "Oksidasi menggunakan Kalium Dikromat (reagen stoikiometri) menghasilkan limbah logam berat kromium yang beracun dalam jumlah besar.",
                good: "Oksidasi menggunakan Oksigen (O2) dari udara dengan bantuan sedikit katalis logam mulia. Hasil sampingnya hanya air (H2O)."
            },
            {
                title: "Katalis Konverter Mobil",
                desc: "Katalis Platinum/Rodium di knalpot mobil mengubah gas beracun (CO dan NOx) menjadi gas aman (CO2 dan N2) dalam waktu sepersekian detik secara terus menerus selama mobil berjalan."
            },
            "Enzim adalah katalis alam yang paling hebat. Satu molekul enzim katalase bisa memecah 40 juta molekul hidrogen peroksida per detik!"
        );

    case 'p10_degradasi':
        return renderDetail(
            <Recycle className="w-10 h-10" />,
            "10. Desain Degradasi",
            "Berakhir tanpa jejak.",
            <>
                <p>Kita harus memikirkan "kehidupan setelah mati" sebuah produk kimia. Produk harus didesain agar setelah fungsinya selesai, ia mudah terurai (biodegradable) menjadi zat tidak berbahaya di lingkungan.</p>
                <p>Ini untuk mencegah masalah persistensi (zat abadi) seperti sampah plastik di laut atau pestisida DDT di rantai makanan.</p>
            </>,
            {
                bad: "Deterjen zaman dulu (ABS - Alkyl Benzene Sulfonate) memiliki rantai bercabang yang sulit dimakan bakteri, menyebabkan busa menggunung di sungai.",
                good: "Deterjen modern (LAS - Linear Alkylbenzene Sulfonate) memiliki rantai lurus yang mudah dipotong-potong oleh bakteri pengurai."
            },
            {
                title: "Plastik PLA (Polylactic Acid)",
                desc: "Plastik bening untuk gelas minuman dingin yang terbuat dari jagung. Tidak seperti plastik PET biasa yang bertahan ratusan tahun, PLA bisa terurai dalam fasilitas pengomposan industri dalam hitungan bulan."
            }
        );

    case 'p11_analisis':
        return renderDetail(
            <Activity className="w-10 h-10" />,
            "11. Analisis Real-time",
            "Cegah polusi sebelum terjadi.",
            <>
                <p>Biasanya, sampel diambil dari pabrik, dibawa ke lab, dites, dan hasilnya keluar berjam-jam kemudian. Jika ada kesalahan produksi, limbah sudah terlanjur banyak.</p>
                <p>Prinsip ini menekankan penggunaan sensor pintar in-line yang memantau reaksi detik demi detik. Jika suhu naik sedikit saja atau ada zat berbahaya terbentuk, sistem langsung menyesuaikan otomatis.</p>
            </>,
            {
                bad: "Proses batch selesai -> Cek kualitas -> Ternyata gagal -> Buang satu tangki besar produk gagal sebagai limbah.",
                good: "Sensor infra-merah memantau reaksi di dalam pipa. Jika ada anomali, komputer langsung mengoreksi dosis bahan saat itu juga."
            },
            {
                title: "PAT (Process Analytical Technology)",
                desc: "Di industri farmasi modern, sensor laser memantau ukuran kristal obat saat sedang terbentuk di reaktor, memastikan setiap butir obat sempurna tanpa perlu tes lab manual yang lambat."
            }
        );

    case 'p12_kecelakaan':
        return renderDetail(
            <AlertTriangle className="w-10 h-10" />,
            "12. Cegah Kecelakaan",
            "Safety first, dari level molekul.",
            <>
                <p>Kecelakaan industri (ledakan, kebakaran, kebocoran gas) sering terjadi karena zat yang dipakai memang berbahaya. Kimia Hijau menyarankan: ganti zatnya dengan yang lebih aman secara intrinsik.</p>
                <p>Daripada mempertebal dinding tangki penyimpanan gas beracun, lebih baik jangan simpan gas beracun sama sekali.</p>
            </>,
            {
                bad: "Menyimpan gas Metil Isosianat (MIC) dalam tangki besar di tengah kota (Penyebab Tragedi Bhopal India, 1984).",
                good: "Memproduksi zat berbahaya tersebut in-situ (dibuat langsung dipakai) dalam jumlah kecil saja, atau mengganti rute reaksi agar tidak perlu memakai MIC sama sekali."
            },
            {
                title: "Baterai Solid-State",
                desc: "Baterai Lithium-ion cair (seperti di HP kita) mudah terbakar jika bocor. Riset terbaru mengembangkan elektrolit padat yang tidak mudah terbakar, membuat baterai masa depan jauh lebih aman."
            }
        );

    default:
        return (
            <div className="flex flex-col items-center justify-center h-64 text-gray-400">
                <Atom className="w-12 h-12 mb-4 opacity-20" />
                <p>Pilih prinsip dari menu sebelah kiri untuk melihat detailnya.</p>
            </div>
        );
  }
};
