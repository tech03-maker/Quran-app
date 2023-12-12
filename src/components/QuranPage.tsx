/* eslint-disable @typescript-eslint/no-explicit-any */
// QuranPage.tsx
import React, { useState, useEffect } from "react";
import "../index.css";

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
    <div
      className="container justify-center h-screen items-center mt-5"
      style={{ marginLeft: "16px" }}
    >
      <h2>Quran Page</h2>
      {/* Display Quran data as needed */}
      <div className="flex gap-4 flex-wrap w-full">
        {quranData.map((surah: any) => (
          <div key={surah.number} className="w-[250px] bg-[#fff]">
            <button className="flex w-[250px] gap-3 justify-between rounded-md p-2 border border-gray-800 ">
              <div className="flex gap-3">
                <div className="w-8 bg-gray-100 flex justify-center items-center rounded-lg  h-8">
                  {surah.number}
                </div>
                <div className="flex flex-col gap-1 items-start">
                  <p className="font-bold">{surah.englishName}</p>
                  <p>{surah.englishNameTranslation}</p>
                  <p>Verse {surah.ayahs.length}</p>
                </div>
              </div>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuranPage;
