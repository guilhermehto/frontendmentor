import { useState } from 'react'
import { Card } from './Card'
import { Heading } from './Heading'
import { Paragraph } from './Paragraph'
import { Radio } from './Radio'
import { Button } from './Button'
import { StarIcon } from './StarIcon'

function RatingCard() {
	const [rating, setRating] = useState(0)
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
						onChange={() => setRating(i)}
						name="rating"
						value={i.toString()}
						checked={rating === i}
					>
						{i.toString()}
					</Radio>
				))}
			</div>
			<Button>SUBMIT</Button>
		</Card>
	)
}

export { RatingCard }
