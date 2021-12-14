import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import { Link } from "react-router-dom";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
}));

export default function PersistentDrawerLeft(products) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={handleDrawerOpen}
        edge="start"
        sx={{ color: "#000", mr: 2, ...(open && { display: "none" }) }}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <List>
          <ListItem button>
            <Link to={"/category/computers"}>
              <li className="drawermenu-link">Computers</li>
            </Link>
          </ListItem>
          <ListItem button>
            <Link to="/category/computercomponents">
              <li className="drawermenu-link">Computer Components</li>
            </Link>
          </ListItem>
          <ListItem button>
            <Link to="/category/officeelectronics">
              <li className="drawermenu-link">Office Electronics</li>
            </Link>
          </ListItem>
          <ListItem button>
            <Link to="/category/tvvideo">
              <li className="drawermenu-link">TV & Video</li>
            </Link>
          </ListItem>
          <ListItem button>
            <Link to="/category/smartphones">
              <li className="drawermenu-link">Smart Phones</li>
            </Link>
          </ListItem>
          <ListItem button>
            <Link to="/category/homeaudio">
              <li className="drawermenu-link">Home Audio</li>
            </Link>
          </ListItem>
          <ListItem button>
            <Link to="/category/headphones">
              <li className="drawermenu-link">Headphones</li>
            </Link>
          </ListItem>
          <ListItem button>
            <Link to="/category/consoles">
              <li className="drawermenu-link">Consoles</li>
            </Link>
          </ListItem>
          <ListItem button>
            <Link to="/category/games">
              <li className="drawermenu-link">Games</li>
            </Link>
          </ListItem>
          <ListItem button>
            <Link to="/category/videogamesaccesories">
              <li className="drawermenu-link">Video Games Accessories</li>
            </Link>
          </ListItem>
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
      </Main>
    </Box>
  );
}
