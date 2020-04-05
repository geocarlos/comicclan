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
	display: grid;
	grid-template-columns: repeat(5, 160px);
	justify-content: space-between;
	padding: 0;
	margin: 0;
	max-width: 100%;
	header {
		grid-column: 1/6;
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
			{books.map((book: IBook) => (
				<BookItem key={book.name} book={book} />
			))}

			<hr/>
		</BookList>
	)
}

export default Category;