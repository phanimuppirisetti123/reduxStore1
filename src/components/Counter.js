import {useSelector, useDispatch} from 'react-redux';
import React from 'react';
import {counterActions} from '../store/index';
import classes from './Counter.module.css';


const Counter=()=> {
    const show = useSelector(state=>state.counter.showCounter);
    const value = useSelector(state=>state.counter.counter);

   const dispatch = useDispatch();
   
    const incrementHandler=()=>{
    dispatch(counterActions.increment());
    };
    const decrementHandler=()=>{
    dispatch(counterActions.decrement());
    };
    const increaseHandler=()=>{
dispatch(counterActions.increase(10));
    };
    const toggleHandler=()=>{
     dispatch(counterActions.isShow());
    };
    const resetHandler=()=>{
        dispatch(counterActions.reset());
    }

    return (
    <main className={classes.counter}>
    <h1>React Counter</h1>
    {show && <div className={classes.counterValue}>{value}</div>}
    <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={increaseHandler}>Increase By 10</button>
    </div>
    <button onClick={toggleHandler}>Toggle Counter</button>
    <button onClick={resetHandler}>Reset</button>
    </main>
    );
};

export default Counter;

