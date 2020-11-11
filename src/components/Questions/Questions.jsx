import React from 'react'
import { useState } from 'react';
import Question from './Question/Question';
import style from './Questions.module.css'
import Button from '../../Common/Button/Button'
import FormEditConteiner from '../../Common/Form/EditForm';


const Questions = (props) => {
        let [addQuestMode, setAddQuestMode] = useState(false)
        const onSubmit = (data) =>{
            props.addQuestion(data)
            setAddQuestMode(false)
        }
        return (
            <div className = {style.content}>
                { props.questions
                .map(question => <Question question = {question} 
                                           deleteQuesrion = {props.deleteQuesrion} />)
                }
                <div className = {style.wrapper}>
                {addQuestMode ? <FormEditConteiner onSubmit = {onSubmit} />
                              : <Button textBtn = {"Add qusetion"} onClick = {() => {setAddQuestMode(true)}} />}
                </div>
            </div>
        )   
}

export default Questions;
