import { component$, useStylesScoped$ } from '@builder.io/qwik'
import styles from './horizontal.css'

export const Horizontal = component$(() => {
	useStylesScoped$(styles)

	return <hr />
})
