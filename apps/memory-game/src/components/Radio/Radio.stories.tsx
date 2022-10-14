import type { Story } from '@ladle/react'
import { useState } from 'react'
import styled from 'styled-components'

import { Radio as RadioComponent } from './Radio'

export default {
	title: 'General',
}

const Wrapper = styled.div`
	display: flex;
	gap: 8px;
`

export const Radio: Story = () => {
	const [selected, setSelected] = useState<string>('hello')
	return (
		<Wrapper>
			<RadioComponent
				name="test-radio"
				value={'hello'}
				checked={selected === 'hello'}
				onChange={() => setSelected('hello')}
			>
				Hello
			</RadioComponent>
			<RadioComponent
				name="test-radio"
				value={'bye'}
				checked={selected === 'bye'}
				onChange={() => setSelected('bye')}
			>
				Bye
			</RadioComponent>
		</Wrapper>
	)
}
