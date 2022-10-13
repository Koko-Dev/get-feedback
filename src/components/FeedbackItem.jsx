import PropTypes from 'prop-types';
import Card from './shared/Card';


function FeedbackItem ({ item }) {
  return (
    <Card>
      <div className='num-display'>{ item.rating }</div>
      {/* /.num-display */ }
      <div className='text-display'>{ item.text }</div>
      {/* /.text-display */ }
    </Card>
  );
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
}


export default FeedbackItem;