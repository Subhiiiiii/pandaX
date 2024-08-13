import React,{useState} from 'react'
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import Jwel1 from './Jwel1';
import Jwel2 from './Jwel2';
import ring from '../../assets/img/ring.webp'
import bracelet from '../../assets/img/bracelet.jpeg'
import anklet from '../../assets/img/anklet.webp'
import chain from '../../assets/img/chain.jpeg'

const Jewels = () => {
    const[jewel1,setJewel1]  = useState(false)
    const[jewel2,setJewel2]  = useState(false)

    const onclick1 = (props) => {
        setJewel1(true)
        setJewel2(false)

    }
    const onclick2 = () => {
        setJewel1(false)
        setJewel2(true)
    }
    const Jewel={
        jewel1:[
            {title:'Anklet',
             price:'2,000/-',
             image:anklet
            },
            {
             title:'Bracelet',
             price:'1,500/-',
             image: bracelet
            },
            
        ],
        jewel2:[
            {
                title:'Ring',
                price:'5,000/-',
                image:ring
               },
               {
                title:'Chain',
                price:'8,000/-',
                image:chain
               }
        ]
    }
  return (
    <div>
      <div className='laptop-container'>
        <button onClick={onclick1} id={jewel1 ? 'Color' : 'no'}  className='laptop-btn'>1,000-4,000/- <ArrowDropDownRoundedIcon/></button>
        <button onClick={onclick2} id={jewel2 ? 'Color' : 'no'}  className='laptop-btn'>5,000 + <ArrowDropDownRoundedIcon/></button>
      </div>
{jewel1 && <Jwel1 apiData={Jewel}/>}
{jewel2 && <Jwel2 apiData={Jewel}/>}
    </div>
  )
}

export default Jewels
