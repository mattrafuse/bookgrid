import { useState, useCallback, FC } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  useTheme,
} from '@mui/material';

const GridButton: FC<{ index: number }> = ({ index }) => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleOpen = useCallback(() => setOpen(true), []);

  const handleClose = useCallback(() => setOpen(false), []);

  return (
    <>
      <Button
        onClick={handleOpen}
        sx={[
          {
            gridColumn: 3 + (index % 3),
            gridRow: 3 + Math.floor(index / 3),
            height: '200px',
            backgroundColor: 'grey',
            borderRadius: '0px',
            border: 'thin solid black',
          },
          // apply styling specific to border squares
          index % 3 === 0 && {
            // left side
            borderLeft: '3px solid black',
          },
          index % 3 === 2 && {
            // right side
            borderRight: '3px solid black',
          },
          index < 3 && {
            // top side
            borderTop: '3px solid black',
          },
          index > 5 && {
            // bottom side
            borderBottom: '3px solid black',
          },
          index === 0 && {
            // top left suqare
            borderTopLeftRadius: theme.shape.borderRadius,
          },
          index === 2 && {
            // top right suqare
            borderTopRightRadius: theme.shape.borderRadius,
          },
          index === 6 && {
            // bottom left square
            borderBottomLeftRadius: theme.shape.borderRadius,
          },
          index === 8 && {
            // bottom right square
            borderBottomRightRadius: theme.shape.borderRadius,
          },
        ]}
      />
      <Dialog open={open} onClose={handleClose} fullWidth>
        <DialogTitle>Enter your guess</DialogTitle>
        <DialogContent>
          <TextField fullWidth />
        </DialogContent>
        <DialogActions>
          <Button type="submit">Submit</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default GridButton;
