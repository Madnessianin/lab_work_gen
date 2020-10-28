import React from 'react'
import { Field, reduxForm } from 'redux-form';
import style from './Tests.module.css'

const QuestionForm = (props) => {
    return (
    <form onSubmit = {props.handleSubmit}>
        <Field placeholder = {"Enter new question...."}
            name = {"text"}
            component = {"textarea"}/>
        <button>Add</button>
    </form>
    )
}
const QuestionFormConteiner = reduxForm({form: "addQuestion"})(QuestionForm)

const Tests = (props) => {
        const onSubmit = (data) =>{
            props.addQuestion(data)
            console.log(data)
        }
        return (
            <div className = {style.content}>
                { props.questions
                .map(question => <div key = {question.id} className = {style.questionsItem}>
                                    <h4 className = {style.nameQuestion}>Вопрос {question.id}</h4>
                                    <pre className = {style.question} dangerouslySetInnerHTML={{__html: question.text}}></pre>
                                </div>)
                }
                <QuestionFormConteiner onSubmit = {onSubmit} />
                {/* <textarea onChange = {onAnswerChange} ref={newAnswerElement} />
                <button onClick = {sendAnswer} >Save Answer</button> */}
            </div>
        )   
}

export default Tests;
