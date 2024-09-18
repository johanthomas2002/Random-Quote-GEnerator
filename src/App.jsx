import { Button } from 'react-bootstrap';
import './App.css';
import './style.css';
import { useState, useEffect } from 'react';


function App() {
  const [quotes, setQuotes] = useState([]);
  const [randomQuote, setRandomQuote] = useState();
  const [author,setAuthor] = useState();
  const base_url = 'https://dummyjson.com/quotes';

  const fetchData = async () => {
    const result = await fetch(base_url);
    const data = await result.json();
    setQuotes(data.quotes);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const getQuote = () => {
      const randomNum = Math.floor(Math.random() * quotes.length);
      setRandomQuote(quotes[randomNum].quote);
      setAuthor(quotes[randomNum].author)
  }


  return (
    <>
      <div className='content'>
        <div className="container w-50 p-5" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
          <h3 className='text-light text-center'>{randomQuote}</h3>
          <h4 className='text-light text-end mt-2'>By:{author}</h4>
          <div className='text-center mt-5'>
            <Button variant="warning" className='fs-5' onClick={getQuote}>Generate</Button>{' '}
          </div>
        </div>
      </div>
    </>
  );

}

export default App;