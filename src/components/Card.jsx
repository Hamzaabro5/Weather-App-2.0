import React from 'react'

const Card = ({ location, current }) => {
    return (
        <>
            <div>
                <div>
                    <div>
                        <img
                            src={current.condition.icon}
                            viewBox="0 0 512 512"
                        >
                        </img>
                        <h1>{current.temp_c}</h1>
                        <h1>{location.name}</h1>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Card 