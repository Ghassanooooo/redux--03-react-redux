import * as action from './actionType'

export const increment = () => {
    return {
        type: action.INCREMENT
    }
}

export const dcrement = () => {
    return {
        type: action.DCREMENT
    }
}

export const add = (value) => {
    return {
        type: action.ADD,
        payload: value
    }
}

export const sub = (value) => {
    return {
        type: action.SUB,
        payload: value
    }
}