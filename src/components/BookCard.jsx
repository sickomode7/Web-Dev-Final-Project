import { Link } from 'react-router-dom';

export default function BookCard({ book }) {
  const { title, authors, imageLinks } = book.volumeInfo;

  return (
    <div className="bg-white p-4 shadow rounded">
      <img
        src={imageLinks?.thumbnail || 'https://via.placeholder.com/128x192'}
        alt={title}
        className="w-full h-48 object-cover mb-2"
      />
      <h2 className="text-md font-semibold">{title}</h2>
      <p className="text-sm text-gray-600">{authors?.join(', ')}</p>
      <Link to={`/book/${book.id}`} className="text-blue-500 text-sm">Details</Link>
    </div>
  );
}