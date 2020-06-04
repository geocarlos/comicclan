import { Action } from 'redux';
import keys from './ActionTypeKeys';

export interface IRequestBooks extends Action {
	readonly type: keys.REQUEST_BOOKS,
	url: string
}

export interface IReceiveBooks extends Action {
	readonly type: keys.RECEIVE_BOOKS;
	books: Array<any>
}

export interface IErrorReceivingBooks extends Action {
	readonly type: keys.ERROR_RECEIVING_BOOKS
}