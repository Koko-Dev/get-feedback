import { FaTimes } from 'react-icons/fa';
import PropTypes from 'prop-types';
import Card from './shared/Card';


function FeedbackItem ({ item }) {
  return (
    <Card>
      <div className='num-display'>{ item.rating }</div>
      {/* /.num-display */ }
      <button
        className='close'
        onClick={() => console.log(123)}
      >
        <FaTimes color='purple' />
      </button>
      <div className='text-display'>{ item.text }</div>
      {/* /.text-display */ }
    </Card>
  );
}


FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default FeedbackItem;