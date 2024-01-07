import { useState } from 'react';
import { AppBar, Container, Toolbar, Typography } from '@mui/material';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h4">Book Grid</Typography>
        </Toolbar>
      </AppBar>
      <Container sx={{ py: 2, flex: 1 }}>
        <Typography variant="h4">Hello</Typography>
      </Container>
    </>
  );
}

export default App;
