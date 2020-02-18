import React, { Component} from 'react';
import ToggleDisplay from 'react-toggle-display';
import img from './assets/StarWars.png';
import './App.css';
import starwarservice from './shared/starwars-service';

class App extends Component {
  constructor(props) {
    super(props);
    this.starwarservice=new starwarservice();
    this.state = {
      error: null,
      isLoaded: false,
      show: false,
      items:[],
      persons:[],
      species:[],
      pilots:[]
    };
}

handleClick() {
  this.setState({
    show: !this.state.show
  });
}

GetCrawls(){
  fetch("http://localhost:57048/api/StarWars/GetCrawls")
  .then(res => res.json())
  .then(
    (result) => {
      console.log(result);
      this.setState({
        isLoaded: true,
        items: result
      });
    },
    // Note: it's important to handle errors here
    // instead of a catch() block so that we don't swallow
    // exceptions from actual bugs in components.
    (error) => {
      this.setState({
        isLoaded: true,
        error
      });
    }
  )
}

GetMostAppearedPerson(){
  fetch("http://localhost:57048/api/StarWars/MostAppearedPerson")
  .then(res => res.json())
  .then(
    (result) => {
      console.log(result);
      this.setState({
        isLoaded: true,
        persons: result
      });
    },
    // Note: it's important to handle errors here
    // instead of a catch() block so that we don't swallow
    // exceptions from actual bugs in components.
    (error) => {
      this.setState({
        isLoaded: true,
        error
      });
    }
  )
}

GetMostAppearedSpecies(){
  fetch("http://localhost:57048/api/StarWars/MostAppearedSpecies")
  .then(res => res.json())
  .then(
    (result) => {
      console.log(result);
      this.setState({
        isLoaded: true,
        species: result
      });
    },
    // Note: it's important to handle errors here
    // instead of a catch() block so that we don't swallow
    // exceptions from actual bugs in components.
    (error) => {
      this.setState({
        isLoaded: true,
        error
      });
    }
  )
}

GetVehiclePilots(){
  fetch("http://localhost:57048/api/StarWars/VehiclePilots")
  .then(res => res.json())
  .then(
    (result) => {
      console.log(result);
      this.setState({
        isLoaded: true,
        pilots: result
      });
    },
    // Note: it's important to handle errors here
    // instead of a catch() block so that we don't swallow
    // exceptions from actual bugs in components.
    (error) => {
      this.setState({
        isLoaded: true,
        error
      });
    }
  )
}

componentDidMount() {
  this.GetCrawls();
  this.GetMostAppearedPerson();
  this.GetMostAppearedSpecies();
  this.GetVehiclePilots();
}

render() {
  const { error, isLoaded, items, persons, species, pilots } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="App-header">
        <img src={img} className="App-logo" alt="logo" />
        <button className="button-style" onClick={ () => this.handleClick() }><b>Do. Or do not. There is no try.</b></button>
        <ToggleDisplay show={this.state.show} className="App-header" tag="section">
        <h4><b>Which of all StarWars movies has longest opening crawl?</b></h4>
        <h4 className="Answer-style">{items.map(item => <div>{item.Title}</div>)}</h4>
        <h4><b>Which character(person) appeared in the most of the StarWars films?</b></h4>
        <h4 className="Answer-style">{persons.map(person => <div>{person.Name}</div>)}</h4>
        <h4><b>What species appeared in the most number of StarWars films?</b></h4>
        <h4 className="Answer-style">{species.map(specie => <div>{specie.Name} ({specie.Count})</div>)}</h4>
        <h4><b>What planet in StarWars universe provided largest number of vehicle pilots?</b></h4>
        <h4 className="Answer-style">{pilots.map(pilot => <div>Planet: {pilot.Name} - Pilots: ({pilot.Count}) {pilot.PersonName} - {pilot.SpeciesName}</div>)}</h4>
        </ToggleDisplay>
      </div>
      );
    }
  }
}

export default App;
