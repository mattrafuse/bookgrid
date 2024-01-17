import { useState } from 'react';
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Stack,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  alpha,
} from '@mui/material';

import Refresh from '@mui/icons-material/Refresh';
import { brown } from '@mui/material/colors';

type TabsType = 'today' | 'yesterday' | 'archived';

const TABS: TabsType[] = ['today', 'yesterday', 'archived'];

function App() {
  const [tab, setTab] = useState<TabsType>('today');

  const grid_boxes = [];
  for (let i = 0; i < 9; i++){
    grid_boxes.push(
        <Button key={i}></Button>
    );
  }

  return (
    <>
      <AppBar position="relative">
        <Toolbar
          sx={{
            backgroundColor: brown[700],
          }}
        >
          <Stack justifyContent="space-between" direction="row" width="100%">
            <Typography variant="h4">Book Grid</Typography>
            <Tabs
              value={tab}
              onChange={(_ev, value) => setTab(value)}
              sx={theme => ({
                '& button': {
                  color: alpha(theme.palette.common.white, 0.6),
                  textTransform: 'capitalize',
                  fontSize: '1.15rem',
                  '&.Mui-selected': {
                    color: theme.palette.common.white,
                  },
                },
                '& .MuiTabs-indicator': {
                  backgroundColor: theme.palette.common.white,
                },
              })}
            >
              {TABS.map(_tab => (
                <Tab value={_tab} label={_tab} />
              ))}
            </Tabs>
            <Box>
              <IconButton>
                <Refresh />
              </IconButton>
            </Box>
          </Stack>
        </Toolbar>
      </AppBar>
      <Container sx={{ py: 2, flex: 1 }}>
        <Typography variant="h4">Hello</Typography>
        <Typography variant="body1">Explanation stuff</Typography>
        <Box
          sx={theme => ({
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gridAutoRows: '1fr',
            width: '600px',
            height: '600px',
            border: '3px solid black',
            borderRadius: theme.shape.borderRadius,
            overflow: 'hidden',
            '& > button': {
              backgroundColor: 'grey',
              borderRadius: "0px",
              '&:not(:nth-child(3n))': {
                borderRight: 'thin solid black',
              },
              '&:nth-child(-n+6)': {
                borderBottom: 'thin solid black',
              },
            },
          })}
        >
          {grid_boxes}
        </Box>
      </Container>
      <footer>
        <Stack
          spacing={1}
          justifyContent="center"
          sx={{ textAlign: 'center', p: 1 }}
        >
          <Typography variant="caption" color="text.secondary">
            Created By: R.J. Arsenault, Alex Kerzner and Matthew Rafuse
          </Typography>
          <Typography variant="caption" color="text.secondary">
            Copyright 2024
          </Typography>
        </Stack>
      </footer>
    </>
  );
}

export default App;
