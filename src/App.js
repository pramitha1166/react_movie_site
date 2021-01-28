import Header from "./components/header/Header"
import "./App.css"
import Home from "./components/Home/Home"

function App() {
  return (
    <div className="App">
      <Header />

      <main>
        <div style={{display:'none'}}></div>
        <div className="background"></div>
        <div className="top-background"></div>
        <Home />
      </main>
      
    </div>
  );
}

export default App;
