import React, { useContext, useEffect } from "react";
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
import styles from '../GenereazaDocument/styles';
import { sellerDataContext } from "components/DataProvider/DataProvider";
import { buyerDataContext } from "components/DataProvider/DataProvider";
import { vehicleDataContext } from "components/DataProvider/DataProvider";
import { getPdf } from "api/getPdf";
import { Link } from "react-router-dom";
import { fieldsContext } from "components/DataProvider/DataProvider";
import { loadingContext } from "components/LoadingProvider/LoadingProvider";


const useStyles = makeStyles(styles);

export default function OtherDataForm({documentName, _id}) {
  const classes = useStyles();
  const [sellerData] = useContext(sellerDataContext);
  const [buyerData] = useContext(buyerDataContext);
  const [vehicleData] = useContext(vehicleDataContext);
  const [fields, setFields] = useContext(fieldsContext);
  const [loading, setLoading] = useContext(loadingContext);


  const generateOnClick = () => {
    setLoading(true);
    console.log(loading);
    getPdf(sellerData, buyerData, vehicleData, documentName, _id).then(setLoading(false));
    console.log(loading);
    setFields({});
  }

  return (
      <>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Alte detalii</h4>
              <p className={classes.cardCategoryWhite}>Finalizeaza si genereaza documentul</p>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                <div style={{textAlign: "center"}}>
                  <Link to="/acte/acte">
                    <Button color="primary" onClick={generateOnClick}>GENEREAZA DOCUMENT</Button>
                  </Link>
                </div>
                </GridItem>
                </GridContainer>
            </CardBody>
          </Card>
        </GridItem>

        </>
  );
}
