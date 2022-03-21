import "./App.css";
import axios from "axios";

function App() {
  const APP_ID = "cbfb9ddd";
  const APP_KEY = "eaffffd5345dc91211b5f43a73e5975f";
  const searchString = "pizza";
  const url = `https://api.edamam.com/search?q=${searchString}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const getData = async () => {
    const result = await axios.get(url);
    console.log(result);
  };

  return (
    <div className="App">
      <h1>Food Recipe App</h1>
    </div>
  );
}

export default App;
