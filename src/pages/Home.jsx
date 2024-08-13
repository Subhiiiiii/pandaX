import React from 'react'
import Header from '../components/home/Header'
import "./home.css"
import Categories from '../components/home/Categories'
import Filter from '../components/home/Filter'


const Home = () => {
  const HomeData = {
        title1: "Electronics",
        title2: "Fashion",
        title3: "Furniture",
  }
  const keyWords = {
      filter1: "Laptop",
      filter2: "Pants",
      filter3: "Phone",
      filter4: "Jewels",
      filter5: "Sofa",
      filter6: "Table",
  }
  
  

  return (
    <div className='home-container'>
     <Header/>
     <Categories apiData={HomeData}/>
     <Filter filter = {keyWords}/>
    </div>
  )
}

export default Home
