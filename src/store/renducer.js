import {
    CHANGE_INPUT_VALUE,
    ADD_ITEM_CLICK,
    DELETE_ITEM_CLICK
} from './actionTypes'
const defaultState = {
    inputValue: 'hello world',
    list: ['hello', 'world']
}

export default (state = defaultState, action) => {
    if (action.type === CHANGE_INPUT_VALUE) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }
    if (action.type === ADD_ITEM_CLICK) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        newState.inputValue = ''
        return newState
    }
    if (action.type === DELETE_ITEM_CLICK) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index, 1)
        return newState
    }
    return state
}