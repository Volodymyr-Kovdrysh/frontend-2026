import { useContext } from "react";
import FeedbackContext from "./context/FeedbackContext.jsx";
import FeedBackList from "./components/FeedBackList.jsx";
import FeedBackStat from "./components/FeedBackStat.jsx";
import Header from "./components/Header.jsx";
import FeedBackFormSection from "./components/FeedbackFormSection.jsx";
import FeedBackProvider from "./context/FeedBackProvider.jsx";

function FeedBackContent() {
  const { editingFeedback, cancelEdit, clearFeedbacks, resetFeedbacks } =
    useContext(FeedbackContext);

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
              onClick={cancelEdit}
            >
              Закенсилити
            </button>
          </p>
        )}

        <FeedBackFormSection />
        <FeedBackStat />
        <FeedBackList />
      </main>
    </>
  );
}

function App() {
  return (
    <FeedBackProvider>
      <FeedBackContent />
    </FeedBackProvider>
  );
}

export default App;
