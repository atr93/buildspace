type LockScreenProps = {
  hasVault: boolean;
  onUnlock: (password: string) => Promise<void>;
};

import { FormEvent, useState } from 'react';

export function LockScreen({ hasVault, onUnlock }: LockScreenProps) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    setError('');

    if (password.length < 8) {
      setError('Password must be at least 8 characters long.');
      return;
    }

    try {
      await onUnlock(password);
      setPassword('');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unable to unlock vault.');
    }
  };

  return (
    <section className="lock-screen card">
      <h1>{hasVault ? 'Unlock Secure Notes' : 'Create Secure Vault'}</h1>
      <p>{hasVault ? 'Enter your vault password to decrypt notes.' : 'Set a vault password to start storing encrypted notes locally.'}</p>
      <form onSubmit={submit}>
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Vault password"
        />
        {error && <p className="error">{error}</p>}
        <button type="submit">{hasVault ? 'Unlock Vault' : 'Create Vault'}</button>
      </form>
    </section>
  );
}
