//Set up how your data looks here
let initialState = {
    count: 0,
    capsText: '',
    reverseText: ''
}

//Create const variables here to reduce hard to find errors due to typos
const INCREASE = "INCREASE"
const SET_CAPS_TEXT = "SET_CAPS_INPUT"
const SET_REVERSE_TEXT = "SET_REVERSE_TEXT"


//This is your reducer function
function reducer(state = initialState, action) {
    switch(action.type) {
        case INCREASE:
            return Object.assign({}, state, {count: state.count + action.payload})
        case SET_CAPS_TEXT:
            return Object.assign({}, state, {capsText: action.payload})
        case SET_REVERSE_TEXT:
            return Object.assign({}, state, {reverseText: action.payload})
        
        default: return state
    }
}

//These are action creators
export function increase(num) {
    return {
        type: INCREASE,
        payload: num
    }
}

export function setCapsInput(e) {
    let newLetter = e.target.value.toUpperCase()
    return {
        type: SET_CAPS_TEXT,
        payload: newLetter
    }
}

export function setReverseText(text) {
    return {
        type: SET_REVERSE_TEXT,
        payload: text
    }
}

export default reducer