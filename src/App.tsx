import {
  AppBar,
  Button,
  ButtonGroup,
  Grid,
  IconButton,
  TextField,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { MuiThemeProvider } from '@material-ui/core/styles';
import React from 'react';
import './App.css';
import { theme } from './theme/theme';
import MenuIcon from '@material-ui/icons/Menu';

function App() {
  return (
    <React.Fragment>
      <MuiThemeProvider theme={theme}>
        <AppBar>
          <Toolbar>
            <IconButton>
              <MenuIcon className='whiteIcon' />
            </IconButton>
            <Typography variant='h6'>Hello</Typography>
          </Toolbar>
        </AppBar>
        {/* <MatDrawer open={open} onOpen={openDrawer} /> */}
        <Grid className='my-grid' container spacing={2}>
          <Grid md={6} item>
            <TextField variant='outlined' label='Hello'></TextField>
          </Grid>
          <Grid md={6} item>
            <ButtonGroup>
              <Button variant='contained' color='primary'>
                Hello
              </Button>
              <Button variant='contained' color='primary'>
                Hello
              </Button>
            </ButtonGroup>
          </Grid>
        </Grid>
      </MuiThemeProvider>
    </React.Fragment>
  );
}

export default App;
