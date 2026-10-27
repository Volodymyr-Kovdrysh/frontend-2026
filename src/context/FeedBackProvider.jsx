import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import list from "../data/FeedbackData.js";
import FeedbackContext from "./FeedbackContext.jsx";
import { requestFeedback } from "../api/feedbackApi.js";

function FeedBackProvider({ children }) {
  const [feedbacks, setFeedbacks] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [reloadKey, setReloadKey] = useState(0);
  const isReadOnly = true;
  const isSaving = false;
  const bulkReady = false;

  const reloadFeedbacks = () => {
    setIsLoading(true);
    setError("");
    setReloadKey((key) => key + 1);
  };

  useEffect(() => {
    async function loadFeedbacks() {
      try {
        const data = await requestFeedback();
        setFeedbacks(data);
        setEditingId((id) => data.some((feedback) => feedback.id === id) ? id : null);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    loadFeedbacks();
  }, [reloadKey]);


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
        isLoading,
        isSaving,
        isReadOnly,
        bulkReady,
        error,
        reloadFeedbacks,
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
