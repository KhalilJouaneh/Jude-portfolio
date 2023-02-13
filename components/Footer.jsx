import React from "react";
import { CssBaseline, Typography, Container } from "@mui/material";

export const Footer = () => {
  return (
    <React.Fragment>
      <CssBaseline>
        <Container maxwidth="xl">
          <footer
            style={{
              padding: "15px",
              display: "flex",
              alignItems: "center",
              marginTop: "auto",
            }}
          >
            <Typography sx={{ fontWeight: "bold" }}>
              © 2022 Jude Samman. All rights reserved.
            </Typography>
            <Typography
              sx={{ marginLeft: "auto", mr: "15px", fontWeight: "bold" }}
            >
              <a
                href="https://www.instagram.com/judesamman/?igshid=YmMyMTA2M2Y%3D"
                rel="noreferrer"
                target="_blank"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Instagram &nbsp;&nbsp;&nbsp;&nbsp;
              </a>
              <a
                href="mailto:18kmj3@queensu.ca"
                type="email"
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Email
              </a>
            </Typography>
          </footer>
        </Container>
      </CssBaseline>
    </React.Fragment>
  );
};

export default Footer;
