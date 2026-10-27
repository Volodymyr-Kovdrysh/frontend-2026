import { useParams } from "react-router";

function ParamsDemoPage() {
  const { id, name } = useParams();

  return (
    <main className="container">
      <h2>Параметри адреси</h2>
      <p>id: {id}</p>
      <p>name: {name}</p>
      <p>Тип id: {typeof id}</p>
    </main>
  );
}

export default ParamsDemoPage;
