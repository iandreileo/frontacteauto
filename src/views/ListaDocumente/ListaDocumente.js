import React, { useState, useEffect, useContext } from "react";
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
import { fieldsContext } from "components/DataProvider/DataProvider";


const useStyles = makeStyles(styles);

export default function TableList() {
  const classes = useStyles();

  const [cereri, setCereri] = useState([]);
  const [contracte, setContracte] = useState([]);

  const [fields, setFields] = useContext(fieldsContext);

  const setDocument = (buyer, seller, vehicle) => {
    setFields({
      "buyerFields" : buyer,
      "sellerFields" : seller,
      "vehicleFields" : vehicle
    })
  }

  useEffect( () => {

    getDocumente().then((documente) => {
      const cereriTabel = [];
      documente.cereri.forEach((document) => {
        cereriTabel.push([
          document._id+1,
          document.name,
          <Link to={`/acte/genereaza/document/${document.name}_${document._id}`}>
            <Button color="primary" onClick={() => setDocument(document.buyerFields, document.sellerFields, document.vehicleFields)}>
              Genereaza
            </Button>
          </Link>
        ])
      })
      setCereri(cereriTabel);

      const contracteTabel = [];
      documente.contracte.forEach((document) => {
        contracteTabel.push([
          document._id+1,
          document.name,
          <Link to={`/acte/genereaza/document/${document.name}_${document._id}`}>
            <Button color="primary" onClick={() => setDocument(document.buyerFields, document.sellerFields, document.vehicleFields)}>
              Genereaza
            </Button>
          </Link>
        ])
      })
      setContracte(contracteTabel);
    });

  },[])

  return (
    <GridContainer>
      
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary" style={{background: "#4caf50!important"}}>
            <h4 className={classes.cardTitleWhite}>Cereri disponibile</h4>
            <p className={classes.cardCategoryWhite}>
              Genereaza cererea de care ai nevoie.
            </p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["Nr.Crt", "Denumire document", "Genereaza"]}
              tableData={cereri}
            />
          </CardBody>
        </Card>
      </GridItem>

      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary" style={{background: "#4caf50!important"}}>
            <h4 className={classes.cardTitleWhite}>Contracte disponibile</h4>
            <p className={classes.cardCategoryWhite}>
              Genereaza contractul de care ai nevoie.
            </p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["Nr.Crt", "Denumire document", "Genereaza"]}
              tableData={contracte}
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
