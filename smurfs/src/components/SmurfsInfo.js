import React,{useEffect} from 'react';
import {connect} from 'react-redux';
import SmurfDisplay from './SmurfDisplay';

import {fetchFacts} from '../actions'

const SmurfsInfo = props => {

    useEffect( ()=> {
        props.fetchFacts();
    },[])

    if (props.isFetching) {
        return <h2>loading some smurfs...</h2>
    }
    return (
        <div>
        {props.error && <p>{props.error}</p>}
         {props.smurfs.map(item => (
            <SmurfDisplay key={item.id} name={item.name} age={item.age} height={item.height}/>
        ))}
        </div>
    )
}



const mapStateToProps = (state) => {
    return {
        smurfs: state.smurfs,
        isFetching: state.isFetching,
        error: state.error,
        // state: state, 

    }
}

export default connect(mapStateToProps, {fetchFacts}) (SmurfsInfo);