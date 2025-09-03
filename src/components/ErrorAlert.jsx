import { Alert, Box } from "@mui/material";

const ErrorAlert = ({ message }) => (
  <Box display="flex" justifyContent="center" mt={4}>
    <Alert severity="error">{message}</Alert>
  </Box>
);

export default ErrorAlert;
