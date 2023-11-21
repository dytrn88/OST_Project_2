import React, { useEffect, useState } from "react";
import { ToastStatus } from "../../types/status";
import "./Toast.css";

interface Props {
  message?: string;
  duration?: number;
  status: ToastStatus;
  show: boolean;
}

const Toast: React.FC<Props> = ({
  message,
  duration = 3000,
  status = "success",
  show = false,
}) => {
  const [visible, setVisible] = useState(show);

  useEffect(() => {
    setVisible(true);
    const timer = setTimeout(() => setVisible(false), duration);
    return () => clearTimeout(timer);
  }, [show, duration]);

  if (!visible) return null;

  return (
    <div className={`toast-container toast-${status}`}>
      <div className={`toast-message toast-${status}`}>{message}</div>
    </div>
  );
};

export default Toast;
