import styled, { css } from 'styled-components'

type ButtonProps = {
	variant?: 'secondary' | 'primary'
	children: string
	size?: 'small' | 'medium' | 'large' | 'ball'
	isTextDark?: boolean
}

const StyledButton = styled.button<ButtonProps>`
	border: none;
	border-radius: 36px;
	background-color: ${(props) => props.theme[props.variant]};
	color: ${(props) => (props.isTextDark ? props.theme.textColor : props.theme.white)};

	&:hover {
		cursor: pointer;
		color: ${(props) => props.theme.white};
	}

	&:active {
		color: ${(props) => props.theme.white};
	}

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
			case 'ball':
				return css`
					font-size: 44px;
					border-radius: 100%;
					height: 82px;
					width: 82px;
				`
		}
	}}

	${(props) => {
		switch (props.variant) {
			case 'primary':
				return css`
					&:hover {
						background-color: ${props.theme.primaryHover};
					}
				`
			case 'secondary':
				return css`
					&:hover {
						background-color: ${props.theme.secondaryHover};
					}

					&:active {
						background-color: ${props.theme.secondaryActive};
					}
				`
		}
	}}
`

const Button: React.FC<ButtonProps> = ({
	children,
	variant = 'secondary',
	size = 'medium',
	isTextDark = false,
}) => {
	return (
		<StyledButton variant={variant} size={size} isTextDark={isTextDark}>
			{children}
		</StyledButton>
	)
}

export { Button }
export type { ButtonProps }
