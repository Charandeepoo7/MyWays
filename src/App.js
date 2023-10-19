import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // Note the use of 'react-router' instead of 'react-router-dom'
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import ChatRoom from './components/Chat/ChatRoom';
import TaskBoard from './components/TaskBoard/TaskBoard';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/chat" component={ChatRoom} />
          <Route path="/taskboard" component={TaskBoard} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;