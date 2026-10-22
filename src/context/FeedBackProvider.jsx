import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import list from "../data/FeedbackData.js";
import FeedbackContext from "./FeedbackContext.jsx";

function FeedBackProvider({ children }) {
  const [feedbacks, setFeedbacks] = useState(list);
  const [editingId, setEditingId] = useState(null);

  const editingFeedback =
    feedbacks.find((feedback) => feedback.id === editingId) ?? null;
  const selectFeedback = (id) => setEditingId(id);
  const cancelEdit = () => setEditingId(null);

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
    if (editingId === id) {
      setEditingId(null);
    }
  };
  const clearFeedbacks = () => {
    if (!window.confirm("Очистити всі відгуки?")) {
      return;
    }
    setFeedbacks([]);
    setEditingId(null);
  };
  const resetFeedbacks = () => {
    setFeedbacks(list);
    setEditingId(null);
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedbacks,
        editingFeedback,
        selectFeedback,
        cancelEdit,
        addFeedBack,
        updateFeedback,
        handleDelete,
        clearFeedbacks,
        resetFeedbacks,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
}

export default FeedBackProvider;
