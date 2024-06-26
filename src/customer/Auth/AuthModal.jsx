import React from 'react'
import { Modal, Box } from '@mui/material';
import RegisterForm from './RegisterForm';
import { useLocation } from 'react-router-dom';
import LoginForm from './LoginForm';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  outline: "none",
  boxShadow: 24,
  p: 4,
};


const AuthModal = ({handleClose, open}) => {

  const location = useLocation();

  const handleLoginSuccess = () => {
    handleClose(); // Close the modal after successful login
  };


  return (
    <div>
      <Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
<Box sx={style}>
        {location.pathname === '/login' ? (
          <LoginForm onCloseModal={handleLoginSuccess} /> // Pass handleLoginSuccess as prop
        ) : (
          <RegisterForm />
        )}
      </Box>
    </Modal>
    </div>
  )
}

export default AuthModal
