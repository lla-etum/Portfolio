import styled from "styled-components"

const HomeCentre = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2em;
    color: orange;
    height: 70vh;
`

function Home() {
    return(
        <HomeCentre>
            <h1>Projet React Débutant</h1>
        </HomeCentre>
    )
}

export default Home