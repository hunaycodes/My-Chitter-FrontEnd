import axios from 'axios';


export const getPeepsAsync = async () => {
    try {
        const responseData = await axios.get(`http://localhost:4000/`);
        //console.log(responseData.data)
        return responseData.data;
    }
    catch (e) {
        return { error: `Error` };
    }
}


