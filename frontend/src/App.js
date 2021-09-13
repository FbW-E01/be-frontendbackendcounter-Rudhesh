import "./App.css";

function App() {
  function handleClick() {
    const url = "http://localhost:3030";
    const init = { method: "GET" };
    fetch(url, init)
      .then((result) => result.text())
      .then((text) => console.log(text))
      .catch((error) => console.log(error));
  }

  function IncreaseCounter() {
    const url = "http://localhost:3030";
    const init = { method: "POST" };
    fetch(url, init)
      .then((result) => result.text())
      .then((text) => console.log(text))
      .catch((error) => console.log(error));
  }

  return (
    <div className="App">
      <button onClick={handleClick}>Counter</button>
      <button onClick={IncreaseCounter}>Increase</button>
    </div>
  );
}

export default App;
