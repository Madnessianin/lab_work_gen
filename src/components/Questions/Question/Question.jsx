import React from 'react'
import { useState } from 'react'
import Button from '../../../Common/Button/Button'
import FormEditConteiner from '../../../Common/Form/EditForm'
import style from './Question.module.css'


const Question = ({question, deleteQuesrion, saveEditQuesrion}) => {
    let [editMode, setEditMode] = useState(false)
    let onSubmit = (data) =>{
        saveEditQuesrion(question.id, data)
        setEditMode(false)
    }
    return (
        <>
            {!editMode && <div key = {question.id} className = {style.item}>
                <div className = {style.wrapper}>
                    <div className = {style.innerName}>
                        <span className = {style.questId}>{question.id}</span>
                        <h2 className = {style.nameQuestion}>Задание </h2>
                    </div>
                    <div className = {style.question} dangerouslySetInnerHTML={{__html: question.text}} />
                </div>
                <div className = {style.btns}>
                    <Button textBtn = {"Edit"} onClick = {()=>setEditMode(true)} />
                    <Button textBtn = {"Delete"} onClick = {()=>{deleteQuesrion(question.id)}} />
                </div>
            </div>}
            {editMode && <FormEditConteiner onSubmit = {onSubmit} text = {{__html: question.text}}/>}
        </>
    )
}

export default Question