import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/about/" component={About} />
    </Router>
  );
}

export default App;
