import React from "react";
import { Route, Switch } from "react-router";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
import Home from "./components/Home";
import ViewUser from "./components/ViewUser";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/users/add" component={AddUser} />
        <Route exact path="/users/edit/:id" component={EditUser} />
        <Route exact path="/users/:id" component={ViewUser} />
      </Switch>
    </>
  );
};

export default App;
