import React, {Component} from 'react';
import {Link} from "react-router-dom";
import Book from "./Book";
import * as BooksAPI from './BooksAPI';

class Search extends Component {
    state = {
        query: '',
        books: []
    };

    updateQuery = (query) => {
        // const q = query;
        this.setState(() => ({
            query
        }));
        if (query) {
            BooksAPI.search(query).then((books) => {
                this.setState(() => ({
                    books
                }));
            });
        }
    };

    render() {
        const {query, books} = this.state;
        const showingBooks = query !== '' && books.length > 0;
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to='/'>Close</Link>
                    <div className="search-books-input-wrapper">
                        {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                        <input type="text"
                               placeholder="Search by title or author"
                               value={query}
                               onChange={(event) => this.updateQuery(event.target.value)}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    {query !== '' && books.error && books.items !== [] && (
                        <ol className="books-grid">
                            {books.error}
                        </ol>
                    )}
                    {(query === '' || books.length === 0) && (
                        <ol className="books-grid">
                            No books to display
                        </ol>
                    )}
                    {showingBooks && (
                        <ol className="books-grid">
                            {books.map((book) => (
                                <li key={book.id}>
                                    <Book book={book}/>
                                </li>
                            ))}
                        </ol>
                    )}
                </div>
            </div>
        )
    }
}

export default Search
