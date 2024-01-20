import { useState, useCallback } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@mui/material';

const GridButton = (i: number) => {
    const [open, setOpen] = useState(false);

    const handleOpen = useCallback(() => setOpen(true), []);
    
    const handleClose = useCallback(() => setOpen(false), []);

    return(
      <>
        <Button onClick={handleOpen} key={i}></Button>
        <Dialog
          open={open}
          onClose={handleClose}
          fullWidth
        >
          <DialogTitle>Enter your guess</DialogTitle>
          <DialogContent>
            <TextField
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button type="submit">Submit</Button>
          </DialogActions>
        </Dialog>
      </>
    );
}

export default GridButton;
