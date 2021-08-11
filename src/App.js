import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Resume from './components/pages/Resume';
import AboutMe from './components/pages/AboutMe';
import Contact from './components/pages/Contact';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about-me" component={AboutMe} />
          <Route path="/resume" component={Resume} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
