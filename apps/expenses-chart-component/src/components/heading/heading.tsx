import { component$, Slot, useStylesScoped$ } from '@builder.io/qwik'

import styles from './heading.css'

type HeadingProps = {
	level?: 1 | 2 | 3 | 4
	color?: 'white' | 'brown'
}

export const Heading = component$(({ level = 1, color = 'brown' }: HeadingProps) => {
	useStylesScoped$(styles)

	switch (level) {
		case 2:
			return (
				<>
					<h2 className={color}>
						<Slot />
					</h2>
				</>
			)
		case 3:
			return (
				<h3 className={color}>
					<Slot />
				</h3>
			)
		case 4:
			return (
				<h4 className={color}>
					<Slot />
				</h4>
			)
		default:
			return (
				<h1 className={color}>
					<Slot />
				</h1>
			)
	}
})
