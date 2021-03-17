import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import AboutPage from './Components/AboutPage/AboutPage';
import HomePage from './Components/Hompage/HomePage';
import Navbar from './Components/Navbar/Navbar';
import AlertState from './Components/Alert/AlertState';
import { NotesState } from './Components/Hompage/Notes/NotesState';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <NotesState>
          <AlertState>
            <Navbar />
            <div className="app pt-5">
              <div className="container pt-4">
                <Route path="/" component={HomePage} exact />
                <Route path="/about" exact component={AboutPage} />
              </div>
            </div>
          </AlertState>
        </NotesState>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
