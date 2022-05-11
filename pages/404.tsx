import * as React from "react";
import type { NextPage } from "next";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Lottie from "react-lottie";
import * as animationData from "../data/lotties/404-error-page.json";
import Link from "../src/Link";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const NotFound: NextPage = () => {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" component="h1" fontWeight={600} gutterBottom>
          Page introuvable
        </Typography>
        <Lottie options={defaultOptions} width={400} />
        <Link href="/about" color="secondary">
          Retour a l'accueil
        </Link>
      </Box>
    </Container>
  );
};

export default NotFound;
