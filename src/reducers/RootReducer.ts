import { combineReducers } from 'redux';
import { books } from './BookListReducer';
import IStore from '../store/IStore';

export default combineReducers<IStore>({
	list: books
})