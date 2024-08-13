import React,{useState} from 'react'
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import Phone1 from './Phone1';
import Phone2 from './Phone2';
import redmi from '../../assets/img/redmi.webp'
import oneplus from '../../assets/img/one.webp'
import samsung from '../../assets/img/s24.jpeg'
import iphone from '../../assets/img/iphone.webp'

const Phone = () => {
    const[phone1,setphnone1]  = useState(false)
    const[phone2,setphnone2]  = useState(false)

    const onclick1 = (props) => {
       setphnone1(true)
       setphnone2(false)

    }
    const onclick2 = () => {
        setphnone2(true)
        setphnone1(false)
    }
    const phone={
        phone1:[
            {title:'Redmi',
             price:'30,999/-',
             image:redmi
            },
            {
             title:'One Plus',
             price:'48,499/-',
             image: oneplus
            },
            
        ],
        phone2:[
            {
                title:'Samsung S24',
                price:'1,23,450/-',
                image:samsung
               },
               {
                title:'IPhone',
                price:'1,50,000/-',
                image:iphone
               }
        ]
    }
  return (
    <div>
      <div className='laptop-container'>
        <button onClick={onclick1} id={phone1 ? 'Color' : 'no'}  className='laptop-btn'>30,000-50,000/- <ArrowDropDownRoundedIcon/></button>
        <button onClick={onclick2} id={phone2 ? 'Color' : 'no'}  className='laptop-btn'>50,000 + <ArrowDropDownRoundedIcon/></button>
      </div>
{phone1 && <Phone1 apiData={phone}/>}
{phone2 && <Phone2 apiData={phone}/>}
    </div>
  )
}

export default Phone
