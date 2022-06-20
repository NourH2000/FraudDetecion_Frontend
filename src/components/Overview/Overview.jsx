import { Button, Card, CardActions, CardContent, Grid, Paper, Stack, Typography } from '@mui/material'
import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';
import StorageRoundedIcon from '@mui/icons-material/StorageRounded';import React from 'react'
import Cards from './Cards';
import Barchart from './Barchart';
const Overview = () => {


    const ItemStack = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        boxShadow :"none"
      }));

      const ItemGrid = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
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
    <Box sx={{ width: '100%' }}>
        <Typography variant="h6">
            Overview
        </Typography>
        <Stack spacing={1}>
            <ItemStack elevation={0}>
                <Grid container spacing={2}>
                    <Grid item  xs={4}>
                        <ItemGrid><Cards/></ItemGrid>
                    </Grid>
                    <Grid item xs={4}>
                        <ItemGrid><Cards/></ItemGrid>
                    </Grid>
                    <Grid item xs={4}>
                        <ItemGrid><Cards/></ItemGrid>
                    </Grid>

                </Grid>
            </ItemStack>
            <ItemStack>
                <Grid container spacing={2} >
                    <Grid item xs={12}>
                        <ItemGrid elevation={3} ><Barchart/></ItemGrid>
                    </Grid>
            
                    
                </Grid>
            </ItemStack>
            
        
        </Stack>
    </Box>
  )
}

export default Overview