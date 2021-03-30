import { useEffect, useState } from 'react';
require('dotenv').config();

function useFetch(url) {
    const [data, setData] = useState();

    useEffect(() => {
        const opts = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': process.env.REACT_APP_APIKEY,
            },
        };
        fetch(url, opts)
            .then((res) => res.json())
            .then((data) => {
                setData(data);
            })
            .catch((e) => {
                console.log(e);
            });
    }, [url]);

    return data;
}

export default useFetch;
