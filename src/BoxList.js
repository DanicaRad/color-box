import { useState } from 'react';
import NewBoxForm from './NewBoxForm';
import Box from './Box';
import './BoxList.css';

const BoxList = () => {
  const [boxes, setBoxes] = useState([]);

  const addBox = boxData => {
    setBoxes(boxes => ([...boxes, boxData]));
  };

  const removeBox = (id) => {
    setBoxes(boxes.filter(box => box.id !== id));
  }

  return (
    <div>
      <h3>Add Color Boxes</h3>
      <NewBoxForm createBox={addBox}/>
      <div className='boxes'>
        {boxes.map(({id, width, height, backgroundColor}) => 
          <Box
            id={id} 
            key={id} 
            width={width} 
            height={height} 
            backgroundColor={backgroundColor} 
            removeBox={removeBox} 
            />)}
      </div>
    </div>
  );
};

export default BoxList;
