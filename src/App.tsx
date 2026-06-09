import { useState } from "react";

import Navbar from "./components/Navbar";
import BookForm from "./components/BookForm";
import BookCard from "./components/BookCard";

import { Book } from "./types/Book";

import "./App.css";

function App() {
  const [activeTab, setActiveTab] =
    useState("books");

  const [books, setBooks] = useState<Book[]>([
    {
      id: 1,
      title: "Atomic Habits",
      author: "James Clear",
      price: 499,
      favorite: true,
    },
    {
      id: 2,
      title: "Rich Dad Poor Dad",
      author: "Robert Kiyosaki",
      price: 399,
      favorite: false,
    },
  ]);

  const addBook = (
    title: string,
    author: string,
    price: number
  ) => {
    const newBook: Book = {
      id: Date.now(),
      title,
      author,
      price,
      favorite: false,
    };

    setBooks([...books, newBook]);
  };

  const deleteBook = (id: number) => {
    setBooks(
      books.filter(
        (book) => book.id !== id
      )
    );
  };

  const toggleFavorite = (id: number) => {
    setBooks(
      books.map((book) =>
        book.id === id
          ? {
              ...book,
              favorite: !book.favorite,
            }
          : book
      )
    );
  };

  const favoriteBooks = books.filter(
    (book) => book.favorite
  );

  return (
    <>
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <div className="container">
        {activeTab === "books" && (
          <>
            <h2>Books List</h2>

            {books.map((book) => (
              <BookCard
                key={book.id}
                book={book}
                toggleFavorite={
                  toggleFavorite
                }
                showDelete={false}
              />
            ))}
          </>
        )}

        {activeTab === "favorites" && (
          <>
            <h2>Favorite Books</h2>

            {favoriteBooks.length ===
            0 ? (
              <p>
                No favorite books found.
              </p>
            ) : (
              favoriteBooks.map((book) => (
                <BookCard
                  key={book.id}
                  book={book}
                  toggleFavorite={
                    toggleFavorite
                  }
                  showDelete={false}
                />
              ))
            )}
          </>
        )}

        {activeTab === "edit" && (
          <>
            <h2>Manage Books</h2>

            <BookForm
              addBook={addBook}
            />

            {books.map((book) => (
              <BookCard
                key={book.id}
                book={book}
                toggleFavorite={
                  toggleFavorite
                }
                deleteBook={
                  deleteBook
                }
                showDelete={true}
              />
            ))}
          </>
        )}
      </div>
    </>
  );
}

export default App;