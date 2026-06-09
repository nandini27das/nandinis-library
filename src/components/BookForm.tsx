import { useState } from "react";

interface Props {
  addBook: (
    title: string,
    author: string,
    price: number
  ) => void;
}

const BookForm = ({ addBook }: Props) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (
      title.trim() === "" ||
      author.trim() === "" ||
      price.trim() === ""
    ) {
      alert("Please fill the details");
      return;
    }

    addBook(title, author, Number(price));

    setTitle("");
    setAuthor("");
    setPrice("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Book Name"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />

      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <button type="submit">
        Add Book
      </button>
    </form>
  );
};

export default BookForm;