import React, { Component } from 'react'
import './App.css'

export default class App extends Component {

  constructor() {
    super();

    
    this.state = {
      monsters: [],
      //the way I put  searchField in the state
      //is because  it will become accessible
      //to all the components 
      searchField: ''
    }
  }

  //Fetching the data from eternal API
  componentDidMount() {
    //fetch the data from the api
    fetch('https://jsonplaceholder.typicode.com/users')
    //turn the data to json()
    .then((response) => response.json())
    //Now json will return aback data so I name
    //the return data to users and put it in the 
    //monster functions 
    .then((users) => this.setState(() => {
      return {monsters: users}
    }))
  }

  //This is a method
   onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();

    //Because I used a variable as only field
    //I can remove the filteredMonster 
    //in the setState object

    this.setState(() => {
      return {searchField}
  })
    //Thus I have removed the filteredMonster
    //making it only "searchField"
    
  }



  

  render() {

    //optimizing the code
    // const [monsters, searchField ] = this.state;

    const { monsters, searchField } = this.state
    const {onSearchChange} = this;


    //This is the new array - the modified version
        //of our original array
        const filteredMonster = monsters.filter((monster) => {
          return monster.name.toLocaleLowerCase().includes(searchField)

        });


    return (
      <div className='App' >
        
      <input type= 'search' 
      className='search-monster'
      placeholder='Search Monster'
      onChange={onSearchChange}
      />

       


       

        {
          filteredMonster.map((monster) => {
            return <div key={monster.id} > {monster.name} </div>
          })
        }
      </div>
    )
  }
}
