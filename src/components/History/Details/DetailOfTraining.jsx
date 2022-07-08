import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import StorageRoundedIcon from "@mui/icons-material/StorageRounded";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import Cards from "./CardsDetails";

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
  const ItemStack = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    boxShadow: "none",
  }));

  const fraud = "fraud";
  const normal = "normal";

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
          <Grid container spacing={1} xs={12} gap={1}>
            <Grid item xs={8} sx={{ backgroundColor: "green" }}>
              <Stack spacing={1}>
                <ItemStack sx={{ backgroundColor: "red" }}>
                  <Grid container spacing={1}>
                    <Grid item xs={6} sx={{ backgroundColor: "yellow" }}>
                      <Cards type={fraud} />
                    </Grid>
                    <Grid item xs={6} sx={{ backgroundColor: "yellow" }}>
                      <Cards type={normal} />
                    </Grid>
                  </Grid>
                </ItemStack>
                <ItemStack sx={{ backgroundColor: "red" }}>
                  {" "}
                  <DataGridTraining />
                </ItemStack>
              </Stack>
            </Grid>
            <Grid item xs={3} sx={{ backgroundColor: "red" }}>
              <Stack spacing={1} sx={{ height: "100%" }}>
                <ItemStack elevation={0} sx={{ height: "50%" }}>
                  {" "}
                  am the first{" "}
                </ItemStack>
                <ItemStack elevation={0} sx={{ height: "50%" }}>
                  {" "}
                  am the second
                </ItemStack>
              </Stack>
            </Grid>
          </Grid>
        </ItemStack>
        <ItemStack>
          <Grid container spacing={1} xs={12} gap={1}>
            <Grid item xs={3} sx={{ backgroundColor: "green" }}>
              item 01
            </Grid>
            <Grid item xs={8} sx={{ backgroundColor: "green" }}>
              item 02
            </Grid>
          </Grid>
        </ItemStack>
      </Stack>
    </Box>
  );
};

export default DetailOfTraining;
