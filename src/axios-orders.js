import axios from 'axios';

const Instance=axios.create({
    baseURL:'https://react-burger-app-68be5-default-rtdb.firebaseio.com/'

});

export default Instance;