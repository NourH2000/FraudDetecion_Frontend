import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { styled, createStyles } from "@mui/material/styles";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import StorageRoundedIcon from "@mui/icons-material/StorageRounded";
import { Divider, Grid, Stack, Paper } from "@mui/material";
import { Box } from "@mui/system";
import MedicationIcon from "@mui/icons-material/Medication";
import BallotIcon from "@mui/icons-material/Ballot";

const Titre = styled(Typography)(({ theme }) => ({
  fontSize: 18,
}));

const Cards = ({ type }) => {
  const ItemStack = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "left",
    color: theme.palette.text.secondary,
    boxShadow: "none",
    paddingLeft: theme.spacing(3),
  }));

  const useStyles = makeStyles(() => ({
    wrapIcon: {
      alignItems: "center",
      display: "flex",
    },
  }));

  // id of training
  const location = useLocation();
  const idHistory = location.state.idHistory;

  // cards params and
  const [medicament, setMedicament] = useState();
  const [cas, setCas] = useState(0);

  useEffect(() => {
    axios
      .get(
        "http://localhost:8000/DetailsOfTrainingQ/CountMedicamentSuspected",
        {
          params: {
            idEntrainement: idHistory,
          },
        }
      )
      .then((response) => {
        // get the number of drugs  suspected
        setMedicament(response.data.length);
        // get the  total number of case  suspected
        const r = response.data;
        const sum = r.reduce((accumulator, object) => {
          return accumulator + parseInt(object.count);
        }, 0);
        setCas(sum);
      });
  }, []);

  // title of cards
  const title = (type) => {
    if (type === "Medicament") {
      return " Nombre of medication suspected";
    }
    if (type === "Cas") {
      return "Total of case suspected";
    }
  };

  // params of cards ( using the precedentes functions)
  const chiffre = (type) => {
    if (type === "Medicament") {
      return medicament;
    }
    if (type === "Cas") {
      return cas;
    }
  };

  // icons of cards
  const icon = (type) => {
    if (type === "Medicament") {
      return <MedicationIcon sx={{ fontSize: 40, color: "white" }} />;
    }
    if (type === "Cas") {
      return <BallotIcon sx={{ fontSize: 40, color: "white" }} />;
    }
  };

  return (
    <Card elevation={2} sx={{ height: "100%", backgroundColor: "#38598b" }}>
      <Grid container xs={12} sx={{ height: "100%" }}>
        <Grid item xs={9}>
          <Stack>
            <ItemStack elevation={0} sx={{ backgroundColor: "#38598b" }}>
              <Typography
                color="white"
                sx={{ fontWeight: "bold" }}
                variant="h5"
              >
                {chiffre(type)}
              </Typography>
            </ItemStack>
            <ItemStack elevation={0} sx={{ backgroundColor: "#38598b" }}>
              <Typography color="white" variant="h6">
                {title(type)}
              </Typography>
            </ItemStack>
          </Stack>
        </Grid>
        <Grid
          item
          xs={3}
          textAlign="centre"
          sx={{ backgroundColor: "#113f67", paddingTop: "5%" }}
        >
          {icon(type)}
        </Grid>
      </Grid>
    </Card>
  );
};

export default Cards;
