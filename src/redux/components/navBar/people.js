import React from 'react';
import Person from './person';

export default function People({data}) {
    console.log(data);
    
return(
    <div>
        {/* {data.map((elem, index) =>{
            return <div className="flexPerson"><Person key={index} name={elem.name} email={elem.email} phone={phone} id={id} /> <div/>
        })} */}
        <div className="flexPerson"><Person /></div>
        <div className="flexPerson"><Person /></div>
        {JSON.stringify(data)}
    </div>
  )}
