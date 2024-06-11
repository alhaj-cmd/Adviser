import React, { useState } from 'react';
import {Project} from '../../../../public/project';

const Person = () => { 
    const [projectNam, setProject] = useState(Project);
    console.log('given data', projectNam)
    const handleData = (id) =>{
        const filterdata = projectNam.filter((d) =>d.id != id);
        setProject(filterdata) 
    }
 
    const removeData = () => {
        setProject([])
    }

    return (
       <>
        <div className=' text-center my-4'>
            {
                projectNam.map((data) =>( <>
                <p>{data.name}</p>
                <button onClick={()=>handleData(data.id)} className='text-xl font-semibold bg-red-200'>Remove</button>
                </>))
            }
        <br />
        <button onClick={() => removeData() } className='bg-green-400 my-2'>RemoveAll</button>
        </div>
       
       </>
    );
};

export default Person;