import styled from 'styled-components'

type ButtonProps = {
	variant: 'secondary' | 'primary'
	children: string
}

const StyledButton = styled.button<ButtonProps>`
	font-size: 13px;
	border: none;
	border-radius: 36px;
	background-color: ${(props) => props.theme[props.variant]};
	padding: 13px 30px;
	color: ${(props) => props.theme.white};
`

const Button: React.FC<ButtonProps> = ({ children, variant = 'secondary' }) => {
	return <StyledButton variant={variant}>{children}</StyledButton>
}

export { Button }
