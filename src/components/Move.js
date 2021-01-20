import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import CameraIcon from "@material-ui/icons/PhotoCamera";
import * as ReactBootStrap from "react-bootstrap";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
const useStyles = makeStyles((theme) => ({
  h2: {
    color: "#616161",
    fontSize: "15px",
    fontWeight: "bold",
  },
  h4: {
    color: "#000",
    marginTop: "50",
    fontSize: "25px",
    fontWeight: "bold",
  },
  h1: {
    color: "#7E7E7E",
    background: "transparent",
    frontSize: "100px",
    padding: "6px 0 2px 0",
    marginBottom: "10px",
    width: "70%",
    boxShadow: "5px 5px 15px -5px rgba(0, 0, 0, 0.3)",
  },
  h3: {
    background: "transparent",
    fontSize: "40px",
    letterSpacing: "4",
    width: "90%",
    fontWeight: "bold",
  },
  center_div: {
    width: "50%",
    height: "93vh",
    backgroundColor: "#f4f4f4",
    boxShadow: "5px 5px 25px -5px rgba(0,0,0,0.5) ",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  main_div: {
    width: "100%",
    height: "100vh",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },

  button: {
    minHeight: "60px",
    borderRadius: "5%",
    borderColor: "transparent",
    backgroundColor: "#30336b",
    color: "white",
    frontSize: "200px",
    border: "none",
    outline: "none",
    padding: "0 50px",
    marginTop: "70px",
    boxShadow: "5px 5px 15px -5px rgba(0, 0, 0, 0.3)",
  },

  btn_div: {
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  icon: {
    marginRight: theme.spacing(2),
  },
}));

export default function Move() {
  const classes = useStyles();
  const [num, setNum] = React.useState(0);
  const [name, setName] = React.useState("");
  const [nbcours, setNbcours] = React.useState(0);
  const [nbtotal, setNbtotal] = React.useState(0);
  const [description, setDescription] = React.useState("");
  const [loading, setLoading] = React.useState(true);

  async function suivant() {
    setLoading(true);
    const url =
      "https://cors-anywhere.herokuapp.com/https://mighty-temple-86101.herokuapp.com/api/myturn/service/put/" +
      global.qr;
    const response = await fetch(url, {
      method: "PUT",
    });
    const data = await response.json();
    setNbcours(data.nbcours);
    setNbtotal(data.nbtotal);
    setLoading(false);
  }

  async function actualiser() {
    setLoading(true);
    const url =
      "https://cors-anywhere.herokuapp.com/https://mighty-temple-86101.herokuapp.com/api/myturn/service/put/actualiser/" +
      global.qr;
    const response = await fetch(url, {
      method: "PUT",
    });
    const data = await response.json();
    setNbcours(0);
    setNbtotal(0);
    setLoading(false);
  }

  React.useEffect(() => {
    async function fetchData() {
      const url =
        "https://cors-anywhere.herokuapp.com/https://mighty-temple-86101.herokuapp.com/api/myturn/service/get/" +
        global.service;
      const response = await fetch(url);
      const data = await response.json();
      global.qr[0] = data[0].qr;
      setDescription(data[0].description);
      setName(data[0].nameservice);
      setNbcours(data[0].nbcours);
      setNbtotal(data[0].nbtotal);
      console.log(name);
      setLoading(false);
    }
    fetchData();
  }, []);

  return (
    <>
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            ID : {global.service}
          </Typography>
        </Toolbar>
      </AppBar>

      <div className={classes.main_div}>
        <div className={classes.center_div}>
          <Loader
            type="Puff"
            color="#30336b"
            height={80}
            width={80}
            visible={loading}
            marginTop={5}
          />
          <text className={classes.h3}>{name}</text>
          <text className={classes.h2}>{description}</text>
          <h1></h1>
          <text className={classes.h4}>Nombre en cours :</text>
          <h2 className={classes.h1}>{nbcours} </h2>

          <text className={classes.h4}>Nombre Total:</text>
          <h2 className={classes.h1}>{nbtotal}</h2>

          <div className={classes.btn_div}>
            <button className={classes.button} onClick={() => suivant()}>
              <h3> Suivant</h3>
            </button>
            <button className={classes.button} onClick={() => actualiser()}>
              <h3> Actualiser </h3>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
