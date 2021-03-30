import {useState,useEffect} from 'react'
require ("dotenv").config();

function useFetch(url,key) {

    const [data,setData] = useState()
    useEffect(()=>{
        console.log(process.env.REACT_APP_APIKEY)
        const opts = {"method": "GET",
        "headers": {
            "x-rapidapi-key": process.env.REACT_APP_APIKEY
        }}
        fetch(url,opts)
            .then(res=>res.json())
            .then(data=>{
                setData(data)
            })
    },[url])
    console.log(url,key)
    return data
}

export default useFetch