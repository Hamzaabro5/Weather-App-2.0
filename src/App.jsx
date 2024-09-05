import React, { useRef, useState } from 'react'
import axios from 'axios'


function App() {
  const [weather , setWeather] = useState()
  const inputVal = useRef()


    function getCity(event) {
      event.preventDefault();
      axios(`https://api.weatherapi.com/v1/current.json?key=982f5c58a9e742e68e5103048241306&q=${inputVal.current.value}&aqi=n`)
      .then((res) => {  
        console.log(res.data)
        setWeather(res.data)
        setWeather(res.data)
      }).catch((err) => {
        console.log(err);
        alert(`No City found Please try Another!`)
      })
      inputVal.current.value = ``
    }

  return (
    <>
    <div>
      <h1>Weathgit remote add origin https://github.com/Hamzaabro5/Weather-App-2.0.giter App</h1>
      <form>
        <input type="text" ref={inputVal}/>
        <button onClick={getCity} type="submit">Search</button>
      </form>
    </div>
    </>
  )
}

export default App