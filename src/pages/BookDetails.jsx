import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useBooks } from '../context/BookContext';

export default function BookDetails() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const { addBook } = useBooks();

  useEffect(() => {
    fetch(`https://www.googleapis.com/books/v1/volumes/${id}`)
      .then((res) => res.json())
      .then((data) => setBook(data));
  }, [id]);

  if (!book) return <div className="p-6">Loading...</div>;

  const { title, authors, description, imageLinks } = book.volumeInfo;

  return (
    <div className="p-6">
      <img src={imageLinks?.thumbnail} alt={title} className="w-48 mb-4" />
      <h1 className="text-2xl font-bold mb-2">{title}</h1>
      <h2 className="text-md text-gray-700 mb-2">By {authors?.join(', ')}</h2>
      <p className="mb-4">{description}</p>
      <button
        onClick={() => addBook(book)}
        className="bg-green-600 text-white px-4 py-2"
      >
        Add to Library
      </button>
    </div>
  );
}