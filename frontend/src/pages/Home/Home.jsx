import PrimaryCard from '../../components/PrimaryCard/PrimaryCard';
import ProductList from '../../components/ProductList/ProductList';
import './Home.scss';

const servicesContent = [
  { image: 'indoor-plant.svg', title: 'Indoor Plants', content: 'Bring the beauty of nature to your outdoor spaces with our wide selection of outdoor plants' },
  { image: 'outdoor-plant.svg', title: 'Outdoor Plants', content: 'Bring a touch of greenery to your living spaces with our collection of indoor plants, perfect for purifying the air and adding a natural touch to your home.' },
  { image: 'pots.svg', title: 'Plants Pots', content: 'Add a touch of style to your indoor or outdoor spaces with our collection of pots plants, available in a variety of sizes and designs to fit any decor' },
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
    </div>
  );
};

export default Home;