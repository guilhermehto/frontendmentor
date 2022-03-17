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
	}

	&:active {
		background-color: ${(props) => props.theme.activeColor};
	}
`

const Button: React.FC = ({ children }) => {
	return <StyledButton>{children}</StyledButton>
}

export { Button }
