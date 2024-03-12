import React, { useState } from 'react';
import Button from './button.jsx'

function App(){

  var [count, setCount]=useState(0);

  return(
    <>
      <div className='main'>
        <h1 id='count'>{count}</h1>
        <div>
        <Button name='Count++' count={count} setCount={setCount} operation='increment'></Button>
        <Button name='Count--' count={count} setCount={setCount} operation='decrement'/>
        </div>
      </div>
    </>
  )
}

export default App;