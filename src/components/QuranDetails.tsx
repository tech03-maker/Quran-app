import React, { Key, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./quranDetails.css";

interface Verse {
  number: Key | null | undefined;
  // Define the structure of a verse
  verseNumber: number;
  text: string;
}

interface SurahDetailsProps {
  // Define any additional props if needed
}

const QuranDetails: React.FC<SurahDetailsProps> = () => {
  const { id } = useParams<{ id: string }>();
  const [verses, setVerses] = useState<Verse[]>([]);

  useEffect(() => {
    // Fetch verses from the API based on the Surah ID
    const fetchVerses = async () => {
      try {
        const response = await fetch(
          `https://api.alquran.cloud/v1/quran/quran-uthmani`
        );
        const data = await response.json();

        const surah = data.data.surahs.find(
          (elem: { number: string | undefined }) => elem.number == id
        );
        setVerses(surah.ayahs);
      } catch (error) {
        console.error("Error fetching verses:", error);
      }
    };

    fetchVerses();
  }, [id]);

  console.log(verses);

  return (
    <div className="body">
      <div className="container p-3">
        <h2 className="text-white">Surah {id} </h2>
        {/* Render the fetched verses here */}
        <ul className="mt-3">
          {verses.length > 0 &&
            verses.map((verse) => (
              <li className="ayah_list mt-3 fw-bold p-4" key={verse.number}>
                {verse.text}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default QuranDetails;
