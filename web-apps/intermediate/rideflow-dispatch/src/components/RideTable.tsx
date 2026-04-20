import { RideRequest } from '../types';

type RideTableProps = {
  rides: RideRequest[];
  onAssign: (rideId: string, driver: string) => void;
  onAdvance: (rideId: string) => void;
  drivers: string[];
};

const nextStatus: Record<RideRequest['status'], RideRequest['status']> = {
  pending: 'assigned',
  assigned: 'in-progress',
  'in-progress': 'completed',
  completed: 'completed'
};

export function RideTable({ rides, onAssign, onAdvance, drivers }: RideTableProps) {
  return (
    <section className="card">
      <h2>Dispatch Queue</h2>
      <table>
        <thead>
          <tr>
            <th>Ride</th><th>Route</th><th>Fare</th><th>Status</th><th>Driver</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {rides.map((ride) => (
            <tr key={ride.id}>
              <td><strong>{ride.id}</strong><div>{ride.rider}</div></td>
              <td>{ride.pickup} → {ride.dropoff}<div>{ride.etaMin} min ETA</div></td>
              <td>${ride.fare.toFixed(2)}</td>
              <td><span className={`pill ${ride.status}`}>{ride.status}</span></td>
              <td>
                {ride.status === 'pending' ? (
                  <select onChange={(e) => onAssign(ride.id, e.target.value)} defaultValue="">
                    <option value="" disabled>Assign driver</option>
                    {drivers.map((driver) => <option key={driver}>{driver}</option>)}
                  </select>
                ) : ride.driver ?? '—'}
              </td>
              <td>
                <button disabled={ride.status === 'completed' || ride.status === 'pending'} onClick={() => onAdvance(ride.id)}>
                  Mark {nextStatus[ride.status]}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
