import React, { useState } from 'react';
import {Project} from '../../../../public/project';

const Person = () => {
    const [projectNam, setProject] = useState(Project);
    console.log('given data', projectNam)


    return (
        <div>
            
        </div>
    );
};

export default Person;