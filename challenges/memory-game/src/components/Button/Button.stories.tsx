import type { Story } from '@ladle/react'

import { Button as ButtonComponent, ButtonProps } from './Button'

export default {
	title: 'General',
}

export const Button: Story<ButtonProps> = ({ variant, children, size, isTextDark }) => (
	<>
		<ButtonComponent variant={variant} size={size} isTextDark={isTextDark}>
			{children}
		</ButtonComponent>
	</>
)

Button.args = {
	children: 'Button',
	isTextDark: false,
}

Button.argTypes = {
	variant: {
		options: ['primary', 'secondary'],
		control: { type: 'radio' },
		defaultValue: 'primary',
	},
	size: {
		options: ['small', 'medium', 'large', 'ball'],
		control: { type: 'radio' },
		defaultValue: 'medium',
	},
}
