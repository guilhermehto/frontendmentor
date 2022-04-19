import type { Story } from '@ladle/react'

import { Card as CardComponent } from './Card'

export default {
	title: 'General',
}

export const Card: Story = ({ children }) => (
	<>
		<CardComponent>{children}</CardComponent>
	</>
)

Card.args = {
	children: 'Card component',
}
