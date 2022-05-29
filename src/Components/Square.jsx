import React from 'react';

const Square = ({value, handleClick, index }) => {
    return (
        <div className='square_btn' key={index}>
            <button onClick={() => handleClick(index)}>{value}</button>
        </div>
    );
}

export default Square;
