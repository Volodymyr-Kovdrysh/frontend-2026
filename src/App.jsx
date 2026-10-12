import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import list from "./data/FeedbackData.js";
import FeedBackList from "./components/FeedBackList.jsx";
import FeedBackStat from "./components/FeedBackStat.jsx";
import Header from "./components/Header.jsx";
import FeedBackForm from "./components/FeedBackForm.jsx";

function App() {
  const [feedbacks, setFeedbacks] = useState(list);
  const [editingId, setEditingId] = useState(null);

  const editingFeedback =
    feedbacks.find((feedback) => feedback.id === editingId) ?? null;

  const cencelEdit = () => setEditingId(null);

  const addFeedBack = (newFeedback) => {
    const feedback = { ...newFeedback, id: uuidv4() };
    setFeedbacks((prev) => [...prev, feedback]);
  };

  const updateFeedback = (id, changes) => {
    setFeedbacks((prevFeedbacks) =>
      prevFeedbacks.map((feedback) =>
        feedback.id === id
          ? { ...feedback, ...changes, id: feedback.id }
          : feedback,
      ),
    );
    setEditingId(null);
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
        {editingFeedback && (
          <p role="status">
            Обрано: {editingFeedback.text}
            <button
              type="button"
              className="btn btn-secondary"
              onClick={cencelEdit}
            >
              Закенсилити
            </button>
          </p>
        )}

        <FeedBackForm
          key={editingFeedback?.id ?? "new"}
          feedback={editingFeedback}
          onAdd={addFeedBack}
          onCancel={cencelEdit}
          onUpdate={updateFeedback}
        />
        <FeedBackStat feedbacks={feedbacks} />
        <FeedBackList
          feedbacks={feedbacks}
          onDelete={handleDelete}
          onEdit={setEditingId}
        />
      </main>
    </>
  );
}

export default App;
