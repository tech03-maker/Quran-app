import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./quranDetails.css";

interface Verse {
  number: number;
  verseNumber: number;
  text: string;
  translation: string;
}

interface SurahDetailsProps {}

const QuranDetails: React.FC<SurahDetailsProps> = () => {
  const { id } = useParams<{ id: string }>();
  const [verses, setVerses] = useState<Verse[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchVerses = async () => {
      try {
        // Fetch Arabic text
        const response = await fetch(
          `https://api.alquran.cloud/v1/quran/quran-uthmani`
        );

        if (!response.ok) {
          throw new Error(
            `Failed to fetch Arabic verses. Status: ${response.status}`
          );
        }

        const data = await response.json();
        const surah = data.data.surahs.find(
          (elem: { number: string | undefined }) => elem.number === id
        );

        // Fetch translation text
        const translationResponse = await fetch(
          `http://api.alquran.cloud/v1/quran/en.asad/${id}`
        );

        if (!translationResponse.ok) {
          throw new Error(
            `Failed to fetch translation. Status: ${translationResponse.status}`
          );
        }

        const translationData = await translationResponse.json();

        // Combine Arabic and translation data
        const combinedVerses = surah.ayahs.map(
          (arabicVerse: { number: number; text: string }, index: number) => {
            return {
              number: arabicVerse.number,
              verseNumber: index + 1,
              text: arabicVerse.text,
              translation: translationData.data.ayahs[index]?.translations[0].text || "N/A",
            };
          }
        );

        setVerses(combinedVerses);
        setLoading(false);
      } catch (error) {
        // console.error("Error fetching verses:", error.message);
        setError("Failed to fetch verses. Please try again later.");
        setLoading(false);
      }
    };

    fetchVerses();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="body">
      <div className="container p-3">
        <h2 className="text-white">Surah {id} </h2>
        <ul className="mt-3">
          {verses.length > 0 &&
            verses.map((verse) => (
              <li className="ayah_list mt-3 fw-bold p-4" key={verse.number}>
                <div>
                  <span className="arabic-text">{verse.text}</span>
                </div>
                <div className="translation-text">{verse.translation}</div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default QuranDetails;
