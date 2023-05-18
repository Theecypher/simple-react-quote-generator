import { useEffect, useState } from "react";

const useFetch = () => {
    const [error, setError] = useState(null);
    const [quotes, setQuotes] = useState(null);

    useEffect(() => {
        fetch("https://type.fit/api/quotes")
        .then((res) => {
            if (!res.ok) {
                throw new Error("Could not fetch data");
            }
            return res.json();
        })
        .then(data => {
            setQuotes(data);
        })
    }, []);

    return { quotes, error};
}
 
export default useFetch;