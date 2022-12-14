import {FaEdit, FaTimes} from 'react-icons/fa'
import PropTypes from 'prop-types'
import Card from './shared/Card'
import {useContext} from 'react'
import FeedbackContext from '../context/FeedbackContext'


function FeedbackItem({ item }) {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext)

  return (
    <Card>
      <div className="num-display">{ item.rating }</div>
      {/* /.num-display */ }

      <button
        className="close"
        onClick={ () => deleteFeedback(item.id) }>
        <FaTimes color="purple"/>
      </button>
      {/* /.close */ }

      <button
        className="edit"
        onClick={ () => editFeedback(item) }>
        <FaEdit color="purple"/>
      </button>
      {/* /.edit */ }

      <div className="text-display">{ item.text }</div>
      {/* /.text-display */ }
    </Card>
  )
}


FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
}

export default FeedbackItem