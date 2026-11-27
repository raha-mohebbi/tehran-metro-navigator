import { create } from "zustand";

import type { Station, MetroRoute } from "@/types/metro";
import { getStations } from "@/services/metro/metroService";

interface MetroState {
  stations: Station[];
  fromStation: Station | null;
  toStation: Station | null;
  route: MetroRoute | null;

  isStationsLoading: boolean;
  stationsError: string | null;

  isRouteLoading: boolean;
  routeError: string | null;

  setStations: (stations: Station[]) => void;
  setFromStation: (station: Station | null) => void;
  setToStation: (station: Station | null) => void;
  setRoute: (route: MetroRoute | null) => void;

  setStationsLoading: (loading: boolean) => void;
  setStationsError: (error: string | null) => void;

  setRouteLoading: (loading: boolean) => void;
  setRouteError: (error: string | null) => void;

  clearRoute: () => void;
  fetchStations: () => Promise<void>;
}

export const useMetroStore = create<MetroState>((set, get) => ({
  stations: [],
  fromStation: null,
  toStation: null,
  route: null,

  isStationsLoading: false,
  stationsError: null,

  isRouteLoading: false,
  routeError: null,

  setStations: (stations) => set({ stations }),
  fetchStations: async () => {
    const { stations, isStationsLoading } = get();

    if (stations.length > 0 || isStationsLoading) return;

    set({
      isStationsLoading: true,
      stationsError: null,
    });

    try {
      const data = await getStations();

      set({
        stations: data.stations,
      });
    } catch (error) {
      console.error("Get Stations Error:", error);

      set({
        stationsError: "دریافت ایستگاه‌های مترو با خطا مواجه شد.",
      });
    } finally {
      set({
        isStationsLoading: false,
      });
    }
  },

  setFromStation: (station) => set({ fromStation: station, route: null }),

  setToStation: (station) => set({ toStation: station, route: null }),

  setRoute: (route) => set({ route }),

  setStationsLoading: (loading) => set({ isStationsLoading: loading }),

  setStationsError: (error) => set({ stationsError: error }),

  setRouteLoading: (loading) => set({ isRouteLoading: loading }),

  setRouteError: (error) => set({ routeError: error }),

  clearRoute: () => set({ route: null }),
}));
