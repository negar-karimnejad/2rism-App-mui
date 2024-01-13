import {
  ArrowForward,
  CalendarToday,
  Comment,
  Person,
} from "@mui/icons-material";
import { Box, Button, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import { travelItems } from "../data";
import SectionHeader from "./SectionHeader";

const Advice = () => {
  return (
    <>
      <Box
        display={"flex"}
        alignItems={"center"}
        sx={{
          flexDirection: { xs: "column", md: "row" },
          justifyContent: { xs: "start", md: "space-between" },
        }}
        marginY={5}
      >
        <SectionHeader>Travel Tips and Advice</SectionHeader>
        <Button
          variant="contained"
          color="inherit"
          sx={{ fontSize: "0.7rem", width: { xs: "50%",md:"8rem" } }}
        >
          View all
          <ArrowForward fontSize="1rem" />
        </Button>
      </Box>
      <Grid
        container
        rowSpacing={5}
        columnSpacing={1}
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: { xs: "center", md: "space-between" },
          alignItems: "center",
        }}
      >
        {travelItems.map((item) => (
          <Grid
            key={item.id}
            item
            sx={{
              display: "flex",
              justifyContent: "center",
              width: { xs: "270px", md: "550px" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                justifyContent: "center",
                width: { xs: "270px", md: "700px" },
                gap: { xs: 0, md: 2 },
              }}
            >
              <img height="300" src={item.image} alt="green iguana" />
              <Box>
                <Typography
                  gutterBottom
                  fontWeight={"bold"}
                  fontSize={"1.1rem"}
                  component="div"
                  marginTop={2}
                >
                  {item.location}
                </Typography>
                <Box
                  display="flex"
                  justifyContent={"space-between"}
                  marginTop={1}
                >
                  <Typography variant="body2" color="text.secondary">
                    {item.text}
                  </Typography>
                </Box>
                <Box
                  width={"90%"}
                  display="flex"
                  justifyContent={"space-between"}
                  sx={{
                    marginTop: { xs: 3, md: 10 },
                  }}
                >
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    display="flex"
                    gap={0.5}
                    alignItems={"center"}
                  >
                    <CalendarToday fontSize="" />
                    {item.calendarText}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    display="flex"
                    gap={0.5}
                    alignItems={"center"}
                  >
                    <Person fontSize="" />
                    {item.userText}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    display="flex"
                    gap={0.5}
                    alignItems={"center"}
                  >
                    <Comment fontSize="" />
                    {item.commentsText}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Advice;
