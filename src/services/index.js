import  axios from 'axios'
import endpoints from './endpoint'
const BASE_URL = 'https://mongodb-amazon.herokuapp.com'



const postRequest = async( key ,data) =>  {
    return await axios.post(BASE_URL + endpoints[key] , data )
    
}


export default { 
    BASE_URL,
    endpoints,
    postRequest 
   
    
}