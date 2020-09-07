import React from 'react';
import Home from './pages/home';
import Profile from './pages/profile';
import Skills from './pages/skill';
import Performance from './pages/performance';
import ContactForm from './pages/contact';
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
            <Route exact path="/skills" component={Skills} />
            <Route exact path="/performance" component={Performance} />
            <Route exact path="/contactForm" component={ContactForm} />
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