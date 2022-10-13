import React, { useState, useEffect } from 'react';
import Header from '../Common/Header'

export default function Hooks() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  return (
    <>
    <Header />
      <section>
        <div className="container">
            <div className="col-md-6 offset-3 text-center">
                <div>
                    <p>You clicked {count} times</p>
                    <button className='btn btn-info' onClick={() => setCount(count + 1)}>
                        Click me
                    </button>
                </div>
            </div>
        </div>
      </section>
    </>
  );
}