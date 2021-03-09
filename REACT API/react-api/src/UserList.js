import React,{useEffect,useState} from 'react'
import axios from 'axios'
import ListOfUser from './ListOfUser'

const UserList = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response =>{console.log(response)
            setUsers(response.data)
        })
        .catch(error => console.log(`This is an error ${error}`))
    },[])
    

    return (

        <div className='cards-container'>  
  
            {users.map (user =>
            
              <ListOfUser key={user.id} user={user}/>
                
                )}
        </div>
    )
}

export default UserList;

