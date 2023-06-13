
import { useEffect } from 'react';
import {useForm} from 'react-hook-form';

const FormUsers = ({createNewRegister, updateInfo, updateRegisterbyId, setUpdateInfo, setFormClose}) => {



    const {register, reset, handleSubmit} = useForm()

    useEffect(() => {
        reset(updateInfo)
    },[updateInfo])
    


    const submit = data => {
        if(updateInfo){
            //update
            updateRegisterbyId('/users', updateInfo.id, data)
            setUpdateInfo()
            
        }else{
            createNewRegister('/users', data)

        }
        reset({
            users: '',
            birthday: '',
            email: '',
            first_name: '',
            last_name: '',
            password: ''

        })
        
        setFormClose(true)
        
    }
            
    const closeForm = () => {
        
        reset({
            users: '',
            birthday: '',
            email: '',
            first_name: '',
            last_name: '',
            password: ''

        })
        setFormClose(true)
        setUpdateInfo()
        
    }

    return (
        <form className='form-container' onSubmit={handleSubmit(submit)}>
            
            <div className="form">
                <i onClick={closeForm} className='bx bx-x close'></i>
                <p className='form_title'>Form User</p>    
                <div className='form-item'>
                    <label className="title_item">Email</label>
                    <input {...register('email')} id='email' type="text" />
                </div>

                <div className='form-item'>
                    <label className="title_item">Password</label>
                    <input {...register('password')} id='password' type="text" />
                </div>

                <div className='form-item'>
                    <label className="title_item">First Name</label>
                    <input {...register('first_name')} id='first_name' type="text" />
                </div>

                <div className='form-item'>
                    <label className="title_item">Last Name</label>
                    <input {...register('last_name')} id='last_name' type="text" />
                </div>

                <div className='form-item'>
                    <label className="title_item">Birthday</label>
                    <input {...register('birthday')} id='birthday' type="date" />
                </div>
                
                <button className='button_form'>{updateInfo ? 'Update':'Create'}</button>

            </div>
        </form>
    )
}

export default FormUsers