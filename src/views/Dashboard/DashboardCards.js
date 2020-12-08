import React, { useContext } from "react";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Warning from "@material-ui/icons/Warning";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";

import Accessibility from "@material-ui/icons/Accessibility";

// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";

import Danger from "components/Typography/Danger.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";

import CardFooter from "components/Card/CardFooter.js";



import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
import { UserContext } from "components/Firebase/Providers/UserProvider";
import { PRICE_PER_GENERATE, TIME_PER_GENERATE } from "../../constants";
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import BeenhereIcon from '@material-ui/icons/Beenhere';

const useStyles = makeStyles(styles);

export default function DashboardCards() {
  const classes = useStyles();
  const [user, setUser] = useContext(UserContext);

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
                <Icon>content_copy</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Ai generat</p>
              <h3 className={classes.cardTitle}>
                {user && user.dbData.acteGenerate} / <small>{user && user.dbData.subscriptie.acteDisponibile}</small> acte
              </h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Danger>
                  <Warning />
                </Danger>
                <a href="#pablo" onClick={e => e.preventDefault()}>
                  Cumpara un pachet pentru mai multe acte
                </a>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="success" stats icon>
              <CardIcon color="success">
                <AccountBalanceWalletIcon />
              </CardIcon>
              <p className={classes.cardCategory}>Ai economisit</p>
              <h3 className={classes.cardTitle}>{user && user.dbData.acteGenerate * PRICE_PER_GENERATE} RON si {user && user.dbData.acteGenerate * TIME_PER_GENERATE} minute</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <AnnouncementIcon />
                In medie actele costa {PRICE_PER_GENERATE} RON / bucata.
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="danger" stats icon>
              <CardIcon color="danger">
                <BeenhereIcon />
              </CardIcon>
              <p className={classes.cardCategory}>Ai un pachet</p>
              <h3 className={classes.cardTitle}>{user && user.dbData.subscriptie.tip}</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <LocalOffer />
                Vezi pachetele noastre
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <Accessibility />
              </CardIcon>
              <p className={classes.cardCategory}>Esti langa noi din</p>
              <h3 className={classes.cardTitle}>{user && user.dbData.firstLogin}</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Update />
                Invita-ti prietenii
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        
      </GridContainer>
    </div>
  );
}
