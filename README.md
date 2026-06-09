# 📚 NANDINI'S LIBRARY

## Project Overview

NANDINI'S LIBRARY is a Book Management System built using React, TypeScript, Vite, and CSS. The application provides an Admin View for managing a collection of books. Users can view books, mark books as favorites, add new books, and delete existing books through a simple and responsive interface.

The project demonstrates core React concepts such as components, props, state management, event handling, conditional rendering, list rendering, and form validation.

---

## High-Level Feature Description

### 1. Books Section

* Displays all available books.
* Shows:

  * Book Name
  * Author Name
  * Price
* Users can mark/unmark books as favorites.

**Screenshot:**

<img width="1910" height="963" alt="image" src="https://github.com/user-attachments/assets/2963f0b3-4b9e-47bf-b47b-4e70b2819e15" />

---

### 2. Favorites Section

* Displays only books marked as favorites.
* Helps users quickly access preferred books.

**Screenshot:**

<img width="1912" height="959" alt="image" src="https://github.com/user-attachments/assets/bf8acfef-4b9c-4df6-82e4-0af31c060626" />


---

### 3. Edit Section

* Add new books to the library.
* Delete existing books.
* Manage the book collection from a centralized admin panel.

**Screenshot:**

<img width="1911" height="971" alt="image" src="https://github.com/user-attachments/assets/6355f4fd-4f09-4dc9-84f1-464b46033944" />


---

### 4. Form Validation

The application validates user input before adding a book.

Validation Rules:

* Book Name cannot be empty.
* Author Name cannot be empty.
* Price cannot be empty.

Validation Message:

Please fill the details

**Screenshot:**

<img width="1911" height="850" alt="image" src="https://github.com/user-attachments/assets/2cf67288-899d-4221-bac4-122a6bb2341c" />


---

## Libraries Used

| Library    | Purpose                                       |
| ---------- | --------------------------------------------- |
| React      | Building UI components                        |
| TypeScript | Type safety and better development experience |
| Vite       | Fast development and build tool               |
| CSS        | Styling and responsive design                 |

---

## Project Structure

src/
│
├── components/
│   ├── Navbar.tsx
│   ├── BookCard.tsx
│   └── BookForm.tsx
│
├── types/
│   └── Book.ts
│
├── App.tsx
├── App.css
└── main.tsx

---

## Installation

Clone the repository:

```bash
git clone <repository-url>
```

Navigate to the project folder:

```bash
cd nandinis-library
```

Install dependencies:

```bash
npm install
```

Run the application:

```bash
npm run dev
```
---
