
import {useSelector,useDispatch} from "react-redux"
import { incCount } from "../features/Counter/actionCreator"

export const Counter=()=>{
    const dispatch=useDispatch()

    const counter=useSelector(state=>
        state.counterState.count
    )

    return (
        <>
        <h1>{counter}</h1>
        <button onClick={()=>dispatch(incCount(1))}>Add1</button>
        <button onClick={()=>dispatch(incCount(-1))}>Dec1</button>

        
        </>
    )
}