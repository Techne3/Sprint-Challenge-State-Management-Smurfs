import React,{useState} from 'react'
import {connect} from 'react-redux';
import axios from 'axios'
import {postSmurf} from '../actions'


const SmurfForm = (props) => {
    const [smurf, setSmurf] = useState({
        name: '',
        age: '',
        height: ''
      });
    
      const handleChanges = e => {
        setSmurf({
            ...smurf, [e.target.name]: e.target.value})
      }

    // const handleNameChanges = e => {
    //     setSmurf({
    //       ...smurf,
    //       name: e.target.value
    //     });
    //   };
    
    //   const handleAgeChanges = e => {
    //     setSmurf({
    //       ...smurf,
    //       age:(e.target.value)
    //     });
    //   };
    
    //   const handleHeightChanges = e => {
    //     setSmurf({
    //       ...smurf,
    //       height: e.target.value
    //     });
    //   };


      const handleSubmit = e => {
          props.postSmurf(smurf);
          setSmurf({
              name: "",
              age: "",
              height: ""
            });
            e.preventDefault();
      }; 
    
    //   const handleSubmit = e => {
    //     axios
    //     .post('http://localhost:3333/smurfs', smurf)
    //     .then(res => {

    //     })
    //     .catch(error => {
    //       console.log("This is a error from post", error.message)
    //     })
    //         setSmurf({
    //         name: '',
    //         age: '',
    //         height: ''
    //         })
    //   }



    return (
   <div>
        <form className="add-form" onSubmit={handleSubmit}>
      
        <label>Name: </label>
        <input 
        type="text"
        name="name"
        value={smurf.name}
        placeholder="name"
        onChange={handleChanges} 
        />
    
     
        <label>Age: </label>
        <input
        type="text"
        name="age"
        value={smurf.age}
        placeholder="age"
        onChange={handleChanges}
        />
     
      <div>
        <label>Height: </label>
        <input
        type="text"
        name="height"
        placeholder="height"
        onChange={handleChanges}
        value={smurf.height}/>
      </div>
      <button type="submit">Add A Smurf</button>
    </form>
</div>
    )
}

const mapStateToProps = state => {
    return {
        error: state.error,
        smurfs: state.smurfs,
        isPosting: state.isPosting
    }
}

export default connect(mapStateToProps, {postSmurf} )(SmurfForm)