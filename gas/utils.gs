function getDataFromSpreadsheet() {
  const data = sheet_feedbacks.getDataRange().getValues();

  const feedbacks = data.slice(1).map((row) => ({
    id: String(row[0]),
    rating: Number(row[1]),
    text: row[2],
  }));

  return { feedbacks };
}
