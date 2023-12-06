/* eslint-disable @typescript-eslint/no-explicit-any */
// QuranPage.tsx
import React, { useState, useEffect } from "react";

const QuranPage: React.FC = () => {
  const [quranData, setQuranData] = useState<any[]>([]);

  const YOUR_QURAN_API_ENDPOINT =
    "http://api.alquran.cloud/v1/quran/quran-uthmani";

  useEffect(() => {
    const fetchQuranData = async () => {
      try {
        const response = await fetch(YOUR_QURAN_API_ENDPOINT);
        const data = await response.json();
        console.log(data);
        setQuranData(data.data?.surahs);
      } catch (error) {
        console.error("Error fetching Quran data:", error);
      }
    };

    fetchQuranData();
  }, []);

  return (
    <div style={{ marginLeft: "16px" }}>
      <h2>Quran Page</h2>
      {/* Display Quran data as needed */}
      {quranData.map((surah: any) => (
        <div key={surah.number}>
          <div style={{ display: "flex" }}>
            <p>Surah : &nbsp;</p>
            <p>{surah.number}</p>
          </div>

          <p>{surah.name}</p>

          <p>
            {surah.ayahs.map((verse: any) => (
              <div style={{ display: "flex" }}>
                <p>Page : &nbsp;</p>
                <p>{verse.number}</p>
              </div>
            ))}
          </p>
        </div>
      ))}
    </div>
  );
};

export default QuranPage;
