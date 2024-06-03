import React, { useState } from 'react';

const Home = () => {
    // let Counts = 0; 
    const [Count, setCount] = useState(0);

    const handleCount = () => {
        setCount(Count+1)
    }
    const handleCountMinus = () => {
        setCount(
         Count -1
         
        )
    }
    return (
        <div className='text-center text-3xl mt-6'>
            <h3>Hello My Best Friends</h3>
            <h1 className='text-bold'>Count {Count}</h1>
            <button onClick={handleCount} className=' btn btn-primary mr-2'>Plus</button>
            <button onClick={handleCountMinus} className='btn error'>Minus</button>
        </div>
    );
};

export default Home;