import { combineReducers } from 'redux';
import MovieReducer from './MovieReducer';
import DetailsReducer from './DetailsReducer';
import TrailerReducer from './TrailerReducer';
import SearchReducer from './SearchReducer';

export default combineReducers({
    movies: MovieReducer,
    details: DetailsReducer,
    trailer: TrailerReducer,
    search: SearchReducer,
});
