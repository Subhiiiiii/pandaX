import React from 'react'
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';

const Header = () => {
  return (
    <div>
      <div className='header-container'>
        <div className='header-title'>PandaEx</div>
        <div className='header-icon'><AccountCircleRoundedIcon/></div>
      </div>
      <hr className='header-line'/>
    </div>
  )
}

export default Header
