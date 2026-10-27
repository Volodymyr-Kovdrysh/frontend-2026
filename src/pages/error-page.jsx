import { Link, isRouteErrorResponse, useRouteError } from "react-router";

function ErrorPage() {
  const error = useRouteError();
  const message = isRouteErrorResponse(error)
    ? `${error.status}: ${error.statusText}`
    : "Не вдалося показати сторінку.";

  return (
    <main className="container">
      <h1>Помилка сторінки</h1>
      <p role="alert">{message}</p>
      <Link to="/">Повернутися до відгуків</Link>
    </main>
  );
}

export default ErrorPage;
