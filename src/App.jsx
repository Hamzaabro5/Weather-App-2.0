import React, { useRef, useState , useEffect } from 'react'
import axios from 'axios'
import Card from './components/Card'

function App() {
  const [weather , setWeather] = useState([])
  const inputVal = useRef()


    async function getCity(event) {
      event.preventDefault();
      try {

      let weatherData = await axios(`https://api.weatherapi.com/v1/current.json?key=982f5c58a9e742e68e5103048241306&q=${inputVal.current.value}&aqi=n`)
      console.log(weatherData.data);
      weather.push(weatherData)
      setWeather([...weather])
      console.log(weather);
      
      } catch (error) {
        alert(`Enter a Valid City Name!`)
      }
      
      
      inputVal.current.value = ``
    }
    

  return (
    <>
    <div>
      <h1>Weather App</h1>
      <form>
        <input type="text" ref={inputVal}/>
        <button onClick={getCity} type="submit">Search</button>
      </form>

       <div>
                {weather.length > 0 && (weather.map((item,index) => (
                    <div key={index}>
                        <Card condition={item.data.current} location={item.data.location} current={item.data.current}/>
                    </div>
                )))}
            </div>
      



    </div>
    </>
  )
}

export default App



