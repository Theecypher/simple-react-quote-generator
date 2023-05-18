import { useState } from "react";
import useFetch from "./useFetch";

const Home = () => {
    const { quotes, error} = useFetch();
    const [quote, setQuote] = useState([]);

    function getRandomQuote () {
        return quotes[Math.floor(Math.random() * quotes.length)];
    }

    function getNewQuote() {
        setQuote(getRandomQuote(quotes));
    }

    return ( 
        <div className="container">
            <main>
              <h1>Project 1: Quote Generator</h1>
              <button onClick={getNewQuote}>Get new Quote</button>

              <p>{quote.text}</p>
              <p>- { quote.author }</p>
            </main>
        </div>
     );
}
 
export default Home;
