import axios from "axios"


const useAxios = ()=>{
       return axios.create({
        baseURL: "http://localhost:5000"
    })


}

export default useAxios