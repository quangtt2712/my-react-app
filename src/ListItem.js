import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import React from "react";
import FormWeb from "./FormWeb";
import "./ListItem.css";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});
const ListItem = () => {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <FormWeb>
          {
            <div>
              <h1 className="title">Danh sách các nick Li Qi</h1>
              <p>DANH MỤC</p>
              <div className="title-description">NICK LIÊN QUÂN SALE</div>
              <div>
                <div>Lọc tìm kiếm</div>
                <input></input>
              </div>
            </div>
          }
        </FormWeb>
      </ThemeProvider>
    </>
  );
};
export default ListItem;
