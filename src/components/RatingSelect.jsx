function RatingItem({ value, rating, onChange }) {
  return (
    <li>
      <input
        type="radio"
        id={`rating-${value}`}
        name="feedback-rating"
        value={value}
        checked={rating === value}
        onChange={(event) => onChange(Number(event.target.value))}
      />
      <label htmlFor={`rating-${value}`}>{value}</label>
    </li>
  );
}

function RatingSelect({ rating, onChange }) {
  return (
    <fieldset className="rating-group">
      <legend>Оцінка від 1 до 10</legend>
      <ul className="rating">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
          <RatingItem
            key={value}
            value={value}
            rating={rating}
            onChange={onChange}
          />
        ))}
      </ul>
    </fieldset>
  );
}
export default RatingSelect;
