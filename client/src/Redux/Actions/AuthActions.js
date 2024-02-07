import { CURRENT, FAIL, LOGIN, LOGOUT, REGISTER } from "../ActionTypes/AuthTypes"
import axios from 'axios'
import { handleError } from "./ErrorAction"
export const register=(newUser,navigate)=>async(dispatch)=>{
    try {
        const res =  await axios.post('/api/user/SignUp',newUser)

        dispatch(
            {
                type : REGISTER,
                payload : res.data
            }
        )

        navigate('/Profil')
    } catch (error) {
        // dispatch(
        //     {
        //         type : FAIL,
        //         payload : error.response.data.errors
        //     }
        // )

        error.response.data.errors.forEach(element => {
            dispatch(handleError(element.msg))
        });
    }
}


export const login=(cordUser,navigate)=>async(dispatch)=>{
    try {
        const res = await axios.post('/api/user/SignIn',cordUser)

        dispatch(
            {
                type : LOGIN,
                payload : res.data
            }
        )

        navigate('/Profil')
    } catch (error) {
        // dispatch(
        //     {
        //         type : FAIL,
        //         payload : error.response.data.errors
        //     }
        // )
        error.response.data.errors.forEach(element => {
            dispatch(handleError(element.msg))
        });
    }
}

export const logout=()=>{
    return(
        {
            type : LOGOUT
        }
    )
}

export const current=()=>async(dispatch)=>{
    const config = {
        headers : {
            Authorization : localStorage.getItem('token')
        }
    }
    try {
        const res = await axios.get('/api/user/ConnectedUser',config)

        dispatch(
            {
                type : CURRENT,
                payload : res.data
            }
        )
    } catch (error) {
        dispatch(
            {
                type : FAIL,
                payload : error.response.data.errors
            }
        )
    }
}