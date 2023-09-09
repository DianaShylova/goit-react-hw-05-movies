import PropTypes from 'prop-types';
import { useState } from 'react';


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
    onSubmit(text);
    setText('');
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <button type="submit" className="button">
            Search
          </button>

          <input
            value={text}            
            type="text"           
            placeholder="Search images and photos"
            onChange={handleChange}
          />
        </form>
      </div>
    </>
  );
};

Form.propTypes = {
  onChange: PropTypes.func,
};