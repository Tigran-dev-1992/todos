import React from 'react';
import {HashRouter, Route, Switch } from 'react-router-dom'
import AboutPage from './Components/AboutPage/AboutPage';
import HomePage from './Components/Hompage/HomePage';
import Navbar from './Components/Navbar/Navbar';
import AlertState from './Components/Alert/AlertState';
import { NotesState } from './Components/Hompage/Notes/NotesState';

function App() {
  return (
    // <BrowserRouter>
    <HashRouter>
      <NotesState>
        <AlertState>
          <Navbar />
          <Switch>
            <div className="app pt-5">
              <div className="container pt-4">
                <Route path="/" component={HomePage} exact />
                <Route path="/about" exact component={AboutPage} />
              </div>
            </div>
          </Switch>
        </AlertState>
      </NotesState>
    </HashRouter>
    // </BrowserRouter>
  );
}

export default App;
