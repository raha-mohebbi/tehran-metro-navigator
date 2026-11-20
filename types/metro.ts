export interface Station {
  id: string;
  name: string;
  fa: string;
  lines: number[];
  lat: number;
  lng: number;
}

export interface StationsResponse {
  count: number;
  lines: number[];
  stations: Station[];
}

// movement between two station in order
export interface RouteHop {
  from: string;
  to: string;
  line: number;
  routeId: string;
}

// each part of the trip on a specific line
export interface RouteSegment {
  line: number;
  routeId: string;
  stations: string[];
  terminal: string;
}

//information of changing the line
export interface RouteConnection {
  type: string;
  stationId: string;
  fromLineId: number;
  toLineId: number;
  walkSeconds: number;
  waitSeconds: number;
}

//details of trip's time/date
export interface RouteBreakdown {
  initialWait: number;
  ride: number;
  transferWalk: number;
  transferWait: number;
  trainChangeWait: number;
  total: number;
}

// all the information of the way
export interface MetroRoute {
  stops: number;
  transfers: number;
  estimatedMinutes: number;
  estimatedArrival: string;
  status: string;
  path: string[];
  hops: RouteHop[];
  segments: RouteSegment[];
  connections: RouteConnection[];
  breakdownSeconds: RouteBreakdown;
}

export interface RouteResponse {
  route: MetroRoute;
}

export interface StationNeighbor {
  stationId: string;
  lineId: number;
  routeId: string;
  status: string;
}

export interface StationAmenities {
  wc: boolean;
  elevator: boolean;
  atm: boolean;
  coffeeShop: boolean;
  fastFood: boolean;
  groceryStore: boolean;
  freeWifi: boolean;
  prayerRoom: boolean;
  parking: boolean;
  police: boolean;
}

export interface StationDetails extends Station {
  legacyIds: string[];
  status: string;
  neighbors: StationNeighbor[];
  amenities: StationAmenities;
}