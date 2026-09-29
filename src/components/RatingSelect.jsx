function RatingSelect({ rating, onChange }) {
  return (
    <div className="form-field rating-select">
      <label htmlFor="feedback-rating">Оцінка від 1 до 10</label>
      <select
        id="feedback-rating"
        value={rating}
        onChange={(event) => onChange(Number(event.target.value))}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>
    </div>
  );
}

export default RatingSelect;
