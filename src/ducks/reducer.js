const initialState = {
    name_applicant: '',
    address_house: '',
    city: '',
    state_house: '',
    zipcode: ''

}

// Action Types

const UPDATE_NAME = "UPDATE_NAME";
const UPDATE_ADDRESS = "UPDATE_ADDRESS";
const UPDATE_CITY = "UPDATE_CITY";
const UPDATE_STATE = "UPDATE_STATE";
const UPDATE_ZIPCODE = "UPDATE_ZIPCODE";

// Reducer Function

function reducer( state = initialState, action ) {
    switch( action.type ){
        case UPDATE_NAME:
            return Object.assign( {}, state, { name_applicant: action.payload });
        
        case UPDATE_ADDRESS:
            return Object.assign( {}, state, { address_house: action.payload });

        case UPDATE_CITY:
            return Object.assign( {}, state, { city: action.payload });

        case UPDATE_STATE:
            return Object.assign( {}, state, { state_house: action.payload });

        case UPDATE_ZIPCODE:
            return Object.assign( {}, state, { zipcode: action.payload });
        
        
            default: return state;
    }
}


// Action Creators

export function updateName( name_applicant ) {
    return {
        type: UPDATE_NAME,
        payload: name_applicant
    };
}

export function updateAddress( address_house ) {
    return {
        type: UPDATE_ADDRESS,
        payload: address_house
    };
}

export function updateCity( city ) {
    return {
        type: UPDATE_CITY,
        payload: city
    };
}

export function updateState( state_house ) {
    return {
        type: UPDATE_STATE,
        payload: state_house
    };
}

export function updateZipcode( zipcode ) {
    return {
        type: UPDATE_ZIPCODE,
        payload: zipcode
    };
}

export default reducer;