import keys from './ActionTypeKeys';
import { IReceiveBooks, IRequestBooks } from './IActions';

export const fetchBooks = (url: string): IRequestBooks => ({type: keys.REQUEST_BOOKS, url});

export function receiveBooks(books: Array<any>): IReceiveBooks {
	return {
		type: keys.RECEIVE_BOOKS,
		books
	}
}