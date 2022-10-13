import React, {useEffect, useState} from 'react'
import Header from '../Common/Header'
import axios from 'axios'

export default function HTTPRequests() {
    const [error, setError] = useState(null);

    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    const [isQuotesLoaded, setIsQuotesLoaded] = useState(false);
    const [quotes, setQuotes] = useState([]);
  
    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
      fetch("https://dummyjson.com/quotes?limit=5")
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result);
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])

    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
      axios.get('https://dummyjson.com/quotes?skip=20&limit=5')
        .then(result => {setIsQuotesLoaded(true); setQuotes(result.data)})
        .catch(error => {setIsQuotesLoaded(true); setError(error)})
    }, [])
  
    if (error) {
      return <div>Error: {error.message}</div>;
    } else {
      return (<>
        <Header />
        <section>
            <div className="container">
              <div className='row'>
                <div className="col-md-6 text-center">
                {isLoaded && <div id="">
                        <h3 className='h3'> Quote by famous peoples (using fetch)</h3>
                        {items.quotes.map(item => (
                            <div key={item.id} className="card m-3">
                            <div className="card-header">
                            <h5 className="mt-2">
                                <h4 className="h4">
                                    {item.author}
                                </h4>
                            </h5>
                            </div>
                            <div id={"collapse"+item.id}>
                            {item.quote}
                            </div>
                        </div>
                        ))}
                    </div>}
                {!isLoaded && <div><h2 className='h2 text-center m-5'>Loading...</h2></div>}
                </div>

                <div className="col-md-6 text-center">
                {isQuotesLoaded && <div id="">
                        <h3 className='h3'> Quote by famous peoples (using axios)</h3>
                        {quotes.quotes.map(item => (
                            <div key={item.id} className="card m-3">
                            <div className="card-header">
                            <h5 className="mt-2">
                                <h4 className="h4">
                                    {item.author}
                                </h4>
                            </h5>
                            </div>
                            <div id={"collapse"+item.id}>
                            {item.quote}
                            </div>
                        </div>
                        ))}
                    </div>}
                {!isQuotesLoaded && <div><h2 className='h2 text-center m-5'>Loading...</h2></div>}
                </div>
              </div>
            </div>
        </section>
        </>
      );
    }
  }