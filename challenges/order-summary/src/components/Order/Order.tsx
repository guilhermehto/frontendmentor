import headerImage from '../../assets/illustration-hero.svg';
import './Order.css';

const Order = () => {
  return <div className="order">
    <HeaderImage />
    <div className="order-summary">
      <h2>Order Summary</h2>
      <p>
        You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!
      </p>
  </div>
  </div>
}

const HeaderImage = () => {
  return <img className="header-image" src={headerImage} alt="woman listening to music and vibing" />
}

export { Order }
