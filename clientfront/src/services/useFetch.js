import { useEffect, useState } from 'react';


const useFetch = (url) => {

    const [data, setdata] = useState(null);
    const [p, setp] = useState(true);
    const [err, seterr] = useState(null);

    useEffect(() => {
        const abortcont = new AbortController();

        fetch(url, {signal:abortcont.signal} )
            .then(res=>{
                if(!res.ok){
                    throw Error('Cant fetch!');  
                }
                return res.json();
            })
            .then(data=>{
                setdata(data);
                setp(false);
                seterr(null);
            })
            .catch(err=>{
                if(err.name !=='AbortError'){
                    setp(false);
                    seterr(err.message);
                }

            })
            return () => abortcont.abort();
    }, [url])

    return{data,p,err}
}

export default useFetch;