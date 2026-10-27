const API_URL = "http://localhost:3000/feedbacks";

export async function requestFeedback(path = "", options = {}) {
  const response = await fetch(`${API_URL}${path}`, options);
  if (!response.ok) {
    throw new Error(`Помилка HTTP ${response.status}`);
  }
  const text = await response.text();
  return text ? JSON.parse(text) : null;
}

export function jsonOptions(method, data) {
  return {
    method,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };
}
