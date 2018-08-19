import * as action from './actionType'

export const  saveResult = (res)=>{
    return {
       type: action.GET_STORE,
       results: res
   }
   
   }
   export const getStore = (res) => {
   
    return dispatch => {
        setTimeout(()=>{
           dispatch(saveResult(res)) 
        },3000)
    }
   
       // return {
       //     type: GET_STORE,
       //     results: res
       // }
   }
   
   export const deleteList = (id) => {
       return {
           type: action.DELETE_LIST,
           id: id
       }
   }