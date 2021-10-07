import axios from "axios";

export const getData = () => {
    return axios.get('/api/todo').then(r => r.data)
}

export const getById = (id) => {
    return axios.get('/api/todo/' + id).then(r => r.data)
}

export const postData = (input) => {
    const newTodo = {
        "status" : "OPEN",
        "description" : input
    }
   return axios.post('/api/todo', newTodo)
        .then(r => r.data)
}

export const putData = (itemToUpdate) => {
    return axios.put('/api/todo/' + itemToUpdate.id, itemToUpdate)
}

export const deleteData = (itemToUpdate) => {
   return axios.delete('/api/todo/' + itemToUpdate.id)

}