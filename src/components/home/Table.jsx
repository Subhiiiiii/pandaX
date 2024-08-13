import React,{useState} from 'react'
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import Table1 from './Table1';
import Table2 from './Table2';
import tab1 from '../../assets/img/table1.jpeg'
import tab2  from '../../assets/img/table2.jpeg'
import tab3  from '../../assets/img/table3.jpeg'
import tab4 from '../../assets/img/table4.jpeg'

const Table = () => {
    const[tabu1,settabu1]  = useState(false)
    const[tabu2,settabu2]  = useState(false)

    const onclick1 = (props) => {
        settabu1(true)
        settabu2(false)

    }
    const onclick2 = () => {
        settabu2(true)
        settabu1(false)
    }
    const table={
        table1:[
            {title:'Royal teak Wood',
             price:'10,000/-',
             image:tab1
            },
            {
             title:'Oak Wood',
             price:'6,750/-',
             image: tab2
            },
            
        ],
        table2:[
            {
                title:'Desk Table',
                price:'22,350/-',
                image:tab3
               },
               {
                title:'Living-Room Table',
                price:'25,000/-',
                image:tab4
               }
        ]
    }
  return (
    <div>
      <div className='laptop-container'>
        <button onClick={onclick1} id={tabu1 ? 'Color' : 'no'}  className='laptop-btn'>60,000-80,000/- <ArrowDropDownRoundedIcon/></button>
        <button onClick={onclick2} id={tabu2 ? 'Color' : 'no'}  className='laptop-btn'>80,000 + <ArrowDropDownRoundedIcon/></button>
      </div>
{tabu1 && <Table1 apiData={table}/>}
{tabu2 && <Table2 apiData={table}/>}
    </div>
  )
}

export default Table
