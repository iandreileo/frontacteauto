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
import { CLEAR_DATA } from "constants/constants";


const useStyles = makeStyles(styles);

export default function SellerDataForm() {
  const classes = useStyles();
  const [sellerData, setSellerData] = useContext(sellerDataContext);
  useEffect(() => {
    console.log(sellerData);
  }, [])

const handleOnChange = (e) => {
    const targetKey = e.target.id;
    const value = e.target.value;
    setSellerData({...sellerData, [targetKey] : value});
    console.log(sellerData);
}

const resetData = () => {
  setSellerData(CLEAR_DATA);
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
                    value={sellerData.name}
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      onChange: handleOnChange,
                      type: "text",
                      value: sellerData.name,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                <CustomInput
                    labelText="CNP"
                    id="cnp"
                    value={sellerData.cnp}
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      onChange: handleOnChange,
                      type: "text",
                      value: sellerData.cnp,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                <CustomInput
                    labelText="Domiciliu (localitatea)"
                    id="location"
                    value={sellerData.location}
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      onChange: handleOnChange,
                      type: "text",
                      value: sellerData.location,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                <CustomInput
                    labelText="Domiciliu (Strada)"
                    id="street"
                    value={sellerData.street}
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      onChange: handleOnChange,
                      type: "text",
                      value: sellerData.street,
                    }}
                  />
                </GridItem>
              </GridContainer>

              <GridContainer>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                    labelText="Domiciliu (Numarul Strazii)"
                    id="nr"
                    value={sellerData.nr}
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      onChange: handleOnChange,
                      type: "text",
                      value: sellerData.nr,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                <CustomInput
                    labelText="Domiciliu (Bloc)"
                    id="bl"
                    value={sellerData.bl}
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      onChange: handleOnChange,
                      type: "text",
                      value: sellerData.bl,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                <CustomInput
                    labelText="Domiciliu (Scara)"
                    id="sc"
                    value={sellerData.sc}
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      onChange: handleOnChange,
                      type: "text",
                      value: sellerData.sc,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                <CustomInput
                    labelText="Domiciliu (Etaj)"
                    id="et"
                    value={sellerData.et}
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      onChange: handleOnChange,
                      type: "text",
                      value: sellerData.et,
                    }}
                  />
                </GridItem>
              </GridContainer>

              <GridContainer>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                    labelText="Domiciliu (Apartament)"
                    id="ap"
                    value={sellerData.ap}
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      onChange: handleOnChange,
                      type: "text",
                      value: sellerData.ap,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                <CustomInput
                    labelText="Domiciliu (Judet)"
                    id="county"
                    value={sellerData.county}
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      onChange: handleOnChange,
                      type: "text",
                      value: sellerData.county,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                <CustomInput
                    labelText="Email"
                    id="email"
                    value={sellerData.email}
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      onChange: handleOnChange,
                      type: "text",
                      value: sellerData.email,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                <CustomInput
                    labelText="Telefon"
                    id="tel"
                    value={sellerData.tel}
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      onChange: handleOnChange,
                      type: "text",
                      value: sellerData.tel,
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
