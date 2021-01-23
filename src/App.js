import React from "react";
import { AuthProvider } from "./context/auth";
import AuthRoute from "./util/AuthRoute";

//FOR ROUTING
import { BrowserRouter as Router, Route } from "react-router-dom";

// FOR STYLING
import "semantic-ui-css/semantic.min.css";
import { Container } from "semantic-ui-react";

//COMPONENTS
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SinglePost from "./pages/SinglePost";

import MenuBar from "./components/MenuBar";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Container>
          <MenuBar />
          <Route exact path="/" component={Home} />
          <AuthRoute exact path="/login" component={Login} />
          <AuthRoute exact path="/register" component={Register} />
          <Route exact path="/posts/:postId" component={SinglePost} />
        </Container>
      </Router>
    </AuthProvider>
  );
}

export default App;
