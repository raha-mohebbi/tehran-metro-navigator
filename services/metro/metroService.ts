// functions which receive stations, station details, process the way


import api from "./api";

import type {
  StationsResponse,
  StationDetails,
  RouteResponse,
} from "@/types/metro";

export const getStations = async (): Promise<StationsResponse> => {
  const response = await api.get<StationsResponse>("/stations");

  return response.data;
};

export const getStationById = async (
  id: string
): Promise<StationDetails> => {
  const response = await api.get<StationDetails>(`/station/${id}`);

  return response.data;
};

export const getRoute = async (
  from: string,
  to: string
): Promise<RouteResponse> => {
  const response = await api.get<RouteResponse>("/route", {
    params: { from, to },
  });

  return response.data;
};

