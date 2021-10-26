import {createStore,combineReducers} from "redux";

import reducer from "../reducers/Reducers";

const rootReducer = combineReducers({
    count:reducer
})


const store =()=>{
    return createStore(rootReducer);
}

export default store;