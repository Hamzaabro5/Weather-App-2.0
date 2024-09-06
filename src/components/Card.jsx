import React from 'react'

const Card = ({ location, current }) => {
    return (
        <>
        <div className='card text-center border-2 mt-20 px-40 pb-10'>

            <img width={`200px`} src={current.condition.icon} viewBox="0 0 512 512"></img>
            <h1 className='text-6xl mt-2 font-bold'>{current.temp_c} <sup>o</sup>C</h1>
            <h1 className='text-2xl mt-8'> {location.name}, {location.country}</h1>


            <div className='flex justify-between mt-20 text-2xl'>

              <div>
                <p className='font-bold tracking-wider'>{current.wind_kph} Km/h</p>
                <h1 className='text-lg'>Wind Speed</h1>

              </div>

              <div>
                <p className='font-bold tracking-wider'>{current.humidity}%</p>
                <h1 className='text-lg'>Humidiy</h1>
              </div>
            </div>

        </div>
         </>
    )
}

export default Card 