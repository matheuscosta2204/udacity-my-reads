import React from 'react';
import BookShelfChanger from './BookShelfChanger/BookShelfChanger';

const book = (props) => {
    const { imageLinks } = props.book;

    const url = imageLinks ? imageLinks.smallThumbnail : '../images/white-cover.png';

    return (
        <li>
            <div className="book">
                <div className="book-top">
                    <div 
                        className="book-cover" 
                        style={{ width: 128, height: 193, backgroundImage: `url(${url}` }}></div>
                    <BookShelfChanger book={props.book} onShelfChange={props.onShelfChange} />
                </div>
                <div className="book-title">{props.book.title}</div>
                <div className="book-authors">{props.book.subtitle}</div>
            </div>
        </li>
    );
};

export default book;