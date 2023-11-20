import React from 'react'
import './Slider.css'

function Slider({sliderTitle,sliderArray,sliderClass}) {
  return (
    <div className={`slider-container ${sliderClass}`}>
        <p className='slider-title'>{sliderTitle}</p>
        <div>
            {sliderArray.map(obj => (
                <div className='slider-template'>
                    <div className='slider-image-div'><img src={obj.img}/></div>
                    <p className='slider-image-title'>{obj.title}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Slider