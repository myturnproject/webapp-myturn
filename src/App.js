import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import Header from "./components/Header";
import Id from "./components/Id";
import Login from "./components/Login";
import Signin from "./components/Signin";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes/routes";
import AuthApi from "./Utils/AuthApi";
import PlaceToVisit from "./components/Signin";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    backgroundImage: `url(${
      process.env.PUBLIC_URL + "/assets/particles2.jpg"
    })`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
}));
export default function App() {
  const classes = useStyles();
  const [auth, setAuth] = useState(false);

  return (
    <div className={classes.root}>
      <AuthApi.Provider value={{ auth, setAuth }}>
        <CssBaseline />

        <Router>
          ​ <Routes />
        </Router>
      </AuthApi.Provider>
    </div>
  );
}
