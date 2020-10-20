import React from 'react'
import { connect } from "react-redux";
import {saveAnswer, updateAnswer, getQuestionsWithServer} from '../../redux/tests-reducer'
import Tests from './Tests';



class TestsConteiner extends React.PureComponent {
    
    componentDidMount(){
        this.props.getQuestionsWithServer()
    }
    // снять комментарий со строчки getQuestions и закоментить props.questions
    render(){
        return (<Tests questions = {this.props.questions}
                       answers = {this.props.answers} 
                       updateAnswer = {this.props.updateAnswer}
                       saveAnswer = {this.props.saveAnswer}/>
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
    getQuestionsWithServer
}

export default connect(mapStateToProps, mapDispatchToProps)(TestsConteiner);