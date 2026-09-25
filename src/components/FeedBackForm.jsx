import { useState } from "react";
import Card from "../shared/Card.jsx";

const FeedBackForm = () => {
  const [text, setText] = useState("");
  return (
    <Card>
      <div className="feedback-form">
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
      </div>
    </Card>
  );
};

export default FeedBackForm;
