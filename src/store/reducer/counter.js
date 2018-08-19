import * as actions from '../actions/actionType'
const initialState = {
    counter: 0
}


const counter = (state = initialState, action) => {
   switch (action.type) {
       case  actions.INCREMENT:
            state = {
                ...state,
                counter: state.counter + 1
            }
        break;

        case  actions.DCREMENT:
        state = {
            ...state,
            counter: state.counter - 1
        }
         break;

         case  actions.ADD:
         return {
             ...state,
             counter: state.counter + action.payload
         }
          

          case actions.SUB:
          return {
              ...state,
              counter: state.counter - action.payload
          }

     
                     
    }
    return state;
};

export default counter;