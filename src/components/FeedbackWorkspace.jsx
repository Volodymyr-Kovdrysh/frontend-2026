import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext.jsx";
import FeedBackActions from "./FeedBackActions.jsx";
import FeedBackFormSection from "./FeedbackFormSection.jsx";
import FeedBackStat from "./FeedBackStat.jsx";
import FeedBackList from "./FeedBackList.jsx";

function FeedbackWorkspace() {
  const { isLoading, isSaving, isReadOnly, bulkReady, error, reloadFeedbacks } =
    useContext(FeedbackContext);

  return (
    <>
      {error && <p className="form-error" role="alert">{error}</p>}
      <button type="button" className="btn btn-secondary"
        disabled={isLoading || isSaving} onClick={reloadFeedbacks}>
        Перечитати із сервера
      </button>
      {isLoading && <p role="status">Завантажуємо відгуки…</p>}
      {isSaving && <p role="status">Зберігаємо зміни…</p>}
      {isReadOnly && <p>Режим перегляду: зміни відгуків поки вимкнені.</p>}
      <fieldset className="feedback-workspace" disabled={isLoading || isSaving || isReadOnly || Boolean(error)}>
        <fieldset className="feedback-workspace" disabled={!bulkReady}>
          <FeedBackActions />
        </fieldset>
        <FeedBackFormSection />
        {!isLoading && !error && <FeedBackStat />}
        {!isLoading && !error && <FeedBackList />}
      </fieldset>
    </>
  );
}

export default FeedbackWorkspace;
