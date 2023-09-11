import PropTypes from 'prop-types';
import { useState } from 'react';
import css from "./Form.module.css";

export const Form = ({ onSubmit }) => {
  const [text, setText] = useState('');

  const handleChange = event => {
    setText(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (!text.trim()) {
      alert("Please, enter text");
      return;
    }
    console.log(text);
    onSubmit(text);
    setText('');
  };

  return (
    <>
      <div className={css.form_container}>
        <form className={css.form} onSubmit={handleSubmit} >
          <button type="submit" className={css.button}>
            Search
          </button>

          <input
            value={text}            
            type="text"           
            placeholder="Search images and photos"
            onChange={handleChange}
            className={css.input}
          />
        </form>
      </div>
    </>
  );
};

Form.propTypes = {
  onChange: PropTypes.func,
};