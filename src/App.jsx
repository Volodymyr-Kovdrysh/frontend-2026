import ListItem from "./ListItem.jsx";
import { LI } from "./ListItem.jsx";

function App() {
  const n = 10;
  const name = "World'!!";
  const flag = false;
  const list = [
    { id: 1, text: "text1" },
    { id: 2, text: "text2" },
    { id: 3, text: "text3" },
    { id: 4, text: "text1" },
    { id: 5, text: "text2" },
    { id: 6, text: "text3" },
  ];

  return (
    <>
      {flag ? <>TRUE</> : <>FALSE</>}
      <div>Hello, World!!</div>
      <div>Hello, {name} </div>
      <div>{Math.sqrt(n)}</div>
      <div>{Math.pow(n, 0.5)}</div>
      <div>{JSON.stringify(list)}</div>
      <LI />
      <ol>
        {list.map((item, idx) => {
          return <li key={idx}>{JSON.stringify(item)}</li>;
        })}
        <ListItem x={1} y={"2"} text={"text1"} obj={{ k1: "v1", k2: {} }}>
          <p>вкладення</p>
        </ListItem>
      </ol>
    </>
  );
}

export default App;
