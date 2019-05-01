import React from 'react';
import { Route } from 'react-router-dom';
import { getAll, update } from './services/BooksAPI';
import './App.css';
import Shelfs from './components/Shelfs/Shelfs';
import Search from './components/Search/Search';

class App extends React.Component {
  state = {
      books: []
  }

  componentDidMount() {
      this.getAllBooksInShelf();
  }

  onShelfChange = (book, newShelf) => {
      book.shelf = newShelf;
      let newBooks = [];
      update(book, newShelf).then(() => {
          newBooks = this.state.books.map((b) => {
              if(b.id === book.id) {
                  return book;
              } else {
                  return b;
              }
          });

          if(!this.state.books.includes(book)) {
              newBooks.push(book);
          }

          this.setState({ books: newBooks });
      });
  }

  getAllBooksInShelf = () => {
      getAll().then(books => this.setState({ books }));
  }

  render() {
      return (
          <>
            <Route exact path="/" render={() => <Shelfs books={this.state.books} onShelfChange={this.onShelfChange} />} />
            <Route exact path="/search" render={() => <Search booksInShelf={this.state.books} onShelfChange={this.onShelfChange} />} />
          </>
      );
  }
}

export default App;
