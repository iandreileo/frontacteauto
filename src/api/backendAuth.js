import {BASE_URL} from '../constants';
import axios from 'axios';


export const backendAuth = (uid) => {

    axios.get(`${BASE_URL}/auth`, {params : {
        uid : uid,
    }})
        .then(res => {
            return res;
        });
}
