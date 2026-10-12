import Card from "../shared/Card.jsx";

const FeedBackItem = ({ feedback, onDelete, onEdit }) => {
  return (
    <Card>
      <button
        type="button"
        className="edit"
        aria-label={`Редагувати відгук: ${feedback.text}`}
        title="Редагувати"
        onClick={() => onEdit(feedback.id)}
      >
        ✎
      </button>
      <button
        type="button"
        className="close"
        aria-label={`Видалити відгук: ${feedback.text}`}
        onClick={() => {
          onDelete(feedback.id);
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
