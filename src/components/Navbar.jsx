import React from "react";
import { Stack, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants.js";
import Searchbar from "./Searchbar.jsx";

const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    p={2}
    sx={{
      position: "sticky",
      background: "#000",
      top: 0,
      justifyContent: "space-between",
    }}
  >
    <Link to='/' style={{display: 'flex', alignItems: 'center',}}>
      <img src={logo} alt="logo" height={45} />
    </Link>
    <Searchbar />
  </Stack>
);

export default Navbar;
