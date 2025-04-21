import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-white shadow p-4 flex justify-between">
      <h1 className="text-xl font-bold text-blue-600">📚 Readify</h1>
      <div className="flex gap-4">
        <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
        <Link to="/add" className="text-gray-700 hover:text-blue-600">Add Book</Link>
        <Link to="/library" className="text-gray-700 hover:text-blue-600">My Library</Link>
      </div>
    </nav>
  );
}