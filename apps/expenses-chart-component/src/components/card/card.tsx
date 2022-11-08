import { component$, Slot, useStyles$ } from '@builder.io/qwik'
import styles from './card.css'

type CardProps = {
	color?: 'primary' | 'default'
}

export const Card = component$(({ color = 'default' }: CardProps) => {
	useStyles$(styles)
	const classes = `card ${color}`
	return (
		<div class={classes}>
			<Slot />
		</div>
	)
})
