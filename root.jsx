//React
import React from 'react';
import ReactDOM from 'react-dom';

//Router
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;

//Components
import App from './components/app';
import Profile from './components/profile';
import Resume from './components/resume';
import Portfolio from './components/portfolio';
import Contact from './components/contact';

const routes = (
  <Router history={hashHistory} >
    <Route path="/" component={App} >
      <IndexRoute component={Profile} />
      <Route path="profile" component={Profile} />
      <Route path="portfolio" component={Portfolio} />
      <Route path="resume" component={Resume} />
      <Route path="contact" component={Contact} />
    </Route>
  </Router>
);

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  ReactDOM.render(routes, root);
});
