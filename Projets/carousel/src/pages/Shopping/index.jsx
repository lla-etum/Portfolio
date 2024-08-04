import styled, { createGlobalStyle } from "styled-components"
import { useState } from "react"

const GlobalStyle = createGlobalStyle`
    body {
        background-color: pink
    }
`

const ShoppingMain = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const ShoppingBoite = styled.div`
    border: 2px dashed black;
    width: 400px;
    min-height: 130px;
    background-color: white;
    text-align: center;
    margin-top: 2rem;
`

const ShoppingListe = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    width: 200px;
    & button {
        border: 1px solid transparent;
        color: red;
        background-color: white;
        font-weight: bold;
        font-size: 1.1em;
    }
`

const ShoppingUl = styled.ul`
    padding: 0 6rem;
`

function Shopping() {
    const [shoppingList, setShoppingList] = useState([])
    const [inputValue, setInputValue] = useState('');

    const handleInput = (e) => {
        if (inputValue.trim() !== '') {
            setShoppingList((prevList) => [...prevList, inputValue])
            setInputValue('')
        }
    }
    
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleInput()
        }
    }

    const deleteItem = (index) => {
        const updatedList = shoppingList.filter((_, i) => i !== index)
        setShoppingList(updatedList)
    }

    return(
        <ShoppingMain>
            <GlobalStyle />
            <h1>Project 4: Shopping List</h1>
            <ShoppingBoite>
                <h2>Items To Buy</h2>
                <input 
                    type="text" 
                    placeholder="Add a new item" 
                    value={inputValue} 
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyPress} 
                />
                <button onClick={handleInput}>Add</button>
                <ShoppingUl>
                    {shoppingList.map((item, index) => 
                        <ShoppingListe key={index}>{item}{' '}
                            <button onClick={() => deleteItem(index)}>x</button>
                        </ShoppingListe>
                    )}
                </ShoppingUl>
            </ShoppingBoite>
        </ShoppingMain>
    )
}

export default Shopping