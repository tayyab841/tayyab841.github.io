import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from "./components/navbar.component";
import Cvslist from "./components/cvs-list.component"
import EditCV from "./components/edit-cv.component"
import CreateCV from "./components/create-cv.component"

function App() {
  return (
    <div className="container">
      <Router>
        <Navbar />
        <br/>
        <Route path="/" component={Cvslist} />
        <Route path="/edit/:id" component={EditCV} />
        <Route path="/create" component={CreateCV} />
      </Router>
    </div>
  );
}

export default App;