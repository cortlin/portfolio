import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import { Nav } from './components/Nav';
import { Footer } from './components/Footer';
import { About } from './pages/about';
import { Experience } from './pages/experience';
import { Portfolio } from './pages/portfolio';
import { SpecScanner } from './projects/SpecScanner';
import { Forcefield } from './projects/Forcefield';


function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Nav />

        <div className='flex-grow'>
          <Switch>
            <Route path='/portfolio/spec-scanner'>
              <SpecScanner />
            </Route>
            <Route path='/portfolio/forcefield'>
              <Forcefield />
            </Route>
            <Route path="/portfolio">
              <Portfolio />
            </Route>
            <Route path="/experience">
              <Experience />
            </Route>
            <Route path="/">
              <About />
              <Portfolio />
            </Route>
          </Switch>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
