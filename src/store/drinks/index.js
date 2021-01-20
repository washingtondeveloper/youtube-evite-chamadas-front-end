import { createAction, createReducer } from '@reduxjs/toolkit'

const DRINKS_URL = 'http://localhost:4000'

const INITIAL_STATE = {
    items: [],
    drinkItem: null,
    error: null
}

// Actions
export const loadedAllDrinksSuccess = createAction('LOADED_ALL_DRINKS_SUCCESS')
export const loadedDrinkSuccess = createAction('LOADED_DRINK_SUCCESS')
export const loadDrinksError = createAction('LOAD_DRINKS_ERROR')
export const getDrinkItem = createAction('GET_DRINK_ITEM')

// Fetchs
export const fetchDrinks = () => {
    return dispatch => {
        return fetch(`${DRINKS_URL}/drinks`)
            .then(res => res.json())
            .then(data => dispatch(loadedAllDrinksSuccess(data.drinks)))
            .catch(error => dispatch(loadDrinksError(error)))
        }
}

export const fetchDrinkById = (id) => {
    return dispatch => {
        return fetch(`${DRINKS_URL}/drinks/${id}`)
            .then(res => res.json())
            .then(data => dispatch(loadedDrinkSuccess(data)))
            .catch(error => dispatch(loadDrinksError(error)))
    }
}

export default createReducer(INITIAL_STATE, {
    [loadedAllDrinksSuccess]: (state, action) => ({...state, items: action.payload}),
    [loadedDrinkSuccess]: (state, action) => ({...state, drinkItem: action.payload}),
    [loadDrinksError]: (state, action) => ({...state, error: action.payload}),
    [getDrinkItem]: (state, action) => ({...state, drinkItem: selectedItem(state, action.payload)})
})

export function selectedItem(state, id) {
    return state.items.find(item => item.id === id)
}