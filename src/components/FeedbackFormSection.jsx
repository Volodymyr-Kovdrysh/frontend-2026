import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext.jsx";
import FeedBackForm from "./FeedBackForm.jsx";

function FeedBackFormSection() {
  const { editingFeedback, addFeedBack, cancelEdit, updateFeedback } =
    useContext(FeedbackContext);

  return (
    <FeedBackForm
      key={editingFeedback?.id ?? "new"}
      feedback={editingFeedback}
      onAdd={addFeedBack}
      onCancel={cancelEdit}
      onUpdate={updateFeedback}
    />
  );
}

export default FeedBackFormSection;
