import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import StorageRoundedIcon from "@mui/icons-material/StorageRounded";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import Cards from "./CardsDetails";
import { useLocation } from "react-router-dom";
import DonutChart from "./DonutChart";

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
import DataGridTraining from "./DataGridTraining";

const DetailOfTraining = () => {
  // recupérer l'id de historique
  const location = useLocation();
  const idHistory = location.state.idHistory;

  const ItemStack = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),

    color: theme.palette.text.secondary,
  }));

  const CountMedicament = "Medicament";
  const CasPerMedicament = "Cas";
  const Assuré = "Assuré";

  const ItemGrid = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),

    color: theme.palette.text.secondary,
  }));

  return (
    <>
      <Stack spacing={1} sx={{ width: "100%" }}>
        <ItemStack elevation={0} sx={{ backgroundColor: "transparent" }}>
          <Grid container xs={12} gap={0} justifyContent="space-between">
            <Grid item xs={7.5}>
              <Stack spacing={1}>
                <ItemStack
                  sx={{
                    boxShadow: "none",
                    textAlign: "center",
                    backgroundColor: "transparent",
                  }}
                >
                  <Grid container spacing={3}>
                    <Grid item xs={6}>
                      <Cards type={CountMedicament} />
                    </Grid>
                    <Grid item xs={6}>
                      <Cards type={CasPerMedicament} />
                    </Grid>
                  </Grid>
                </ItemStack>
                <ItemStack>
                  {" "}
                  <DataGridTraining />
                </ItemStack>
              </Stack>
            </Grid>
            <Grid item xs={4}>
              <Stack spacing={1} sx={{ height: "100%" }}>
                <ItemStack
                  sx={{
                    height: "80%",
                    alignItems: "center",
                  }}
                >
                  <DonutChart />
                </ItemStack>
              </Stack>
            </Grid>
          </Grid>
        </ItemStack>
        <ItemStack>
          <Grid container spacing={1} xs={12} gap={1}>
            <Grid item xs={3}>
              item 01
            </Grid>
            <Grid item xs={8}>
              item 02
            </Grid>
          </Grid>
        </ItemStack>
      </Stack>
    </>
  );
};

export default DetailOfTraining;
