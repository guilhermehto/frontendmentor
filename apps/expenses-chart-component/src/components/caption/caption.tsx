import { component$, Slot, useStylesScoped$ } from '@builder.io/qwik'
import { clsx } from 'clsx'

import styles from './caption.css'

type CaptionProps = {
	size?: 'mini' | 'regular'
	center?: boolean
}

export const Caption = component$(({ size = 'mini', center }: CaptionProps) => {
	useStylesScoped$(styles)
	const classes = clsx(size, 'caption', center && 'center')
	return <p class={classes}>{<Slot />}</p>
})
