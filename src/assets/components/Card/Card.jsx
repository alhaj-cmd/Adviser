import React, { useEffect, useState } from 'react';
import Allcard from '../Allcard/Allcard';

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
            {
                data.map((setAlldata) => {
                    return <Allcard  setAlldata={setAlldata}/>
                })
            }
        </div>
    );
};

export default Card;