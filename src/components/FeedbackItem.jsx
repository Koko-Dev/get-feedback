import React, {useState} from 'react';

function FeedbackItem () {
  return (
    <div className='card'>
      <div className='num-display'>10</div>
      {/* /.num-display */}
      <div className='text-display'>
        This is an example of a feedback item.
      </div>
      {/* /.text-display */}
    </div>
  );
}

export default FeedbackItem;