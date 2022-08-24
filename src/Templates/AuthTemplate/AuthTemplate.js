import React from 'react';
import './AuthTemplate.scss';

export const AuthTemplate = ({ children }) => {
  return (
    <div className="auth-section">
      <div className="form-signup">{children}</div>
    </div>
  );
};
