import FeedBackList from "./components/FeedBackList.jsx";
import FeedBackStat from "./components/FeedBackStat.jsx";
import FeedBackFormSection from "./components/FeedbackFormSection.jsx";
import FeedBackProvider from "./context/FeedBackProvider.jsx";
import FeedBackActions from "./components/FeedBackActions.jsx";

function App() {
  return (
    <main className="container">
      <FeedBackActions />
      <FeedBackFormSection />
      <FeedBackStat />
      <FeedBackList />
    </main>
  );
}

export default App;
