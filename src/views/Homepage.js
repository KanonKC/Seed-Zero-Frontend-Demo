import React, { useEffect, useState } from 'react'
import { MAX_LDR_VALUE, MIN_LDR_VALUE, setLDRLimit, USER_ID } from '../setting'
import LED from '../components/LED'
import { getDataById, updateLEDById } from '../services/hardware.service'

const Homepage = () => {

  const [isActive,setIsActive] = useState(0)
  const [LDRToColor,setLDRToColor] = useState(256)
  const [loading,setLoading] = useState(false)

  const updateLED = () => {
    setLoading(true)
    updateLEDById(USER_ID,!isActive)
  }

  useEffect(()=>{
    setInterval(()=>{
        getDataById(USER_ID).then((data)=>{
            setIsActive(Number(data.led))
            if(data.led != isActive){
              setLoading(false)
            }
            setLDRToColor(256-Math.floor((setLDRLimit(Number(data.ldr)-MIN_LDR_VALUE)/(MAX_LDR_VALUE-MIN_LDR_VALUE))*256))
        })
    },500)
  },[])

  return (
    <div style={{
      backgroundColor: `rgb(${LDRToColor},${LDRToColor},${LDRToColor})`,
      padding: "47px 0"
    }}>
      <div className='led-controller'>
        <LED isActive={isActive}/>
        {!loading && <button className='btn btn-warning switch-btn' onClick={updateLED}>Turn {isActive ? "Off" : "On"}</button>}

        {loading && <div className="spinner-border text-warning" role="status"></div>}
      </div>
      
    </div>
    
  )
}

export default Homepage