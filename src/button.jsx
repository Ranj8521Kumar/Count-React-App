import React from 'react';

function Button({name, count, setCount, operation}){

    const handleClick = ()=>{
        if(operation==='increment'){
            setCount(count+1);
        }else if(operation==='decrement'){
            setCount(count-1);
        }
    }

    return(
        <>
            <button className='count-button' onClick={handleClick}>{name}</button>
        </>
    )
}

export default Button;