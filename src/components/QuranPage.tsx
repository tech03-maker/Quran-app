/* eslint-disable @typescript-eslint/no-explicit-any */
// QuranPage.tsx
import React, { useState, useEffect } from "react";
import "../index.css";
import { Link } from "react-router-dom";

const QuranPage: React.FC = () => {
  const [quranData, setQuranData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const YOUR_QURAN_API_ENDPOINT =
    "https://api.alquran.cloud/v1/quran/quran-uthmani";

  useEffect(() => {
    const fetchQuranData = async () => {
      try {
        setLoading(true);
        const response = await fetch(YOUR_QURAN_API_ENDPOINT);
        const data = await response.json();
        console.log(data);
        setQuranData(data.data?.surahs);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error("Error fetching Quran data:", error);
      }
    };

    fetchQuranData();
  }, []);

  return (
    <div
      className="container  mt-5 m-auto animate__animated animate__fadeInUp"
      style={{ marginLeft: "16px" }}
    >
      <h2 className="fw-bold">Quran Page</h2>
      {/* Display Quran data as needed */}
      <div className="flex gap-4 flex-wrap w-full">
        {loading && <div>Loading</div>}
        {quranData.map((surah: any) => (
          <div key={surah.number} className="w-[350px] bg-[#fff ]">
            {/* Use Link instead of a button for navigation */}
            <Link
              to={`/surah/${surah.number}`}
              className="surah_link flex w-[350px] gap-3 justify-between rounded-md p-2 border border-gray-800"
            >
              <div className="flex gap-3">
                <div className="surah_number w-8 bg-gray-100 flex justify-center items-center rounded-lg  h-8">
                  {surah.number}
                </div>
                <div className="flex flex-col gap-1 items-start">
                  <p className="font-bold">{surah.englishName}</p>
                  <p>{surah.englishNameTranslation}</p>
                  <p>Verse {surah.ayahs.length}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuranPage;
