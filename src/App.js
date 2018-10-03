import React from 'react'
import * as BooksAPI from './BooksAPI'
import {Route, Link} from 'react-router-dom'
import './App.css'
import Book from './Book';
import List from './List';

class BooksApp extends React.Component {
    componentDidMount() {
        BooksAPI.getAll().then((books) => {
            this.setState(() => ({
                books
            }));
            console.log(books)
        });
        console.log(this.state.books);
    }

    state = {
        books: [],
        query: ''
    };

    updateQuery = (query) => {
        this.setState(() => ({
            query: query.trim()
        }));
    };

    clearQuery = () => {
        this.updateQuery('')
    };

    render() {
        const {query} = this.state;
        const showingBooks = query !== '';
        // const showBooks = async (q) => {
        //     return BooksAPI.search(query);
        // };

        return (
            <div className="app">
                <Route exact path='/search' render={() => (
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
                        {showingBooks && (
                            <div className="search-books-results">
                                <ol className="books-grid">
                                    {this.state.books.map((book) => (
                                        <li key={book.id}>
                                            <Book book={book}/>
                                        </li>
                                    ))}
                                </ol>
                            </div>
                        )}
                    </div>
                )}/>
                <Route exact path='/' render={() => (
                    <List currently={} want={} read={} books={this.state.books}/>
                )}/>
            </div>
        )
    }
}

export default BooksApp