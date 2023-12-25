import { Blog, SubscriptionBox } from '../../components';
import PrimaryCard from '../../components/PrimaryCard/PrimaryCard';
import ProductList from '../../components/ProductList/ProductList';
import SecondaryCard from '../../components/SecondaryCard/SecondaryCard';
import TestimonialCard from '../../components/TestimonialCard/TestimonialCard';
import './Home.scss';
import './home-responsive.scss';

const servicesContent = [
  { image: 'indoor-plant.svg', title: 'Indoor Plants', content: 'Bring the beauty of nature to your outdoor spaces with our wide selection of outdoor plants' },
  { image: 'outdoor-plant.svg', title: 'Outdoor Plants', content: 'Bring a touch of greenery to your living spaces with our collection of indoor plants, perfect for purifying the air and adding a natural touch to your home.' },
  { image: 'pots.svg', title: 'Plants Pots', content: 'Add a touch of style to your indoor or outdoor spaces with our collection of pots plants, available in a variety of sizes and designs to fit any decor' },
];

const productsContent = [
{ image: 'indoor-plant.svg', title: 'Quality Product', content: 'Our flowers are of the highest quality, carefully selected and sourced from reputable' },
{ image: 'indoor-plant.svg', title: 'Always Fresh', content: 'Our flowers are always fresh, handpicked and delivered promptly for maximum longevity and enjoyment.' },
{ image: 'indoor-plant.svg', title: 'Work Smart', content: 'We work smart, using innovative techniques and technology to streamline our processes' },
{ image: 'indoor-plant.svg', title: 'Excellent Service', content: "We pride ourselves on providing excellent service, going above and beyond to meet our `customers` needs" },
];

const galleryContent = [
  { image: 'Picture1.png'},
  { image: 'Picture2.png'},
  { image: 'Picture3.png'},
  { image: 'Picture4.png'},
  { image: 'Picture5.png'}
];

const review = [
  {image: 'review1.png', name: 'Jessica Watson', comment: 'Highly recommend this website for quality flowers and plants. Great prices, timely delivery and excellent customer service.'},
  {image: 'review2.png', name: 'Kate Szu', comment: 'Great service, beautiful flowers, timely delivery. Highly recommend.'},
  {image: 'review3.png', name: 'Grace', comment: ' am very happy with my purchase from this website, the plants were healthy and arrived on time.'}
];

const Home = () => {
  return (
    <div>
      <div className="hero">
        <h1 className="hero-title">Wrap the Art of Giving</h1>
        <h3 className="hero-caption">Elevate the Experience of Gift-Giving to a New Level of Artistry by Unraveling the Beauty and Thoughtfulness of Our Expert Wrapping Services.</h3>
        <div className="hero-button">
          <button className="btn-secondary">Book Now</button>
          <button className="btn-secondary">Our Catalog</button>
        </div>
      </div>
      <div className="services">
        <div className="services-title">
          <h1>We Help choose the most suitable wraps for you</h1>
          <p>Our selection includes a wide variety of flowers, from classic roses to exotic orchids, as well as a variety of lush indoor and outdoor plants and also offer unique floral arrangements that are perfect for any occasion, whether you're looking to brighten up your home or send a thoughtful gift. </p>
        </div>
        <div className="services-content">
          {servicesContent.map((service, index) => (
            <PrimaryCard key={index} image={service.image} title={service.title} content={service.content} />
          ))}
        </div>
      </div>
      <div className="product-list">
        <h1>What We Offer To You</h1>
        <ProductList />
      </div>
      <div className="productsContent">
        <div className="imageProductContent">
          <img src="productsContent.png" alt="productsContent" />
        </div>
        <div className="secondaryCardContent">
          {productsContent.map((productContent, index) => (
            <SecondaryCard key={index} image={productContent.image} title={productContent.title} content={productContent.content} />
            )
          )}
          </div>
      </div>
      {/* TODO : ADD RESPONSIVE */}
      <div className="gallery">
        <h1 className="title">Our Gallery View</h1>
        <div className="galleryImages">
          {galleryContent.map((gallery, index) => (
            <img key={index} src={gallery.image} alt="gallery" />
            )
            )}
        </div>
      </div>
      <div className="testimonials">
        <h1 className="title">What do they say about us</h1>
        <div className="testi-card">
          {review.map((review, index) => (
            <TestimonialCard key={index} image={review.image} name={review.name} comment={review.comment} />
            )
          )}
        </div>
      </div>
      <div className="subscription">
        <SubscriptionBox />
      </div>
      <div className="blog">
        <Blog />
      </div>
    </div>
  );
};

export default Home;