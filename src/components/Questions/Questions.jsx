import React from 'react'
import { useState } from 'react';
import { Field, reduxForm } from 'redux-form';
import Question from './Question/Question';
import style from './Questions.module.css'
import Button from '../../Common/Button/Button'

const QuestionForm = (props) => {
    return (
    <form className = {style.form} onSubmit = {props.handleSubmit}>
        <div className = {style.formInner}>
            <Field placeholder = {"Enter new question...."}
                name = {"text"}
                component = {"textarea"}/>
        </div> 
        <Button textBtn = {"Save qusetion"} type = {"submit"} />
    </form>
    )
}
const QuestionFormConteiner = reduxForm({form: "addQuestion"})(QuestionForm)

const Questions = (props) => {
        let [addQuestMode, setAddQuestMode] = useState(false)
        const onSubmit = (data) =>{
            props.addQuestion(data)
            setAddQuestMode(false)
        }
        return (
            <div className = {style.content}>
                { props.questions
                .map(question => <Question question = {question} />)
                }
                <div className = {style.wrapper}>
                {addQuestMode ? <QuestionFormConteiner onSubmit = {onSubmit} />
                              : <Button textBtn = {"Add qusetion"} onClick = {() => {setAddQuestMode(true)}} />}
                </div>
            </div>
        )   
}

export default Questions;
