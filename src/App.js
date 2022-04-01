import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import { getUser } from './services/users';
import Auth from './views/Auth/Auth';

function App() {
  const [currentUser, setCurrentUser] = useState(getUser());

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact to="/">
            <Auth />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
