import {BASE_URL} from '../constants';


export const backendAuth = async (uid) => {
    let response = await fetch(`${BASE_URL}/auth?uid=${uid}`);
    let data = response.json();
    return data;
}
