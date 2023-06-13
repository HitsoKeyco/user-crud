import { useState } from 'react'
import axios from 'axios'
const useFetch = (baseUrl) => {

    const [infoApi, setInfoApi] = useState()

    //READ
    const getAllUser = (path) => {
        const url = `${baseUrl}${path}/`
        axios.get(url)
        .then(res => setInfoApi(res.data))
        .catch(err => console.log(err))
    }

    // CREATE
    const createNewRegister = (path, data) => {
        const url = `${baseUrl}${path}/`
        axios.post(url, data)
        .then(res => {
            console.log(res.data)
            setInfoApi([...infoApi, res.data])
        })
        .catch(err => console.log(err))
    }

    //DELETE
    const deleteUserbyId = (path, id) => {
        const url = `${baseUrl}/${path}/${id}/`
        axios.delete(url)
        .then(res => {
            console.log(res.data)
            const infoApiFiltered = infoApi.filter(element => element.id != id)
            setInfoApi(infoApiFiltered)
        })
        .catch(err => console.log(err))
    }

    //UPDATE
    const updateRegisterbyId = (path, id, data) => {
        const url = `${baseUrl}/${path}/${id}/`
        axios.put(url, data)
        .then(res => {
            console.log(res.data)
            const infoApiUpdate = infoApi.map(element => {
                if(id === element.id){
                    return data
                }
                return element                
                
            })
            setInfoApi(infoApiUpdate)
        })
        .catch(err => console.log(err))
        
    }
    return [ infoApi, getAllUser, createNewRegister, deleteUserbyId, updateRegisterbyId]
}


export default useFetch