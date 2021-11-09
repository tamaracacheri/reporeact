import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
          <MenuIcon/>
          </IconButton>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
            <ListItem button>
                <ListItemText>Computers</ListItemText>
            </ListItem>
            <ListItem button>
                <ListItemText>Computer Components</ListItemText>
            </ListItem>
            <ListItem button>
                <ListItemText>Office Electronics</ListItemText>
            </ListItem>
            <Divider/>
            <ListItem button>
                <ListItemText>TV & Video</ListItemText>
            </ListItem>
            <ListItem button>
                <ListItemText>Cell Phones</ListItemText>
            </ListItem>
            <Divider/>
            <ListItem button>
                <ListItemText>Home Audio</ListItemText>
            </ListItem>
            <ListItem button>
                <ListItemText>Headphones</ListItemText>
            </ListItem>
            <Divider/>
            <ListItem button>
                <ListItemText>Consoles</ListItemText>
            </ListItem>
            <ListItem button>
                <ListItemText>Games</ListItemText>
            </ListItem>
            <ListItem button>
                <ListItemText>Video Games Accessories</ListItemText>
            </ListItem>
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader/>
      </Main>
    </Box>
  );
}
