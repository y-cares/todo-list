import {
    CHANGE_INPUT_VALUE,
    ADD_ITEM_CLICK,
    DELETE_ITEM_CLICK
} from './actionTypes'

import axios from 'axios'

export const getInputChangeAction = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value
})

export const getAddItemAction = () => ({
    type: ADD_ITEM_CLICK
})

export const getDeleteItemAction = (index) => ({
    type: DELETE_ITEM_CLICK,
    index
})