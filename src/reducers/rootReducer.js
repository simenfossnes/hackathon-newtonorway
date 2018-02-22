import {combineReducers} from 'redux';
import problems from './problemsReducer';

const rootReducer = combineReducers({
    problems
});

export default rootReducer;