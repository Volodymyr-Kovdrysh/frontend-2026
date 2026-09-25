import FeedBackItem from "./FeedBackItem.jsx";
const FeedBackList = ({ feedbacks, onDelete }) => {
  if (feedbacks.length === 0) {
    return <p className="empty-message">Відгуків ще немає.</p>;
  }

  return (
    <>
      {feedbacks.map((fb) => {
        return <FeedBackItem key={fb.id} feedback={fb} onDelete={onDelete} />;
      })}
    </>
  );
};

export default FeedBackList;
