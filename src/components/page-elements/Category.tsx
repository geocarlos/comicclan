import React from 'react';
import IBook from '../../models/IBook';
import BookItem from './BookItem';
import styled from 'styled-components';

interface IProps {
	books: Array<IBook>;
	group: string;
}

const BookList = styled(({columns, ...props}) => <div {...props} />)`
	grid-column: 1/13;
	display: block;
	header {
		margin-bottom: 1rem;
		font-family: Roboto;
		font-style: normal;
		font-weight: normal;
		font-size: 32px;
		line-height: 25px;
	}
	hr{
		grid-column: 1/6;
		margin-top: 1rem;
		border: 2px solid #535353;
	}
`;

const Category = ({ books, group }: IProps) => {
	return (
		<BookList columns={books.length}>
			<header>{group}</header>
			<div className="book-list">
				{books.map((book: IBook) => (
					<BookItem key={book.name} book={book} />
				))}
			</div>
			<hr/>
		</BookList>
	)
}

export default Category;