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
	justify-content: start;
	border-bottom: solid;
	padding: 2em;
	max-width: 100%;
	header {
		width: 100%;
		font-family: Roboto;
		font-style: normal;
		font-weight: normal;
		font-size: 22px;
		line-height: 29px;
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