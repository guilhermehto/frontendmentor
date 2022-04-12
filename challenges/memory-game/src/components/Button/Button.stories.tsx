import type { Story } from '@ladle/react'

import { Button as ButtonComponent } from './Button'

export default {
	title: 'General',
}

export const Button: Story<{
	variant: 'secondary' | 'primary'
	text: string
}> = ({ variant, text }) => (
	<>
		<ButtonComponent variant={variant}>{text}</ButtonComponent>
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
}
