import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import StorageRoundedIcon from "@mui/icons-material/StorageRounded";
import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import Barchart from "./Barchart";
import { getFetcher, postFetcher } from "../../helpers/index";
const Overview = () => {
  const [state, setState] = useState();

  //use case example
  useEffect(() => {
    getFetcher("https://jsonplaceholder.typicode.com/todos/1").then((res) => {
      setState(res);
    });
    postFetcher("https://jsonplaceholder.typicode.com/posts", {
      userId: 5555,
      id: 1,
      title:
        "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    }).then((res) => console.log(res));
  }, []);
  //checking what's in the state
  console.log(state);
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
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  /*  const GridCards = styled(Paper)(({ theme }) => ({
        boxShadow :"none",
        display : 'none',
        [theme.breakpoints.up('sm')]:{
            display: 'flex',
          }
      }));*/

  return (
    <Box sx={{ width: "100%" }}>
      <Typography variant="h6">Overview</Typography>
      <Stack spacing={1}>
        <ItemStack elevation={0}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <ItemGrid>
                <Cards />
              </ItemGrid>
            </Grid>
            <Grid item xs={4}>
              <ItemGrid>
                <Cards />
              </ItemGrid>
            </Grid>
            <Grid item xs={4}>
              <ItemGrid>
                <Cards />
              </ItemGrid>
            </Grid>
          </Grid>
        </ItemStack>
        <ItemStack>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <ItemGrid elevation={3}>
                <Barchart />
              </ItemGrid>
            </Grid>
          </Grid>
        </ItemStack>
      </Stack>
    </Box>
  );
};

export default Overview;
