// reducers get two args: current state, and an action. 
// the "state" here is not applciation state, but only the state that this reducer is responsible for
// and obvioulsy the reducer takes an action. the whole point of reducers is to take an action and turn it into state.
export default function(state = null, action){
    switch(action.type){
        case 'BOOK_SELECTED':
            return action.payload;
    }
    return state;
}