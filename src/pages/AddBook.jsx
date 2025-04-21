import { useState } from 'react';
import { useBooks } from '../context/BookContext';

export default function AddBook() {
  const { addBook } = useBooks();
  const [form, setForm] = useState({ title: '', author: '', description: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      id: Date.now(),
      volumeInfo: {
        title: form.title,
        authors: [form.author],
        description: form.description,
        imageLinks: { thumbnail: 'https://via.placeholder.com/128x192' },
      },
    };
    addBook(newBook);
    setForm({ title: '', author: '', description: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 max-w-lg mx-auto">
      <input
        type="text"
        placeholder="Title"
        className="border p-2 w-full mb-4"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
        required
      />
      <input
        type="text"
        placeholder="Author"
        className="border p-2 w-full mb-4"
        value={form.author}
        onChange={(e) => setForm({ ...form, author: e.target.value })}
        required
      />
      <textarea
        placeholder="Description"
        className="border p-2 w-full mb-4"
        value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })}
        required
      ></textarea>
      <button type="submit" className="bg-blue-600 text-white px-4 py-2">
        Add Book
      </button>
    </form>
  );
}