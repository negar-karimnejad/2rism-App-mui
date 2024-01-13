import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import * as React from "react";
import aboutUsImg from "../assets/main/about-us-img.svg";
import logo from "../assets/main/logo.svg";
import { navItems } from "../data";

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="sticky" sx={{ bgcolor: "transparent" }}>
      <Container maxWidth="lg">
        <Toolbar>
          <img alt="Logo" src={logo} />
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "end",
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {navItems.map((item) => (
                <MenuItem key={item.id} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{item.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
            }}
          >
            {navItems.map((item) => (
              <Button
                key={item.id}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "gray",
                  display: "block",
                  "&:hover": {
                    color: "#fff",
                  },
                }}
              >
                {item.name}
              </Button>
            ))}
          </Box>

          <Box
            sx={{ flexGrow: 0, display: { xs: "none", md: "flex" }, gap: 1 }}
          >
            <Box
              sx={{
                flexDirection: "column",
                alignItems: "start",
                fontSize: "12px",
                display: { xs: "none", lg: "flex" },
              }}
            >
              <Typography variant="p" color="gray">
                Hello
              </Typography>
              <Typography variant="p" color="">
                Ales Nesetril
              </Typography>
            </Box>
            <Tooltip>
              <Avatar alt="Remy Sharp" src={aboutUsImg} />
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
