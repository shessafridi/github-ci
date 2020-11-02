import { Drawer, IconButton, useTheme } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import React from 'react';
import { useStyles } from './drawerStyles';

export interface MatDrawerProps {
  open: boolean;
  onOpen: () => void;
}

const MatDrawer: React.FC<MatDrawerProps> = ({ open, onOpen }) => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <Drawer
      className={classes.drawer}
      variant='persistent'
      anchor='left'
      open={open}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.drawerHeader}>
        <IconButton onClick={onOpen}>
          {theme.direction === 'ltr' ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
      </div>
    </Drawer>
  );
};

export default MatDrawer;
