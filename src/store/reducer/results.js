import * as actions from '../actions/actionType'
const initialState = {
    results: []
}

// if the state not find in init we can not pass it direct
//we should passing it from smart components
// ex: value: action.result we passed it from smart component becuse its not in init state


const results = (state = initialState, action) => {
   switch (action.type) {
     
           case  actions.GET_STORE:
           return {
               ...state,
               results: state.results.concat({value: action.results, id: new Date()})
           }
            

            case  actions.DELETE_LIST:
    
            return {
                ...state,
                  results:state.results.filter(res=>res.id !== action.id)     
               
            }
           
            
             
        
    }

    return state;
  
};

export default results;