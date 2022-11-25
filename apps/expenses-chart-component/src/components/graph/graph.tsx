import {
	component$,
	useClientEffect$,
	useSignal,
	useStore,
	useStylesScoped$,
} from '@builder.io/qwik'
import { reduce, max } from 'ramda'
import { clsx } from 'clsx'

import { Caption } from '../caption/caption'
import styles from './graph.css'

type GraphProps = {
	values: Array<{ value: number; label?: string }>
}

export const Graph = component$(({ values }: GraphProps) => {
	useStylesScoped$(styles)
	const graphRef = useSignal<HTMLElement>()

	const maxValue = reduce(
		max,
		-Infinity,
		values.map((v) => v.value)
	)

	const state = useStore({
		graphHeight: 0,
	})

	useClientEffect$(() => {
		if (graphRef.value) {
			const height = graphRef.value.getBoundingClientRect().height
			state.graphHeight = height
		}
	})

	return (
		<div class="graph" ref={graphRef}>
			{values.map((value) => {
				return (
					<Bar
						maxValue={maxValue as number}
						value={value.value}
						label={value.label}
						maxHeight={state.graphHeight}
					/>
				)
			})}
		</div>
	)
})

type BarProps = {
	value: number
	maxValue: number
	maxHeight: number
	label?: string
}

export const Bar = component$(({ value, maxValue, maxHeight, label }: BarProps) => {
	useStylesScoped$(styles)
	const classes = clsx('bar', maxValue === value && 'heighest')

	const barRef = useSignal<HTMLElement>()

	if (barRef.value) {
		const height = (value / maxValue) * maxHeight
		barRef.value.style.height = `${height}px`
	}

	return (
		<div>
			<div ref={barRef} class={classes} />
			{label ? (
				<div>
					<Caption center>{label}</Caption>
				</div>
			) : null}
		</div>
	)
})
