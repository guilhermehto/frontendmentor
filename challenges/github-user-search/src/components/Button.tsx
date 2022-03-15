import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
	background-color: ${(props) => props.theme.primary};
	font-size: 14px;
	font-weight: bold;
	border-radius: 10px;
	border: none;
	padding: 12.5px;
`

const Button: React.FC = ({ children }) => {
	return <StyledButton>{children}</StyledButton>
}

export { Button }
