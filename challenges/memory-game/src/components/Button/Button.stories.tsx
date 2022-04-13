import type { Story } from '@ladle/react'

import { Button as ButtonComponent } from './Button'

export default {
	title: 'General',
}

export const Button: Story<{
	variant: 'secondary' | 'primary'
	text: string
	size: 'small' | 'medium' | 'large'
}> = ({ variant, text, size }) => (
	<>
		<ButtonComponent variant={variant} size={size}>
			{text}
		</ButtonComponent>
	</>
)

Button.args = {
	text: 'Button',
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
