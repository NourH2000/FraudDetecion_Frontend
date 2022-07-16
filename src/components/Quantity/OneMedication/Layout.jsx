import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";

import { useLocation } from "react-router-dom";

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
import OneMedicationdataGrid from "./Datagrid";
import OneMedicationAssureDatagrid from "./AssureDatagrid";
import OneMedicationArea from "./Area";

const OneMedicationLayout = () => {
  // recupérer l'id de historique
  const location = useLocation();
  const idHistory = location.state.idHistory;

  const ItemStack = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),

    color: theme.palette.text.secondary,
  }));

  const ItemGrid = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),

    color: theme.palette.text.secondary,
  }));

  return (
    <Stack spacing={1} sx={{ width: "100%" }}>
      <ItemStack elevation={0} sx={{ backgroundColor: "transparent" }}>
        <Grid
          container
          md={12}
          sm={12}
          xs={12}
          gap={0}
          padding={0}
          justifyContent="space-between"
        >
          <Grid item xs={4}>
            Card 01
          </Grid>
          <Grid item xs={4}>
            Card 02
          </Grid>
          <Grid item xs={4}>
            Card 03
          </Grid>
        </Grid>
      </ItemStack>

      <ItemStack sx={{ backgroundColor: "transparent", boxShadow: "none" }}>
        <Grid container spacing={2}>
          <Grid
            item
            spacing={0}
            xs={12}
            sx={{ backgroundColor: "transparent" }}
          >
            <ItemGrid xs={9} sx={{ padding: "3%" }}>
              <OneMedicationdataGrid xs={12} md={12} />
            </ItemGrid>
          </Grid>
        </Grid>
      </ItemStack>

      <ItemStack elevation={0} sx={{ backgroundColor: "transparent" }}>
        <Grid container xs={12} gap={0} justifyContent="space-between">
          <Grid item xs={4} sx={{ backgroundColor: "transparent" }}>
            <ItemGrid xs={9} sx={{ padding: "3%" }}>
              <OneMedicationAssureDatagrid />
            </ItemGrid>
          </Grid>
          <Grid item xs={7.5} sx={{ backgroundColor: "transparent" }}>
            <ItemGrid sx={{ padding: "3%" }}>
              <OneMedicationArea />
            </ItemGrid>
          </Grid>
        </Grid>
      </ItemStack>
    </Stack>
  );
};

export default OneMedicationLayout;
