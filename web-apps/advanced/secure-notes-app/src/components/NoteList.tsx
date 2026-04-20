import { PlainNote } from '../types';

type NoteListProps = {
  notes: PlainNote[];
  selectedId: string | null;
  onSelect: (id: string) => void;
  onDelete: (id: string) => Promise<void>;
};

export function NoteList({ notes, selectedId, onSelect, onDelete }: NoteListProps) {
  return (
    <aside className="card note-list">
      <h2>Notes</h2>
      {notes.length === 0 && <p className="muted">No notes yet. Create your first secure note.</p>}
      <ul>
        {notes.map((note) => (
          <li key={note.id} className={selectedId === note.id ? 'active' : ''}>
            <button onClick={() => onSelect(note.id)}>
              <strong>{note.title || 'Untitled'}</strong>
              <span>{new Date(note.updatedAt).toLocaleString()}</span>
            </button>
            <button className="danger" onClick={() => onDelete(note.id)} aria-label={`Delete ${note.title}`}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
