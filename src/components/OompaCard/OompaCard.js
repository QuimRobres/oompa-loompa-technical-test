import React from 'react'
import './OompaCard.css'

export default function OompaCard({...worker,}) {
  
  
    return (
    <div class="oompa-container">
        <img src={worker.image} alt="oompa-loompa"></img>
        <h2>{worker.first_name} {worker.last_name}</h2>
        <p>{worker.gender}</p>
        <p>{worker.profession}</p>
        <p>{worker.index}</p>
    </div>
  )
}
