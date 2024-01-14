import {
  ArrowForward,
  EmailOutlined,
  FacebookRounded,
  Instagram,
  Twitter,
} from "@mui/icons-material";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Paper from "@mui/material/Paper";
import footerLogo from "../assets/footer/logo.svg";
import { footerNav } from "../data";

const Footer = () => {
  const content = footerNav.map((item) => (
    <Box key={item.id}>
      <Typography marginBottom={2} fontWeight={"bold"} variant="h6">
        {item.title}
      </Typography>
      <Stack spacing={1.5}>
        {item.links.map((link, index) => (
          <Typography Typography key={index}>
            {link}
          </Typography>
        ))}
      </Stack>
    </Box>
  ));

  return (
    <Box sx={{ bgcolor: "#efefef" }} marginTop={10} paddingY={10}>
      <Container maxWidth="lg">
        <Box
          display="flex"
          flexDirection={{ xs: "column", lg: "row" }}
          gap={5}
          alignItems="center"
          justifyContent="space-between"
        >
          <Box
            display={"flex"}
            alignItems={{ xs: "center", lg: "start" }}
            textAlign={{ xs: "center", lg: "left" }}
            flexDirection={"column"}
            gap={2}
          >
            <img width={100} src={footerLogo} alt="Footer Logo" />
            <Typography
              variant="p"
              color="initial"
              width={{ xs: "100%", lg: 300 }}
              fontSize={"1.1rem"}
            >
              We always make our customers happy by providing as many choises as
              posibile.
            </Typography>
            <Box display={"flex"} gap={2}>
              <FacebookRounded color="secondary" O />
              <Twitter color="secondary" />
              <Instagram color="secondary" />
            </Box>
          </Box>
          <Box
            display="flex"
            direction="row"
            gap={{ xs: 5, sm: 12, lg: 7 }}
            alignItems={{ xs: "center", lg: "start" }}
            justifyContent={{ xs: "center", lg: "start" }}
          >
            {content}
          </Box>
          <Box
            display="flex"
            flexDirection={"column"}
            alignItems={{ xs: "center", lg: "start" }}
            justifyContent={{ xs: "center", lg: "start" }}
            textAlign={{ xs: "center", lg: "left" }}
          >
            <Typography
              width={{ sm: 500, lg: 300 }}
              variant="p"
              fontWeight={"bold"}
              fontSize={"1.1rem"}
              color="initial"
              marginBottom={2}
            >
              Subscribe on our destination review newsletters.
            </Typography>
            <Box
              display={"flex"}
              flexDirection={{ xs: "column", lg: "row" }}
              gap={1}
            >
              <Paper
                component="form"
                sx={{
                  p: "2px 4px",
                  display: "flex",
                  alignItems: "center",
                  width: 220,
                }}
              >
                <IconButton
                  color="warning"
                  sx={{ p: "10px" }}
                  aria-label="menu"
                >
                  <EmailOutlined />
                </IconButton>
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Your Email"
                  inputProps={{ "aria-label": "search google maps" }}
                />
              </Paper>
              <Button variant="contained" color="secondary">
                <ArrowForward />
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
