import {questionsAPI} from '../Api/Api.js'
const SAVE_ANSWER = "SEND_ANSWER",
      SET_QUESTIONS = "SET_QUESTIONS",
      UPDATE_ANSWER = "UPDATE_ANSWER"

let initialState = {
    //questions : ["An commune omnesque per. Mei mutat deleniti an, populo nemore volumus ea sit. Velit nostro habemus pri ut, in est veri appareat iracundia. Eum tantas persecuti efficiantur no.In mel animal graecis omittantur, alterum splendide efficiantur et eos, lorem tacimates ad vis. Ad eam phaedrum moderatius, ea alia dicit inciderint vis. Mundi convenire in nec. No eos agam oportere, virtute debitis est ut. Quis magna persecuti no cum, eam ut omnium adipiscing voluptatibus, ius nullam offendit dissentias ei"],
    questions: [], 
    answers : [],
    newAnswer : ""
}

const testsReducer = (state = initialState, action) => {
    switch(action.type) {
        case SAVE_ANSWER: {
            return {
                ...state,
                answers : [...state.answers, state.newAnswer]
            };
        }
        case UPDATE_ANSWER: {
            return {
                ...state,
                newAnswer : action.newAnswer
            };
        }
        case SET_QUESTIONS: {
            return {
                ...state,
                questions: action.questions
            }
        }
        default :
            return state;
    }
}

export const saveAnswer = () => ({type: SAVE_ANSWER})
export const setQuestions = (questions) => ({type: SET_QUESTIONS, questions})
export const updateAnswer = (newAnswer) => ({type: UPDATE_ANSWER, newAnswer})


export const getQuestions = () => {
    return async (dispatch) => {
        let response = await questionsAPI.getQuestions();
        dispatch(setQuestions(response.data))
    }
}
export const addQuestion = (question) => {
    return async (dispatch) => {
        let response = await questionsAPI.addQuestions(question)
        dispatch(getQuestions())
    }
}

export default testsReducer;