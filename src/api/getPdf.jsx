import {BASE_URL} from '../constants';
import axios from 'axios';


export const getPdf = async (vehicleData, personalData) => {

    axios.get(`${BASE_URL}/documentdownload`, {responseType: 'blob', params : {
        personalData : personalData,
        vehicleData: vehicleData
    }})
        .then(res => {
            //Create a Blob from the PDF Stream
            const file = new Blob(
                [res.data], 
                {type: 'application/pdf'});
            //Build a URL from the file
            const fileURL = URL.createObjectURL(file);
            //Open the URL on new Window
            window.open(fileURL);
        });
}
