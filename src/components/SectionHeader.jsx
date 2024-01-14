import { Typography } from "@mui/material";

// eslint-disable-next-line react/prop-types
const SectionHeader = ({ children }) => {
  return (
    <Typography variant="h5" fontWeight="bold" color="initial" marginBottom={2}>
      {children}
    </Typography>
  );
};

export default SectionHeader;
