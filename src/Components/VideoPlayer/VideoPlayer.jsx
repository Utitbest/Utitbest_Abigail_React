import React, { useRef } from 'react'
import './VideoPlayer.css'
import { videocont } from '../../assets'



const VideoPlayer = ({playState, setPlayState}) => {
    const player = useRef(null)

    const closePlayer = (event)=>{
        if(event.target === player.current){
            setPlayState(false)
        }
    }
  return (
    <div className={`video-player ${playState ? '' : 'hide'}`} ref={player} onClick={closePlayer}>
        <video src={videocont} autoPlay muted controls></video>
    </div>
  )
}

export default VideoPlayer