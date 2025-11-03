import React from "react";
import { Container, Typography, TextField, Button, Stack, IconButton } from "@mui/material";
import { motion } from "framer-motion";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

function Contact() {
  return (
    <Container sx={{ mt: 6, textAlign: "center", maxWidth: 600 }}>
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>Contact</Typography>
        <Typography sx={{ mb: 3 }}>
          Interested in working together or want to discuss an idea?  
          Feel free to drop a message or reach out via social platforms below.
        </Typography>

        <Stack spacing={2}>
          <TextField label="Your Name" fullWidth />
          <TextField label="Your Email" fullWidth />
          <TextField label="Message" fullWidth multiline rows={4} />
          <Button
            variant="contained"
            color="primary"
            href="mailto:lunaticakash7031@gmail.com"
            sx={{ width: "fit-content", mx: "auto", mt: 1 }}
          >
            Send Message
          </Button>
        </Stack>

        <Stack direction="row" justifyContent="center" spacing={2} sx={{ mt: 4 }}>
          <IconButton color="primary" href="https://github.com/Iamakash123" target="_blank"><GitHubIcon /></IconButton>
          <IconButton color="primary" href="https://www.linkedin.com/in/akash-kumar-gupta-ak7141/" target="_blank"><LinkedInIcon /></IconButton>
          <IconButton color="primary" href="mailto:lunaticakash7031@gmail.com"><EmailIcon /></IconButton>
        </Stack>
      </motion.div>
    </Container>
  );
}

export default Contact;
