import React, {Component} from  'react';
import Form from './Components/Form';
import Weather from './Components/Weather';
import './App.css';


const API_KEY ="d5f74ca99239bab616506932a6f062a4";

class App extends Component {

  state ={
    temperature:null,
    city:null,
    country: null,
    humidity: null,
    description: null,
    error: null
  }


  getWeather = async(e)=>{ //the Method to Connection to api
    e.preventDefault();
    
    const city= e.target.city.value;
    const country= e.target.country.value;
    const api =await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`);
    const  data = await api.json();
    console.log(api,data)  //${city},${country}&appid=${API_KEY}`


        if(data.cod===200 && city && country){
          this.setState({
              temperature : Math.round(data.main.temp),
              city : data.name ,
              country : data.sys.country,
              humidity : data.main.humidity,
              description :  data.weather[0].description,
              error: '',
            })
          }
           else{
              this.setState({
                temperature:null,
                city:null,
                country: null,
                humidity: null,
                description: null,
                error:'City or Country not found '
              })
            }
       
  }

  render(){
    return(
      <div className='wrapper'>
          <div className='form-container'>
            <Form getWeather={this.getWeather}/>
            <Weather 
              temperature ={this.state.temperature}
              city ={this.state.city}
              country ={this.state.country}
              humidity ={this.state.humidity}
              description ={this.state.description}  
              error ={this.state.error}
            />
          </div>
      </div>
    )
  }
}
export default App;









// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


