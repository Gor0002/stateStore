// import {useState} from 'react'
import {useReducer} from 'react'
const reducer = (state, action) =>{
    if(action.type === "add"){
        return [
            ...state,
            {hi: "barev", id: action.payload.id}
        ]
    }
    else return state
}
export default function Main() {
    const [todos, dispatch] = useReducer(reducer,[
        {
            hi: "barev",
            id: 0
        }
    ])

    const handleClick = () =>{
        dispatch({
            type: "add",
            payload: {
                id: Math.round(Math.random()*50)
            }
        })
        // setTodo([...todo, {hi: "barev", id: Math.round(Math.random()*50)}])
    }
    // console.log(todo);
    
    return(
        <div>
            <button onClick={handleClick}>barev</button>
            <div>

                {todos.map((elem,index) => {
                    return <div key={index}>{elem.id}</div>
                    }
                )}
            </div>
        </div>
    )
}
