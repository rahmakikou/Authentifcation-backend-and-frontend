import {useSelector} from "react-redux"
import Alert from 'react-bootstrap/Alert';
const HandleError=()=>{

    const errorDali = useSelector(state=> state.ErrorReducer)
    return(
        <div>
            {
                errorDali.map((el,i,t)=>
                <Alert key='danger' variant='danger'>
                {el.msg}
              </Alert> )
            }
        </div>
    )
}

export default HandleError