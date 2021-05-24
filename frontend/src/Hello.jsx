import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Hello() {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);
    const [phrase, setPhrase] = useState(null);

    useEffect(async () => {
        const result = await axios(
            'http://127.0.0.1:5000/hello', {
            params: {
                count: count
            }
        });
        setPhrase(result.data);
      });

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
            <p> {phrase} </p>
        </div>
    );
}

export default Hello;