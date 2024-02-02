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
          index % 3 === 0 && {
            borderLeft: '3px solid black',
          },
          index % 3 === 2 && {
            borderRight: '3px solid black',
          },
          index < 3 && {
            borderTop: '3px solid black',
          },
          index > 5 && {
            borderBottom: '3px solid black',
          },
          index === 0 && {
            borderTopLeftRadius: theme.shape.borderRadius,
          },
          index === 2 && {
            borderTopRightRadius: theme.shape.borderRadius,
          },
          index === 6 && {
            borderBottomLeftRadius: theme.shape.borderRadius,
          },
          index === 8 && {
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
