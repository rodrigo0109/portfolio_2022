import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Componentes/Home/Home';
import Nav from './Componentes/Nav/Nav';
import NavProvider from './Componentes/context/NavContext';

function App() {

  return (
    <Router>
      <NavProvider>
        <Nav />
          <Switch>
          <Route path="/" exact component={Home}/> 
          </Switch>
      </NavProvider>
    </Router>
  );
}
export default App;

