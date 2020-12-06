import React, {useState, createContext} from 'react';

export const personalDataContext = createContext();
export const vehicleDataContext = createContext();

export const DataProvider = (props) => {
    const [personalData, setPersonalData] = useState({
        "name" : "",
        "cnp" : "",
        "location" : "",
        "street": "",
        "nr" : "",
        "bl" : "",
        "sc" : "",
        "et" : "",
        "ap" : "",
        "county" : "",
        "email" : "",
        "tel" : ""

    });
    const [vehicleData, setVehicleData] = useState({
        "mark" : "",
        "type" : "",
        "vin" : "",
        "year" : "",
        "platesNumber" : "",
        "buyDate" : "",
        "buyName" : "",
        "buyType" : ""
    });


    return (
        <vehicleDataContext.Provider value ={[vehicleData, setVehicleData]}>
            <personalDataContext.Provider value={[personalData, setPersonalData]}>
                {props.children}
            </personalDataContext.Provider>  
        </vehicleDataContext.Provider>

    );
    // personalData={[personalData,setPersonalData]} vehicleData={[vehicleData, setVehicleData]}
}

