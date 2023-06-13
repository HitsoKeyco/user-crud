import { useEffect, useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import FormUsers from '../components/FormUsers'
import UserCard from '../components/Usercard'

function App() {
  
  const baseURL ='https://users-crud.academlo.tech'
  const[ users, getAllUser, createNewRegister, deleteUserbyId, updateRegisterbyId] = useFetch(baseURL)
  
  const [updateInfo, setUpdateInfo] = useState()
  const [formClose, setFormClose] = useState(true)
  useEffect(() => {
    getAllUser('/users')
  }, [])
  
  const handleopenForm = () => {
    setFormClose(false)
  }

  return (
    <>
    <div className="container">
        <div className="header">
          <h1 className='title_header'>User CRUD</h1>
          <button className='button_header' onClick={handleopenForm}>Create</button>
        </div>
        
        <div className={`formulario ${formClose && 'form_close'}`} >
          <FormUsers
            createNewRegister={createNewRegister}
            updateInfo={updateInfo}
            updateRegisterbyId={updateRegisterbyId}
            setUpdateInfo={setUpdateInfo}
            setFormClose={setFormClose}/>
        </div>
        <div className='content_card'>
          {
            users?.map(user => (
              <UserCard 
              key={user.id} 
              user={user} 
              
              deleteUserbyId={deleteUserbyId}
              setUpdateInfo={setUpdateInfo}
              setFormClose={setFormClose}
              />
            ))
          }
        </div>
      </div>
    </>
  )
}

export default App
