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

    function addCount() {
        /* it's always good prcatice to have updater function*/
        setCount( c => c + 1 );
    }
    /* add dependencies 
    ===>>> an empty array to do side code only when component mounts
    ===>>> an array with value to do side code 
    when component mounts + value changes */
    useEffect(() => {
        document.title = `Count: ${count}`;
    }, [count]);

    return(
        <>
            <p> Count: {count} </p>
            <button onClick={addCount} > add </button>
        </>
    );
}
export default MyComponent 



