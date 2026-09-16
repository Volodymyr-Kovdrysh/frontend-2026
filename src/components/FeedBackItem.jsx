import Card from "../shared/Card.jsx";

const FeedBackItem = ({ feedback }) => {
  return (
    <Card>
      <div className="text-display">{feedback.text}</div>
      <div className="num-display">{feedback.rating}</div>
    </Card>
  );
};

export default FeedBackItem;
