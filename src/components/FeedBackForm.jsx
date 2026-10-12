import { useState } from "react";
import RatingSelect from "./RatingSelect.jsx";
import Card from "../shared/Card.jsx";

const FeedBackForm = ({ onAdd, feedback, onCancel, onUpdate }) => {
  const [text, setText] = useState(feedback?.text ?? "");
  const [rating, setRating] = useState(feedback?.rating ?? 10);
  const isEditing = feedback !== null;

  const trimedText = text.trim();
  const isValid = trimedText.length >= 10;
  const showError = text.length > 0 && !isValid;

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isValid) {
      return;
    }
    const changes = { text, rating };
    if (isEditing) {
      onUpdate(feedback.id, changes);
      return;
    }

    onAdd({ text, rating });
    setText("");
  };
  return (
    <Card>
      <form className="feedback-form" onSubmit={handleSubmit}>
        <h2>Новий відгук</h2>
        <div className="form-field">
          <label htmlFor="feedback-text">Текст відгуку</label>
          <input
            id="feedback-text"
            type="text"
            value={text}
            onChange={(event) => setText(event.target.value)}
          />
        </div>
        <RatingSelect rating={rating} onChange={setRating} />
        <p
          id="feedback-help"
          className={showError ? "form-error" : "form-help"}
          aria-live="polite"
        >
          {showError
            ? "Введіть щонайменше 10 символів без пробілів на початку й у кінці."
            : "Мінімум 10 символів. Пробіли на початку й у кінці не враховуються."}
        </p>
        {isEditing && (
          <p className="form-help">Збереження додамо на наступному кроці </p>
        )}
        <div className="feedback-actions">
          <button type="submit" className="btn btn-primary" disabled={!isValid}>
            {isEditing ? "Зберегти" : "Додати"}
          </button>
          {isEditing && (
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onCancel}
            >
              Скасувати
            </button>
          )}
        </div>{" "}
      </form>
    </Card>
  );
};

export default FeedBackForm;
