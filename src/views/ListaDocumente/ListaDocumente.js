import React, { useState, useEffect } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import styles from "./styles";
import {getDocumente, getDosare} from "../../api";
import Button from "components/CustomButtons/Button.js";
import {Link} from "react-router-dom";


const useStyles = makeStyles(styles);

export default function TableList() {
  const classes = useStyles();

  const [documente, setDocumente] = useState([]);
  const [dosare, setDosare] = useState([]);

  useEffect( () => {
    getDocumente().then((documente) => {
      const documenteTabel = [];
      documente.forEach((document) => {
        documenteTabel.push([
          document._id+1,
          document.name,
          <Link to={`/acte/genereaza/document/${document._id}`}>
            <Button color="primary">
              Genereaza
            </Button>
          </Link>
        ])
      })
      setDocumente(documenteTabel);
    });
    getDosare().then((dosare) => {
      console.log(dosare);
      const dosareTabel = [];
      dosare.forEach((dosar) => {
        dosareTabel.push([
          dosar._id+1,
          dosar.name,
          <Link to={`/genereaza/dosar/${dosar._id}`}>
            <Button color="primary">
              Genereaza
            </Button>
          </Link>
        ])
      })
      setDosare(dosareTabel);
  });
  },[])

  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary" style={{background: "#4caf50!important"}}>
            <h4 className={classes.cardTitleWhite}>Documente disponibile</h4>
            <p className={classes.cardCategoryWhite}>
              Mai jos este lista cu documente pe care le puteti genera.
            </p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["Nr.Crt", "Denumire document", "Genereaza"]}
              tableData={documente}
            />
          </CardBody>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Dosare disponibile</h4>
            <p className={classes.cardCategoryWhite}>
              Mai jos este lista cu dosarele complete pe care le puteti genera.
            </p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["Nr. Crt", "Denumire dosar", "Genereaza"]}
              tableData={dosare}
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
