import { useMemo, useState } from 'react';
import { RequestForm } from './components/RequestForm';
import { RideTable } from './components/RideTable';
import { availableDrivers, initialRides } from './data/mockRides';
import { RideRequest } from './types';

function App() {
  const [rides, setRides] = useState<RideRequest[]>(initialRides);

  const metrics = useMemo(() => {
    return {
      active: rides.filter((item) => item.status !== 'completed').length,
      completed: rides.filter((item) => item.status === 'completed').length,
      revenue: rides.reduce((sum, item) => sum + (item.status === 'completed' ? item.fare : 0), 0)
    };
  }, [rides]);

  const createRequest = (input: { rider: string; pickup: string; dropoff: string; fare: number; etaMin: number }) => {
    const id = `R-${Math.floor(1000 + Math.random() * 9000)}`;
    setRides([{ ...input, id, status: 'pending' }, ...rides]);
  };

  const assign = (rideId: string, driver: string) => {
    setRides(rides.map((ride) => ride.id === rideId ? { ...ride, driver, status: 'assigned' } : ride));
  };

  const advance = (rideId: string) => {
    setRides(rides.map((ride) => {
      if (ride.id !== rideId) return ride;
      if (ride.status === 'assigned') return { ...ride, status: 'in-progress' };
      if (ride.status === 'in-progress') return { ...ride, status: 'completed', etaMin: 0 };
      return ride;
    }));
  };

  return (
    <main className="layout">
      <header className="card">
        <h1>RideFlow Dispatch</h1>
        <p>Uber-style dispatcher simulation using mock rides, driver assignment, and status progression.</p>
        <div className="kpis">
          <span>Active rides: {metrics.active}</span>
          <span>Completed rides: {metrics.completed}</span>
          <span>Completed revenue: ${metrics.revenue.toFixed(2)}</span>
        </div>
      </header>
      <RequestForm onCreate={createRequest} />
      <RideTable rides={rides} onAssign={assign} onAdvance={advance} drivers={availableDrivers} />
    </main>
  );
}

export default App;
