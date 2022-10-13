function FeedbackStats ({ feedback }) {
  // Calculates ratings average
  let average = feedback.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.rating;

  }, 0) / feedback.length;

  return (
    <div className='feedback-stats'>
      <h4>{ feedback.length } Reviews</h4>
      <h4>Average Rating: { isNaN(average) ? 0 : average }</h4>
    </div>
  );
}


export default FeedbackStats;