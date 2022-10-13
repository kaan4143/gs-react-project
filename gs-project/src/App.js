import "./App.scss";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import data from "./data.js";

function App() {
  return (
    <div className="App">
      <Header />
      <Main data={data} />
    </div>
  );
}

export default App;
