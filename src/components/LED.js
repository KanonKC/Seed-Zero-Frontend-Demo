import React, { useEffect, useState } from 'react'

const LED = ({isActive}) => {

    return (
        <div className='led'>
            { Boolean(!isActive) && <div className='led-light'></div>}
            { Boolean(isActive) && <div className='led-light-glowing'></div>}
        </div>
        
    )
}

export default LED