
"use client";

import { useEffect } from "react";
import { useMetroStore } from "@/store/metroStore";

export const useStations = () => {
  const stations = useMetroStore((state) => state.stations);
  const isLoading = useMetroStore(
    (state) => state.isStationsLoading
  );
  const error = useMetroStore(
    (state) => state.stationsError
  );
  const fetchStations = useMetroStore(
    (state) => state.fetchStations
  );

  useEffect(() => {
    fetchStations();
  }, [fetchStations]);

return {
  stations,
  isLoading,
  error,
  fetchStations,
};
};
