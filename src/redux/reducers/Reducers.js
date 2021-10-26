
import { createStore,applyMiddleware } from "redux";
import { increment,decrement,INCREMENT,DECREMENT } from "../actions/Actions";  "../actions/Actions"
import thunk from "redux-thunk";

const intitalState = {
    count : 0
};

const reducer=(state = intitalState,action) =>{
    switch(action.type){
        case INCREMENT:
            return {...state,count:action.payload} 
        // case DECREMENT:
        //     return state - 1
        default:
            return state;     
    }
}

export default reducer;

export const store = createStore(reducer,applyMiddleware(thunk));
console.log("Initial state", store.getState())
const unsubscribe= store.subscribe(()=>console.log("updated state",state.getState()));
// store.dispatch(increment())
// store.dispatch(increment())
// store.dispatch(increment())
unsubscribe();



