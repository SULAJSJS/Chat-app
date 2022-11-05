import React, { useState, useRef, useEffect } from 'react';
import Avatar from './Avatar';
import SupportWindow from './SupportWindow';

const SupportEngine = () => {
  const [visible, setVisible] = useState(false);
  const supportRef = useRef(null);
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (supportRef.current && !event.composedPath().includes(supportRef.current)) {
        setVisible(false);
      }
    };

    document.body.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.body.removeEventListener('mousedown', handleOutsideClick);
      document.body.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [supportRef]);
  return (
    <div ref={supportRef}>
      <SupportWindow visible={visible} />
      <Avatar
        onClick={() => setVisible(true)}
        style={{ position: 'fixed', bottom: '24px', right: '24px' }}
      />
    </div>
  );
};

export default SupportEngine;
