import type { Story } from '@ladle/react'

import { Button as ButtonComponent, ButtonProps } from './Button'

export default {
	title: 'General',
}

export const Button: Story<ButtonProps> = ({ variant, children, size, isTextDark, shape }) => (
	<>
		<ButtonComponent variant={variant} size={size} isTextDark={isTextDark} shape={shape}>
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
		options: ['primary', 'secondary', 'dark'],
		control: { type: 'radio' },
		defaultValue: 'primary',
	},
	size: {
		options: ['xs', 'small', 'medium', 'large'],
		control: { type: 'radio' },
		defaultValue: 'medium',
	},
	shape: {
		options: ['pill', 'circle'],
		control: { type: 'radio' },
		defaultValue: 'pill',
	},
}
