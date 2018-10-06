import React from 'react'
import {Route} from 'react-router-dom'

import './App.css'
import List from './List';
import Search from './Search';

class BooksApp extends React.Component {
    state = {
        books: [],
        read: [],
        current: [],
        want: [],
    };

    removeBook = (book) => {
        this.setState((prevState) => ({
            books: prevState.books.filter((b) => (b.id !== book.id))
        }));
    };

    filterBook = (book) => {
        const readIndex = this.state.read.indexOf(book.id);
        if (readIndex !== -1) {
            this.setState((prevState) => ({
                read: prevState.read.filter((b) => b !== book.id)
            }));
        }
        const wantIndex = this.state.want.indexOf(book.id);
        if (wantIndex !== -1) {
            this.setState((prevState) => ({
                want: prevState.want.filter((b) => b !== book.id)
            }));
        }
        const currentIndex = this.state.current.indexOf(book.id);
        if (currentIndex !== -1) {
            this.setState((prevState) => ({
                current: prevState.current.filter((b) => b !== book.id)
            }));
        }
    };

    processBook = ({book, action}) => {
        if (action !== 'none') {
            if (this.state.books === [] || this.state.books.filter((b) => book.id !== b.id).length === this.state.books.length) {
                this.setState((prevState) => ({
                    books: prevState.books.concat([book])
                }));
            }

            this.filterBook(book);

            if (action === 'read') {
                this.setState((prevState) => ({
                    read: prevState.read.concat([book.id])
                }));
            }
            if (action === 'wantToRead') {
                this.setState((prevState) => ({
                    want: prevState.want.concat([book.id])
                }));
            }
            if (action === 'currentlyReading') {
                this.setState((prevState) => ({
                    current: prevState.current.concat([book.id])
                }));
            }
        } else {
            this.removeBook(book);
        }
    };

    render() {
        return (
            <div className="app">
                <Route exact path='/search' render={({history}) => (
                    <Search onSearchBook={(action) => {
                        this.processBook(action);
                        history.push('/')
                    }}/>
                )}/>
                <Route exact path='/' render={() => (
                    <List onSearchBook={(action) => {
                        this.processBook(action);
                    }} {...this.state}/>
                )}/>
            </div>
        )
    }
}

export default BooksApp