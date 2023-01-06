import {ADD,UPDATE,DELETE} from "./actionTypes.js"

export const InitialState = {
   todo : []
}

export const reducer = (state = InitialState, {type,payload}) => {
    switch (type) {
        case ADD: {
            return {
                ...state,
                payload:[...payload,payload]
            }


        }
           

        case UPDATE:{
           let updatedtodos=state.todo.map(todo=>{
            if(todo.id ===payload.id){
                return {
                    ...todo,
                    ...payload
                }
            }
           })
           return {
            ...state,
            todo:updatedtodos
        }


    }
        case DELETE:
            let deletitem=state.todo.map(todo=>{
                if(todo !=payload){
                    return {
                        ...todo,
                        ...payload
                    }
                }
               })
               return {
                ...state,
                todo:deletitem
            
            }   


        default:
            return state
    }
}