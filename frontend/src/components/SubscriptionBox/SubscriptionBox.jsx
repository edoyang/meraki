import './index.scss';

const SubscriptionBox = () => {
  return (
    <div className="subscribe">
        <h1>Enter your email address for our mailing Promo or other interesting things</h1>
        <div className="input">
            <input type="email" placeholder='Enter your email here' />
            <button className="btn-secondary">Subscribe</button>
        </div>
    </div>
  )
}

export default SubscriptionBox