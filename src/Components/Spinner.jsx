// Spinner.jsx
import React from 'react';
import loading from './loading.gif'; // Adjust path if necessary

const Spinner = () => {
  return (
    <div className="text-center">
      <img src={loading} alt="loading" />
    </div>
  );
};

export default Spinner;
