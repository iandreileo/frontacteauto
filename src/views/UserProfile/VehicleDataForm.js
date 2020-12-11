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
import { fieldsContext } from "components/DataProvider/DataProvider";


const useStyles = makeStyles(styles);

export default function VehicleDataForm() {
  const classes = useStyles();
  const [vehicleData, setVehicleData] = useContext(vehicleDataContext);
  const [{vehicleFields}] = useContext(fieldsContext);

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
        <h4 className={classes.cardTitleWhite}>Date Vehicul</h4>
        <p className={classes.cardCategoryWhite}>Complete your profile</p>
      </CardHeader>
      <CardBody>
        <GridContainer>
          {
            vehicleFields && vehicleFields.map((item, index) => {
              return (
                <GridItem xs={12} sm={12} md={3} key={index}>
                  <CustomInput
                    labelText={item.labelText}
                    id={item.id}
                    value={vehicleData[item.id]}
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      onChange: handleOnChange,
                      type: "text",
                      value: vehicleData[item.id],
                    }}
                  />
                </GridItem>
              );
            })
          }
          </GridContainer>
      </CardBody>
      <CardFooter style={{textAlign : "center"}}>
        <Button color="primary" onClick={resetData}>Reseteaza Date</Button>
      </CardFooter>
    </Card>
  </GridItem>

  );
}
