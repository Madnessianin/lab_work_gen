import React from 'react'
import { connect } from "react-redux";
import {saveAnswer, updateAnswer, getQuestions, addQuestion, saveEditQuesrion, deleteQuesrion} from '../../redux/tests-reducer'
import Questions from './Questions';



class QuestionsConteiner extends React.PureComponent {
    
    componentDidMount(){
        this.props.getQuestions()
    }
    // снять комментарий со строчки getQuestions и закоментить props.questions
    render(){
        return (<Questions questions = {this.props.questions}
                       answers = {this.props.answers} 
                       updateAnswer = {this.props.updateAnswer}
                       saveAnswer = {this.props.saveAnswer}
                       addQuestion = {this.props.addQuestion}
                       deleteQuesrion = {this.props.deleteQuesrion}/>
        )
    }
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
    getQuestions,
    addQuestion,
    saveEditQuesrion,
    deleteQuesrion
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionsConteiner);