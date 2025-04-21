import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AddBook from './pages/AddBook';
import Library from './pages/Library';
import BookDetails from './pages/BookDetails';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddBook />} />
        <Route path="/library" element={<Library />} />
        <Route path="/book/:id" element={<BookDetails />} />
      </Routes>
    </div>
  );
}