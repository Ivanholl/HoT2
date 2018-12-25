const axios = require('axios');


const baseUrl = 'http://localhost:8081';

function axiosPost(url, data){
    return new Promise((resolve, reject) => {
        axios.post(baseUrl + url, data, { crossdomain: true })
        .then(data => {
            resolve(data.data)
        })
        .catch(err => {
            console.error(err)
            reject(err)
        })
    })
}

export default {
    axiosPost
}
