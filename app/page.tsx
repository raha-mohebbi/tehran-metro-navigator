"use client";

import { useStations } from "@/hooks/useStations";

export default function Home() {
  const { stations, isLoading, error, fetchStations } = useStations();

  if (isLoading) {
    return <p>در حال دریافت ایستگاه‌ها...</p>;
  }

  if (error) {
    return (
      <div>
        <p>{error}</p>
        <button onClick={fetchStations}>تلاش مجدد</button>
      </div>
    );
  }

  return (
    <main>
      <h1>Tehran Metro Navigator</h1>
      <p>تعداد ایستگاه‌ها: {stations.length}</p>

      <ul>
        {stations.slice(0, 10).map((station) => (
          <li key={station.id}>
            {station.fa} - {station.name}
          </li>
        ))}
      </ul>
    </main>
  );
}
