import React from "react";
import { Box, Typography, IconButton, Stack } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

function Footer() {
  return (
    <Box
      sx={{
        mt: 6,
        py: 2,
        textAlign: "center",
        backgroundColor: (theme) =>
          theme.palette.mode === "light" ? "#f5f5f5" : "#1e1e1e",
        borderTop: "1px solid",
        borderColor: (theme) =>
          theme.palette.mode === "light" ? "#ddd" : "#333",
      }}
    >
      <Typography variant="body2" sx={{ mb: 1 }}>
        © {new Date().getFullYear()} Akash Kumar Gupta | Built with React & Material UI
      </Typography>

      <Stack direction="row" justifyContent="center" spacing={1}>
        <IconButton
          color="primary"
          href="https://github.com/Iamakash123"
          target="_blank"
          size="small"
        >
          <GitHubIcon fontSize="small" />
        </IconButton>
        <IconButton
          color="primary"
          href="https://www.linkedin.com/in/akash-kumar-gupta-ak7141/"
          target="_blank"
          size="small"
        >
          <LinkedInIcon fontSize="small" />
        </IconButton>
        <IconButton
          color="primary"
          href="mailto:lunaticakash7031@gmail.com"
          size="small"
        >
          <EmailIcon fontSize="small" />
        </IconButton>
      </Stack>
    </Box>
  );
}

export default Footer;
