import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
	background-color: ${(props) => props.theme.primary};
	color: ${(props) => props.theme.buttonTextColor};
	font-size: 14px;
	font-weight: bold;
	border-radius: 10px;
	border: none;
	padding: 12.5px;

	&:hover {
		cursor: pointer;
		background-color: ${(props) => props.theme.activeColor};
	}

	@media screen and (min-width: ${(props) => props.theme.tabletBreakPoint}px) {
		font-size: 16px;
		padding: 12.5px 24px;
	}
`

const Button: React.FC = ({ children }) => {
	return <StyledButton>{children}</StyledButton>
}

export { Button }
