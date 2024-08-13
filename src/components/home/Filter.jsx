import React,{useState} from 'react'
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import Laptop from './Laptop';
import Pants from './Pants';
import Phone from './Phone'
import Jewels from './Jewels';
import Sofa from './Sofa';
import Table from "./Table"
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';


const Filter = (props) => {
    const [laptopu, setLaptopu]  = useState(false)
    const [pantu, setPantu]  = useState(false)
    const [phoneu, setPhoneu]  = useState(false)
    const [jewelu, setJewelu]  = useState(false)
    const[sofu,setSofu] = useState(false)
    const[tabu,settabu] = useState(false)

    const laptop = () => {
      setLaptopu(true);
      setPantu(false);
      setPhoneu(false);
      setJewelu(false);
      setSofu(false);
      settabu(false);
      
    }

    const pant = () => {
      setPantu(true);
      setLaptopu(false);
      setPhoneu(false);
      setJewelu(false);
      setSofu(false);
      settabu(false);
    }
    const phone = () =>{
      setPantu(false);
      setLaptopu(false);
      setPhoneu(true);
      setJewelu(false);
      setSofu(false);
      settabu(false);
    }
    const jewel = () =>{
      setPantu(false);
      setLaptopu(false);
      setPhoneu(false);
      setJewelu(true);
      setSofu(false);
      settabu(false);
    }
    const sofa = () =>{
      setPantu(false);
      setLaptopu(false);
      setPhoneu(false);
      setJewelu(false);
      setSofu(true);
      settabu(false);
    }
    const table = () =>{
      setPantu(false);
      setLaptopu(false);
      setPhoneu(false);
      setJewelu(false);
      setSofu(false);
      settabu(true);
    }

    const close = () => {
      setPantu(false);
      setLaptopu(false);
      setPhoneu(false);
      setJewelu(false);
      setSofu(false);
      settabu(false);
    }
   

  return (
    <div className='media-grid'>
        <hr className='filter-hr' />
    <div className='filter-container'>
     <button onClick={laptop} id={laptopu ? 'Color' : 'no'}  className='filter-btn'>{props.filter.filter1} <ArrowDropDownRoundedIcon/></button>
     <button onClick={pant} id={pantu ? 'Color' : 'no'}  className='filter-btn'>{props.filter.filter2} <ArrowDropDownRoundedIcon/></button>
     <button onClick={phone} id={phoneu ? 'Color' : 'no'}   className='filter-btn'>{props.filter.filter3} <ArrowDropDownRoundedIcon/></button>
     <button onClick={jewel} id={jewelu ? 'Color' : 'no'}  className='filter-btn'>{props.filter.filter4} <ArrowDropDownRoundedIcon/></button>
     <button onClick={sofa} id={sofu ? 'Color' : 'no'}  className='filter-btn'>{props.filter.filter5} <ArrowDropDownRoundedIcon/></button>
     <button onClick={table} id={tabu ? 'Color' : 'no'}  className='filter-btn'>{props.filter.filter6} <ArrowDropDownRoundedIcon/></button>
     <button onClick={close} className='filter-btn-close'><CloseRoundedIcon/></button>
    </div>
    {laptopu && <Laptop/>}
    {pantu && <Pants/>}
    {phoneu && <Phone/>}
    {jewelu && <Jewels/>}
    {sofu && <Sofa/>}
    {tabu && <Table/>}
    </div>
  )
}

export default Filter
