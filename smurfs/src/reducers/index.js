import {START_FETCHING, FETCH_SUCCESS, FETCH_FAILURE,POST_FAIL,POST_SUCCESS,POST_SMURF} from '../actions'


const initialState = {
    smurfs: [ ],
    isFetching: false,
    error: '',
    isPosting: false
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
        case POST_SMURF:
            return {
                ...state,
                isPosting: true,
                error: '',
            }
        case POST_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                isPosting:false,
                error: '',
            }
        case POST_FAIL:
            return {
                ...state,
                isPosting:false,
                error:action.payload
            }
        default: 
        return state;
    }
}

