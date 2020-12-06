import {BASE_URL} from '../constants';

export const getDosare = async () => {
    const response = await fetch(`${BASE_URL}/getdosare`);
    const json = await response.json();
    console.log(json.dosare);
    return json.dosare;
}
