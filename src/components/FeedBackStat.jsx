const FeedBackStat = ({ feedbacks }) => {
  const count = feedbacks.length;
  const total = feedbacks.reduce((sum, feedback) => sum + feedback.rating, 0);
  const average = count > 0 ? (total / count).toFixed(1) : "—";

  return (
    <section className="feedback-stats" aria-label="Статистика відгуків">
      <p>Кількість відгуків: <strong>{count}</strong></p>
      <p>Середня оцінка: <strong>{average}</strong></p>
    </section>
  );
};

export default FeedBackStat;
