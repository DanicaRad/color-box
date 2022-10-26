import './Box.css';

const Box = ({ id, width, height, backgroundColor, removeBox }) => {
  const remove = () => removeBox(id);
  return (
    <div className='box' style={{width: `${width}em`}}>
      <div 
        id={id} 
        key={id} 
        style={{ 
          width: `${width}em`,
          height: `${height}em`,
          backgroundColor
      }}
      />
    <button onClick={remove}> X </button>
    </div>
  );
}

export default Box;