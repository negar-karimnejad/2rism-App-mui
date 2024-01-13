import { ArrowForward, LocationOn } from "@mui/icons-material";
import { Box, Button, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import { hotelsRestaurants } from "../data";
import SectionHeader from "./SectionHeader";

const Hotels = () => {
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
        <SectionHeader>Hotels and Restaurants</SectionHeader>
        <Button
          variant="contained"
          color="inherit"
          sx={{ fontSize: "0.7rem", width: { xs: "50%", md: "8rem" } }}
        >
          View all
          <ArrowForward fontSize="1rem" />
        </Button>
      </Box>
      <Grid
        container
        spacing={2}
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: { xs: "center", md: "start" },
          alignItems: "center",
        }}
      >
        {hotelsRestaurants.map((item) => (
          <Grid
            key={item.id}
            item
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: { xs: "400px", md: "290px" },
            }}
            height={400}
          >
            <img height="300" src={item.image} alt="green iguana" />
            <Typography
              gutterBottom
              variant="p"
              fontWeight={"bold"}
              component="div"
            >
              {item.name}
            </Typography>
            <Box display="flex" justifyContent={"space-between"} marginTop={2}>
              <Typography variant="body2" color="text.secondary">
                <LocationOn fontSize="" sx={{ p: 0, m: 0 }} />
                {item.location}
              </Typography>
              <img src={item.ratingImage} alt="" />
            </Box>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Hotels;
