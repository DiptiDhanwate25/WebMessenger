import React, { useState }  from "react";
import { useDispatch } from "react-redux";
export const Register = () =>{

    const [name,setName]=useState('')
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const [confirmPassword,setconfirmPassword] = useState('')

    const dispatch = useDispatch()
    const register = () =>{
        dispatch({
            type : 'REGISTER',
            payload : {
                id: (new Date).getTime(),
                name,username,password
            }
        })
    }

    return (
        <form className="register">
            <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)}/>
            <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)}/>
            <input type="password" placeholder="password" value={password} onChange={e => setPassword(e.target.value)}/>
            <input type="password" placeholder="Confirm password" value={confirmPassword} onChange={e => setconfirmPassword(e.target.value)}/>
            <input type="button" value = "Register" onClick={ }/>
        </form>
    )
}