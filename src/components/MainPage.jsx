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
import background from '../assets/Mandelbrot.jpg'

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
            <Typography sx={{color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center'}} variant='h3'>Portfolio</Typography>
            </Box>
            <Grid container spacing={12} sx={{display: 'flex', justifyContent: 'space-between'}}>
                <Grid sx={{width: 300, height: 300}}>
                    <Box sx={{width: 300, height: 300, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                        <Button class="btn btn-lg btn-outline-light" href='https://flagquizlet.netlify.app/'>Flag Quiz</Button>
                    </Box>
                    <Box sx={{display: 'flex', justifyContent: 'space-around'}}>
                        <Button class="btn btn-primary" href='https://github.com/abhuraya/Flag_Quiz'>Github Repository</Button>
                    </Box>
                </Grid>
                <Grid sx={{width: 300, height: 300}}>
                    <Box sx={{width: 300, height: 300, display: 'flex', flexDirection: 'column',justifyContent: 'center', alignItems: 'center'}}>
                        <Button class="btn btn-lg btn-outline-light" href='https://frutisfruits.netlify.app/'>Fruits</Button>
                    </Box>
                    <Box sx={{display: 'flex', justifyContent: 'space-around'}}>
                        <Button class='btn btn-primary' href='https://github.com/abhuraya/Fruits'>GitHub Repository</Button>
                    </Box>
                </Grid>
                <Grid sx={{width: 300, height: 300}}>
                    <Box sx={{width: 300, height: 300, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                        <Button class='btn btn-lg btn-outline-light' href='https://bostondumplings.com/'>Boston Dumplings</Button>
                    </Box>
                    <Box>
                        <Button class='btn btn-primary' href='https://github.com/abhuraya/Boston_Dumplings'>GitHub Repository</Button>
                    </Box>
                </Grid>
                <Grid sx={{width: 300, height: 300}}>
                    <Box sx={{width : 300, height: 300, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                        <Button class="btn btn-lg btn-outline-light" href='https://abhuraya.github.io/Calculator/'>Calculator</Button>
                    </Box>
                    <Box>
                        <Button class='btn btn-primary' href='https://github.com/abhuraya/Calculator'>GitHub Repository</Button>
                    </Box>
                </Grid>
                <Grid sx={{width: 300, height: 300}}>
                    <Box sx={{width: 300, height: 300, borderRadius: 1, bgcolor: 'yellow'}}></Box>
                </Grid>
                <Grid sx={{width: 300, height: 300}}>
                    <Box sx={{width: 300, height: 300, bgcolor: '#007FFF', '&hover':{bgcolor: '#0066CC'}}}></Box>   
                </Grid>
            </Grid>
        </div>
    )
}