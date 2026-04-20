export type RideStatus = 'pending' | 'assigned' | 'in-progress' | 'completed';

export type RideRequest = {
  id: string;
  rider: string;
  pickup: string;
  dropoff: string;
  fare: number;
  status: RideStatus;
  etaMin: number;
  driver?: string;
};
