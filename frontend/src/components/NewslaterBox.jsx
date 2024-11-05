// NewslaterBox.jsx
import React from 'react';

const NewslaterBox = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className='text-center'>
      <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 20% off</p>
      <p className='text-gray-400 mt-3'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      
      <form onSubmit={onSubmitHandler} className='w-3/4 sm:1/2 flex items-center gap-3 mx-auto border pl-3'>
        <input className='w-full sm-flex outline-none' type='email' placeholder='Enter your email' required />
        <button type='submit' className=' bg-black text-white text-xs px-10 py-4'>SUBSCRIBE</button>
      </form>
    </div>
  );
};

export default NewslaterBox;
