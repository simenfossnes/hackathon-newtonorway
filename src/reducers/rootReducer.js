import {combineReducers} from 'redux';
import problems from './problemsReducer';
import personalBackground from './personalBackgroundReducer';

const rootReducer = combineReducers({
    problems,
    personalBackground
});

export default rootReducer;