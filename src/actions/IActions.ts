import { Action } from 'redux';
import keys from './ActionTypeKeys';

export interface IGetBooks extends Action {
	readonly type: keys.GET_BOOKS;
	books: Array<any>
}