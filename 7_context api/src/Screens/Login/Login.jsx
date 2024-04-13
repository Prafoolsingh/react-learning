import React, {useState, useContext} from 'react'

import UserContext from '../../context/UserContext'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})
    }
  return (
    <div className='text-center mt-4'>
        <h2 className='mt-8'>Login</h2>

        <input type='text'
        value={username}
        onChange={(e) => setUsername(e.target.value) }
        placeholder='username'
        className="bg-black mt-12 text-white" />
        
        {" "}

        <input type='text' 
        value={password}
        onChange={(e) => setPassword(e.target.value) }
        placeholder='password' 
        className="bg-black text-white" />
        <button className='bg-sky-400 text-white px-4' onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login