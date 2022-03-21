import "./App.css";

function App() {
  const APP_ID = "cbfb9ddd";
  const APP_KEY = "eaffffd5345dc91211b5f43a73e5975f";
  const url = `https://api.edamam.com/search?q=${searchString}&app_id=${APP_ID}&app_key=${APP_KEY}`;
  return (
    <div className="App">
      <h1>Food Recipe App</h1>
    </div>
  );
}

export default App;
