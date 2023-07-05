import Header from "./header";
import HomePage from "./home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import contact from "./contact";
import about from "./about";
import blogs from "./blogs";

function App() {
  return (
    <div>
      <Router>
          <Header/>
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
