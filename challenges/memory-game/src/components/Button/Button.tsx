import styled, { css } from 'styled-components'

type ButtonProps = {
	variant: 'secondary' | 'primary'
	children: string
	size?: 'small' | 'medium' | 'large'
}

const StyledButton = styled.button<ButtonProps>`
	border: none;
	border-radius: 36px;
	background-color: ${(props) => props.theme[props.variant]};
	color: ${(props) => props.theme.white};

	${(props) => {
		switch (props.size) {
			case 'small':
				return css`
					font-size: 20px;
					padding: 13px 30px;
				`
			case 'medium':
				return css`
					font-size: 26px;
					padding: 10px 72px;
				`
			case 'large':
				return css`
					font-size: 32px;
					padding: 16px 184px;
				`
		}
	}}
`

const Button: React.FC<ButtonProps> = ({ children, variant = 'secondary', size = 'medium' }) => {
	return (
		<StyledButton variant={variant} size={size}>
			{children}
		</StyledButton>
	)
}

export { Button }
