import React,{useState} from 'react'
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import Sofa1 from './Sofa1';
import Sofa2 from './Sofa2';
import sof1 from '../../assets/img/soFA1.webp'
import sof2 from '../../assets/img/sofa2.webp'
import sof3 from '../../assets/img/sofa3.jpeg'
import sof4 from '../../assets/img/sofa4.jpeg'

const Sofa = () => {
    const[sofu1,setsofu1]  = useState(false)
    const[sofu2,setsofu2]  = useState(false)

    const onclick1 = () => {
        setsofu1(true)
        setsofu2(false)

    }
    const onclick2 = () => {
        setsofu2(true)
        setsofu1(false)
    }
    const sofa={
        sofa1:[
            {title:'Deluxe-Single-Sofa',
             price:'32,000/-',
             image:sof1
            },
            {
             title:'Supreme-SingleSofa',
             price:'45,000/-',
             image: sof2
            },
            
        ],
        sofa2:[
            {
                title:'Deluxe Set',
                price:'80,500/-',
                image:sof3
               },
               {
                title:'Sureme Set',
                price:'99,999/-',
                image: sof4
               }
        ]
    }
  return (
    <div>
      <div className='laptop-container'>
        <button onClick={onclick1} id={sofu1 ? 'Color' : 'no'}  className='laptop-btn'>30,000-50,000/- <ArrowDropDownRoundedIcon/></button>
        <button onClick={onclick2} id={sofu2 ? 'Color' : 'no'}  className='laptop-btn'>50,000 + <ArrowDropDownRoundedIcon/></button>
      </div>
{sofu1 && <Sofa1 apiData={sofa}/>}
{sofu2 && <Sofa2 apiData={sofa}/>}
    </div>
  )
}

export default Sofa
