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
      <h1 className='text-5xl font-bold text-center my-8 text-white'>Weather App</h1>
      <form className='text-center'>
        <input className="input input-bordered rounded-3xl input-sm w-full max-w-xs p-6 text-lg" type="text" placeholder='Enter City Name' ref={inputVal}/>
        <button onClick={getCity} type="submit" className="btn btn-error rounded-3xl px-10 py-0 ms-5">Search</button>
      </form>

       <div className='flex justify-center flex-wrap gap-32'>
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



