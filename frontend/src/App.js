import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logobar /> // put the navbar into the Logobar
      </header>
      <body className="App-body">
        <Mainbody />
      </body>
    </div>
  );
}

export default App;
