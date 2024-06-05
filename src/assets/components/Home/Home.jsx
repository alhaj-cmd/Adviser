import React, { useState } from 'react';

const Home = () => {
    // let Counts = 0; 
    const [Count, setCount] = useState(0);

    const handleCount = () => {
        setCount(Count+1)
    }
    const handleCountMinus = () => {
        setCount(
    Count-1  
            
    )

    }
    return (
        <div className='text-center text-3xl mt-6'>
            <h3>Hello My Best Friends</h3>
            <h1 className='text-bold'>Count {Count}</h1>
            <button onClick={handleCount} className='bg-green-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mr-2'>Plus</button>
            <button onClick={handleCountMinus} className='bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded'>Minus</button>
        </div>
    );
};

export default Home;