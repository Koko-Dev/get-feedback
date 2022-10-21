import {createContext, useState, useEffect} from 'react'
import {v4 as uuidv4} from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
  const [ feedback, setFeedback ] = useState([])

  const [ feedbackEdit, setFeedbackEdit ] = useState({
                                                       item: {}, edit: false
                                                     })

  useEffect(() => {
    console.log(123)

  }, [])

  //  Update feedback item
  const updateFeedback = (id, updatedItem) => {
    setFeedback(feedback.map((item) => (
      item.id === id ? { ...item, ...updatedItem } : item
    )))
  }

  // Set item to be updated
  const editFeedback = (item) => {
    setFeedbackEdit({
                      item, edit: true,
                    })
  }

  // Add feedback
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([ ...feedback, newFeedback ])
    console.log(feedback)
  }

  // Delete Feedback
  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure  you want to delete?')) {
      setFeedback(feedback.filter(item => item.id !== id))
    }
  }

  return (
    <FeedbackContext.Provider value={ {
      feedback, feedbackEdit, deleteFeedback, addFeedback, editFeedback, updateFeedback,
    } }>
      { children }
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext