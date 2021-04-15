import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import React, { Suspense } from 'react';

import './App.css';

const RandomCat = React.lazy(() => import('./components/RandomCat'));
const RandomCatAxiosCancel = React.lazy(() => import('./components/RandomCatAxiosCancel'));

const LazyRandomPictures = React.lazy(() => import('./components/LazyRandomPictures'));
const RandomPictures = React.lazy(() => import('./components/RandomPictures'));

const Home = React.lazy(() => import('./components/Home'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div className="loading" ><h1>Loading...</h1></div>}>
        <div>
          <header className="header">
            <nav style={{ display: 'flex', justifyContent: 'space-around', padding: "1rem" }}>
              <Link to="/">Home</Link>
              <Link to="/cat/random">Random Cat</Link>
              <Link to="/cat/cancel/random"> Random Cat With Axios Cancel</Link>
              <Link to="/pictures/random">Random Pictures</Link>
              <Link to="/lazy-pictures/random">Lazy Random Pictures</Link>
            </nav>
          </header>
          <Switch>
            <Route path="/cat/random" component={RandomCat} />
            <Route path="/cat/cancel/random" component={RandomCatAxiosCancel} />
            <Route path="/lazy-pictures/random" component={LazyRandomPictures} />
            <Route path="/pictures/random" component={RandomPictures} />
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
      </Suspense>
    </Router>
  );
}

export default App;
