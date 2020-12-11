import React, { useContext } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import { useParams } from "react-router-dom";
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
