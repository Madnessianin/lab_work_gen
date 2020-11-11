import React from 'react'
import { useState } from 'react'
import Button from '../../../Common/Button/Button'
import style from './Question.module.css'


const Question = ({question, deleteQuesrion}) => {
    let [editMode, setEditMode] = useState(false)
    return (
        <div key = {question.id} className = {style.item}>
            <div className = {style.wrapper}>
                <div className = {style.innerName}>
                    <span className = {style.questId}>{question.id}</span>
                    <h2 className = {style.nameQuestion}>Задание </h2>
                </div>
                <div className = {style.question} dangerouslySetInnerHTML={{__html: question.text}} />
            </div>
            <div className = {style.btns}>
                <Button textBtn = {"Edit"} />
                <Button textBtn = {"Delete"} onClick = {()=>{deleteQuesrion(question.id)}} />
            </div>
        </div>
    )
}

export default Question