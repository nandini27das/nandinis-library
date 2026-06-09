interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Navbar = ({ activeTab, setActiveTab }: NavbarProps) => {
  return (
    <nav className="navbar">
        <div className="title-section">
            <h1>📚 NANDINI'S LIBRARY</h1>
        </div>

      <ul className="nav-links">
        <li
          className={activeTab === "books" ? "active" : ""}
          onClick={() => setActiveTab("books")}
        >
          Books
        </li>

        <li
          className={activeTab === "favorites" ? "active" : ""}
          onClick={() => setActiveTab("favorites")}
        >
          Favorites
        </li>

        <li
          className={activeTab === "edit" ? "active" : ""}
          onClick={() => setActiveTab("edit")}
        >
          Edit
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;