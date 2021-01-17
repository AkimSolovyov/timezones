import React from 'react';

const Alert = props => {
  const { type } = props;

  const alertTypeClassName =
    type === 'success'
      ? ' alert-success'
      : type === 'warning'
      ? ' alert-warning'
      : ' alert-danger';

  return (
    <div
      className={`alert ${alertTypeClassName} col-lg-8 col-md-12 mx-auto`}
      role='alert'
    >
      {props.children}
    </div>
  );
};

export default Alert;
