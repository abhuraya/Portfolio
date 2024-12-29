import Box from '@mui/material/Box';
import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid2';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import self from '../assets/RestaurantPicture.jpg';
import background from '../assets/SquareCity.jpg'

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
        <div style={{backgroundImage: `url(${background})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover'
        }}>
            <Box sx={{display: 'flex', justifyContent: 'space-evenly', margin: '10px'}}>
            <Box sx={{height: 200, width: 200, display: 'flex'}}>
                <img src={self} alt='a picture of a person with black hair' />;
            </Box>
            <Typography sx={{}} variant='h3'>Portfolio</Typography>
            </Box>
            <Grid container spacing={12} sx={{display: 'flex', justifyContent: 'space-between'}}>
                <Grid sx={{width: 300, height: 300}}>
                    <Box sx={{width: 300, height: 300, borderRadius: 1, bgcolor: 'teal', '&hover':{bgcolor: 'black'}}}></Box>
                </Grid>
                <Grid sx={{width: 300, height: 300}}>
                    <Box sx={{width: 300, height: 300, borderRadius: 1, bgcolor: 'yellow', '&hover':{bgcolor: 'maroon'}}}></Box>
                </Grid>
                <Grid sx={{width: 300, height: 300, borderRadius: 1, bgcolor: 'blue', '&hover': {bgcolor: 'magenta'}}}>
                </Grid>
                <Grid sx={{width: 300, height: 300}}>
                    <Box sx={{width : 300, height: 300, borderRadius: 1, bgcolor: 'blueviolet', '&hover':{bgcolor: 'gray'}}}></Box>
                </Grid>
                <Grid sx={{width: 300, height: 300}}>
                    <Box sx={{width: 300, height: 300, bgcolor: '#007FFF', '&hover':{bgcolor: '#0066CC'}}}></Box>   
                </Grid>
            </Grid>
        </div>
    )
}