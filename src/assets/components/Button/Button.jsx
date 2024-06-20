import React from 'react';

const Button = (props) => {
    const {children} = props;
    console.log('This is button section', children)
    return (
        <div>
            <button>{children}</button>
        </div>
    );
};

export default Button;