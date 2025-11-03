import React from "react";
import {
  Container,
  Typography,
  Avatar,
  Box,
  Button,
  Stack,
  Chip,
  Divider,
} from "@mui/material";
import { motion } from "framer-motion";
import profile from "../assets/221310007_Akash_Kumar_Gupta.jpg";

const techStack = [
  "React",
  "Node.js",
  "Python",
  "TensorFlow",
  "MongoDB",
  "C++",
];

function Home() {
  return (
    <Container sx={{ mt: 6, textAlign: "center" }}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Avatar
          alt="Akash Kumar Gupta"
          src={profile}
          sx={{
            width: 150,
            height: 150,
            margin: "0 auto",
            mb: 2,
            boxShadow: 4,
          }}
        />

        <Typography variant="h4" fontWeight="bold">
          Akash Kumar Gupta
        </Typography>
        <Typography variant="subtitle1" sx={{ color: "text.secondary", mt: 1 }}>
          Aspiring Software Developer | Mechanical Engineering | AI/ML
          Enthusiast
        </Typography>

        <Stack
          direction="row"
          justifyContent="center"
          spacing={2}
          sx={{ mt: 3 }}
        >
          <Button
            variant="outlined"
            color="primary"
            href={`${process.env.PUBLIC_URL}/221310007_Akash_Kumar_Gupta_IT.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            download="Akash_Kumar_Gupta_IT_Resume.pdf"
          >
            Download Resume
          </Button>
        </Stack>

        <Typography variant="body1" sx={{ mt: 4, maxWidth: 700, mx: "auto" }}>
          I’m a final-year B.Tech Mechanical Engineering student at NIT Delhi
          with a minor in AI & ML. I build web applications, machine learning
          models, and automation tools that bridge engineering and technology.
          I’m passionate about developing solutions that make systems smarter
          and more efficient.
        </Typography>

        <Divider sx={{ my: 4 }} />

        <Typography variant="h6" fontWeight="bold" sx={{ mb: 1 }}>
          Tech Stack
        </Typography>
        <Stack direction="row" justifyContent="center" flexWrap="wrap" gap={1}>
          {techStack.map((tech, index) => (
            <Chip key={index} label={tech} color="primary" variant="outlined" />
          ))}
        </Stack>
      </motion.div>
    </Container>
  );
}

export default Home;
