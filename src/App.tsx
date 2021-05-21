import React from 'react';
import AboutPage from './Components/AboutPage/AboutPage';
import HomePage from './Components/Hompage/HomePage';
import Navbar from './Components/Navbar/Navbar';
import AlertState from './Components/Alert/AlertState';
import { NotesState } from './Components/Hompage/Notes/NotesState';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NotesState>
        <AlertState>
          <Navbar />
          <Switch>
            <div className="app pt-5">
              <div className="container pt-4">
                <Route path="/" exact render={() => <Redirect to={"/todos"} />}/>
                <Route path="/about" exact component={AboutPage} />
                <Route path="/todos" exact component={HomePage} />
              </div>
            </div>
          </Switch>
        </AlertState>
      </NotesState>
    </BrowserRouter>

  );
}

export default App;
