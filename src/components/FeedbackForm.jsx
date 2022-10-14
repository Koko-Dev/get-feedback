import { useState } from 'react';
import Card from './shared/Card';
import Button from './shared/Button';


function FeedbackForm () {
  const [text, setText] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');

  const handleTextChange = (e) => {
    setText(e.target.value);
  };
  return (
    <Card>
      <form>
        <h2>How would you rate your service with us?</h2>
        {/*  Todo: Rating select component */ }
        <div className='input-group'>
          <input type='text'
                 placeholder='Write a review'
                 onChange={ handleTextChange }
                 value={ text } />
          <Button type='submit' isDisabled={ btnDisabled }>
            Send
          </Button>
        </div>
        {/* /.input-group */ }

        { message && <div className='message'>{ message }</div> }
      </form>
    </Card>
  );
}


export default FeedbackForm;

