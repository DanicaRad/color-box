import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './NewBoxForm.css';

const NewBoxForm = ({ createBox }) => {
  const [formData, setFormData] = useState({
    width: "",
    height: "",
    backgroundColor: ""
  });
  
  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormData(formData => ({
      ...formData,
      [name]: value
    }));
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    createBox({...formData, id: uuid()});
    setFormData({width: "", height: "", backgroundColor: ""});
  };

  return (
    <div className='box-form'>
    <form onSubmit={handleSubmit}>
      <label htmlFor='width'>Width</label>
      <input
        id='width' 
        type='number' 
        name='width' 
        value={formData.width} 
        onChange={handleChange}
      />
      <label htmlFor='height'>Height</label>
      <input
        id='height' 
        type='number' 
        name='height' 
        value={formData.height} 
        onChange={handleChange}
      />
      <label htmlFor='backgroundColor'>Background Color</label>
      <input
        id='backgroundColor' 
        type='text' 
        name='backgroundColor' 
        value={formData.backgroundColor} 
        onChange={handleChange}
      />
      <button>Add New Box</button>
    </form>
    </div>
  );
};

export default NewBoxForm;