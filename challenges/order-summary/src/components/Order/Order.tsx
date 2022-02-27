import headerImage from '../../assets/illustration-hero.svg';
import './Order.css';

const Order = () => {
  return <div className="order"><HeaderImage /></div>
}

const HeaderImage = () => {
  return <img className="header-image" src={headerImage} alt="woman listening to music and vibing" />
}

export { Order }
