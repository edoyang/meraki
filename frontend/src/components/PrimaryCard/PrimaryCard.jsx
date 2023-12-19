import './index.scss';

const PrimaryCard = ({ image, title, content }) => {
  return (
    <div className="primaryCard">
      <img src={image} alt={title} />
      <div className="title">{title}</div>
      <div className="content">{content}</div>
    </div>
  );
};

export default PrimaryCard;
