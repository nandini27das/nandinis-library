import { Book } from "../types/Book";

interface Props {
  book: Book;
  toggleFavorite: (id: number) => void;
  deleteBook?: (id: number) => void;
  showDelete: boolean;
}

const BookCard = ({
  book,
  toggleFavorite,
  deleteBook,
  showDelete,
}: Props) => {
  return (
    <div className="book-card">
      <h3>{book.title}</h3>

      <p>
        <strong>Author:</strong> {book.author}
      </p>

      <p>
        <strong>Price:</strong> ₹{book.price}
      </p>

      <button
        className="favorite-btn"
        onClick={() => toggleFavorite(book.id)}
      >
        {book.favorite
          ? "❤️ Favorite"
          : "🤍 Add Favorite"}
      </button>

      {showDelete && (
        <button
          className="delete-btn"
          onClick={() =>
            deleteBook?.(book.id)
          }
        >
          Delete
        </button>
      )}
    </div>
  );
};

export default BookCard;