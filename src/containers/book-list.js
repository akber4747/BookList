import React, {Component} from 'react';
import { connect } from 'react-redux';

class BookList extends Component {

    renderList(){
        return this.props.books.map((book) => {
            return (
                <li key={book.tile} className="list-group-item"> {book.title} </li>
            );
        });
    }
    render(){
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        );
    }
}

function mapStateToProps(state){
    // whatever is returned here will be BookList component's props. Check the name bro..
    
}