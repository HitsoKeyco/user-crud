
const UserCard = ({ user, deleteUserbyId, setUpdateInfo, setFormClose}) => {

    const handleDelete = () => {
        deleteUserbyId('/users', user.id)
        
    }

    const handleEdit = () => {
        setUpdateInfo(user)
        setFormClose(false)
    }

    
    return (
        <article className="user-content">
            <div className="user-card">
                <h2 className = "name">{user.first_name} {user.last_name}</h2>
                <hr className = "horizontal-line" />
                <ul className = "list">
                    <li className ="item_list">                    
                        <span className = "item_name">CORREO: </span>
                        <span className = "item">{user.email}</span>
                    </li>
                    <li className ="item_list">
                        <span className = "item_name">CUMPLEAÑOS: </span>
                        <span className = "item">{user.birthday}</span>
                    </li>
                    <div className="buttons">
                        <button onClick={handleDelete}><i className='bx bxs-trash'></i></button>
                        <button onClick={handleEdit}><i className='bx bx-pencil'></i></button> 
                    </div>
                </ul>
            </div>
        </article>

    )
}

export default UserCard