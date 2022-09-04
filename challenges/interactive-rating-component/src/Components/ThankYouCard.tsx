import { Card } from './Card'
import { Heading } from './Heading'
import { Paragraph } from './Paragraph'
import { PaymentMachineIcon } from './PaymentMachineIcon'
import { Pill } from './Pill'

type ThankYouCardProps = {
	rating: string
}

const ThankYouCard: React.FC<ThankYouCardProps> = ({ rating }) => {
	const pillText = `You selected ${rating} out of 5`
	return (
		<Card className="items-center">
			<div className="flex mb-6 mt-3 justify-center">
				<div className="flex">
					<PaymentMachineIcon />
				</div>
			</div>
			<Pill className="mb-6">{pillText}</Pill>
			<Heading className="mb-3">Thank you!</Heading>
			<Paragraph className="text-center">
				We appreciate you taking the time to give a rating. If you ever need more support,
				don’t hesitate to get in touch!
			</Paragraph>
		</Card>
	)
}

export { ThankYouCard }
