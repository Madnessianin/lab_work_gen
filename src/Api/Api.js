
import * as axios from "axios"

let instance = axios.create({
    baseURL: 'http://localhost:8080/questions', // Здесь вствляешь адресс своего сервера
    responseType: "json"
})

export const questionsAPI = {
    getQuestions(){
        return instance.get()
    },
    addQuestions(question) {
        return instance.post('', question)
    },
    editQuestion(questionId, question){
        return instance.put(`/${questionId}`, question)
    },
    deleteQuestion(questionId){
        return instance.delete(`/${questionId}`)
    }
}
