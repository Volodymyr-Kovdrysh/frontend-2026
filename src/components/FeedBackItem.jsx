import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext.jsx";
import Card from "../shared/Card.jsx";

const FeedBackItem = ({ feedback }) => {
  const { handleDelete, selectFeedback } = useContext(FeedbackContext);

  return (
    <Card>
      <button
        type="button"
        className="edit"
        aria-label={`Редагувати відгук: ${feedback.text}`}
        title="Редагувати"
        onClick={() => selectFeedback(feedback.id)}
      >
        ✎
      </button>
      <button
        type="button"
        className="close"
        aria-label={`Видалити відгук: ${feedback.text}`}
        onClick={() => {
          handleDelete(feedback.id);
        }}
      >
        ×
      </button>
      <div className="text-display">{feedback.text}</div>
      <div className="num-display">{feedback.rating}</div>
    </Card>
  );
};

export default FeedBackItem;
