import { useEffect, useState } from "react";

type seriesType = {
  id: number;
  title: string;
  synopsis: string;
  poster: string;
};

export default function Programs() {
  const [series, setSeries] = useState<seriesType[]>([]);
  useEffect(() => {
    fetch("http://localhost:3310/api/programs")
      .then((response) => response.json())
      .then((data) => setSeries(data));
  }, []);
  return (
    <div>
      {series.map((s) => (
        <div key={s.id}>
          <h1>{s.title}</h1>
          <h2> {s.synopsis}</h2>
          <img src={s.poster} alt="poster" />
        </div>
      ))}
    </div>
  );
}
