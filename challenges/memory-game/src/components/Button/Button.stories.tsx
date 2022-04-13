import type { Story } from '@ladle/react'

import { Button as ButtonComponent } from './Button'

export default {
	title: 'General',
}

export const Button: Story<{
	variant: 'secondary' | 'primary'
	text: string
	size: 'small' | 'medium' | 'large'
	isTextDark: boolean
}> = ({ variant, text, size, isTextDark }) => (
	<>
		<ButtonComponent variant={variant} size={size} isTextDark={isTextDark}>
			{text}
		</ButtonComponent>
	</>
)

Button.args = {
	text: 'Button',
	isTextDark: false,
}

Button.argTypes = {
	variant: {
		options: ['primary', 'secondary'],
		control: { type: 'radio' },
		defaultValue: 'primary',
	},
	size: {
		options: ['small', 'medium', 'large'],
		control: { type: 'radio' },
		defaultValue: 'medium',
	},
}
