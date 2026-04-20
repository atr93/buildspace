import { RideRequest } from '../types';

export const initialRides: RideRequest[] = [
  { id: 'R-1102', rider: 'A. Gomez', pickup: 'Downtown Hub', dropoff: 'Riverside Ave', fare: 14.2, status: 'pending', etaMin: 6 },
  { id: 'R-1103', rider: 'D. Chen', pickup: 'North Station', dropoff: 'Lakeview Park', fare: 21.5, status: 'assigned', etaMin: 8, driver: 'Mia K.' },
  { id: 'R-1104', rider: 'R. Patel', pickup: 'City Mall', dropoff: 'Tech District', fare: 11.8, status: 'in-progress', etaMin: 4, driver: 'Andre T.' },
  { id: 'R-1101', rider: 'J. Lee', pickup: 'West End', dropoff: 'Airport Terminal B', fare: 32.4, status: 'completed', etaMin: 0, driver: 'Sara W.' }
];

export const availableDrivers = ['Mia K.', 'Andre T.', 'Sara W.', 'Leo M.', 'Noah P.'];
