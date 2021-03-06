# MyReads Project

### Tracking Book App
Student Project from Google Front-End Development Nanodegree Program at Udacity made with React. The goal is to add interactivity to the app by refactoring the static code in the given starting template.

## Project Overview

In this application, the main page displays a list of "shelves" (i.e. categories), each of which contains a number of books. The three shelves are:

   - Currently Reading
   - Want to Read
   - Read
   
Application is created to help you to managing your personal library and stack of books. There are given some default books.

 - You can search for new books in the `/search` page or click `+` button on the right bottom corner.

 - Use menu below book cover to select shelf `Read`, `Want to Read` or `Currently Reading` to put the book on right 'Shelf'.

 - `None` removes the book from each shelf in the main page

### Starting project

You can find the Starting Template here: [reactnd project myreads starter](https://github.com/udacity/reactnd-project-myreads-starter)

#### Instructions 

*  `cd` _reactnd-project-myreads_ file
* install all project dependencies with `npm install`
* start the development server with `npm start`
* with your server running, visit the site: `http://localhost:3000` if not open automatically

## Backend Server

The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in the app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Contributing

This repository is the starter code for _all_ Udacity students. Check out [CONTRIBUTING.md](CONTRIBUTING.md).
