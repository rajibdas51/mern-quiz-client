import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import '../styles/main.css';
import { useDispatch } from 'react-redux';
import { setUserId } from '../redux/result_reducer';
const Main = () => {
  const inputRef = useRef(null);

  const dispatch = useDispatch();
  function startQuiz() {
    if (inputRef.current?.value) {
      dispatch(setUserId(inputRef.current?.value));
    }
  }
  return (
    <div className='container'>
      <h1 className='title text-light'>Quiz Application</h1>
      <ol>
        <ul>
          <li>Answer 10 questions one after the other.</li>
          <li>Get 10 points for each right answer.</li>
          <li>Each question gives you three options. Just pick one.</li>
          <li>You can go back and change your answers before the quiz ends.</li>
          <li>Find out how you did at the end of the quiz.</li>
        </ul>
      </ol>

      <form id='form'>
        <input
          ref={inputRef}
          className='userid'
          type='text'
          placeholder='Username*'
        />
      </form>

      <div className='start'>
        <Link className='btn' to={'quiz'} onClick={startQuiz}>
          Start Quiz
        </Link>
      </div>
    </div>
  );
};

export default Main;
