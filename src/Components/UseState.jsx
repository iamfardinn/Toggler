// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

const UseState = () => {

    const [value,setValue] = useState(0);
    console.log(value);

    const handlePlus =() => {
setValue(value+1);
    }

    const handleMinus =() => {
        setValue(value-1);
    }

  
    return (
        <div className='text-center text-4xl p-10'>
            <h1 className='pt-60 pb-5'>Exploring hook</h1>
            <h1>Count :{value}</h1>
            <button onClick={handlePlus} className='btn btn-success mt-7'>Add</button>
            <button onClick={handleMinus} className='btn btn-danger'>Reduce</button>
        </div>
    );
};

export default UseState;