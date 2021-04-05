import './styles/App.css';
import { Switch, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import Home from "./Components/Home";

function App() {
  return (
    <div className="App">
      <Nav/>
      <Switch>
      <Route exact path="/" component={Home} />
      {/* <Route exact path="/temperature" component={} />
      <Route exact path="/customize-image" component={} /> */}
      </Switch>

    </div>
  );
}

export default App;
