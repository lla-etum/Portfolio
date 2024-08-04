import styled from "styled-components"

const ErrorCentre = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70vh;
    font-size: 1.5em;
`

function Error() {
    return(
        <ErrorCentre>
            <h1>Oups 🙈 Cette page n'existe pas</h1>
        </ErrorCentre>
    )
}

export default Error