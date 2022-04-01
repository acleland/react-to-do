import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import { getUser } from './services/users';
import Auth from './views/Auth/Auth';
import Main from './views/Main/Main';

function App() {
  const [currentUser, setCurrentUser] = useState(getUser());

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact to="/">
            {!currentUser && <Auth setCurrentUser={setCurrentUser} />}
            {currentUser && <Main />}
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
