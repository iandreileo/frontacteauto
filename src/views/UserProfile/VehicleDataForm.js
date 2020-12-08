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
import { CLEAR_DATA } from "constants/constants";


const useStyles = makeStyles(styles);

export default function VehicleDataForm() {
  const classes = useStyles();
  const [vehicleData, setVehicleData] = useContext(vehicleDataContext);


  const handleOnChange = (e) => {
    const targetKey = e.target.id;
    const value = e.target.value;
    setVehicleData({...vehicleData, [targetKey] : value});
    console.log(vehicleData);
}

const resetData = () => {
  setVehicleData(CLEAR_DATA);
}




  return (
    <GridItem xs={12} sm={12} md={12}>
    <Card>
      <CardHeader color="primary">
        <h4 className={classes.cardTitleWhite}>Date Vanzator / Proprietar</h4>
        <p className={classes.cardCategoryWhite}>Complete your profile</p>
      </CardHeader>
      <CardBody>
        <GridContainer>
          <GridItem xs={12} sm={12} md={3}>
            <CustomInput
              labelText="Marca vehicul"
              id="mark"
              value={vehicleData.mark}
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{
                onChange: handleOnChange,
                type: "text",
                value: vehicleData.mark,
              }}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
          <CustomInput
              labelText="Tipul vehiculului"
              id="type"
              value={vehicleData.type}
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{
                onChange: handleOnChange,
                type: "text",
                value: vehicleData.type,
              }}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
          <CustomInput
              labelText="Seria de sasiu (VIN)"
              id="vin"
              value={vehicleData.vin}
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{
                onChange: handleOnChange,
                type: "text",
                value: vehicleData.vin,
              }}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
          <CustomInput
              labelText="Anul fabricatiei"
              id="year"
              value={vehicleData.year}
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{
                onChange: handleOnChange,
                type: "text",
                value: vehicleData.year,
              }}
            />
          </GridItem>
        </GridContainer>

        <GridContainer>
          <GridItem xs={12} sm={12} md={3}>
          <CustomInput
              labelText="Numar de inmatriculare"
              id="platesNumber"
              value={vehicleData.platesNumber}
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{
                onChange: handleOnChange,
                type: "text",
                value: vehicleData.platesNumber,
              }}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
          <CustomInput
              labelText="Data achizitiei"
              id="buyDate"
              value={vehicleData.buyDate}
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{
                onChange: handleOnChange,
                type: "text",
                value: vehicleData.buyDate,
              }}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
          <CustomInput
              labelText="Vanzator"
              id="buyName"
              value={vehicleData.buyName}
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{
                onChange: handleOnChange,
                type: "text",
                value: vehicleData.buyName,
              }}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
          <CustomInput
              labelText="Tipul achizitiei"
              id="buyType"
              value={vehicleData.buyType}
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{
                onChange: handleOnChange,
                type: "text",
                value: vehicleData.buyType,
              }}
            />
          </GridItem>
        </GridContainer>


      </CardBody>
      <CardFooter style={{textAlign : "center"}}>
        <Button color="primary" onClick={resetData}>Reseteaza Date</Button>
      </CardFooter>
    </Card>
  </GridItem>

  );
}
