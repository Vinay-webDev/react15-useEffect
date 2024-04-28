/* useEffect() = React hook that tells react to DO SOME CODE
                 when (pick one):
                 this component re-renders
                 this component mounts
                 the state of a value changes */
/* useEffect(function, [dependencies]) 
useEffect(() => {})    ===>>>  runs after every re-renders
useEffect(() => {},[])    ===>>>  runs only on mounts
useEffect(() => {},[value]) ===>>> run on mount + when value changes */ 
/* USES of useEffect();
1. Event Listeners
2. DOM manupulation
3. subscriptions (real-time updates)
4. Fetch data from an API
5. to clean up when the component umounts */
import React, {useState, useEffect} from 'react';

function MyComponent() {
    
    const [count, setCount] = useState(0);
    /* let's add another state variable */
    const [color, setColor] = useState("green");

    /* 1. add dependencies 
    ===>>> an empty array to do side code only when component mounts
    ===>>> an array with value to do side code 
    when component mounts + value changes */
    useEffect(() => {
        document.title = `Count: ${count} color: ${color}`;
    }, [count, color]);

    function addCount() {
        /* it's always good prcatice to have updater function*/
        setCount( c => c + 1 );
    }
    /* 2. to demonstrate the use of dependencies let's have example */
    function substractCount() {
        setCount( c => c - 1 );
    }
    function changeColor() {
        setColor( c => c === "green" ? "red" : "green" );
    }

    return(
        <>
            <p style={{color: color}} > Count: {count} </p>
            <button onClick={addCount} > add </button>
            <button onClick={substractCount} > substract </button> <br />
            <button onClick={changeColor} > change color </button>
        </>
    );
}
export default MyComponent 



