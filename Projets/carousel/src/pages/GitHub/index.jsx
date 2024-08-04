import styled from "styled-components"
import { useState } from "react"

const GitCenter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const GitInput = styled.input`
    border: 1px solid black;
    border-radius: 5px;
    padding: 0.7rem 6rem 0.7rem 0.5rem;
    margin-right: 2rem;
`

const GitButton = styled.button`
    border: 1px solid transparent;
    border-radius: 5px;
    background-color: lightgreen;
    padding: 0.7rem 7rem;
`

const GitUser = styled.div`
    border: 1px solid black;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 570px;
    height: 100px;
    margin-bottom: 1rem;
`

const API_URL = "https://api.github.com"

async function fetchResults(query) {
    try {
        const response = await fetch(`${API_URL}/search/users?q=${query}`)
        const json = await response.json()
        return json.items || []
    } catch (e) {
        throw new Error(e)
    }
}

function GitHub() {
    const [query, setQuery] = useState("")
    const [results, setResults] = useState([]);

    function onSearchChange(event) {
        setQuery(event.target.value)
    }

    async function onSearchSubmit(event) {
        event.preventDefault()
        const results = await fetchResults(query)
        setResults(results)
    }

    return(
        <GitCenter>
            <div>
                <h1>Project 5: GitHub User Search</h1>
                <Form 
                    onChange={onSearchChange}
                    onSubmit={onSearchSubmit}
                    value={query}
                />
                <h2>Results</h2>
                {results.map((user) => (
                    <User 
                        key={user.login}
                        avatar={user.avatar_url}
                        url={user.html_url}
                        username={user.login}
                    />
                ))}
            </div>
        </GitCenter>
    )
}

function User({avatar, url, username}) {
    return(
        <GitUser>
            <img src={avatar} alt="Profile" width="50" height="50"/>
            <a href={url} target="_blank" rel="noopener noreferrer">{username}</a>
        </GitUser>
    )
}

function Form({onSubmit, onChange, value}) {
    return(
        <form onSubmit={onSubmit}>
            <GitInput 
                type="text"
                placeholder="Enter username or email"
                onChange={onChange}
                value={value}
            />
            <GitButton type="submit">Search</GitButton>
        </form>
    )
}

export default GitHub