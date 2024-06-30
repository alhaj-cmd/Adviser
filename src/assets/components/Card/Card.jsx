import React, { useEffect, useState } from 'react';
import Allcard from '../Allcard/Allcard';
import Button from '../Button/Button';

const Card = () => {
    const [data, setData] = useState([]);

    useEffect(()=>{
        const loadData = async ()=>{
            const res = await fetch(
                `https://openapi.programming-hero.com/api/ai/tools`
            )
            const values = await res.json()
            console.log(values.data.tools);
            setData(values.data.tools);

        };
        loadData();
    },[])
    return (
        <div>
            <button className='bg-green-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mr-2'>see all</button>
       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:px-12 my-6'>
       {
                data.map((setAlldata) => {
                    return <Allcard  setAlldata={setAlldata}/>
                })
            }
       </div>
        </div>
    );
};

export default Card;