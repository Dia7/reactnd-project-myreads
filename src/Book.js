import React, { Component } from 'react'

class Book extends Component {
  render() {
    const { bookFilters } = this.props;

    return (
      <div className="bookshelf-books">
        <ol className="books-grid">
          {bookFilters.length > 0 &&
            bookFilters.map(bookFilter => (
              <li key={bookFilter.id}>
                <div className="book">
                  <div className="book-top">
                    <div
                      className="book-cover"
                      style={{
                        backgroundImage: `url(${bookFilter.imageLinks.thumbnail})`
                      }}
                    />
                    <div className="book-shelf-changer">
                      <select
                        name="shelf"
                        onChange={e => this.props.changeShelf(e, bookFilter)}
                        value={bookFilter.shelf}
                      >
                        <option value="none" disabled>
                          Move to...
                        </option>
                        <option value="currentlyReading">
                          Currently Reading
                        </option>
                        <option value="wantToRead">
                          Want to Read
                        </option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                      </select>
                    </div>
                  </div>
                  <div className="book-title">
                    {bookFilter.title}
                  </div>
                  <div className="book-authors">
                    {bookFilter.authors
                      ? bookFilter.authors.join(", ")
                      : ""}
                  </div>
                </div>
              </li>
            ))}
        </ol>
      </div>
    );
  }
}

export default Book;