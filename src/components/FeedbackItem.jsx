function FeedbackItem ({item}) {
  return (
    <div className='card'>
      <div className='num-display'>{ item.rating }</div>
      {/* /.num-display */ }
      <div className='text-display'>{ item.text }</div>
      {/* /.text-display */ }
    </div>
  );
}


export default FeedbackItem;