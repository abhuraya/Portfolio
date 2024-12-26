import Box from '@mui/material/Box';
import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid2';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : theme.palette.grey[50],
    ...theme.typography.body2,  
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
        backgroundColor: 'black',
        color: 'white',
    })
}));


export default function MainPage() {
    return (
        <div>
            <Typography>Header</Typography>
            <Box display="flex" sx={{ flexGrow: 1,  height: '100vh', flexDirection: 'column'}} justifyContent='space-evenly' border='1px dashed black'>
                <Box sx={{ flexGrow: 1, border: '1px dashed black', height: '10vh'}} >
                    <Grid container spacing={20}>
                        <Grid size={6} sx={{border: '1px dashed black', height: '7vh'}}>
                            <Item>size=8</Item>
                        </Grid>
                        <Grid size={6}>
                            <Item>size=4</Item>
                        </Grid>
                        <Grid size={6}>
                            <Item>size=4</Item>
                        </Grid>
                        <Grid size={6} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <Item sx={{height: '10vh', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '10vh'}}>size=8</Item>
                        </Grid>
                    </Grid>
                </Box>

                <Box sx={{ flexGrow: 1}}>
                    <Grid container spacing={2}>
                        <Grid size ={{ sx: 6, md: 8}}>
                            <Item>xs=6 md=8</Item>
                        </Grid>
                        <Grid size={{ xs: 6, md: 4}}>
                            <Item>xs=6 md=4</Item>
                        </Grid>
                        <Grid size={{ xs:6, md: 4}}>
                            <Item>xs=6 md=4</Item>
                        </Grid>
                        <Grid size={{xs: 6, md: 8}}>
                            <Item>xs=6 md=8</Item>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </div>
    )
}