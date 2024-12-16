import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
} from '@mui/material';

function App() {
  // State to control the dialog
  const [open, setOpen] = useState(false);

  // Open the dialog on initial render
  useEffect(() => {
    setOpen(true);
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="App">
      {/* Dialog Component */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Welcome to My Custom Popup</DialogTitle>
        <DialogContent>
          <DialogContentText>
            This is a popup dialog from KB Prasac. You can customize it as per your requirements.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>

     
    </div>
  );
}

export default App;
