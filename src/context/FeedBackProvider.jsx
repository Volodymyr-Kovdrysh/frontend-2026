import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import list from "../data/FeedbackData.js";
import FeedbackContext from "./FeedbackContext.jsx";
import { requestFeedback, jsonOptions } from "../api/feedbackApi.js";
import getDataFromGoogleAppScripts from "../data/Utils.js";

function FeedBackProvider({ children }) {
  const [feedbacks, setFeedbacks] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [reloadKey, setReloadKey] = useState(0);
  const isReadOnly = true;
  const [isSaving, setIsSaving] = useState(false);
  const bulkReady = false;

  const reloadFeedbacks = () => {
    setIsLoading(true);
    setError("");
    setReloadKey((key) => key + 1);
  };

  useEffect(() => {
    async function loadFeedbacks() {
      try {
        const data = await getDataFromGoogleAppScripts(
          `${import.meta.env.VITE_gasURL}?method=GET`,
        );
        setFeedbacks(data.feedbacks);
        setEditingId((id) =>
          data.feedbacks.some((feedback) => feedback.id === id) ? id : null,
        );
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

  const runMutation = async (task) => {
    if (isSaving || isLoading) return false;
    setIsSaving(true);
    setError("");
    try {
      await task();
      return true;
    } catch (error) {
      setError(error.message);
      return false;
    } finally {
      setIsSaving(false);
    }
  };

  const addFeedBack = (newFeedback) =>
    runMutation(async () => {
      const saved = await requestFeedback(
        "",
        jsonOptions("POST", {
          ...newFeedback,
          id: uuidv4(),
        }),
      );
      setFeedbacks((prev) => [...prev, saved]);
    });

  const updateFeedback = (id, changes) =>
    runMutation(async () => {
      const current = feedbacks.find((feedback) => feedback.id === id);
      const saved = await requestFeedback(
        `/${encodeURIComponent(id)}`,
        jsonOptions("PUT", { ...current, ...changes, id }),
      );
      setFeedbacks((prev) =>
        prev.map((feedback) => (feedback.id === id ? saved : feedback)),
      );
      setEditingId(null);
    });

  const handleDelete = async (id) => {
    if (!window.confirm("Видалити цей відгук??")) return false;
    return runMutation(async () => {
      await requestFeedback(`/${encodeURIComponent(id)}`, { method: "DELETE" });
      setFeedbacks((prev) => prev.filter((feedback) => feedback.id !== id));
      if (editingId === id) setEditingId(null);
    });
  };

  const clearFeedbacks = async () => {
    if (!window.confirm("Видалити всі відгуки із сервера?")) return false;
    return runMutation(async () => {
      try {
        const current = await requestFeedback();
        for (const feedback of current) {
          await requestFeedback(`/${encodeURIComponent(feedback.id)}`, {
            method: "DELETE",
          });
        }
        setFeedbacks([]);
        setEditingId(null);
      } finally {
        setIsLoading(true);
        setReloadKey((key) => key + 1);
      }
    });
  };

  const resetFeedbacks = async () => {
    if (
      !window.confirm(
        "Замінити серверний список трьома початковими прикладами?",
      )
    )
      return false;
    return runMutation(async () => {
      try {
        const current = await requestFeedback();
        for (const feedback of current) {
          await requestFeedback(`/${encodeURIComponent(feedback.id)}`, {
            method: "DELETE",
          });
        }
        for (const feedback of list) {
          await requestFeedback(
            "",
            jsonOptions("POST", { ...feedback, id: String(feedback.id) }),
          );
        }
        setEditingId(null);
      } finally {
        setIsLoading(true);
        setReloadKey((key) => key + 1);
      }
    });
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
