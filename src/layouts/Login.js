import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
// creates a beautiful scrollbar
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Navbar from "components/Navbars/Navbar.js";
import Footer from "components/Footer/Footer.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import FixedPlugin from "components/FixedPlugin/FixedPlugin.js";

import routes from "routes.js";

import styles from "assets/jss/material-dashboard-react/layouts/adminStyle.js";

import bgImage from "assets/img/sidebar-2.jpg";
import logo from "assets/img/reactlogo.png";
import GenereazaDocument from "views/GenereazaDocument/GenereazaDocument";
import { UserContext } from "components/Firebase/Providers/UserProvider";

//login firebase
import { signInWithGoogle } from '../components/Firebase/Services/firebase';
import { auth } from '../components/Firebase/Services/firebase';
import Login from "components/Firebase/Login";

let ps;

const switchRoutes = (
  <Switch>
    {routes.map((prop, key) => {
      if (prop.layout === "/acte") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      }
      return null;
    })}
    {/* <Route path={`/acte/genereaza/document/:id`} component={GenereazaDocument} /> */}

    {/* {user === null ? <Redirect to="/acte/" /> : <Redirect from="/" to="/acte/panou" />} */}
    {/* <Redirect from="/acte" to="/acte/panou" /> */}
  </Switch>
);

const useStyles = makeStyles(styles);

export default function Login({ ...rest }) {
  // styles
  const classes = useStyles();
  // ref to help us initialize PerfectScrollbar on windows devices
  const mainPanel = React.createRef();
  // states and functions
  const [image, setImage] = React.useState(bgImage);
  const [color, setColor] = React.useState("green");
  const [fixedClasses, setFixedClasses] = React.useState("dropdown show");
  const [mobileOpen, setMobileOpen] = React.useState(false);

  //login firebase
  const [user, setUser] = useContext(UserContext);
  let unsubscribeFromAuth = null;

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const getRoute = () => {
    return window.location.pathname !== "/admin/maps";
  };



  if(user) {
    return (
      // user === null ? <Login /> :
      <div className={classes.wrapper}>

          {/* On the /maps route we want the map to be on full screen - this is not possible if the content and conatiner classes are present because they have some paddings which would make the map smaller */}
          {getRoute() ? (
            <div className={classes.content}>
              <div className={classes.container}>{switchRoutes}</div>
            </div>
          ) : (
            <div className={classes.map}>{switchRoutes}</div>
          )}
          {getRoute() ? <Footer /> : null}
  
      </div>
    );
  } else {
    return <Redirect to="/acte/panou" />
  }


}
