import css from "../styles/HomeView.module.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const HomeView = () => (
  <Box className={css.container}>
    <Typography variant="h2" component="div" className={css.title}>
      Hello, this is Phonebook app
    </Typography>
  </Box>
);

export default HomeView;
