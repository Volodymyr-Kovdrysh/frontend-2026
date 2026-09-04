function App() {
  const n = 10;
  const name = "World'!!";
  const flag = false;

  return (
    <>
      {flag ? <>TRUE</> : <>FALSE</>}
      <div>Hello, World!!</div>
      <div>Hello, {name} </div>
      <div>{Math.sqrt(n)}</div>
      <div>{Math.pow(n, 0.5)}</div>
    </>
  );
}

export default App;
