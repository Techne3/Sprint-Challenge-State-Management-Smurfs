import React from 'react'

const SmurfDisplay = (props) => {

    return (
        <div className="displayWrap">
            <p className="name">Name: {props.name}</p>
            <p className="name">Age: {props.age}</p>
            <p className="name">Height: {props.height}</p>
        </div>
    )
}

export default SmurfDisplay;