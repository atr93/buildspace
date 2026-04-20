import { FormEvent, useEffect, useState } from 'react';
import { PlainNote } from '../types';

type NoteEditorProps = {
  note: PlainNote | null;
  onSave: (input: { id?: string; title: string; content: string }) => Promise<void>;
};

export function NoteEditor({ note, onSave }: NoteEditorProps) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    setTitle(note?.title ?? '');
    setContent(note?.content ?? '');
    setMessage('');
  }, [note]);

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    if (!title.trim() || !content.trim()) {
      setMessage('Both title and content are required.');
      return;
    }

    await onSave({ id: note?.id, title: title.trim(), content: content.trim() });
    setMessage('Saved securely.');
  };

  return (
    <section className="card note-editor">
      <h2>{note ? 'Edit Note' : 'New Note'}</h2>
      <form onSubmit={submit}>
        <input value={title} onChange={(event) => setTitle(event.target.value)} placeholder="Note title" maxLength={80} />
        <textarea
          value={content}
          onChange={(event) => setContent(event.target.value)}
          rows={12}
          placeholder="Write your secure note..."
        />
        {message && <p className="muted">{message}</p>}
        <button type="submit">Save Note</button>
      </form>
    </section>
  );
}
