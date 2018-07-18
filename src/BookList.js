import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book';

class BookList extends Component {
  state = {};

  render() {
    const { books } = this.props;
    const currentlyReading = books.filter(
      book => book.shelf === "currentlyReading"
    );
    const read = books.filter(book => book.shelf === "read");
    const wantToRead = books.filter(book => book.shelf === "wantToRead");

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              {currentlyReading.length > 0 &&
                <Book
                  bookFilters={currentlyReading}
                  changeShelf={this.props.changeShelf}
                />}
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              {wantToRead.length > 0 &&
                <Book
                  bookFilters={wantToRead}
                  changeShelf={this.props.changeShelf}
                />}
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              {read.length > 0 &&
                <Book
                  bookFilters={read}
                  changeShelf={this.props.changeShelf}
                />}
            </div>
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">
            Add a book
          </Link>
        </div>
      </div>
    );
  }
}

export default BookList;