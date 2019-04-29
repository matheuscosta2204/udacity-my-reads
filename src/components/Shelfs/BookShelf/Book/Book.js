import React from 'react';
import BookShelfChanger from './BookShelfChanger/BookShelfChanger';

const book = (props) => {
    console.log(props.book);
    return (
        <li>
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${props.book.imageLinks.smallThumbnail}` }}></div>
                    <BookShelfChanger book={props.book} onShelfChange={props.onShelfChange} />
                </div>
                <div className="book-title">{props.book.title}</div>
                <div className="book-authors">{props.book.subtitle}</div>
            </div>
        </li>
    );
};

export default book;