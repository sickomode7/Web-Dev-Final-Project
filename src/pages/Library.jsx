import { useBooks } from '../context/BookContext';
import BookCard from '../components/BookCard';

export default function Library() {
  const { savedBooks } = useBooks();

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">My Library</h1>
      {savedBooks.length === 0 ? (
        <p>No books saved yet.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {savedBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      )}
    </div>
  );
}