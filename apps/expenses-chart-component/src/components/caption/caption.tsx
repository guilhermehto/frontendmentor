import { component$, Slot, useStylesScoped$ } from '@builder.io/qwik'
import { clsx } from 'clsx'

import styles from './caption.css'

type CaptionProps = {
	size?: 'mini'
	center?: boolean
}

export const Caption = component$(({ size = 'mini', center }: CaptionProps) => {
	useStylesScoped$(styles)
	const classes = clsx(size, center && 'center')
	return <p class={classes}>{<Slot />}</p>
})
