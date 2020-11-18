import React from 'react'
import { useState } from 'react';
import Question from './Question/Question';
import style from './Questions.module.css'
import Button from '../../Common/Button/Button'
import FormEditConteiner from '../../Common/Form/EditForm';
import mammoth from 'mammoth'
import doc from '../../documents/TOE(lab4).doc'
console.log(mammoth.convertToHtml({arraybuffer: doc},{styleMap: []}))


const Questions = (props) => {
        let [addQuestMode, setAddQuestMode] = useState(false)
        const onSubmit = (data) =>{
            props.addQuestion(data)
            setAddQuestMode(false)
        }
        const onDocxSelected = (event) => {
            if (event.target.files.length) {
                const docx = event.target.files[0]
                let file_arraybuffer = new TextEncoder().encode(docx)
                console.log(mammoth.convertToHtml({arraybuffer: file_arraybuffer},{styleMap: []}))
            }
        }
        return (<div>
            {<div className = {style.content}>
                { props.questions
                .map(question => <Question question = {question} 
                                           deleteQuesrion = {props.deleteQuesrion}
                                           saveEditQuesrion = {props.saveEditQuesrion} />)
                }
                <div className = {style.wrapper}>
                {addQuestMode ? <FormEditConteiner onSubmit = {onSubmit} />
                              : <Button textBtn = {"Add qusetion"} onClick = {() => {setAddQuestMode(true)}} />}
                </div>
                
            </div>}
            {
                <div>
                    <input onChange = {onDocxSelected} type = {"file"} />
                </div>
            }
            </div>
        )   
}

export default Questions;
