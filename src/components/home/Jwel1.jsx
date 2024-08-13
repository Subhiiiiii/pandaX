import React from 'react';

const Jwel1 = (props) => {

  return (
    <div className="grid">
      {props.apiData.jewel1.map((data, index) => (
        <div key={index} className="grid-container">
          <div>
            <img className="grid-container-img" src={data.image} alt={data.name} />
          </div>
          <div className='grid-container-name'>{data.title}</div>
          <div className='grid-container-price'>{data.price}</div>
        </div>
      ))}
    </div>
  );
};

export default Jwel1;
