import React,{useState} from 'react'
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import Pant1 from './Pant1';
import Pant2 from './Pant2';
import baggy from '../../assets/img/joggers.jpeg'
import jeans from '../../assets/img/jeans.jpeg'
import bell from '../../assets/img/bell pants.jpg'
import denim from '../../assets/img/denim.jpeg'

const Pants = () => {
    const[pant1,setPant1]  = useState(false)
    const[pant2,setPant2]  = useState(false)

    const onclick1 = (props) => {
        setPant1(true)
        setPant2(false)

    }
    const onclick2 = () => {
        setPant2(true)
        setPant1(false)
    }
    const Pants={
        pant1:[
            {title:'Baggy Pants',
             price:'2,000/-',
             image:baggy
            },
            {
             title:'Jeans',
             price:'1,500/-',
             image: jeans
            },
            
        ],
        pant2:[
            {
                title:'Denim wear',
                price:'2,500/-',
                image:denim
               },
               {
                title:'Bell bottom',
                price:'2,200/-',
                image:bell
               }
        ]
    }
  return (
    <div>
      <div className='laptop-container'>
        <button onClick={onclick1} id={pant1 ? 'Color' : 'no'}  className='laptop-btn'>1,000 - 2,000 <ArrowDropDownRoundedIcon/></button>
        <button onClick={onclick2} id={pant2 ? 'Color' : 'no'}  className='laptop-btn'>2,000 + <ArrowDropDownRoundedIcon/></button>
      </div>
{pant1 && <Pant1 apiData={Pants}/>}
{pant2 && <Pant2 apiData = {Pants}/>}
    </div>
  )
}

export default Pants
