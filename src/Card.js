import React from 'react'

const Card = (data,key) => {
  return (
    <div className="box">
        <img src={data.data.flag} alt="" />
                <div className="overlay">
                    <div className="title"> 
                    <h2>{data.data.name}  </h2>
                    </div>
                        <h6> Population: <span className="grey">{data.data.population}</span>  </h6>
                        <h6> Region: <span className="grey">{data.data.region} </span></h6>
                        <h6> Capital: <span className="grey">{data.data.capital}</span> </h6>
                 </div>
    </div>
  )
}

export default Card