import React from 'react';
import IBook from '../../models/IBook';
import BookItem from './BookItem';

interface IProps {
	books: Array<IBook>;
	group: string;
}

const Category = ({ books, group }: IProps) => {
	return (
		<div className="category">
			<header>{group}</header>
			{books.map((book: IBook) => (
				<BookItem key={book.name} book={book} />
			))}
		</div>
	)
}

export default Category;