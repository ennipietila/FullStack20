import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'


const App = () => {
  const [ persons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filter, setFilter ] = useState('')

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])
  
  console.log('render', persons.length, 'notes')

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleFilter = (event) => setFilter(event.target.value)

  const namesToShow = filter === ''
    ? persons
    : persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))
  

  const addName = (event) => {
    event.preventDefault()
    const nameObject = {
        name: newName,
        number: newNumber,
        id: persons.length + 1,
    }
    console.log(nameObject)
    setNewName('')
    setNewNumber('')
    const names = persons.map(person => person.name)
    if (!names.includes(nameObject.name)) {
        return (
            setPersons(persons.concat(nameObject))
        )
    } else {
        return (
            window.alert(`${newName} is already added to phonebook`)
        )
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handleFilter={handleFilter} />
      <h3>Add a new</h3>
      <PersonForm addName={addName} newName={newName} handleName={handleNameChange} newNumber={newNumber} handleNumber={handleNumberChange}/>
      <h3>Numbers</h3>
      <Persons names={namesToShow}/>
    </div>
  )

}

export default App