import { useState } from "react"
import styled from "styled-components"

function Question({question}) {
    const [toggle, setToggle] = useState(false)

    const FaqButton = styled.button`
        background: rgb(211, 216, 253);
        color: rgb(10, 27, 184);
        border: 2px solid rgb(10, 27, 184);
        border-radius: 5px;
        font-size: 20px;
    `

    const FaqSection = styled.section`
        & div, & p {
            background-color: white;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 20px;
            margin-top: 0px;
        }

        & p {
            padding-bottom: 20px;
        }

        & > div.closed {
            margin-bottom: 20px;
        }
    `

    return(
        <FaqSection>
            <div className={toggle ? "open" : "closed"}>
                <h4>{question.titre}</h4>
                <FaqButton onClick={() => setToggle(!toggle)}>{toggle ? "-" : "+"}</FaqButton>
            </div>
            {toggle && <p>{question.reponse}</p>}
        </FaqSection>
    )
}

export default Question