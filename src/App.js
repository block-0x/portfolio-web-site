import React from 'react';
import Home from './pages/home';
import Profile from './pages/profile';
import ButtonAppBar from './components/header';
import { AnimatePresence } from "framer-motion";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
} from 'react-router-dom';

const Routes = () => {
  const location = useLocation();
  const [rootPath] = location.pathname.split("/");
  return (
    <div className="App">
      <AnimatePresence exitBeforeEnter initial={false}>
          <Switch location={location} key={rootPath}>
            <Route exact path="/" component={Home} />
            <Route exact path="/profile" component={Profile} />
          </Switch>
      </AnimatePresence>
    </div>
  );
};

export default function App() {
  return (
    <Router basename={process.env.PUBLIC_URL} >
      <ButtonAppBar />
      <Routes />
    </Router>
  );
}