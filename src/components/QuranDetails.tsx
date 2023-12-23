import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

interface Verse {
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
        const response = await fetch(`https://api.quran.com/api/v4/surahs/${id}/verses`);
        const data = await response.json();
        setVerses(data.verses);
      } catch (error) {
        console.error('Error fetching verses:', error);
      }
    };

    fetchVerses();
  }, [id]);

  return (
    <div>
      <h2>Surah {id} Details</h2>
      {/* Render the fetched verses here */}
      <ul>
        {verses.map((verse) => (
          <li key={verse.verseNumber}>{verse.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default QuranDetails;
