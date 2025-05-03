import React from 'react'
import {program1, program2, program3,
    program_icon1, program_icon2, program_icon3
} from '../../assets'
import './Programs.css'
const Programs = () => {
  return (
    <div className='programs' name="program">
        <div className="program">
            <img src= {program1} alt="" />
            <div className="caption">
                <img src={program_icon1} alt="" />
                <p>Graduation Degree</p>
            </div>
        </div>

          <div className="program">
            <img src= {program2} alt="" />
            <div className="caption">
                <img src={program_icon2} alt="" />
                <p>Graduation Degree</p>
            </div>
        </div>

          <div className="program">
            <img src= {program3} alt="" />
            <div className="caption">
                <img src={program_icon3} alt="" />
                <p>Post Graduation</p>
            </div>
        </div>
    </div>
  )
}

export default Programs