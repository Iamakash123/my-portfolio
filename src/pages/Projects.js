import React from "react";
import { Container, Typography, Grid, Card, CardContent, Chip, Box, Link } from "@mui/material";
import { motion } from "framer-motion";
import CodeIcon from "@mui/icons-material/Code";

const projects = [
  {
    title: "AcadBud — Academic Productivity Manager (MERN)",
    description: "Full-stack app for managing tasks, deadlines, and notes using React, Node, and MongoDB.",
    tech: ["React", "Node", "MongoDB"],
    link: "https://github.com/Iamakash123/Acad_Bud",
  },
  {
    title: "Market Mood — Stock Sentiment Analyzer (NLP)",
    description: "NLP model trained on financial news headlines to predict market sentiment using TensorFlow and NLTK.",
    tech: ["Python", "TensorFlow", "NLTK"],
    link: "https://github.com/Iamakash123/Market-Mood",
  },
  {
    title: "Movie Recommender System (SVD)",
    description: "Collaborative filtering recommender system using MovieLens dataset and Scikit-learn.",
    tech: ["Python", "Pandas", "Scikit-learn"],
    link: "https://github.com/Iamakash123/Movie-Recommender",
  },
  {
    title: "Automated Vegetable Transplanter (Mechatronics)",
    description: "Arduino-based system automating sapling transplantation using servo mechanisms.",
    tech: ["Arduino", "Sensors"],
    link: "",
  },
];

function Projects() {
  return (
    <Container sx={{ mt: 6 }}>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>Projects</Typography>
        <Grid container spacing={3}>
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Card sx={{ height: "100%", boxShadow: 4, "&:hover": { boxShadow: 8, transform: "scale(1.02)" }, transition: "0.3s" }}>
                <CardContent>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                    <CodeIcon sx={{ mr: 1, color: "primary.main" }} />
                    <Typography variant="h6">{project.title}</Typography>
                  </Box>
                  <Typography sx={{ mb: 2 }}>{project.description}</Typography>
                  <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mb: 1 }}>
                    {project.tech.map((tech, i) => (
                      <Chip key={i} label={tech} size="small" color="primary" variant="outlined" />
                    ))}
                  </Box>
                  {project.link ? (
                    <Link href={project.link} target="_blank" rel="noopener" underline="hover" sx={{ fontWeight: "bold" }}>
                      View on GitHub
                    </Link>
                  ) : (
                    <Typography color="text.secondary" variant="body2">No repository link available</Typography>
                  )}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Container>
  );
}

export default Projects;
