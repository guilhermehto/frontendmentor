import { component$, Slot } from '@builder.io/qwik'

import './heading.css'

type HeadingProps = {
	size?: 'medium' | 'large'
}
export const Heading = component$(({ size = 'large' }: HeadingProps) => {
	return (
		<h2 class={size}>
			<Slot />
		</h2>
	)
})
