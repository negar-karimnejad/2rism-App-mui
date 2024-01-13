import { Grid, Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import { destinations } from "../data";
import SectionHeader from "./SectionHeader";

const Destinations = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: { xs: "center", md: "start" },
      }}
      marginTop={5}
    >
      <SectionHeader>Popular Destinations</SectionHeader>
      <Grid
        container
        spacing={3}
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: { xs: "center", md: "start" },
          alignItems: "center",
        }}
      >
        {destinations.map((item) => (
          <Grid key={item.id} item>
            <Box sx={{ width: { xs: 400, md: 210 } }}>
              <img width="100%" src={item.image} alt={item.name} />
            </Box>
            <Typography gutterBottom variant="h5" component="div">
              {item.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item.location}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Destinations;
