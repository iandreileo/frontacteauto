/*!

=========================================================
* Material Dashboard React - v1.9.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useContext, useEffect } from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

// core components
import Admin from "layouts/Admin.js";

import "assets/css/material-dashboard-react.css?v=1.9.0";

import { DataProvider } from "components/DataProvider/DataProvider";
import UserProvider from "components/Firebase/Providers/UserProvider";
import { UserContext } from "components/Firebase/Providers/UserProvider";
import Login from "components/Firebase/Login";
import { CircularProgress } from "@material-ui/core";
import styles from 'assets/css/Main.module.css';

const hist = createBrowserHistory();

export const App = () => {

  return (
      <Router history={hist}>
        <Switch>
          <Route path="/acte" component={Admin} />
          <Route exact path="/login" component={Login} />
          <Redirect to="/login"/>
        </Switch>
      </Router>

  );
}

export const MainComponent = () => {
  const [ spinner, setSpinner ] = React.useState(true);
  useEffect(() => {
    setTimeout(() => setSpinner(false), 800)
  }, []);
  return (
    <UserProvider>
      <DataProvider>
      {spinner && <div className={styles.loadingDiv}><div className={styles.loading}><CircularProgress style={{color: "#4caf50"}}/></div></div>}
      {!spinner && <App />}
      </DataProvider>
    </UserProvider>
  )
}

ReactDOM.render(<MainComponent />, document.getElementById("root"));
