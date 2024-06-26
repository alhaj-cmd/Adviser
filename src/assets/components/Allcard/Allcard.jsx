import React from 'react';

const Allcard = (props) => {
    const {description} = props.setAlldata;
    console.log('All card data', props);
    return (
        <div>
            <p>{description}</p>
        </div>
    );
};

export default Allcard;