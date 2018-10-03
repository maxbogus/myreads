import React, {Component} from 'react';
import Bookshelf from './Bookshelf';
import Link from 'react-router-dom'

class List extends Component {
    render() {
        const {books} = this.props;
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <Bookshelf books={books} title='Currently Reading'/>
                        <Bookshelf books={books} title='Want to Read'/>
                        <Bookshelf books={books} title='Read'/>
                    </div>
                </div>
                <div className="open-search">
                    <Link to='/search'>Add a book</Link>
                </div>
            </div>
        )
    }
}

export default List