import { useState } from 'react';
import BookCard from '../components/BookCard';

export default function Home() {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
    const data = await res.json();
    setBooks(data.items || []);
  };

  return (
    <div className="p-6">
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          className="border p-2 w-full"
          placeholder="Search books..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={fetchBooks} className="bg-blue-600 text-white px-4 py-2">Search</button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}