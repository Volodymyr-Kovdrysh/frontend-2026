import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext.jsx";
import FeedBackItem from "./FeedBackItem.jsx";
const FeedBackList = () => {
  const { feedbacks } = useContext(FeedbackContext);
  if (feedbacks.length === 0) {
    return <p className="empty-message">Відгуків ще немає.</p>;
  }

  return (
    <>
      {feedbacks.map((fb) => {
        return <FeedBackItem key={fb.id} feedback={fb} />;
      })}
    </>
  );
};

export default FeedBackList;
