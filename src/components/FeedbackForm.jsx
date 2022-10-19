import {useContext, useState, useEffect} from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'
import FeedbackContext from './../context/FeedbackContext'


function FeedbackForm() {
  const [ text, setText ] = useState('')
  const [ rating, setRating ] = useState(10)
  const [ btnDisabled, setBtnDisabled ] = useState(true)
  const [ message, setMessage ] = useState('')

  // Note: feedbackEdit is state from FeedbackContext whose
  //  initialState is set to an object with two properties --
  //  edit and item ( set to an empty object, but when set will contain
  //  the id, text and rating properties of the specific feedback
  //  when user clicks a specific feedback pencil icon )
  const { addFeedback, feedbackEdit, updateFeedback } = useContext(FeedbackContext)
  useEffect(() => {
    // todo: Check to see if there is something in feedbackEdit first
    if (feedbackEdit.edit === true) {
      // Enable the button
      setBtnDisabled(false)
      // Set the text to the value of the state feedbackEdit item text property
      setText(feedbackEdit.item.text)
      // Set the rating to the value of the state feedbackEdit item rating property
      setRating(feedbackEdit.item.rating)

      // Set the text value to feedbackEdit.item.text
    }
  }, [feedbackEdit])

  const handleTextChange = (e) => {
    if (text === '') {
      setBtnDisabled(true)
    } else if (text !== '' && text.trim().length <= 10) {
      setMessage('Text must be at least 10 characters')
    } else {
      setMessage(null)
      setBtnDisabled(false)
    }

    setText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      }

      if (feedbackEdit.edit === true) {
        updateFeedback(feedbackEdit.item.id, newFeedback)
      } else {
        addFeedback(newFeedback)
      }
    }
  }

  return (
    <Card>
      <form onSubmit={ handleSubmit }>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect select={ setRating }
                      selected={ rating }/>
        <div className="input-group">
          <input type="text"
                 placeholder="Write a review"
                 onChange={ handleTextChange }
                 value={ text }/>
          <Button type="submit"
                  isDisabled={ btnDisabled }>
            Send
          </Button>
        </div>
        {/* /.input-group */ }

        { message && <div className="message">{ message }</div> }
      </form>
    </Card>
  )
}


export default FeedbackForm

