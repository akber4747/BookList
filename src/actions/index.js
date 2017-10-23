// select book action creator
export function selectBook(book){
    // selectBook is an actionCreator & needs to return an action (an object with a type property)
    return {
        type: BOOK_SELECTED,
        payload: book
    };
}
