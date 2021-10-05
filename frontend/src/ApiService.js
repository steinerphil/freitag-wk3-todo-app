import axios from "axios";

export const getData = () => {
    return axios.get('/api/todo').then(r => r.data)
}

export const postData = (input) => {
    const newTodo = {
        "status" : "OPEN",
        "description" : input
    }
   return axios.post('/api/todo', newTodo)
        .then(r => r.data)
}