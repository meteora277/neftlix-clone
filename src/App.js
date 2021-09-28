import React from "react";
import { GlobalStyle } from "./components/globalStyles";
import { Switch, Route } from "react-router-dom";
import SignUp from "./Pages/SignIn";


import Index from "./Pages/Index";
import TempPage from "./Pages/TempPage";

export default function App() {
  return (
    <div>
      <GlobalStyle />
      <Switch>
        <Route exact path="/">
          <Index />
        </Route>
        <Route path="/login">
          <SignUp/>
        </Route>
        <Route path="/:other"><TempPage/></Route>
      </Switch>

    </div>
  );
}
