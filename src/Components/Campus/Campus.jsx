import React from 'react'
import './Campus.css'
import { gallery_1, gallery_2, gallery_3, gallery_4, white_arrow } from '../../assets'

const Campus = () => {
  return (
    <div className='campus' name="campus">
        <div className="gallery">
            <img src={gallery_1} alt="" />
            <img src={gallery_2} alt="" />
            <img src={gallery_3} alt="" />
            <img src={gallery_4} alt="" />
        </div>
        <button className='btn dark-btn'>See more here
            <img src={white_arrow} alt="" />
        </button>
    </div>
  )
}

export default Campus