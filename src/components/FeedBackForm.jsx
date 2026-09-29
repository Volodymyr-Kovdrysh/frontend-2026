import { useState } from "react";
import RatingSelect from "./RatingSelect.jsx";
import Card from "../shared/Card.jsx";

const FeedBackForm = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(10);
  const trimedText = text.trim();
  const isValid = trimedText.length >= 10;
  const showError = text.length > 0 && !isValid;

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isValid) {
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
        <button type="submit" className="btn btn-primary" disabled={!isValid}>
          Додати
        </button>
      </form>
    </Card>
  );
};

export default FeedBackForm;
