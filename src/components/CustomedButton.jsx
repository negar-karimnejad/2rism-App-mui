import { ArrowForward } from "@mui/icons-material";
import { Button } from "@mui/material";

// eslint-disable-next-line react/prop-types
function CustomedButton({ children }) {
  return (
    <Button
      variant="contained"
      color="inherit"
      textAlign={{ xs: "center", md: "left" }}
      sx={{ width: { xs: "100%", md: "initial" } }}
    >
      {children}
      <ArrowForward />
    </Button>
  );
}

export default CustomedButton;
