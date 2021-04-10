import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./redux/ducks/counter";


const Counter = (props) => {
  const { name } = props;
  const [votes, setVotes] = useState(0);

  const dispatch = useDispatch();


  const handleIncrement = () => {
    dispatch(increment());
    setVotes(votes + 1);
  }

  const handleDecrement = () => {
    dispatch(decrement());
    setVotes(votes - 1);
  }

  return (
    <div style={{ backgroundColor: 'gray', margin: '10px', padding: '20px' }}>
      <h2>{name}</h2>
      <h3>{`Individual Votes: ${votes}`}</h3>
      <div>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
    </div>
  )
}


export default Counter