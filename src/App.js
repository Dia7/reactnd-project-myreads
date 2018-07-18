import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom'
import './App.css'
import BookList from './BookList'
import BookSearch from './BookSearch'

class BooksApp extends React.Component {
  state = {
    books: [],
    showSearchPage: true
  }

  // fetch the books form backend server
  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books });
    });
  }

  changeShelf = (e, bookFilter) => {
    const books = this.state.books;
    const shelf = e.target.value;
    bookFilter.shelf = e.target.value;
    this.setState({
      books
    });

    BooksAPI.update(bookFilter, shelf).then(() => {
      this.setState(state => ({
        books: state.books
          .filter(b => b.id !== bookFilter.id)
          .concat([bookFilter])
      }));
    });
  };

  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <BookList
              books={this.state.books}
              changeShelf={this.changeShelf}
            />
          )}
        />
        <Route
          path="/search"
          render={() => (
            <BookSearch
              books={this.state.books}
              changeShelf={this.changeShelf}
            />
          )}
        />
      </div>
    )
  }
}

export default BooksApp
