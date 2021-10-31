import React from 'react'

const Person = (props) => {
    return (
        <div>
          <h1>{props.Person.fullname}</h1>
          <h2>{props.Person.bio}</h2>
          <h3>{props.Person.imgSrc}</h3>
          <h4>{props.Person.profession}</h4>
        </div>
    )
}

export default Person
