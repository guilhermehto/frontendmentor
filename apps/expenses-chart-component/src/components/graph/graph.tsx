import {
	component$,
	useClientEffect$,
	useSignal,
	useStore,
	useStylesScoped$,
} from '@builder.io/qwik'
import { reduce, max } from 'ramda'
import { clsx } from 'clsx'

import styles from './graph.css'
import { Heading } from '../heading/heading'

type GraphProps = {
	values: Array<{ value: number; label?: string }>
}

export const Graph = component$(({ values }: GraphProps) => {
	useStylesScoped$(styles)
	const maxValue = reduce(
		max,
		-Infinity,
		values.map((v) => v.value)
	)
	const graphRef = useSignal<Element>()

	const state = useStore(() => ({
		graphHeight: 240,
	}))

	useClientEffect$(() => {
		if (graphRef.value) {
			state.graphHeight = graphRef.value.getBoundingClientRect().height
		}
	})

	return (
		<div class="graph" ref={graphRef}>
			{values.map((value) => {
				console.log(value)
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

	useClientEffect$(() => {
		if (barRef.value) {
			const height = (value / maxValue) * maxHeight
			barRef.value.style.height = `${height}px`
		}
	})

	return (
		<div>
			<div ref={barRef} class={classes} />
			{label ? (
				<div>
					<Heading level={4}>{label}</Heading>
				</div>
			) : null}
		</div>
	)
})
