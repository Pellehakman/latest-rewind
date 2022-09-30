import { combineReducers } from "redux";

import { reducer as matchReducer } from './matchReducer';


const rootReducer = combineReducers({
  
    match: matchReducer,
    
});

export { rootReducer };