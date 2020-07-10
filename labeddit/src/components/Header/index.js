import React, { useContext } from "react";

import LanguageContext from "../../contexts/LanguageContext";
import { languages } from "../../languages";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Typography from "@material-ui/core/Typography";

import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  color: {
    background: "#f2f2f2",
  },
}));

function ElevationScroll(props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const Header = (props) => {
  const [selectedLanguage, setLanguage] = useContext(LanguageContext);
  const classes = useStyles();
  const history = useHistory();

  const handleLanguageSelect = (event) => {
    localStorage.setItem("language", event.target.value);
    setLanguage(event.target.value);
  };

  const handleLogout = () => {
    localStorage.removeItem("labeddit");
    history.push("/login");
  };

  return (
    <React.Fragment>
      <ElevationScroll {...props}>
        <AppBar className={classes.color}>
          <Toolbar>
            <Typography
              color="secondary"
              variant="h6"
              className={classes.title}
            >
              LabEddit
            </Typography>
            <Button onClick={handleLogout}>
              {languages[selectedLanguage].logoutLabel}
            </Button>
            <select value={selectedLanguage} onChange={handleLanguageSelect}>
              <option value={"pt"}>PT</option>
              <option value={"en"}>EN</option>
            </select>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </React.Fragment>
  );
};

export default Header;
