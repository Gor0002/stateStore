import {useEffect, useState} from 'react';

export default function Main() {
    const [title, setTitle] = useState("");
    const [data, setData] = useState()
    useEffect(()=>{
        if(title > 2){
            fetch("https://api.punkapi.com/v2/beers").then(res => res.json()).then(res => setData(res))
        }
    },[title])
    console.log(data);
    
    // let confirmed = "";
    // if(data !== undefined){
        // confirmed = data.latest_data.confirmed
    // }
    return (
        <div>
            <input 
                type="text"
                onChange={(e) => setTitle(e.target.value) }
            />
            <div>
                {/* {data !== undefined && data.map(elem =><div>{elem.name}</div>)} */}
                {/* {data} */}
                {/* {title} */}
                {/* {confirmed} */}
            </div>
        </div>
  )}
