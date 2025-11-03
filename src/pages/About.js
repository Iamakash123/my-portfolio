import React from "react";
import { Container, Typography, List, ListItem, ListItemText, Divider, Box } from "@mui/material";
import { motion } from "framer-motion";
import SchoolIcon from "@mui/icons-material/School";
import CodeIcon from "@mui/icons-material/Code";
import BuildIcon from "@mui/icons-material/Build";

function About() {
  return (
    <Container sx={{ mt: 6 }}>
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>About Me</Typography>
        <Typography sx={{ mb: 3, maxWidth: 700 }}>
          I’m a curious and adaptive learner who started in mechanical engineering and grew passionate about
          technology and software development. I love applying analytical and technical thinking to build
          intelligent systems, automation, and web applications.
        </Typography>

        <Divider sx={{ my: 2 }} />

        <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
          <SchoolIcon sx={{ mr: 1 }} />
          <Typography variant="h6">Education</Typography>
        </Box>
        <List>
          <ListItem>
            <ListItemText
              primary="B.Tech — Mechanical Engineering, NIT Delhi (2022–2026)"
              secondary="Minor in Artificial Intelligence & Machine Learning | CGPA: 7.08"
            />
          </ListItem>
        </List>

        <Divider sx={{ my: 2 }} />

        <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
          <CodeIcon sx={{ mr: 1 }} />
          <Typography variant="h6">Skills</Typography>
        </Box>
        <List dense>
          <ListItem><ListItemText primary="Languages: C++, Python, JavaScript" /></ListItem>
          <ListItem><ListItemText primary="Frontend: React.js, HTML, CSS, Material UI" /></ListItem>
          <ListItem><ListItemText primary="Backend: Node.js, Express, MongoDB" /></ListItem>
          <ListItem><ListItemText primary="AI/ML: TensorFlow, Scikit-learn, NLTK, Pandas" /></ListItem>
          <ListItem><ListItemText primary="Tools: Git, VSCode, Google Colab, Firebase" /></ListItem>
        </List>

        <Divider sx={{ my: 2 }} />

        <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
          <BuildIcon sx={{ mr: 1 }} />
          <Typography variant="h6">Experience</Typography>
        </Box>
        <List dense>
          <ListItem>
            <ListItemText
              primary="Assistant Engineer Intern — Bansal Engineers Pvt. Ltd. (May–June 2025)"
              secondary="Worked on mechanical testing, data collection, and process optimization."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Summer Intern — CollegeTips.in (June–July 2025)"
              secondary="Researched technical content and improved student outreach materials."
            />
          </ListItem>
        </List>
      </motion.div>
    </Container>
  );
}

export default About;
