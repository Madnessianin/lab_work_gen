
import * as axios from "axios"

let instance = axios.create({
    baseURL: 'localhost:8080/questions', // Здесь вствляешь адресс своего сервера
    responseType: "json"
})

export const questionsAPI = {
    getQuestions(){
        return instance.get()
    }
}
