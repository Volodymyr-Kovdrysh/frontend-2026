import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext.jsx";

function FeedBackActions() {
  const { clearFeedbacks, resetFeedbacks } = useContext(FeedbackContext);

  return (
    <div className="feedback-actions" role="group" aria-label="Дії зі списком">
      <button
        type="button"
        className="btn btn-primary"
        onClick={clearFeedbacks}
      >
        Очистити
      </button>
      <button
        type="button"
        className="btn btn-secondary"
        onClick={resetFeedbacks}
      >
        Відновити
      </button>
    </div>
  );
}

export default FeedBackActions;
