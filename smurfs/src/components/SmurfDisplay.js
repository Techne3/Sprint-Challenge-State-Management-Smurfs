import React from 'react'

const SmurfDisplay = (props) => {

    return (
        <div>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Height:{props.height}</p>
        </div>
    )
}

export default SmurfDisplay;