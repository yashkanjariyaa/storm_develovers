import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { darkGreentheme } from '../themes/darkGreen';

export default function StickyFooter() {

  const Copyright=()=> {
    return (
      <Typography variant="body2" color="text.secondary">
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

  return (
      <>
          <ThemeProvider theme={darkGreentheme}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              minHeight: '100vh',
              
            }}
          >
            <CssBaseline />
            <Box
              component="footer"
              sx={{
                py: 3,
                px: 2,
                mt: 'auto',
                /*backgroundColor: (theme) =>
                  theme.palette.mode === 'light'
                    ? theme.palette.grey[200]
                    : theme.palette.grey[800],*/
              }}
            >
              <Container maxWidth="sm">
                <Typography variant="body1">
                  My sticky footer can be found here.
                </Typography>
                <Copyright />
              </Container>
            </Box>
          </Box>
        </ThemeProvider>
      </>
  );
}
