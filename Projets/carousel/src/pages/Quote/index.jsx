import styled, { createGlobalStyle } from "styled-components"
import { useEffect, useState } from "react"

const GlobalStyle = createGlobalStyle`
    body {
        background-color: orange;
    }
`

const QuoteMain = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const QuoteBoite = styled.div`
    margin-top: 5rem;
    border: 2px solid gray;
    padding: 1rem;
    text-align: center;
    width: 500px;
    background-color: white;
`

function getRandomQuote(quotes) {
    return quotes[Math.floor(Math.random() * quotes.length)]
}

function Quote() {
    const [quotes, setQuotes] = useState([])
    const [quote, setQuote] = useState(null)

    useEffect(() => {
        fetch(`https://type.fit/api/quotes`).then((res) => res.json()).then((json) => {
            setQuotes(json)
            setQuote(json[0])
        })  
    }, [])

    function getNewQuote() {
        setQuote(getRandomQuote(quotes))
    }

    return(
        <QuoteMain>
            <GlobalStyle />
            <h1>Project 3: Quote Generator</h1>
            <QuoteBoite>
                <button onClick={getNewQuote}>New Quote</button>
                <h3>
                    <span>"</span>
                    {quote?.text}
                </h3>
                <i>- {quote?.author}</i>
            </QuoteBoite>
        </QuoteMain>
    )
}

export default Quote