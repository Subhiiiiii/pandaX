import React,{useState} from 'react'
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import Laptop1 from './Laptop1';
import Laptop2 from './Laptop2';
import dell from '../../assets/img/dell.avif'
import hp from '../../assets/img/hp.jpg'
import Predator from '../../assets/img/predator.jpg'
import alien from '../../assets/img/alienware.jpeg'

const Laptop = () => {
    const[laptop1,setlaptop1]  = useState(false)
    const[laptop2,setlaptop2]  = useState(false)

    const onclick1 = (props) => {
        setlaptop1(true)
        setlaptop2(false)

    }
    const onclick2 = () => {
        setlaptop2(true)
        setlaptop1(false)
    }
    const LapTop={
        laptop1:[
            {title:'Dell',
             price:'65,999/-',
             image:dell
            },
            {
             title:'HP',
             price:'74,350/-',
             image: hp
            },
            
        ],
        laptop2:[
            {
                title:'Alienware',
                price:'1,23,450/-',
                image:alien
               },
               {
                title:'Predator',
                price:'1,50,000/-',
                image:Predator
               }
        ]
    }
  return (
    <div>
      <div className='laptop-container'>
        <button onClick={onclick1} id={laptop1 ? 'Color' : 'no'}  className='laptop-btn'>60,000-80,000/- <ArrowDropDownRoundedIcon/></button>
        <button onClick={onclick2} id={laptop2 ? 'Color' : 'no'}  className='laptop-btn'>80,000 + <ArrowDropDownRoundedIcon/></button>
      </div>
{laptop1 && <Laptop1 apiData={LapTop}/>}
{laptop2 && <Laptop2 apiData={LapTop}/>}
    </div>
  )
}

export default Laptop
