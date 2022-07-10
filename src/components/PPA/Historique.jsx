import React from "react";
import { styled } from "@mui/material/styles";
import Datagrid from "../History/Datagrid";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import Form from "./Form";

const Historique = () => {
  const ItemStack = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    boxShadow: "none",
  }));

  const ItemGrid = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),

    color: theme.palette.text.secondary,
  }));

  return (
    <Box sx={{ width: "100%" }}>
      <Typography variant="h6">Overview</Typography>
      <Stack spacing={1}>
        <ItemStack elevation={0}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <ItemGrid></ItemGrid>
            </Grid>
            <Grid item xs={4}>
              <ItemGrid>// un espace pour les cartes</ItemGrid>
            </Grid>
            <Grid item xs={4}>
              <ItemGrid>// un espace pour les cartes</ItemGrid>
            </Grid>
          </Grid>
        </ItemStack>
        <ItemStack>
          <Grid container spacing={2} sx={{}}>
            <Grid spacing={0} item xs={9}>
              <ItemGrid sx={{ padding: "3%", height: 800 }}>
                <Datagrid xs={12} md={12} />
              </ItemGrid>
            </Grid>
            <Grid item xs={3}>
              <ItemGrid elevation={3}>
                <Form />
              </ItemGrid>
            </Grid>
          </Grid>
        </ItemStack>
      </Stack>
    </Box>
  );
};

export default Historique;
