import { useState } from 'react';
import {
  AppBar,
  Box,
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

import GridButton from './components/GridButton';

type TabsType = 'today' | 'yesterday' | 'archived';

const TABS: TabsType[] = ['today', 'yesterday', 'archived'];

function App() {
  const [tab, setTab] = useState<TabsType>('today');


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
        <Container sx={{ py: 2, flex: 1}}>
          <Typography variant="h4" sx = {{textAlign: 'center'}}>Hello</Typography>
          <Typography variant="body1" sx = {{textAlign: 'center'}}>Explanation stuff</Typography>
          <Stack alignItems='center'>
            <Stack direction='row' alignItems={'center'}>
              <Typography variant="body1" sx={{textAlign:'center', width:'200px'}}>A category</Typography>
              <Typography variant="body1" sx={{textAlign:'center', width:'200px'}}>Some other category</Typography>
              <Typography variant="body1" sx={{textAlign:'center', width:'200px'}}>Looooooooong looooooong multi-line category</Typography>
            </Stack>
            <Stack direction='row'>
              <Stack width='200px' alignItems='center'>
                <Typography height='200px' variant="body1" sx={{textAlign:'center', alignItems:'center', display:'flex'}}>Author</Typography>
                <Typography height='200px' variant="body1" sx={{textAlign:'center', alignItems:'center', display:'flex'}}>Some other author with a super-duper multi-line name</Typography>
                <Typography height='200px' variant="body1" sx={{textAlign:'center', alignItems:'center', display:'flex'}}>One more author</Typography>
              </Stack>
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
                {[...Array(9).keys()].map(entry => <GridButton key={entry}/>)}
              </Box>
              {/* Dummy box to take up space: */}
              <Box height='600px' width='200px'/> 
            </Stack>
          </Stack>
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
