import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Chat from "./components/Chat/Chat";
import Login from "./components/Login/Login";
import { useStateValue } from "./components/Utility/StateProvider";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  // eslint-disable-next-line 
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="App">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />
            <div className="app_body">
              <Sidebar />
              <Switch>
                <Route path="/room/:roomId">
                  <Chat />
                </Route>
                <Route path="/">
                  <div>
                    <center>
                      <h1>Welcome to OnTrck</h1>
                      <h2>Please Enter Or Create A Channel In The Sidebar.</h2>
                    </center>
                  </div>
                </Route>
              </Switch>
            </div>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
