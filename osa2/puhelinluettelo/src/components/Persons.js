import React from 'react'


const Persons = (props) => {
    return (
        <ul>
            {props.names.map(person => <li key={person.id}>{person.name} {person.number}</li>)}
        </ul>
    )
}

export default Persons