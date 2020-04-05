import React from 'react';
import styled from 'styled-components';

interface ItemProps extends React.HTMLAttributes<HTMLElement>{
	column?: string;
	height?: number;
	background?: string;
	padding?: number;
	className?: string;
}

interface ContainerProps {
	heightSub?: number;
	columns?: number;
	rowGap?: number;
	columnGap?: number;
}

export const Grid = styled.div.attrs<ContainerProps>(({ heightSub, columns, rowGap }) => ({
	heightSub, columns, rowGap
})) <ContainerProps>`
	display: grid;
	grid-template-columns: repeat(${({ columns }) => columns || 12}, auto);
	grid-auto-rows: min-content;
	grid-row-gap: ${({ rowGap }) => rowGap || 0}em;
	font-family: Roboto;
	font-style: normal;
	color: #5A5A5A;
	background-color: #333;
	min-height: ${({ heightSub }) => heightSub ? `calc(100vh - ${heightSub}px)` : '100%'};
	.top-bar {
		display: flex;
		align-items: center;
		padding: 1.2%;
		margin: 0;
	}
	.search-box {
		display: flex;
		align-items: center;
		width: 100%;
		margin: auto;
	}
	.nav {
		margin: 0;
		width: 100%;
	}
	.content {
		max-width: 1100px;
		margin: auto;
	}
	.category-list {
		grid-column: 1/13;
		display: grid;
		grid-template-columns: repeat(5, auto)
		grid-auto-rows: min-content;
		justify-content: space-between;
	}
	.header {
		grid-column: 1/13;
		position: sticky;
		top: 0;
		z-index: 1000;
	}
	footer {
		grid-column: 1/13;
		padding: 2px;
		margin-top: 3em;
		background: #53535377;
		text-align: center;
		color: #fff;
	}
`;
export const GridItem = styled(({ column, className, height, background, ...props } :ItemProps) => <div className={className} {...props} />)`
	grid-column: ${({ column }) => column || '1/13'};
	min-height: ${({ height }) => height || 0}vh;
	padding: 3px;
	background: ${({ background }) => background || 'transparent'};
`;