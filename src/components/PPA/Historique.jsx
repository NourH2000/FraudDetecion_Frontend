import React from 'react'
import { styled } from '@mui/material/styles';
import { Box, Button, Card, CardActions, CardContent, Grid, Paper, Stack, Typography } from '@mui/material'
import TablePPAHistorique from './TablePPAHistorique';
import FormPPA from './FormPPA';


const Historique = () => {

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
    
    color: theme.palette.text.secondary,
    
    
  }));

  return (
    <Box sx={{ width: '100%'  }}>
        <Typography variant="h6">
            Overview
        </Typography>
        <Stack spacing={1} >
            <ItemStack elevation={0} >
                <Grid container spacing={2}>
                    <Grid item  xs={4}>
                        <ItemGrid>// un espace pour les cartes</ItemGrid>
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
                <Grid container spacing={2} >
                    <Grid  spacing={0} item xs={9} >
                        <ItemGrid  ><TablePPAHistorique xs={12} md={12}/></ItemGrid>
                    </Grid>
                    <Grid item xs={3} >
                        <ItemGrid elevation={3} >
                        <Typography variant="h6" mb={4} > The next  </Typography>
                          <FormPPA/>
                        </ItemGrid>
                        
                    </Grid>
            
                    
                </Grid>
            </ItemStack>
            
        
        </Stack>
    </Box>
  )
}

export default Historique