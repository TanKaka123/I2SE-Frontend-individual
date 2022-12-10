import axios from 'axios';
import { api, postApi } from '../constant/api';

const getAllPost=()=>{
 
    axios.get(`${api}${postApi}`)
    .then((res)=>{
        console.log("data ->",res.data.data)
    })
    .catch((err)=>{
        console.log("err : ",err)
    })
}

const createPost=(data)=>{
    axios.post(`${api}${postApi}`,data)
    .then((res)=>{
        console.log(res)
    })
    .catch((err)=>{
        console.log("err : ",err)
    })
}

export { getAllPost, createPost };