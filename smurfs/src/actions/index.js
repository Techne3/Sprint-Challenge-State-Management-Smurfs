import axios from 'axios'


export const START_FETCHING = 'START_FETCHING';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';
export const POST_SUCCESS = 'POST_SUCCESS';
export const POST_FAIL ='POST_FAILURE';
export const POST_SMURF = 'POST_FETCHING';


export const fetchFacts = () => dispatch => {
    // action objects
    dispatch({ type: START_FETCHING });
    // do some async action and dispatch an error or success action
    axios
      .get('http://localhost:3333/smurfs')
      .then(res => dispatch({type:FETCH_SUCCESS, payload: res.data}) )
      .catch(err => dispatch({ type: FETCH_FAILURE, payload: err.res}));
      // dispatch({type: 'FETCH_SUCCESS', payload:res. data})
  };

  export const postSmurf = smurfs => dispatch => {
    dispatch({ type: POST_SMURF });
    axios
      .post("http://localhost:3333/smurfs", smurfs)
      .then(res => dispatch({ type: POST_SUCCESS, payload: res.data }))
      .catch(err => dispatch({ type: POST_FAIL, payload: err }));
  }