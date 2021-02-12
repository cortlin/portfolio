import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Nav } from './components/Nav';
import { About } from './pages/about';
import { Experience } from './pages/experience';
import { Portfolio } from './pages/portfolio';
import HeadShot from './static/headshot.jpg';

function App() {
  return (
    <Router>
      <>
        <div className="flex">
          <Nav />

          <div className='flex-grow mt-20'>
            <img className='rounded-full h-48 w-48 mx-auto' src={HeadShot} alt="Cortlin's Headshot" />
            <div className='my-10'>
              <h1 className='text-center text-5xl py-4'>Hi. Thanks for visiting.</h1>
              <h2 className='text-center text-2xl py-2'>My name is Cortlin and I am a front-end developer and designer</h2>
            </div>


            <Switch>
              <Route path="/portfolio">
                <Portfolio />
              </Route>
              <Route path="/experience">
                <Experience />
              </Route>
              <Route path="/">
                <About />
              </Route>
            </Switch>
          </div>
        </div>

      </>



    </Router>
  );
}

export default App;
