
import { ModuleCategory } from './types';

export const LEARNING_MODULES: ModuleCategory[] = [
  {
    id: 'intro',
    title: 'Pengantar Kimia Hijau',
    description: 'Memahami dasar-dasar dan pentingnya kimia hijau bagi keberlanjutan bumi.',
    subModules: [
      {
        id: 'definisi',
        title: 'Apa itu Kimia Hijau?',
        description: 'Pengertian kimia hijau menurut Paul Anastas dan John Warner.',
        aiContext: 'Definisi Kimia Hijau (Green Chemistry) adalah pendekatan perancangan produk kimia untuk mengurangi bahaya bagi lingkungan.',
        iconName: 'BookOpen',
        suggestedQuestions: [
          "Apa bedanya kimia hijau dengan kimia lingkungan?",
          "Kenapa kimia konvensional dianggap berbahaya?",
          "Berikan contoh sederhana kimia hijau di kehidupan sehari-hari."
        ]
      },
      {
        id: 'tujuan',
        title: 'Tujuan & Manfaat',
        description: 'Mengapa kita perlu menerapkan prinsip kimia hijau?',
        aiContext: 'Tujuan: menciptakan zat kimia aman, proses efisien. Manfaat: kurangi limbah, hemat energi, lindungi ekosistem.',
        iconName: 'Target',
        suggestedQuestions: [
          "Apa keuntungan ekonomi bagi pabrik jika menerapkan kimia hijau?",
          "Bagaimana kimia hijau bisa menyelamatkan lapisan ozon?",
          "Apakah produk kimia hijau lebih mahal?"
        ]
      }
    ]
  },
  {
    id: 'prinsip',
    title: '12 Prinsip Kimia Hijau',
    description: 'Panduan utama dalam menerapkan kimia yang ramah lingkungan secara menyeluruh.',
    subModules: [
      {
        id: 'p1_limbah',
        title: '1. Pencegahan Limbah',
        description: 'Mencegah limbah lebih baik daripada mengolahnya.',
        aiContext: 'Prinsip 1: Prevention. Lebih baik mencegah limbah daripada menanggulangi.',
        iconName: 'Trash2',
        suggestedQuestions: [
          "Apa itu E-Factor dalam industri kimia?",
          "Kenapa mengolah limbah itu mahal?",
          "Contoh pencegahan limbah di dapur rumah?"
        ]
      },
      {
        id: 'p2_atom',
        title: '2. Ekonomi Atom',
        description: 'Maksimalkan atom reaktan menjadi produk.',
        aiContext: 'Prinsip 2: Atom Economy. Memaksimalkan semua bahan yang digunakan dalam proses menjadi produk akhir.',
        iconName: 'Atom',
        suggestedQuestions: [
          "Apa bedanya Ekonomi Atom dengan Rendemen (Yield)?",
          "Kenapa reaksi adisi lebih hijau dari substitusi?",
          "Jelaskan konsep ekonomi atom dengan analogi memasak."
        ]
      },
      {
        id: 'p3_sintesis',
        title: '3. Sintesis Bahaya Minim',
        description: 'Metode sintesis yang sedikit atau tidak beracun.',
        aiContext: 'Prinsip 3: Less Hazardous Chemical Syntheses. Gunakan dan hasilkan zat dengan toksisitas rendah.',
        iconName: 'FlaskConical',
        suggestedQuestions: [
            "Apa contoh bahan kimia beracun yang dulu sering dipakai?",
            "Bagaimana cara mengganti bahan berbahaya dengan yang aman?"
        ]
      },
      {
        id: 'p4_aman',
        title: '4. Desain Produk Aman',
        description: 'Merancang produk kimia yang efektif tapi tidak beracun.',
        aiContext: 'Prinsip 4: Designing Safer Chemicals. Produk kimia harus dirancang fungsional tapi minim toksisitas.',
        iconName: 'ShieldCheck',
        suggestedQuestions: [
            "Bagaimana cara membuat pestisida yang aman bagi manusia?",
            "Apa itu Thalidomide dan hubungannya dengan prinsip ini?"
        ]
      },
      {
        id: 'p5_pelarut',
        title: '5. Pelarut Aman',
        description: 'Mengurangi penggunaan pelarut berbahaya.',
        aiContext: 'Prinsip 5: Safer Solvents and Auxiliaries. Hindari penggunaan zat pembantu (pelarut) jika memungkinkan.',
        iconName: 'Droplets',
        suggestedQuestions: [
            "Apa pelarut paling aman di dunia?",
            "Kenapa pelarut organik seperti benzena berbahaya?",
            "Apa itu Supercritical CO2?"
        ]
      },
      {
        id: 'p6_energi',
        title: '6. Efisiensi Energi',
        description: 'Melakukan reaksi pada suhu dan tekanan ruang.',
        aiContext: 'Prinsip 6: Design for Energy Efficiency. Minimalkan kebutuhan energi, lakukan di suhu ruang.',
        iconName: 'Zap',
        suggestedQuestions: [
            "Bagaimana katalis bisa menghemat energi?",
            "Apa kerugian melakukan reaksi pada suhu tinggi?",
            "Hubungan efisiensi energi dengan emisi karbon?"
        ]
      },
      {
        id: 'p7_terbarukan',
        title: '7. Bahan Baku Terbarukan',
        description: 'Menggunakan bahan dari sumber alam yang dapat diperbarui.',
        aiContext: 'Prinsip 7: Use of Renewable Feedstocks. Gunakan bahan baku pertanian/biomassa, bukan minyak bumi.',
        iconName: 'Sprout',
        suggestedQuestions: [
            "Apa bedanya bahan baku fosil dan biomassa?",
            "Bisakah plastik dibuat dari singkong?",
            "Apa keuntungan menggunakan bahan nabati?"
        ]
      },
      {
        id: 'p8_turunan',
        title: '8. Kurangi Turunan',
        description: 'Hindari modifikasi sementara pada reaksi kimia.',
        aiContext: 'Prinsip 8: Reduce Derivatives. Hindari blocking/protection groups karena menambah langkah dan limbah.',
        iconName: 'Scissors',
        suggestedQuestions: [
            "Apa itu gugus pelindung dalam reaksi kimia?",
            "Kenapa reaksi yang lebih pendek langkahnya lebih baik?"
        ]
      },
      {
        id: 'p9_katalis',
        title: '9. Katalisis',
        description: 'Gunakan katalis selektif daripada reagen stoikiometri.',
        aiContext: 'Prinsip 9: Catalysis. Katalis mempercepat reaksi, bisa dipakai ulang, dan hemat energi.',
        iconName: 'Repeat',
        suggestedQuestions: [
            "Apakah katalis ikut habis bereaksi?",
            "Apa contoh katalis dalam tubuh manusia?",
            "Bedanya katalis dan reagen stoikiometri?"
        ]
      },
      {
        id: 'p10_degradasi',
        title: '10. Desain Degradasi',
        description: 'Produk harus mudah terurai di lingkungan.',
        aiContext: 'Prinsip 10: Design for Degradation. Produk kimia harus terurai menjadi zat tidak berbahaya setelah dipakai.',
        iconName: 'Recycle',
        suggestedQuestions: [
            "Kenapa plastik biasa sulit terurai?",
            "Apa itu istilah biodegradable?",
            "Bagaimana deterjen zaman sekarang lebih ramah lingkungan?"
        ]
      },
      {
        id: 'p11_analisis',
        title: '11. Analisis Real-time',
        description: 'Pantau reaksi langsung untuk cegah polusi.',
        aiContext: 'Prinsip 11: Real-time analysis for Pollution Prevention. Analisis in-situ untuk cegah pembentukan zat bahaya.',
        iconName: 'Activity',
        suggestedQuestions: [
            "Kenapa analisis harus dilakukan saat reaksi berjalan?",
            "Bagaimana sensor bisa mencegah ledakan pabrik?"
        ]
      },
      {
        id: 'p12_kecelakaan',
        title: '12. Cegah Kecelakaan',
        description: 'Pilih zat yang minim risiko ledakan atau kebakaran.',
        aiContext: 'Prinsip 12: Inherently Safer Chemistry for Accident Prevention. Minimalkan potensi ledakan, kebakaran, dan kebocoran.',
        iconName: 'AlertTriangle',
        suggestedQuestions: [
            "Apa contoh tragedi akibat bahan kimia berbahaya?",
            "Bagaimana cara memilih bahan kimia yang aman?"
        ]
      }
    ]
  },
  {
    id: 'aplikasi',
    title: 'Penerapan Sehari-hari',
    description: 'Contoh nyata kimia hijau di sekitar kita.',
    subModules: [
      {
        id: 'biodiesel',
        title: 'Energi Alternatif (Biodiesel)',
        description: 'Pengganti bahan bakar fosil dari minyak nabati.',
        aiContext: 'Aplikasi: Biodiesel dari minyak jelantah/tumbuhan. Mengurangi emisi karbon.',
        iconName: 'Fuel',
        suggestedQuestions: [
            "Apakah minyak goreng bekas bisa jadi bahan bakar?",
            "Apa kelebihan biodiesel dibanding solar biasa?",
            "Jelaskan reaksi transesterifikasi dengan sederhana."
        ]
      },
      {
        id: 'bioplastik',
        title: 'Plastik Ramah Lingkungan',
        description: 'Plastik yang mudah terurai oleh alam.',
        aiContext: 'Aplikasi: Bioplastik dari pati singkong/jagung. Mudah terurai dibanding plastik konvensional.',
        iconName: 'Leaf',
        suggestedQuestions: [
            "Berapa lama bioplastik terurai di tanah?",
            "Apakah bioplastik sekuat plastik biasa?",
            "Apa bahan dasar pembuatan bioplastik?"
        ]
      }
    ]
  },
  {
    id: 'nano_global',
    title: 'Isu Global & Nanoteknologi',
    description: 'Menjelajahi tantangan pemanasan global dan solusi canggih nanoteknologi.',
    subModules: [
      {
        id: 'pemanasan_global',
        title: 'Pemanasan Global',
        description: 'Fakta, penyebab, dan dampak kenaikan suhu bumi.',
        aiContext: 'Pemanasan Global: Kenaikan suhu bumi akibat gas rumah kaca (CO2). Dampak: iklim ekstrem, es mencair.',
        iconName: 'Globe',
        suggestedQuestions: [
            "Apa hubungan kimia dengan pemanasan global?",
            "Gas apa yang paling berpengaruh pada efek rumah kaca?",
            "Apa yang bisa saya lakukan sebagai siswa?"
        ]
      },
      {
        id: 'konsep_nano',
        title: 'Konsep Nanoteknologi',
        description: 'Memahami materi dalam skala super kecil (nano).',
        aiContext: 'Nanoteknologi: Rekayasa materi skala 1-100 nm. Sifat material berubah drastis pada skala ini.',
        iconName: 'Microscope',
        suggestedQuestions: [
            "Seberapa kecil satu nanometer itu?",
            "Kenapa emas berwarna merah saat berukuran nano?",
            "Apa bahaya partikel nano bagi kesehatan?"
        ]
      },
      {
        id: 'aplikasi_nano',
        title: 'Aplikasi & Lingkungan',
        description: 'Nanoteknologi sebagai solusi masalah lingkungan.',
        aiContext: 'Aplikasi Nano: Nanokatalis (hemat energi), Sel Surya Nano, Nanofiltrasi air.',
        iconName: 'Thermometer',
        suggestedQuestions: [
            "Bagaimana nanoteknologi bisa membersihkan air?",
            "Apa itu sel surya nano?",
            "Apakah teknologi nano sudah dipakai di Indonesia?"
        ]
      }
    ]
  },
  // --- Coming Soon Modules ---
  {
    id: 'simulasi',
    title: 'Simulasi Lab Virtual',
    description: 'Eksperimen kimia aman secara virtual tanpa limbah berbahaya.',
    isComingSoon: true,
    subModules: [
      { id: 'sim_1', title: 'Pembuatan Biodiesel', description: 'Simulasi proses transesterifikasi.', aiContext: '', iconName: 'Beaker' },
      { id: 'sim_2', title: 'Reaksi Eksoterm', description: 'Mengamati perubahan suhu reaksi.', aiContext: '', iconName: 'Thermometer' }
    ]
  },
  {
    id: 'kalkulator',
    title: 'Kalkulator Jejak Karbon',
    description: 'Hitung seberapa besar dampak aktivitasmu terhadap lingkungan.',
    isComingSoon: true,
    subModules: [
      { id: 'calc_1', title: 'Emisi Transportasi', description: 'Hitung emisi kendaraanmu.', aiContext: '', iconName: 'Calculator' },
      { id: 'calc_2', title: 'Penggunaan Listrik', description: 'Analisis konsumsi energi rumah.', aiContext: '', iconName: 'Zap' }
    ]
  },
  {
    id: 'daur_ulang',
    title: 'Proyek Daur Ulang',
    description: 'Panduan langkah demi langkah membuat produk dari limbah.',
    isComingSoon: true,
    subModules: [
      { id: 'du_1', title: 'Kertas Daur Ulang', description: 'Membuat kertas baru dari kertas bekas.', aiContext: '', iconName: 'Recycle' },
      { id: 'du_2', title: 'Ecobrick', description: 'Mengubah sampah plastik menjadi bata ramah lingkungan.', aiContext: '', iconName: 'Blocks' }
    ]
  },
  {
    id: 'kompetisi',
    title: 'Kompetisi Cerdas Cermat',
    description: 'Tantang temanmu dalam kuis real-time tentang Kimia Hijau.',
    isComingSoon: true,
    subModules: [
      { id: 'quiz_1', title: 'Leaderboard Mingguan', description: 'Lihat peringkat siswa terbaik.', aiContext: '', iconName: 'Trophy' },
      { id: 'quiz_2', title: 'Battle Mode', description: '1 vs 1 melawan teman sekelas.', aiContext: '', iconName: 'Swords' }
    ]
  },
  {
    id: 'forum',
    title: 'Forum Diskusi Siswa',
    description: 'Berbagi ide dan bertanya kepada komunitas pelajar Indonesia.',
    isComingSoon: true,
    subModules: [
      { id: 'forum_1', title: 'Ruang Tanya Jawab', description: 'Diskusi PR dan proyek sekolah.', aiContext: '', iconName: 'MessageCircle' },
      { id: 'forum_2', title: 'Showcase Project', description: 'Pamerkan hasil karya daur ulangmu.', aiContext: '', iconName: 'Image' }
    ]
  }
];