import PropTypes from "prop-types";
import { useState } from "react";
import { useDispatch } from "react-redux";
import * as operations from "../../redux/contacts/contacts-operations";
import { Button, TextField } from "@mui/material";
import css from "./ContactForm.module.css";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const dispatch = useDispatch();
  const formSubmitHandler = (value) => dispatch(operations.addContacts(value));

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    formSubmitHandler({ name, number });

    reset();
  };

  const reset = () => {
    setName("");
    setNumber("");
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <TextField
        className={css.input}
        required
        id="standard-required"
        variant="standard"
        label="Name"
        type="text"
        name="name"
        value={name}
        onChange={handleChange}
        margin="normal"
      />

      <TextField
        className={css.input}
        required
        id="outlined-basic"
        variant="outlined"
        label="Number"
        type="text"
        name="number"
        value={number}
        onChange={handleChange}
        margin="normal"
      />

      <Button type="submit" variant="contained">
        Add contact
      </Button>
    </form>
  );
}

ContactForm.propTypes = {
  formSubmitHandler: PropTypes.func,
};
