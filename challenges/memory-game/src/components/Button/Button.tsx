import styled, { css } from 'styled-components'

type ButtonProps = {
	variant?: 'secondary' | 'primary' | 'dark'
	children: string
	size?: 'xs' | 'small' | 'medium' | 'large'
	shape?: 'pill' | 'circle'
	isTextDark?: boolean
	onClick?: () => void
}

const StyledButton = styled.button<ButtonProps>`
	border: none;
	border-radius: 36px;
	background-color: ${(props) => props.theme[props.variant || 'secondary']};
	color: ${(props) => (props.isTextDark ? props.theme.textColor : props.theme.white)};

	&:hover {
		cursor: pointer;
		color: ${(props) => props.theme.white};
	}

	&:active {
		color: ${(props) => props.theme.white};
	}

	${(props) => {
		if (props.shape === 'pill') {
			switch (props.size) {
				case 'xs':
					return css`
						font-size: 16px;
						padding: 10px 18px;
					`
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
		} else if (props.shape === 'circle') {
			switch (props.size) {
				case 'xs':
				case 'small':
					return css`
						border-radius: 50%;
						width: 47px;
						height: 47px;
						font-size: 24px;
					`
				case 'medium':
				case 'large':
					return css`
						border-radius: 50%;
						width: 72px;
						height: 72px;
						font-size: 40px;
					`
			}
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
			case 'dark':
				return css`
					background-color: ${props.theme.darkBackground};
				`
		}
	}}
`

const Button: React.FC<ButtonProps> = ({
	children,
	variant = 'secondary',
	size = 'medium',
	shape = 'pill',
	isTextDark = false,
	onClick,
}) => {
	return (
		<StyledButton
			variant={variant}
			size={size}
			shape={shape}
			isTextDark={isTextDark}
			onClick={() => onClick && onClick()}
		>
			{children}
		</StyledButton>
	)
}

export { Button }
export type { ButtonProps }
