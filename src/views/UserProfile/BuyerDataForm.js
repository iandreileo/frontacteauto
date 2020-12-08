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

export default function BuyerDataForm() {
  const classes = useStyles();
  const [buyerData, setBuyerData] = useContext(buyerDataContext);
  
  const handleOnChange = (e) => {
    const targetKey = e.target.id;
    const value = e.target.value;
    setBuyerData({...buyerData, [targetKey] : value});
    console.log(buyerData);
}

const resetData = () => {
  setBuyerData(CLEAR_DATA);
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
              labelText="Nume si prenume complet"
              id="name"
              value={buyerData.name}
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{
                onChange: handleOnChange,
                type: "text",
                value: buyerData.name,
              }}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
          <CustomInput
              labelText="CNP"
              id="cnp"
              value={buyerData.cnp}
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{
                onChange: handleOnChange,
                type: "text",
                value: buyerData.cnp,
              }}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
          <CustomInput
              labelText="Domiciliu (localitatea)"
              id="location"
              value={buyerData.location}
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{
                onChange: handleOnChange,
                type: "text",
                value: buyerData.location,
              }}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
          <CustomInput
              labelText="Domiciliu (Strada)"
              id="street"
              value={buyerData.street}
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{
                onChange: handleOnChange,
                type: "text",
                value: buyerData.street,
              }}
            />
          </GridItem>
        </GridContainer>

        <GridContainer>
          <GridItem xs={12} sm={12} md={3}>
            <CustomInput
              labelText="Domiciliu (Numarul Strazii)"
              id="nr"
              value={buyerData.nr}
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{
                onChange: handleOnChange,
                type: "text",
                value: buyerData.nr,
              }}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
          <CustomInput
              labelText="Domiciliu (Bloc)"
              id="bl"
              value={buyerData.bl}
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{
                onChange: handleOnChange,
                type: "text",
                value: buyerData.bl,
              }}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
          <CustomInput
              labelText="Domiciliu (Scara)"
              id="sc"
              value={buyerData.sc}
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{
                onChange: handleOnChange,
                type: "text",
                value: buyerData.sc,
              }}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
          <CustomInput
              labelText="Domiciliu (Etaj)"
              id="et"
              value={buyerData.et}
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{
                onChange: handleOnChange,
                type: "text",
                value: buyerData.et,
              }}
            />
          </GridItem>
        </GridContainer>

        <GridContainer>
          <GridItem xs={12} sm={12} md={3}>
            <CustomInput
              labelText="Domiciliu (Apartament)"
              id="ap"
              value={buyerData.ap}
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{
                onChange: handleOnChange,
                type: "text",
                value: buyerData.ap,
              }}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
          <CustomInput
              labelText="Domiciliu (Judet)"
              id="county"
              value={buyerData.county}
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{
                onChange: handleOnChange,
                type: "text",
                value: buyerData.county,
              }}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
          <CustomInput
              labelText="Email"
              id="email"
              value={buyerData.email}
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{
                onChange: handleOnChange,
                type: "text",
                value: buyerData.email,
              }}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
          <CustomInput
              labelText="Telefon"
              id="tel"
              value={buyerData.tel}
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{
                onChange: handleOnChange,
                type: "text",
                value: buyerData.tel,
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
