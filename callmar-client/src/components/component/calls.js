import React, { useState } from 'react';

const  Calls = () => {
    const userEmail = localStorage.getItem('token');
    const  handle = async () =>  {
        const response = await fetch(
        "http://localhost:3000/account/calls", 
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `${localStorage.getItem('token')}`
      }
    }
    )
    const data = await response.json();
    return data

}
    const data = handle()
    return (
        <div>
            <p>{data}</p>
        </div>
    );
}

export default Calls;