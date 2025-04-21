import { createContext, useState, useContext } from 'react';

const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [savedBooks, setSavedBooks] = useState([]);

  const addBook = (book) => {
    setSavedBooks((prev) => [...prev, book]);
  };

  return (
    <BookContext.Provider value={{ savedBooks, addBook }}>
      {children}
    </BookContext.Provider>
  );
};

export const useBooks = () => useContext(BookContext);