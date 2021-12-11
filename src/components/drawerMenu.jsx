import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
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
        sx={{ mr: 2, ...(open && { display: "none" }) }}
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
        <DrawerHeader sx={{ backgroundColor: "#fff45c" }}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List sx={{ backgroundColor: "#fff45c" }}>
          <ListItem button>
            <Link to={"/category/computers"}>
              <ListItemText className="drawermenu-link">Computers</ListItemText>
            </Link>
          </ListItem>
          <ListItem button>
            <Link to="/category/computercomponents">
              <ListItemText className="drawermenu-link">
                Computer Components
              </ListItemText>
            </Link>
          </ListItem>
          <ListItem button>
            <Link to="/category/officeelectronics">
              <ListItemText className="drawermenu-link">
                Office Electronics
              </ListItemText>
            </Link>
          </ListItem>
          <Divider />
          <ListItem button>
            <Link to="/category/tvvideo">
              <ListItemText className="drawermenu-link">
                TV & Video
              </ListItemText>
            </Link>
          </ListItem>
          <ListItem button>
            <Link to="/category/smartphones">
              <ListItemText className="drawermenu-link">
                Smart Phones
              </ListItemText>
            </Link>
          </ListItem>
          <Divider />
          <ListItem button>
            <Link to="/category/homeaudio">
              <ListItemText className="drawermenu-link">
                Home Audio
              </ListItemText>
            </Link>
          </ListItem>
          <ListItem button>
            <Link to="/category/headphones">
              <ListItemText className="drawermenu-link">
                Headphones
              </ListItemText>
            </Link>
          </ListItem>
          <Divider />
          <ListItem button>
            <Link to="/category/consoles">
              <ListItemText className="drawermenu-link">Consoles</ListItemText>
            </Link>
          </ListItem>
          <ListItem button>
            <Link to="/category/games">
              <ListItemText className="drawermenu-link">Games</ListItemText>
            </Link>
          </ListItem>
          <ListItem button>
            <Link to="/category/videogamesaccesories">
              <ListItemText className="drawermenu-link">
                Video Games Accessories
              </ListItemText>
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
