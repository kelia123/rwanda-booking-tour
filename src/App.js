// import logo from './asset/1.jpg';
import './App.css';
import Home from "./views/home"
import{BrowserRouter as Router} from "react-router-dom"
import Routes from "./routes"

function App() {
  return (
    <Router><Routes/></Router>
  );
}

export default App;
