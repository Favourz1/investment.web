import axios from 'axios';

export const getCompanyData = async (companyId) => {
    return await axios
        .get(`http://18.217.87.189/company/${companyId}`, {
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        })
        .then((resp) => {
            console.log(resp.data);
            return resp.data;
        })
        .catch((err) => {
            console.log(err.error_message);
            return err;
        });
};

export default { getCompanyData };
