import { useState } from 'react'

import { advicesClient } from '../../clients/advices-client'
import { Advice } from './Advice'
import { AdviceButton } from './AdviceButton'
import { AdviceTitle } from './AdviceTitle'

const AdviceGenerator = () => {
	const [slip, setSlip] = useState<{ id: number; advice: string }>({
		id: 117,
		advice: "It is easy to sit up and take notice, what's difficult is getting up and taking action.",
	})
	const onButtonClicked = async () => {
		const newSlip = await advicesClient.getRandomSlip()
		setSlip(newSlip)
	}

	return (
		<Advice
			title={<AdviceTitle>{`Advice #${slip.id}`}</AdviceTitle>}
			button={<AdviceButton onClick={onButtonClicked} />}
		>
			"{slip.advice}"
		</Advice>
	)
}

export { AdviceGenerator }
