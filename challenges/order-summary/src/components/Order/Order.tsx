import { PlanCard } from '../PlanCard/PlanCard'
import { Button } from '../Button/Button'
import headerImage from '../../assets/illustration-hero.svg'
import './Order.css'

const Order = () => {
	return (
		<div className="order">
			<HeaderImage />
			<div className="order-summary">
				<h2>Order Summary</h2>
				<p>
					You can now listen to millions of songs, audiobooks, and podcasts on any device
					anywhere you like!
				</p>
				<PlanCard name="Annual Plan" price={59.99} timeframe="year" />
				<Button type="primary">Proceed to Payment</Button>
				<Button type="text">Cancel Order</Button>
			</div>
		</div>
	)
}

const HeaderImage = () => {
	return (
		<img className="header-image" src={headerImage} alt="woman listening to music and vibing" />
	)
}

export { Order }
