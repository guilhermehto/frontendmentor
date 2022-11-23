import { component$, Slot, useStylesScoped$ } from '@builder.io/qwik'
import { clsx } from 'clsx'

import styles from './heading.css'

type HeadingProps = {
	level?: 1 | 2 | 3 | 4
	color?: 'white' | 'brown'
	center?: boolean
}

export const Heading = component$(({ level = 1, color = 'brown', center }: HeadingProps) => {
	useStylesScoped$(styles)
	const classes = clsx(color, center && 'center')

	switch (level) {
		case 2:
			return (
				<>
					<h2 className={classes}>
						<Slot />
					</h2>
				</>
			)
		case 3:
			return (
				<h3 className={classes}>
					<Slot />
				</h3>
			)
		case 4:
			return (
				<h4 className={classes}>
					<Slot />
				</h4>
			)
		default:
			return (
				<h1 className={classes}>
					<Slot />
				</h1>
			)
	}
})
