import React, {Component} from 'react';

class Book extends Component {
    handleChange = (event) => {
        console.log({
            book: this.props.book,
            action: event.target.value
        }); // => "click"
        if (this.props.onSearchBook && this.props.book) {
            this.props.onSearchBook({
                book: this.props.book,
                action: event.target.value
            });
        }
    };

    render() {
        const {book, defaultValue} = this.props;
        const image = (book.imageLinks && book.imageLinks.smallThumbnail) ? `url(${book.imageLinks.smallThumbnail})` : null;
        const value = defaultValue ? defaultValue : 'none';
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover"
                         style={{
                             width: 128,
                             height: 193,
                             backgroundImage: image
                         }}/>
                    <div className="book-shelf-changer">
                        <select onChange={this.handleChange} value={value}>
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading
                            </option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{book.title}</div>
                {book.authors && (
                    <div className="book-authors">{book.authors.join(', ')}</div>
                )}
            </div>
        )
    }
}

export default Book;