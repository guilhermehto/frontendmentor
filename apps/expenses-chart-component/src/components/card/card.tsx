import styles from './card.css'
import { component$, Slot, useStylesScoped$ } from '@builder.io/qwik'

type CardProps = {
	color?: 'primary' | 'default'
}

export const Card = component$(({ color = 'default' }: CardProps) => {
	useStylesScoped$(styles)
	const classes = `card ${color}`
	return (
		<div class={classes}>
			<Slot />
		</div>
	)
})
