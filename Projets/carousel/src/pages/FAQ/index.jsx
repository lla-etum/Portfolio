import styled from "styled-components"
import Question from "../../components/Question"

function Faq() {
    const FaqTitre = styled.h2`
        text-align: center;
    `

    const FaqBoite = styled.div`
        background-color: rgb(10, 27, 184);
        max-width: 600px;
        padding: 10px 20px 20px;
        border-radius: 12px;
        margin: 0 auto;
        & h2 {
            margin: 0 auto;
            text-align: center;
            padding: 10px 0 20px 0;
            color: white;
        }
    `

    return(
        <>
            <FaqTitre>Project 2: FAQ/Accordion</FaqTitre>
            <FaqBoite>
                <h2>Frequently Asked Questions</h2>
                <div className="questions">
                    {questions.map((question) => (
                        <Question key={question.id} question={question}/>
                    ))}
                </div>
            </FaqBoite>
        </>
    )
}

const questions = [
    {
        id: 1,
        titre: "Is this a good product ?",
        reponse: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem."
    },
    {
        id: 2,
        titre: "How much does it cost ?",
        reponse: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem."
    },
    {
        id: 3,
        titre: "Whan can i get it ?",
        reponse: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem."
    }
]

export default Faq