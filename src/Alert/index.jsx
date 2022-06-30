import React, { useEffect } from "react";
import "./styles.css";

const Alert = ({ alert, removeAlert, todos }) => {
  const { type, msg } = alert;

  useEffect(() => {
    setTimeout(() => {
      removeAlert();
    }, 2000);
  }, [todos]);

  return <div className={`alert-${type}`}>{msg}</div>;
};

export default Alert;
