import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 
'react-router-dom';
import Home from './components/pages/Home';
import Resume from './components/pages/Resume';
import AboutMe from './components/pages/AboutMe';
import Contact from './components/pages/Contact';

function App() {
  return (
    <>
      <Router>
        <Navbar />
          <Route path='/' exact component=
          {Home} />
          <Route path='/' exact component=
          {AboutMe} />
          <Route path='/' exact component=
          {Resume} />
          <Route path='/' exact component=
          {Contact} />
      </Router>
    </>
  );
}

export default App;
