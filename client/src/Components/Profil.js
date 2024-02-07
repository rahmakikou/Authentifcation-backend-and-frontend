import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { current } from "../Redux/Actions/AuthActions"

const Profil=()=>{

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(current())
    },[])

    const user = useSelector(state=> state.AuthReducer.user)
    return(
        <div>
            <h1>Welcome {user.name}</h1>
        </div>
    )
}

export default Profil