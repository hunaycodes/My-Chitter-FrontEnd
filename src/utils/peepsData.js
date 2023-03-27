import axios from 'axios';


export const getPeepsAsync = async () => {
    try {
        const responseData = await axios.get(process.env.REACT_APP_CHITTERURL);
        console.log(responseData.data)
        return responseData.data;
    }
    catch (e) {
        return { error: `Error` };
    }
}


