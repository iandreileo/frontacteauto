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
import styles from '../GenereazaDocument/styles';
import { sellerDataContext } from "components/DataProvider/DataProvider";
import { buyerDataContext } from "components/DataProvider/DataProvider";
import { vehicleDataContext } from "components/DataProvider/DataProvider";
import SellerDataForm from "./SellerDataForm";
import BuyerDataForm from "./BuyerDataForm";
import VehicleDataForm from "./VehicleDataForm";
import OtherDataForm from "./OtherDataForm";


const useStyles = makeStyles(styles);

export default function DataForms({page, _id}) {
  const classes = useStyles();
  const [sellerData, setSellerData] = useContext(sellerDataContext);
  const [buyerData, setBuyerData] = useContext(buyerDataContext);
  const [vehicleData, setVehicleData] = useContext(vehicleDataContext);
  const [documentName, id] = _id.split("_");
  console.log(documentName, id);





  return (
    <div>
        <GridContainer>
            <SellerDataForm />
            <VehicleDataForm />
            {
            documentName.includes("Contract") || documentName.includes("contract") ?
            <BuyerDataForm /> : null
        }
        {
            page === "GenereazaDocument" ? <OtherDataForm /> : null
        }
        </GridContainer>
    </div>
  );
}
