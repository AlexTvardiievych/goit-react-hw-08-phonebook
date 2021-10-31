import { useDispatch, useSelector } from "react-redux";
import { authSelectors, authOperations } from "../../redux/auth";
import css from "./UserMenu.module.css";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function UserMenu() {
  const dispatch = useDispatch();

  const name = useSelector(authSelectors.getUsername);

  return (
    <div className={css.container}>
      <Typography variant="p" className={css.name} sx={{ m: "15px" }}>
        Hello, {name}
      </Typography>
      <Button
        type="button"
        sx={{
          backgroundColor: "#ffffff",
          "&:hover": {
            backgroundColor: "#f2f2f2",
          },
        }}
        onClick={() => dispatch(authOperations.logOut())}
      >
        Выйти
      </Button>
    </div>
  );
}
