import { FormEvent, useState } from 'react';

type RequestFormProps = {
  onCreate: (input: { rider: string; pickup: string; dropoff: string; fare: number; etaMin: number }) => void;
};

export function RequestForm({ onCreate }: RequestFormProps) {
  const [rider, setRider] = useState('');
  const [pickup, setPickup] = useState('');
  const [dropoff, setDropoff] = useState('');
  const [fare, setFare] = useState('');
  const [eta, setEta] = useState('');
  const [error, setError] = useState('');

  const submit = (event: FormEvent) => {
    event.preventDefault();
    setError('');

    const parsedFare = Number(fare);
    const parsedEta = Number(eta);
    if (!rider.trim() || !pickup.trim() || !dropoff.trim()) return setError('All text fields are required.');
    if (!Number.isFinite(parsedFare) || parsedFare <= 0) return setError('Fare must be greater than 0.');
    if (!Number.isFinite(parsedEta) || parsedEta < 1) return setError('ETA must be at least 1 minute.');

    onCreate({ rider: rider.trim(), pickup: pickup.trim(), dropoff: dropoff.trim(), fare: parsedFare, etaMin: parsedEta });
    setRider('');
    setPickup('');
    setDropoff('');
    setFare('');
    setEta('');
  };

  return (
    <form className="card form" onSubmit={submit}>
      <h2>New Ride Request</h2>
      <input value={rider} onChange={(e) => setRider(e.target.value)} placeholder="Rider name" />
      <input value={pickup} onChange={(e) => setPickup(e.target.value)} placeholder="Pickup" />
      <input value={dropoff} onChange={(e) => setDropoff(e.target.value)} placeholder="Dropoff" />
      <div className="row">
        <input type="number" min="1" step="0.1" value={fare} onChange={(e) => setFare(e.target.value)} placeholder="Fare" />
        <input type="number" min="1" value={eta} onChange={(e) => setEta(e.target.value)} placeholder="ETA min" />
      </div>
      {error && <p className="error">{error}</p>}
      <button type="submit">Create Request</button>
    </form>
  );
}
