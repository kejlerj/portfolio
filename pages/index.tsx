import * as React from "react";
import type { NextPage } from "next";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Lottie from "react-lottie";
import * as skills from "../data/lotties/developer-skills.json";
import * as rocket from "../data/lotties/rocket.json";
import Link from "../src/Link";
import ProTip from "../src/ProTip";
import Copyright from "../src/Copyright";
import { Grid, Tooltip } from "@mui/material";
import styles from "../styles/index.module.css";
import Image from "next/image";

const skillsOptions = {
  loop: true,
  autoplay: true,
  animationData: skills,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const rocketOptions = {
  loop: true,
  autoplay: true,
  animationData: rocket,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const fullstackIcons = [
  { path: "/svg/nodejs-icon.svg", tips: "Node.js" },
  { path: "/svg/nestjs-icon.svg", tips: "Nest.js" },
  { path: "/svg/reactjs-icon.svg", tips: "React.js" },
  { path: "/svg/nextjs-icon.svg", tips: "Next.js" },
  { path: "/svg/flutterio-icon.svg", tips: "Flutter" },
  { path: "/svg/typescriptlang-icon.svg", tips: "TypeScript" },
  { path: "/svg/graphql-icon.svg", tips: "GraphQL" },
  { path: "/svg/jest-icon.svg", tips: "Jest" },
];

const infraIcons = [
  { path: "/svg/gcp-icon.svg", tips: "GCP" },
  { path: "/svg/docker-icon.svg", tips: "Docker" },
  { path: "/svg/mongodb-icon.svg", tips: "MongoDB" },
  { path: "/svg/postgresql-icon.svg", tips: "PostgreSQL" },
  { path: "/svg/redis-icon.svg", tips: "Redis" },
  { path: "/svg/github-icon.svg", tips: "Github" },
  { path: "/svg/linux-icon.svg", tips: "Linux" },
];

const blockchainIcons = [
  { path: "/svg/ethereum-icon.svg", tips: "Ethereum" },
  { path: "/svg/solidity-icon.svg", tips: "Solidity" },
  { path: "/svg/metamask-icon.svg", tips: "Metamask" },
];

const Home: NextPage = () => {
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
        <Typography variant="h3" component="h1" fontWeight={600} gutterBottom>
          Jeremy Kejler
        </Typography>
        <Typography variant="h6" component="h2" fontWeight={600} gutterBottom>
          Fullstack Developer
        </Typography>
        <Grid container>
          <Grid item xs={6}>
            <Lottie options={skillsOptions} width={400} />
          </Grid>
          <Grid item xs={6} className={styles.textBlock}>
            <div className={styles.iconsRow}>
              {fullstackIcons.map((icon, i) => (
                <Tooltip title={icon.tips} key={i}>
                  <div className={styles.icon}>
                    <Image src={icon.path} width={30} height={30} />
                  </div>
                </Tooltip>
              ))}
            </div>
            <Typography variant="body1" component="text" gutterBottom>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem
              quod impedit hic corporis vero tenetur. Reprehenderit ipsa
              nesciunt neque sint sapiente, officia, necessitatibus temporibus
              officiis iste culpa dolorem minima dolores! Lorem, ipsum dolor sit
              amet consectetur adipisicing elit. Quidem quod impedit hic
              corporis vero tenetur. Reprehenderit ipsa nesciunt neque sint
              sapiente, officia, necessitatibus temporibus officiis iste culpa
              dolorem minima dolores!
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={6} className={styles.textBlock}>
            <div className={styles.iconsRow}>
              {infraIcons.map((icon, i) => (
                <Tooltip title={icon.tips} key={i}>
                  <div className={styles.icon}>
                    <Image src={icon.path} width={30} height={30} />
                  </div>
                </Tooltip>
              ))}
            </div>
            <Typography variant="body1" component="text" gutterBottom>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem
              quod impedit hic corporis vero tenetur. Reprehenderit ipsa
              nesciunt neque sint sapiente, officia, necessitatibus temporibus
              officiis iste culpa dolorem minima dolores! Lorem, ipsum dolor sit
              amet consectetur adipisicing elit. Quidem quod impedit hic
              corporis vero tenetur. Reprehenderit ipsa nesciunt neque sint
              sapiente, officia, necessitatibus temporibus officiis iste culpa
              dolorem minima dolores!
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Lottie options={rocketOptions} width={400} />
          </Grid>
        </Grid>
        {/* <Link href="/about" color="secondary">
          Go to the about page
        </Link> */}
        {/* <ProTip /> */}
        <Copyright />
      </Box>
    </Container>
  );
};

export default Home;
