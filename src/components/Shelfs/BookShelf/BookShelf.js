import React from 'react';
import Book from './Book/Book';

const bookShelf = (props) => (
    <div className="list-books-content">
        <div className="bookshelf">
            <h2 className="bookshelf-title">{props.title}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {props.books.map((book) => (
                        <Book key={book.id} book={book} onShelfChange={props.onShelfChange} showModal={props.showModal} />
                    ))}
                </ol>
            </div>
        </div>
    </div>
);

export default bookShelf;