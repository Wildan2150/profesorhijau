
import { GoogleGenAI, GenerateContentResponse, Type } from "@google/genai";
import { LEARNING_MODULES } from "../constants";

// Initialize Gemini API
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

// Create a summary of available modules for the AI context
const MODULE_CONTEXT = LEARNING_MODULES.map(m => 
  `- ID: ${m.id}, Judul: "${m.title}", Deskripsi: "${m.description}"`
).join('\n');

export const askGeminiTutor = async (
  question: string, 
  context: string
): Promise<string> => {
  try {
    const systemPrompt = `
      Kamu adalah "Professor Hijau", asisten tutor AI untuk Kimia Hijau kelas 10 SMA.
      
      PERAN UTAMA:
      1. **Pemandu Belajar**: Jelaskan konsep sulit dengan bahasa remaja yang santai tapi akurat. Gunakan analogi sehari-hari.
      2. **Pemandu Inkuiri (Socrates)**: JANGAN langsung memberikan jawaban penuh. Pancing siswa berpikir.
      3. **Pemantik Pemikiran**: Hubungkan dengan isu nyata atau masa depan bumi.

      INTEGRASI MODUL APLIKASI:
      Berikut adalah daftar modul yang tersedia di aplikasi ini:
      ${MODULE_CONTEXT}

      INSTRUKSI PENTING (REKOMENDASI MODUL):
      - Jika penjelasanmu berkaitan erat dengan salah satu modul di atas, KAMU WAJIB merekomendasikan modul tersebut di akhir jawaban.
      - Gunakan format tag persis seperti ini: [[MODUL:id_modul]] (Contoh: [[MODUL:intro]] atau [[MODUL:prinsip]]).
      - Jangan ubah format tag tersebut, karena akan dibaca oleh sistem untuk membuat tombol navigasi.

      INSTRUKSI LAIN:
      - Gaya bicara: Ramah, antusias, suportif, emoji 🌱⚗️.
      - Konteks saat ini: ${context}
      - Di AKHIR setiap respons, berikan satu pertanyaan reflektif.
    `;

    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: question,
      config: {
        systemInstruction: systemPrompt,
      }
    });

    return response.text || "Maaf, Professor Hijau sedang meneliti data baru. Coba tanya lagi ya!";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Terjadi gangguan sinyal di lab Professor Hijau. Pastikan koneksi internetmu lancar ya! 📡";
  }
};

export const generateQuizQuestion = async (topic: string): Promise<any> => {
    try {
        const prompt = `Buatkan 1 soal kuis pilihan ganda (A, B, C, D) yang menantang tentang topik: "${topic}".
        Format output HARUS JSON dengan struktur:
        {
            "question": "teks soal",
            "options": ["A. pilihan 1", "B. pilihan 2", "C. pilihan 3", "D. pilihan 4"],
            "answer": "A", // atau B/C/D
            "explanation": "penjelasan singkat kenapa jawaban itu benar"
        }
        Pastikan soal relevan dengan prinsip Kimia Hijau kelas 10.`;

        const response: GenerateContentResponse = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt,
            config: {
                responseMimeType: "application/json",
                responseSchema: {
                  type: Type.OBJECT,
                  properties: {
                    question: { type: Type.STRING },
                    options: { type: Type.ARRAY, items: { type: Type.STRING } },
                    answer: { type: Type.STRING },
                    explanation: { type: Type.STRING }
                  }
                }
            }
        });

        const text = response.text;
        if (!text) throw new Error("No response text");
        
        const result = JSON.parse(text);
        
        // Validate structure
        if (!result.options || !Array.isArray(result.options) || result.options.length === 0) {
            throw new Error("Invalid quiz format: options missing");
        }
        
        return result;
    } catch (error) {
        console.error("Quiz Gen Error:", error);
        return {
            question: "Gagal memuat soal. Coba lagi?",
            options: ["A. Error", "B. Error", "C. Error", "D. Error"],
            answer: "A",
            explanation: "Silakan refresh atau coba beberapa saat lagi."
        };
    }
};
