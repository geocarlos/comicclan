import React from 'react';
import styled from 'styled-components';

const imgPlaceholder = (
	<svg width="39" height="29" viewBox="0 0 39 29" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path fillRule="evenodd" clipRule="evenodd" d="M39 3.625V25.375C39 27.3687 37.4045 29 35.4545 29H3.54545C1.59545 29 0 27.3687 0 25.375V3.625C0 1.63125 1.59545 0 3.54545 0H35.4545C37.4045 0 39 1.63125 39 3.625ZM17.7273 20.8619L13.2955 15.4062L7.09091 23.5625H31.9091L23.9318 12.6875L17.7273 20.8619Z" fill="#333333" />
	</svg>
)

const Tile = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 280px;
	width: 160px;
	background: linear-gradient(180deg, #9C5A9D 0%, rgba(241, 84, 84, 0.48137) 100%);
	box-shadow: 2px 2px 4px rgba(34, 34, 34, 0.7);
	border-radius: 4px;
	margin: auto;
	padding: 3px;
	font-size: 2rem;
`;

interface IProps {
	id: number
}



const BookItem = ({ id }: IProps) => {
	return <Tile>{imgPlaceholder}</Tile>
}

export default BookItem;