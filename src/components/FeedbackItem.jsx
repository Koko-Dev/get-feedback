import React, { useState } from 'react';


function FeedbackItem () {
  const [rating, setRating] = useState(7);
  const [text, setText] = useState('This is an example of a feedback item.');

  const handleClick = () => {
    setRating((prevRating) => {
      console.log(prevRating);
      return prevRating + 1;
    });
  };

  return (
    <div className='card'>
      <div className='num-display'>{ rating }</div>
      {/* /.num-display */ }
      <div className='text-display'>{ text }</div>
      {/* /.text-display */ }
      <button onClick={ handleClick }>Click</button>
    </div>
  );
}


export default FeedbackItem;