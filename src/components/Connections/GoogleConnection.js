import React from 'react';
import googleIcon from '../../assets/img/google.png';

function GoogleConnection(props) {
  return (
    <button
      onClick={() => {
        document.body.style.backgroundColor = 'green';
        alert('Fake connection with Google button');
      }}
      className="btn btn-ouline btn-pill"
      type="button"
      id="connectWithGoogleButton"
    >
      <img src={googleIcon} alt="google-icon" />
      {`${props.action} avec google`}
    </button>
  );
}

export default GoogleConnection;
