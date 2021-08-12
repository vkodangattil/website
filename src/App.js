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
      <BrowserRouter basename="/website">
        <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/" component={AboutMe} />
          <Route path="/" component={Resume} />
          <Route path="/" component={Contact} />
      </BrowserRouter>
    </>
  );
}

export default App;
