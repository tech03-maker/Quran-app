/* eslint-disable @typescript-eslint/no-explicit-any */
// QuranPage.tsx
import React, { useState, useEffect } from "react";

const QuranPage: React.FC = () => {
  const [quranData, setQuranData] = useState<any[]>([]);

  useEffect(() => {
    const fetchQuranData = async () => {
      try {
        const response = await fetch("YOUR_QURAN_API_ENDPOINT");
        const data = await response.json();
        setQuranData(data);
      } catch (error) {
        console.error("Error fetching Quran data:", error);
      }
    };

    fetchQuranData();
  }, []);

  return (
    <div>
      <h2>Quran Page</h2>
      {/* Display Quran data as needed */}
      {quranData.map((verse: any) => (
        <div key={verse.number}>
          <p>{verse.text}</p>
        </div>
      ))}
    </div>
  );
};

export default QuranPage;
