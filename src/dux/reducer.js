const initialState = {
    name:``,
    address:``,
    city:``,
    state:``,
    zip:``,
    
}

const UPDATE_NAME="UPDATE_NAME"
const UPDATE_ADDRESS="UPDATE_ADDRESS"
const UPDATE_CITY="UPDATE_CITY"
const UPDATE_STATE="UPDATE_STATE"
const UPDATE_ZIP="UPDATE_ZIP"

function reducer(state = initialState, action){
    switch (action.type) {
        case UPDATE_NAME:
            return {...state, name:action.payload}
        case UPDATE_ADDRESS:
            return {...state, address:action.payload}
        case UPDATE_CITY:
            return {...state, city:action.payload}
        case UPDATE_STATE:
            return {...state, state:action.payload}
        case UPDATE_ZIP:
            return {...state, zip:action.payload}
        default:
            return state
    }
}

export function updateName(name){
    return{
        type:UPDATE_NAME,
        payload:name
    }
}
export function updateName(address){
    return{
        type:UPDATE_ADDRESS,
        payload:address
    }
}
export function updateName(city){
    return{
        type:UPDATE_CITY,
        payload:city
    }
}
export function updateName(state){
    return{
        type:UPDATE_STATE,
        payload:state
    }
}
export function updateName(zip){
    return{
        type:UPDATE_ZIP,
        payload:zip
    }
}