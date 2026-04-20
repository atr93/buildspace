import { useMemo, useState } from 'react';
import { LockScreen } from './components/LockScreen';
import { NoteEditor } from './components/NoteEditor';
import { NoteList } from './components/NoteList';
import { decryptText, deriveKey, encryptText, fromBase64, randomBytes, toBase64 } from './utils/crypto';
import { PlainNote, SecurePayload, StoredNote } from './types';

const STORAGE_KEY = 'secure-notes-v1';

function loadPayload(): SecurePayload | null {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw) as SecurePayload;
    if (parsed.version !== 1 || !parsed.salt || !Array.isArray(parsed.notes)) return null;
    return parsed;
  } catch {
    return null;
  }
}

function App() {
  const [payload, setPayload] = useState<SecurePayload | null>(() => loadPayload());
  const [key, setKey] = useState<CryptoKey | null>(null);
  const [notes, setNotes] = useState<PlainNote[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedNote = useMemo(() => notes.find((item) => item.id === selectedId) ?? null, [notes, selectedId]);

  const unlockVault = async (password: string) => {
    const current = payload ?? { version: 1 as const, salt: toBase64(randomBytes(16)), notes: [] };
    const saltBytes = fromBase64(current.salt);
    const derived = await deriveKey(password, saltBytes);

    const decrypted: PlainNote[] = [];
    for (const note of current.notes) {
      try {
        const content = await decryptText(note.encryptedContent, note.iv, derived);
        decrypted.push({ id: note.id, title: note.title, content, updatedAt: note.updatedAt });
      } catch {
        throw new Error('Invalid password or corrupted vault data.');
      }
    }

    setPayload(current);
    setKey(derived);
    setNotes(decrypted.sort((a, b) => b.updatedAt.localeCompare(a.updatedAt)));
    setSelectedId(decrypted[0]?.id ?? null);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(current));
  };

  const lockVault = () => {
    setKey(null);
    setNotes([]);
    setSelectedId(null);
  };

  const persistNotes = async (next: PlainNote[]) => {
    if (!key || !payload) return;

    const encrypted: StoredNote[] = [];
    for (const note of next) {
      const result = await encryptText(note.content, key);
      encrypted.push({
        id: note.id,
        title: note.title,
        encryptedContent: result.cipher,
        iv: result.iv,
        updatedAt: note.updatedAt
      });
    }

    const nextPayload: SecurePayload = { ...payload, notes: encrypted };
    setPayload(nextPayload);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(nextPayload));
  };

  const saveNote = async ({ id, title, content }: { id?: string; title: string; content: string }) => {
    if (!key) return;
    const now = new Date().toISOString();
    const next = id
      ? notes.map((note) => (note.id === id ? { ...note, title, content, updatedAt: now } : note))
      : [{ id: crypto.randomUUID(), title, content, updatedAt: now }, ...notes];

    const sorted = [...next].sort((a, b) => b.updatedAt.localeCompare(a.updatedAt));
    setNotes(sorted);
    setSelectedId(id ?? sorted[0].id);
    await persistNotes(sorted);
  };

  const deleteNote = async (id: string) => {
    const next = notes.filter((note) => note.id !== id);
    setNotes(next);
    setSelectedId(next[0]?.id ?? null);
    await persistNotes(next);
  };

  if (!key) {
    return (
      <main className="layout">
        <LockScreen hasVault={Boolean(payload)} onUnlock={unlockVault} />
      </main>
    );
  }

  return (
    <main className="layout">
      <header className="card header">
        <div>
          <h1>Secure Notes</h1>
          <p className="muted">AES-GCM encrypted note content stored locally. Lock to hide all plaintext.</p>
        </div>
        <button onClick={lockVault}>Lock Vault</button>
      </header>
      <section className="workspace">
        <NoteList notes={notes} selectedId={selectedId} onSelect={setSelectedId} onDelete={deleteNote} />
        <NoteEditor note={selectedNote} onSave={saveNote} />
      </section>
    </main>
  );
}

export default App;
