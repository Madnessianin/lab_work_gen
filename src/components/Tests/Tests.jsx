import React from 'react'
import { connect } from "react-redux";
import {saveAnswer, updateAnswer, getQuestionsWithServer} from '../../redux/tests-reducer'
import style from './Tests.module.css'


const TestsConteiner = (props) => {
    console.log(props.answers)
    let newAnswerElement = React.createRef();
    let sendAnswer = () => {
        props.saveAnswer()
    }
    let onAnswerChange = () => {
        props.updateAnswer(newAnswerElement.current.value)
    }
    let getQuestions = () => {
        let questions = props.getQuestionsWithServer();
        return questions[0].text;
    }
    // снять комментарий со строчки getQuestions и закоментить props.questions
    return (
        <div className = {style.content}>
            <div className = {style.questions_item}>{props.questions /*{getQuestions}*/}</div>
            <textarea onChange = {onAnswerChange} ref={newAnswerElement} />
            <button onClick = {sendAnswer} >Save Answer</button>
        </div>
    )
}



let mapStateToProps = (state) => {
    return {
        questions: state.tests.questions,
        answers: state.tests.answers
    }
}
let mapDispatchToProps = {
    saveAnswer,
    updateAnswer,
    getQuestionsWithServer
}

export default connect(mapStateToProps, mapDispatchToProps)(TestsConteiner);