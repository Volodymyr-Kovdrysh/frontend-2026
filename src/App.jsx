import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import list from "./data/FeedbackData.js";
import FeedBackList from "./components/FeedBackList.jsx";
import FeedBackStat from "./components/FeedBackStat.jsx";
import Header from "./components/Header.jsx";
import FeedBackForm from "./components/FeedBackForm.jsx";

function App() {
  const [feedbacks, setFeedbacks] = useState(list);

  const addFeedBack = (newFeedback) => {
    const feedback = { ...newFeedback, id: uuidv4() };
    setFeedbacks((prev) => [...prev, feedback]);
  };

  const handleDelete = (id) => {
    if (!window.confirm("Видалити цей відгук??")) {
      return;
    }
    setFeedbacks((prev) => prev.filter((obj) => obj.id !== id));
  };
  const clearFeedbacks = () => {
    if (!window.confirm("Очистити всі відгуки?")) {
      return;
    }
    setFeedbacks([]);
  };
  const resetFeedbacks = () => {
    setFeedbacks(list);
  };
  return (
    <>
      <Header />
      <main className="container">
        <div
          className="feedback-actions"
          role="group"
          aria-label="Дії зі списком"
        >
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
        <FeedBackForm onAdd={addFeedBack} />
        <FeedBackStat feedbacks={feedbacks} />
        <FeedBackList feedbacks={feedbacks} onDelete={handleDelete} />
      </main>
    </>
  );
}

export default App;
