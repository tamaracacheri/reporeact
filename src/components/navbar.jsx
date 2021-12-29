import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import SearchIcon from "@mui/icons-material/Search";
import DrawerMenu from "./DrawerMenu";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import SearchInput from "./SearchInput";
import { Button, Collapse, SvgIcon } from "@mui/material";

export default function NavBar() {
  const [searchBar, setSearchBar] = React.useState(false);

  function HomeIcon(props) {
    return (
      <div className="homeIcon">
        <SvgIcon {...props}>
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </SvgIcon>
      </div>
    );
  }

  return (
    <Box>
      <AppBar
        sx={{
          background: "rgb(25, 0, 35)",
          color: "#ffffff",
        }}
        position="static"
      >
        <Toolbar
          sx={{
            color: "#ffffff",
          }}
        >
          <DrawerMenu />
          <Box sx={{ display: "flex", alignItems: "center", flexGrow: 5 }}>
            <Link className="navbar-title" to="/">
              <HomeIcon />
            </Link>
          </Box>
          <Box>
            <Collapse in={searchBar}>
              <SearchInput />
            </Collapse>
          </Box>
          <Box>
            <Button>
              <SearchIcon
                className="searchIcon"
                onClick={() => {
                  setSearchBar(!searchBar);
                }}
              />
            </Button>
          </Box>
          <CartWidget />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
