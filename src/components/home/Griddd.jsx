import React from 'react';

const Griddd = (props) => {
  return (
    <div className="grid">
      {props.apiData.grid3.map((data, index) => (
        <div key={index} className="grid-container">
          <div>
            <img className="grid-container-img" src={data.image} alt={data.name} />
          </div>
          <div className='grid-container-name'>{data.name}</div>
          <div className='grid-container-price'>{data.price}</div>
        </div>
      ))}
    </div>
  );
};

export default Griddd;
