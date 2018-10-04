import React from 'react'
import {Route} from 'react-router-dom'

import './App.css'
import * as BooksAPI from './BooksAPI';
import List from './List';
import Search from './Search';

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
    };

    render() {
        const {books} = this.state;
        return (
            <div className="app">
                <Route exact path='/search' render={() => (
                    <Search books={books}/>
                )}/>
                <Route exact path='/' render={() => (
                    <List books={books}/>
                )}/>
            </div>
        )
    }
}

export default BooksApp