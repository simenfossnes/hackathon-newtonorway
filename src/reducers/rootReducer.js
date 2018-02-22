import {combineReducers} from 'redux';
import problems from './problemsReducer';
import personalBackground from './personalBackgroundReducer';
import navigation from './navigationReducer';

const rootReducer = combineReducers({
    navigation,
    personalBackground,
    problems
});

export default rootReducer;