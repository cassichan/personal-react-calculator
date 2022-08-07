import "./App.css";
import Calc from "./Calculator/Calc";
import Footer from "./Footer/Footer";

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <h1 class="banner">Cassie's Calculator </h1>
        </header>
        <Calc />
        <Footer />
      </div>
    </>
  );
}

export default App;
