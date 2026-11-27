"use client";

//this component is responsible for gathering two StationSelector :
// choosing the start station
//choosing the destination station
//movement between start and destination
//prepare for search path button

import { ArrowDownUp } from "lucide-react";

import StationSelector from "./StationSelector";
import { useMetroStore } from "@/store/metroStore";

const RouteForm = () => {
  const stations = useMetroStore((state) => state.stations);
  const fromStation = useMetroStore((state) => state.fromStation);
  const toStation = useMetroStore((state) => state.toStation);

  const setFromStation = useMetroStore((state) => state.setFromStation);

  const setToStation = useMetroStore((state) => state.setToStation);

  const handleSwapStations = () => {
    setFromStation(toStation);
    setToStation(fromStation);
  };
  const isRouteLoading = useMetroStore((state) => state.isRouteLoading);

  const routeError = useMetroStore((state) => state.routeError);

  const fetchRoute = useMetroStore((state) => state.fetchRoute);

  const route = useMetroStore((state) => state.route);
  return (
    <section className="w-full rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      <h2 className="mb-5 text-lg font-bold text-gray-900">انتخاب مسیر</h2>

      <div className="flex flex-col gap-4">
        <StationSelector
          label="مبدأ"
          stations={stations}
          selectedStation={fromStation}
          onSelect={setFromStation}
        />

        <div className="flex justify-center">
          <button
            type="button"
            onClick={handleSwapStations}
            disabled={!fromStation && !toStation}
            aria-label="جابه‌جایی مبدأ و مقصد"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-gray-600 transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ArrowDownUp size={18} />
          </button>
        </div>

        <StationSelector
          label="مقصد"
          stations={stations}
          selectedStation={toStation}
          onSelect={setToStation}
        />
        <button
          type="button"
          onClick={fetchRoute}
          disabled={
            !fromStation ||
            !toStation ||
            fromStation.id === toStation.id ||
            isRouteLoading
          }
          className="mt-2 w-full rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-300"
        >
          {isRouteLoading ? "در حال محاسبه مسیر..." : "جستجوی مسیر"}
        </button>
        {routeError && (
          <p role="alert" className="text-sm text-red-600">
            {routeError}
          </p>
        )}
        {route && (
          <div className="rounded-lg bg-green-50 p-4 text-sm text-green-700">
            مسیر با موفقیت محاسبه شد.
            <p>تعداد ایستگاه‌ها: {route.stops + 1}</p>
            <p>تعداد تعویض خط: {route.transfers}</p>
            <p>زمان تخمینی: {route.estimatedMinutes} دقیقه</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default RouteForm;
