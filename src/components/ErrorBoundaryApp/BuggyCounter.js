import React, { useState } from "react";

const BuggyCounter = () => {
    const [counter, setCounter] = useState(0);

    function handleClick() {
        setCounter(counter + 1)
    }

    if (counter === 5) {
        // Simulate a JS error
        throw new Error('I crashed!');
    }
    
    return <><span className="h2">{counter}</span><button className="btn btn-info mx-2" onClick={handleClick}>Click to increment</button><hr /></>;
}

export default BuggyCounter;