import type { Story } from '@ladle/react'

import { Heading as HeadingComponent } from './Heading'

export default {
	title: 'Typography',
}

export const Heading: Story<{
	level: 1 | 2 | 3
	text: string
}> = ({ level = 2, text }) => (
	<>
		<HeadingComponent level={level}>{text}</HeadingComponent>
	</>
)

Heading.args = {
	level: 2,
	text: 'Heading Story',
}
