import React, { useContext } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import avatar from "assets/img/faces/marc.jpg";
import { useParams } from "react-router-dom";
import { personalDataContext } from "components/DataProvider/DataProvider";
import DataForms from "views/UserProfile/DataForms";
import styles from './styles';

const useStyles = makeStyles(styles);

export default function GenereazaDocument() {
    const {id} = useParams();
    const classes = useStyles();

  return (
    <div>
      <DataForms page={"GenereazaDocument"} _id={id}/>
    </div>
  );
}
