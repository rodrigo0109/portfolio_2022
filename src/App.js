import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Componentes/Home/Home';
import Nav from './Componentes/Nav/Nav';
function App() {
  return (
    <Router>
      <Nav />
        <Switch>
        <Route path="/" exact component={Home}/> 
        </Switch>
    </Router>
  );
}
export default App;

