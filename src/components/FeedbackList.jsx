import {AnimatePresence, motion} from 'framer-motion'
import {useContext} from 'react'
// import PropTypes from 'prop-types'
import Spinner from './shared/Spinner'
import FeedbackItem from './FeedbackItem'
import FeedbackContext from '../context/FeedbackContext'


function FeedbackList() {
  const { feedback, isLoading } = useContext(FeedbackContext)

  if (!isLoading && (
    !feedback || feedback.length === 0
  )) {
    return (
      <p>No feedback yet</p>
    )
  }


  return isLoading ? <Spinner /> : (
    <div className="feedback-list">
      <AnimatePresence>
        { feedback.map(item => (
          <motion.div
            key={ item.id }
            initial={ { opacity: 0 } }
            animate={ { opacity: 1 } }
            exit={ { opacity: 0 } }
          >
            <FeedbackItem
              key={ item.id }
              item={ item }
            />

          </motion.div>
        )) }
      </AnimatePresence>
    </div>
  )
}

/*return (
  <div className="feedback-list">
    { feedback.map(item => (
      <FeedbackItem
        key={ item.id }
        item={ item }
        handleDelete={ handleDelete }
      />
    )) }
  </div>
)
}*/

// note: Not used with Context as we will be getting feedback from context
/*FeedbackList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
                      id: PropTypes.string.isRequired,
                      rating: PropTypes.number.isRequired,
                      text: PropTypes.string.isRequired,
                    })
  )
}*/


export default FeedbackList