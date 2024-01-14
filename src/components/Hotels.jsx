import { LocationOn } from "@mui/icons-material";
import { Box, Container, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import { hotelsRestaurants } from "../data";
import CustomedButton from "./CustomedButton";
import SectionHeader from "./SectionHeader";

const Hotels = () => {
  return (
    <Container>
      <Box
        display={"flex"}
        alignItems={"center"}
        sx={{
          flexDirection: { xs: "column", md: "row" },
          justifyContent: { xs: "start", md: "space-between" },
        }}
        marginTop={10}
        marginBottom={4}
      >
        <SectionHeader>Hotels and Restaurants</SectionHeader>
        <CustomedButton>View all</CustomedButton>
      </Box>
      <Grid
        container
        columnSpacing={1}
        rowSpacing={7}
        justifyContent={{ xs: "center", md: "start" }}
      >
        {hotelsRestaurants.map((item) => (
          <Grid key={item.id} item>
            <img width="280" src={item.image} alt={item.name} />
            <Typography
              gutterBottom
              variant="p"
              fontWeight={"bold"}
              fontSize={"1.1rem"}
              component="div"
            >
              {item.name}
            </Typography>
            <Box display="flex" justifyContent={"space-between"} marginTop={2}>
              <Typography variant="p" color="text.secondary">
                <LocationOn fontSize="" sx={{ p: 0, m: 0 }} />
                {item.location}
              </Typography>
              <img src={item.ratingImage} alt="" />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Hotels;
