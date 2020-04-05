import React from 'react';
import IBook from '../../models/IBook';
import BookItem from './BookItem';
import styled from 'styled-components';

interface IProps {
	books: Array<IBook>;
	group: string;
}

const BookList = styled(({columns, ...props}) => <div {...props} />)`
	grid-column: ${({columns}) => `auto / span ${columns}`};
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	padding: 1em 0;
	margin: 0;
	max-width: 100%;
	header {
		width: 100%;
		margin-left: 10%;
		font-family: Roboto;
		font-style: normal;
		font-weight: normal;
		font-size: 21px;
		line-height: 25px;
	}
`;

const Category = ({ books, group }: IProps) => {
	return (
		<BookList columns={books.length}>
			<header>{group}</header>
			{books.map((book: IBook) => (
				<BookItem key={book.name} book={book} />
			))}
		</BookList>
	)
}

export default Category;