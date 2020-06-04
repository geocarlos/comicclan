import React from 'react';
import styled from 'styled-components';

interface IProps {
	setQuery: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const InputBox = styled.div`
	display: flex;
	align-items: center;
	height: 8vh;
	width: 100%;
	padding: 0 .5em;
	margin: 28px 0;
	border: solid medium #777777;
	border-radius: 8px;
`;

const TextInput = styled(({onChange, ...props}) => <input onChange={onChange} placeholder="Search books by name" {...props} />)`
	flex: 1;
	height: 90%;
	background: transparent;
	border: none;
	outline: none;
	font-size: 1.5em;
	color: #5A5A5A;
`;

const Search = ({ setQuery }: IProps) => {
	return (
		<InputBox>
			<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path fillRule="evenodd" clipRule="evenodd" d="M20.0587 19.0968H21.129L27.8897 25.871L25.871 27.8897L19.0968 21.129V20.0587L18.731 19.6794C17.1864 21.0071 15.1813 21.8065 13 21.8065C8.13633 21.8065 4.19354 17.8637 4.19354 13C4.19354 8.13633 8.13633 4.19355 13 4.19355C17.8637 4.19355 21.8064 8.13633 21.8064 13C21.8079 15.1037 21.053 17.1377 19.6793 18.731L20.0587 19.0968ZM6.90322 13C6.90322 16.3735 9.62645 19.0968 13 19.0968C16.3735 19.0968 19.0968 16.3735 19.0968 13C19.0968 9.62645 16.3735 6.90323 13 6.90323C9.62645 6.90323 6.90322 9.62645 6.90322 13Z" fill="#777777" />
			</svg>
			<TextInput onChange={setQuery} />
		</InputBox>
	);
}

export default Search;
