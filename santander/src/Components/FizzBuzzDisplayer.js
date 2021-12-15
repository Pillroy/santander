// store a number in state
// display number transformed by fizzbuzz function
// two buttons - one to increment, one to decrement

import { useState } from 'react';
import fizzBuzz from '../main';


const FizzBuzzDisplayer = () => {

 const [number, setNumber] = useState(0);

 const handleIncrement = () => {
   setNumber((p) => p++);
 };

 const handleDecrement = () => {
   setNumber((p) => p--);
 };

    return (
        <div>
            <p>{fizzBuzz(number)}</p>
        <button onClick={handleIncrement}>Add one</button>
        <button onClick={handleDecrement}>Minus one</button>
      </div>
    );
}

export default FizzBuzzDisplayer;