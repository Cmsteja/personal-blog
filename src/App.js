import Header from "./header";
import HomePage from "./home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import contact from "./contact";
import about from "./about";
import blogs from "./blogs";
import './header/style.css';
import test from "./images/README.jpeg"
function App() {
  return (
    <div>
      <Router >
      {/* <img src={test} alt="Background" className="background-image" /> */}
          <Header  style={{color:"black"}}/>
          <Routes>
            <Route exact path="/" Component={HomePage}/>
          </Routes>
          <Routes>
            <Route exact path="/about" Component={about}/>
          </Routes>
          <Routes>
            <Route exact path="/blogs" Component={blogs}/>
          </Routes>
          <Routes>
            <Route exact path="/contact" Component={contact}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
