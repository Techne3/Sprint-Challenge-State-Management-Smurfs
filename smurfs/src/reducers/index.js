import {START_FETCHING, FETCH_SUCCESS, FETCH_FAILURE} from '../actions'


const initialState = {
    smurfs: [ ],
    isFetching: false,
    error: '',
    addingSmurfs: false
};


export const reducer = (state = initialState,   action) => {
    switch(action.type) {
        case START_FETCHING:
            return {
                ...state,
                isFetching: true,
                error: ''
            };
        case FETCH_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                isFetching: false,
                error: ''
            };
        case FETCH_FAILURE:
            return {
                ...state,
                smurfs: '',
                isFetching: false,
                error: action.payload
            };
        // case ADD_SMURF:
        //     // return {
        //     //     ...state,
        //     //     []
        //     // }
        default: 
        return state;
    }
}

