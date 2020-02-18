class starwarservice{
    constructor(){
        this.setState={movie: []};
    }

    async GetCrawls(){
        fetch('http://localhost:57048/api/StarWars/GetCrawls')
        .then((response) => {
          return response.json();
        });   
    }  
    
    async GetMostAppearedPerson(){
        fetch('http://localhost:57048/api/StarWars/MostAppearedPerson')
        .then((response) => {
          return response.json();
        });   
    }  

    async GetMostAppearedSpecies(){
        fetch('http://localhost:57048/api/StarWars/MostAppearedSpecies')
        .then((response) => {
          return response.json();
        });   
    }  

    async GetVehiclePilots(){
        fetch('http://localhost:57048/api/StarWars/VehiclePilots')
        .then((response) => {
          return response.json();
        });   
    }  
}


export default starwarservice;