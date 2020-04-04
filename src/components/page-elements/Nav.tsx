import React from 'react';
import styled from 'styled-components';
import Categories from './Categories';

const categories: Categories[] = [
	Categories.YEAR,
	Categories.WRITER,
	Categories.ARTIST,
	Categories.OWNER,
	Categories.RANDOM
];

const capitalize = (word: string) => word[0].toUpperCase() + word.substring(1);

interface INavItem extends React.HTMLAttributes<HTMLElement> {
	text: string;
	onClick?: any;
}

const NavItem = styled(({text, ...props}: INavItem) => <div {...props}>{text}</div>)<INavItem>`
	padding: .5rem;
	max-width: 70%;
	border-radius: .5rem;
	text-align: center;
	font-weight: bold;
	font-size: 18px;
	line-height: 21px;
	&:hover {
		background: #F15454;
		box-shadow: 0px 2px 3px rgba(34, 34, 34, 0.6);
		border-radius: 19px;
		color: #FFF;
		cursor: pointer;
	}
`;

interface IProps {
	handler: (cat: Categories) => void;
}

const Nav = ({ handler }: IProps) => {
	return (
		<React.Fragment>
			{categories.map(cat => (
				<NavItem key={cat} text={capitalize(cat !== 'summary' ? cat : 'random')} onClick={() => handler(cat)} />
			))}
		</React.Fragment>
	)
}

export default Nav;

