// import React from 'react'
import "../components/Color.css"
import ColorCard from '../components/ColorCard'
import { ColorsData } from '../assets/Data/color'

export default function ColorPage() {
  return (
    <div className='container'>
        {
            ColorsData.map((item , i)=>{
                return(
                <ColorCard key={i} Data={item} />       
                )
            })
        }

    </div>
  )
}
