import React from 'react';
import './BookItem.scss';

const BookItem = ({ book, setEditBook, deleteBook }) => {
  return (
    <tr className="book-item">
      <td>{book.title}</td>
      <td>{book.author}</td>
      <td>{book.year}</td>
      <td>
        <div className="buttons">
          <button className="edit-button" onClick={() => setEditBook(book)}>Edit</button>
          <button className="delete-button" onClick={() => deleteBook(book.id)}>Delete</button>
        </div>
      </td>
    </tr>
  );
};

export default BookItem;
