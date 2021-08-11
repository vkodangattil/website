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
      <Router basename="/website">
        <Navbar />
          <Route path='/' exact component={Home} />
          <Route path='/' component={AboutMe} />
          <Route path='/' component={Resume} />
          <Route path='/' component={Contact} />
      </Router>
    </>
  );
}

export default App;
