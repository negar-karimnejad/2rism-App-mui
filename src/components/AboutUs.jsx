import { Box, Container, Typography } from "@mui/material";
import AboutUsImg from "../assets/main/about-us-img.svg";
import CustomedButton from "./CustomedButton";

const AboutUs = () => {
  return (
    <Container>
      <Box
        display={"flex"}
        flexDirection={{ xs: "column", md: "row" }}
        marginTop={10}
        gap={5}
        alignItems={"center"}
      >
        <Box>
          <Typography variant="h6" fontWeight={"bold"} color="initial">
            About Us
          </Typography>
          <Box maxWidth="sm" marginY={2}>
            <Typography variant="p" color="initial">
              Omnis unde esse facere praesentium, quaerat maiores, mollitia
              illum quos libero doloribus a fugiat, voluptatem sint quibusdam.
              assumenda dolores! Corporis Expedita qui molestiae tempora
              voluptatem, unde dolores maxime quibusdam? Facere quod, excepturi
              expedita voluptas. Amet sapiente, saepe eius accusamus quibusdam
              mollitia.
            </Typography>
          </Box>
          <CustomedButton>Read more</CustomedButton>
        </Box>
        <Box
          width={{ xs: 320, sm: 500, md: "initial" }}
          height={{ xs: 320, sm: 500, md: "initial" }}
          display="flex"
          alignItems={"center"}
          justifyContent={"center"}
          borderRadius={"20px"}
          overflow={"hidden"}
        >
          <img src={AboutUsImg} alt="About Us Image" />
        </Box>
      </Box>
    </Container>
  );
};

export default AboutUs;
