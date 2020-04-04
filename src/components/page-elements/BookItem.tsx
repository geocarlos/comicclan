import React from 'react';
import styled from 'styled-components';
import IBook from '../../models/IBook';

const Tile = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 160px;
	border-radius: 4px;
	margin: auto;
	padding: 3px;
	font-size: 2rem;
	figure {
		height: 300px;
		color: #fff;
		img {
			max-width: 100%;
			background: linear-gradient(180deg, #9C5A9D 0%, rgba(241, 84, 84, 0.48137) 100%);
			box-shadow: 2px 2px 4px rgba(34, 34, 34, 0.7);
		}
		figcaption {
			font-weight: 500;
			font-size: 12px;
			line-height: 19px;
			p.book-name {
				font-size: 18px;
				line-height: 26px;
			}
		}
	}
`;

interface IProps {
	book: IBook;
}



const BookItem = ({ book }: IProps) => {
	return (
		<Tile>
			<figure>
				<img alt="book cover" src={book.image} />
				<figcaption>
					<p className="book-name">{book.name}</p>
					<p className="book-owner">Owned by {book.owner}</p>
				</figcaption>
			</figure>
		</Tile>
	)
}

export default BookItem;