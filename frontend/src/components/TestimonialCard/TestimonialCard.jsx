import './index.scss'

const TestimonialCard = ({ image, name, comment }) => {
  return (
    <div className="testimonial-card">
        <img src={image} alt={name} /> 
        <p className="name">{name}</p>
        <p className="comment">{comment}</p>
    </div>
  );
}

export default TestimonialCard