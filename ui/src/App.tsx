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

const AUTHORS = [
  'Author',
  'Some other author with a super-duper multi-line name',
  'One more author',
];

const CATEGORIES = [
  'A category',
  'Some other category',
  'Looooooooong looooooong multi-line category',
];

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
      <Container sx={{ py: 2, flex: 1 }}>
        <Box
          sx={{
            display: 'grid',
            // We can use a larger CSS grid to better position elements
            // https://css-tricks.com/snippets/css/complete-guide-grid/
            gridTemplateColumns: '1fr repeat(5, 200px) 1fr',
          }}
        >
          <Stack sx={{ gridColumn: '2 / span 5' }} alignItems="center">
            <Typography variant="h4" sx={{ textAlign: 'center' }}>
              Hello
            </Typography>
            <Typography variant="body1" sx={{ textAlign: 'center' }}>
              Explanation stuff
            </Typography>
          </Stack>

          {/* Instead of hardcoding the titles, we can reuse */}
          {CATEGORIES.map((category, index) => (
            <Box
              sx={{
                textAlign: 'center',
                gridColumn: 3 + index,
                display: 'flex',
                alignItems: 'end',
                justifyContent: 'center',
                p: 1,
              }}
            >
              <Typography key={category} variant="body1">
                {category}
              </Typography>
            </Box>
          ))}
          {AUTHORS.map(author => (
            <Box
              sx={{
                textAlign: 'center',
                gridColumn: '2',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                p: 1,
              }}
            >
              <Typography key={author} variant="body1">
                {author}
              </Typography>
            </Box>
          ))}

          {/* The actual buttons */}
          {[...Array(9).keys()].map(entry => (
            <GridButton key={entry} index={entry} />
          ))}
        </Box>
      </Container>
      <footer>
        <Stack
          spacing={1}
          justifyContent="center"
          sx={{ textAlign: 'center', p: 1 }}
        >
          <Typography variant="caption" color="text.secondary">
            {/* fite me rj */}
            Created By: Alex Kerzner and Matthew Rafuse
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
