import React, { useState } from 'react';
import { GridLoader } from 'react-spinners';

function Loader() {
  const [color, setColor] = useState('#ffffff');

  return (
    <div className='flex justify-center items-center h-screen bg-slate-700'>
      <GridLoader color={color} size={20} />
    </div>
  );
}

export default Loader;
