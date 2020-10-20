import React from 'react'
import style from './Tests.module.css'


const Tests = (props) => {
    // снять комментарий со строчки getQuestions и закоментить props.questions
        console.log(props.answers)
        let newAnswerElement = React.createRef();
        let sendAnswer = () => {
            props.saveAnswer()
            newAnswerElement.current.value = ""
        }
        let onAnswerChange = () => {
            props.updateAnswer(newAnswerElement.current.value)
        }
        
        return (
            <div className = {style.content}>
                { props.questions.map(question => <div key = {question.id}>
                        <div className = {style.questions_item}>{question.text}</div>
                    </div>)
                } 
                {/* <textarea onChange = {onAnswerChange} ref={newAnswerElement} />
                <button onClick = {sendAnswer} >Save Answer</button> */}
            </div>
        )
    
}

export default Tests;