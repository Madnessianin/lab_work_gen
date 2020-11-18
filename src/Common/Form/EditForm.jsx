import React from 'react'
import { Field, reduxForm } from 'redux-form'
import Button from '../Button/Button'
import style from './EditForm.module.css'


const FormEdit = (props) => {
    return (
    <form className = {style.form} onSubmit = {props.handleSubmit}>
        <div className = {style.formInner}>
            <Field placeholder = {"Enter new question..."}
                name = {"text"}
                component = {"textarea"}/>
        </div>
        <div className = {style.btn}>
            <Button textBtn = {"Save question"} type = {"submit"} />
        </div>
    </form>
    )
}
const FormEditConteiner = reduxForm({form: "addQuestion"})(FormEdit)

export default FormEditConteiner;