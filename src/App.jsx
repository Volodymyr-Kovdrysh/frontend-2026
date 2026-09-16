import { useState } from "react";
import list from "./data/FeedbackData.js";
import FeedBackList from "./components/FeedBackList.jsx";
import FeedBackStat from "./components/FeedBackStat.jsx";
import Header from "./components/Header.jsx";

function App() {
  const [feedbacks] = useState(list);
  return (
    <>
      <Header />
      <main className="container">
        <FeedBackStat feedbacks={feedbacks} />
        <FeedBackList feedbacks={feedbacks} />
      </main>
    </>
  );
}

export default App;
