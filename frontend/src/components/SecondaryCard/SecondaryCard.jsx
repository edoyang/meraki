import './index.scss';

const SecondaryCard = ({ image, title, content }) => {
  return (
    <div className="secondaryCard">
        <img src={image} alt={title} />
      <div className="title">{title}</div>
      <div className="content">{content}</div>
    </div>
  );
}

export default SecondaryCard;