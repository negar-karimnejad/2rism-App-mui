import { Language } from "@mui/icons-material";
import { Box, Button, Container, Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import bgImg from "../assets/main/bg-image.svg";
import btnIcon from "../assets/search-nav/nav-btn-icon.svg";
import { searchNavItems } from "../data";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        background: `url(${bgImg}) center center/cover`,
        minHeight: "610px",
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        justifyContent: "space-between",
        pb: 6,
        pt: 1,
      }}
    >
      <Box>
        <Navbar />
      </Box>
      <Box>
        <Typography
          sx={{ fontSize: { xs: "1.3rem", sm: "2rem", md: "3rem" } }}
          pb={2}
          fontWeight={"bold"}
          variant="h3"
          color="#fff"
        >
          Discover the most engaging places
        </Typography>
        <Button variant="contained" color="secondary" sx={{ py: 1.5 }}>
          <Language />
          DISCOVER ON 3D GLOBE
        </Button>
      </Box>
      <Box>
        <List
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 0.5, md: 0 },
            width: { xs: "55%", md: "80%" },
            m: "auto",
            bgcolor: "background.paper",
            py: 1,
            px: 2,
            borderRadius: 2,
          }}
        >
          {searchNavItems.map((item) => (
            <ListItem key={item.id} sx={{ p: 0 }}>
              <ListItemAvatar sx={{ minWidth: "40px" }}>
                <img src={item.icon} alt="" />
              </ListItemAvatar>
              <ListItemText
                primary={item.normalText}
                secondary={item.boldText}
              />
            </ListItem>
          ))}
          <Button variant="contained" color="secondary">
            <img src={btnIcon} alt="" />
          </Button>
        </List>
      </Box>
    </Container>
  );
};

export default Header;
