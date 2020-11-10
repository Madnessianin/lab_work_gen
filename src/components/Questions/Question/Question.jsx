import React from 'react'
import style from './Question.module.css'


const Question = ({question}) => {
    return (
        <div key = {question.id} className = {style.item}>
            <h2 className = {style.nameQuestion}>Вопрос {question.id}</h2>
            <div className = {style.question} dangerouslySetInnerHTML={{__html: question.text}} />
        </div>
    )
}

export default Question