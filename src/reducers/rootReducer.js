import {combineReducers} from 'redux';
import problems from './problemsReducer';
import personalBackground from './personalBackgroundReducer';
import navigation from './navigationReducer';
import filters from './filtersReducer';

const rootReducer = combineReducers({
    navigation,
    personalBackground,
    filters,
    problems
});

export default rootReducer;