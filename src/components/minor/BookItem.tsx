import React from 'react';
import styled from 'styled-components';

const Tile = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 175px;
	width: 100px;
	border: solid thin;
	background-color: #da5523;
	margin: auto;
	padding: 3px;
	font-size: 2rem;
`;

interface IProps {
	id: number
}



const BookItem = ({ id }: IProps) => {
	return <Tile>{id}</Tile>
}

export default BookItem;