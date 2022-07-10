import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import { makeStyles } from "@mui/styles";
import { styled, createStyles } from "@mui/material/styles";
import { useLocation } from "react-router-dom";
import axios from "axios";

import {
  Box,
  Button,
  Divider,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { textAlign } from "@mui/system";

const DonutChart = () => {
  // style the item stack
  const ItemStack = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),

    color: theme.palette.text.secondary,
  }));

  // get the data ( count grouped by medication )

  const location = useLocation();

  //data

  const [tableData, setTableData] = useState([]);

  // Id of training :
  const idHistory = location.state.idHistory;

  // initial values
  const [medication, setMedication] = useState([]);
  const [count, setCount] = useState([]);

  useEffect(() => {
    // get the medication suspected with count
    const medicationName = [];
    const medicationCount = [];
    let other = 0;

    axios
      .get("http://localhost:8000/DetailsOfTraining/CountMedicamentSuspected", {
        params: {
          idEntrainement: idHistory,
        },
      })
      .then((response) => {
        // order the data from the most suspected to the less
        const medication_rate = response.data;
        const MostSuspectedToLess = [...medication_rate].sort(
          (a, b) => b.count - a.count
        );

        // map the result ( get the three most suspected )

        for (let i = 0; i < 3; i++) {
          medicationName.push("Med: " + MostSuspectedToLess[i].num_enr),
            medicationCount.push(parseInt(MostSuspectedToLess[i].count));
        }

        // sum the rest of the values
        for (let i = 3; i < MostSuspectedToLess.length; i++) {
          other = other + parseInt(MostSuspectedToLess[i].count);
        }

        medicationName.push("Others");
        medicationCount.push(parseInt(other));

        // set the series and labels state
        setMedication(medicationName);
        setCount(medicationCount);
      });
  }, []);

  /*const [option, setoption] = useState({
    labels: medication,
    colors: ["#38598b", "#ffc55c", "#e95d35", "#ffffc3"],
    dataLabels: {
      enabled: false,
    },
    noData: {
      text: "Empty data",
    },
    plotOptions: {
      pie: {
        expandOnclick: true,
        donut: {
          size: "55px",
          labels: {
            show: true,
            total: {
              show: false,
            },
          },
        },
      },
    },

    legend: {
      position: "top",
      height: 100,
      fontSize: 15,
      onItemClick: {
        toggleDataSeries: true,
      },
      onItemHover: {
        highlightDataSeries: true,
      },
    },

    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
        },
      },
    ],
  });
  */

  return (
    <Stack
      direction="column"
      alignItems="stretch"
      spacing={0}
      sx={{ height: "100%", width: "100%" }}
    >
      <ItemStack elevation={0}>
        <Typography
          color="black"
          sx={{ fontWeight: "bold", marginBottom: "5%", marginTop: "5%" }}
          variant="h6"
          gutterBottom
        >
          The most suspected medication
        </Typography>
        <Divider />
      </ItemStack>
      <ItemStack elevation={0} sx={{ textAlign: "center", height: "180%" }}>
        <Chart
          options={{
            labels: medication,
            colors: ["#38598b", "#ffc55c", "#e95d35", "#f8da5b"],
            dataLabels: {
              enabled: false,
            },
            noData: {
              text: "Empty data",
            },
            plotOptions: {
              pie: {
                expandOnclick: false,
                donut: {
                  size: "55px",
                  labels: {
                    show: true,
                    total: {
                      show: false,
                    },
                  },
                },
              },
            },

            legend: {
              position: "top",
              height: 100,
              fontSize: 15,
              onItemClick: {
                toggleDataSeries: true,
              },
              onItemHover: {
                highlightDataSeries: true,
              },
            },

            responsive: [
              {
                breakpoint: 480,
                options: {
                  chart: {
                    width: 200,
                  },
                },
              },
            ],
          }}
          series={count}
          type="donut"
          height="100%"
          width="100%"
        />
      </ItemStack>
    </Stack>
  );
};

export default DonutChart;
