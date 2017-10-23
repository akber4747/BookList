import React, {Component} from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {

    renderList(){
        if (!this.props.books){
            return <div> oops</div>
        }
        return this.props.books.map((book) => {
            return (
                <li 
                    key={book.title} 
                    className="list-group-item"
                    onClick = {() => this.props.selectBook(book)}    
                > 
                    {book.title} 
                    
                </li>
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
    return {
        books: state.books
    };
}

// Anything returned from this fnction will endup as props on the BookList containre... 
// the selectBook action is now available as a prop on BookList. (see line 17 where we are calling that prop!)
function mapDispatchToProps(dispatch){
    // Whenever selectBook is called, the result should be passed to all of our reducers (The select book action needs to tell our reducers that an action took place, so that reducers can change the application state, so that the new app state can be reflected in our container, so that the containre can update all of the appropriate components)
    return bindActionCreators( {selectBook: selectBook }, dispatch );
}

// Promote BookList from a component to a contianer - it needs to know about this new dispatch method selectBook. Make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);