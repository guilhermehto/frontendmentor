import React, { useState } from 'react'
import { Card } from './Card'
import { Heading } from './Heading'
import { Paragraph } from './Paragraph'
import { Radio } from './Radio'
import { Button } from './Button'
import { StarIcon } from './StarIcon'
import { Pill } from './Pill'

type RatingCardProps = {
	onSubmit: (rating: number) => void
}

const RatingCard: React.FC<RatingCardProps> = ({ onSubmit }) => {
	const [rating, setRating] = useState(0)
	const [shouldDisplayErrorPill, setShouldDisplayErrorPill] = useState(false)

	const handleOnClick = () => {
		if (rating !== 0) {
			onSubmit(rating)
			return
		}

		setShouldDisplayErrorPill(true)
	}

	return (
		<Card>
			<div className="flex mb-4">
				<StarIcon />
			</div>
			<Heading className="mb-2">How did we do?</Heading>
			<Paragraph className="mb-8">
				Please let us know how we did with your support request. All feedback is appreciated
				to help us improve our offering!
			</Paragraph>
			<div className="flex place-content-between mb-8">
				{[1, 2, 3, 4, 5].map((i) => (
					<Radio
						key={i}
						onChange={() => {
							setRating(i)
							setShouldDisplayErrorPill(false)
						}}
						name="rating"
						value={i.toString()}
						checked={rating === i}
					>
						{i.toString()}
					</Radio>
				))}
			</div>
			<Button onClick={handleOnClick}>SUBMIT</Button>
			{shouldDisplayErrorPill ? <Pill className="mt-4">Please, select rating</Pill> : null}
		</Card>
	)
}

export { RatingCard }
