import {BASE_URL} from '../constants';

export const getDocumente = async () => {
    const response = await fetch(`${BASE_URL}/getDocumente`);
    const json = await response.json();
    console.log(json.documente);
    return json.documente;
}
