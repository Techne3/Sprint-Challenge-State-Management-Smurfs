import axios from 'axios'


export const START_FETCHING = 'START_FETCHING';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';
export const CREATE_SMURF = 'CREATE_SMURF';
export const CREATING_SMURF ='CREATING_SMURF';
export const FAIL = 'FAIL';


export const fetchFacts = () => dispatch => {
    // action objects
    dispatch({ type: START_FETCHING });
    // do some async action and dispatch an error or success action
    axios
      .get('http://localhost:3333/smurfs')
      .then(res => dispatch({type:FETCH_SUCCESS, payload: res.data}) )
      .catch(err => dispatch({ type: FETCH_FAILURE, payload: err.response }));
      // dispatch({type: 'FETCH_SUCCESS', payload:res. data})
  };



  // redux thunk
  const tunk = next => action => store=> {
      if (typeof action === 'object'){
          next(action); 
      }else if (typeof action === 'fucntion'){
          action(store.dispatch);// stop action
      }
  }
