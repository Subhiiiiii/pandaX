
import React, {useState} from 'react'
import Grid from './Grid'
import Gridd from './Gridd'
import Griddd from './Griddd'
import televisionImg from '../../assets/img/television.jpg'
import WashingImg from '../../assets/img/washing.jpeg'
import laptopImg from '../../assets/img/laptop.jpg'
import phoneImg from '../../assets/img/phone.jpg'
import bellPants from '../../assets/img/bell pants.jpg'
import closetImg from '../../assets/img/closet.jpeg'
import diningImg from '../../assets/img/dining table.jpeg'
import lipstickImg from '../../assets/img/lipstick.jpg'
import ring from '../../assets/img/ring.webp'
import sofa from '../../assets/img/sofa.jpeg'
import swing from '../../assets/img/swing.jpeg'
import tees from '../../assets/img/tsirt.webp'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

const Categories = (props) => {

  const [electro, setElectro] = useState(false);
  const [fashu, setFashu] = useState(false);
  const [ fart, setFart] = useState(false);
 

  const handleClick = () => {
    setElectro(true);
    setFashu(false);
    setFart(false);
  }; 
  const fashuclick = () => {
    setFashu(true);
    setElectro(false);
    setFart(false);
  };
  const fartclick = () => {
    setFart(true);
    setElectro(false);
    setFashu(false);
  }

  const close = () => {
    setFart(false);
    setElectro(false);
    setFashu(false);
  }

  const grid = {
    grid1:[
      {
        name: 'Television',
        image: televisionImg,
        price: '80,000/-',
      },
      {
        name: 'Washing Machine',
        image: WashingImg,
        price: '90,000/-',
      },
      {
        name: 'Phone',
        image: phoneImg,
        price: '49,999/-',
      },
      {
        name: 'Laptop',
        image: laptopImg,
        price: '1,32,000/-',
      },
     ],
     grid2:[
      {
        name: 'Ring',
        image: ring,
        price: '2,000/-',
      },
      {
        name: 'Bell-bottom Pants',
        image: bellPants,
        price: '3,000/-',
      },
      {
        name: 'Oversize Tees',
        image: tees,
        price: '1,500/-',
      },
      {
        name: 'Huda Lipstick',
        image: lipstickImg,
        price: '1,000/-',
      },
     ],
     grid3:[
      {
        name: 'Sofa',
        image: sofa,
        price: '35,000/-',
      },
      {
        name: 'Closet',
        image: closetImg,
        price: '15,000/-',
      },
      {
        name: 'Wooden-Swing',
        image: swing,
        price: '25,000/-',
      },
      {
        name: 'Dining-Table',
        image: diningImg,
        price: '65,000/-',
      },
     ]
  }
  return (
  <div>
    
      <div className="category-container">
     <button  onClick={handleClick} id={electro ? 'Color' : 'no'} className='category-btn-container'>{props.apiData.title1}</button>
     <button  onClick={fashuclick}  id={fashu ? 'Color' : 'no'}  className='category-btn-container'>{props.apiData.title2}</button>
     <button  onClick={fartclick}  id={fart ? 'Color' : 'no'}  className='category-btn-container'>{props.apiData.title3}</button>
     <button onClick={close}   className='category-btn-container'><CloseRoundedIcon/></button>
    </div>
    <div>
      {electro && <Grid apiData={grid} />}
      {fashu && <Gridd apiData={grid} />}
      {fart && <Griddd apiData={grid} />}
      </div>

  </div>
  )
}

export default Categories
