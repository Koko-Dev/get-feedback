import {useState} from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'


function FeedbackForm() {
  const [ text, setText ] = useState('')
  const [ rating, setRating ] = useState(10)
  const [ btnDisabled, setBtnDisabled ] = useState(true)
  const [ message, setMessage ] = useState('')

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
        text: text,
        rating: rating,
      }

      console.log(newFeedback)
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

