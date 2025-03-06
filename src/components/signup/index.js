"use client"
import { Box, Button, Container, FormControl, Grid, InputAdornment, InputLabel, MenuItem, OutlinedInput, Select, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';

const SignUp = () => {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const currencies = [
        {
            value: 'USD',
            label: 'India',
        },
        {
            value: 'EUR',
            label: 'United States',
        },
        {
            value: 'BTC',
            label: 'Japan',
        },
        {
            value: 'JPY',
            label: 'China',
        },
    ];
    return (
        <>
            <Box sx={{ margin: '2rem 0', }}>
                <Container >
                    <Grid container sx={{ padding: '1rem', borderRadius: '10px', boxShadow: "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px; " }}>
                        <Grid item xs={12} sm={6} sx={{ background: 'url("/signup3.png")', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', display: 'flex' }}>
                            <Box sx={{ color: '#fff', paddingTop: { xs: '3rem', }, padding: { xs: '1rem', sm: '3rem' } }}>
                                <Typography sx={{ fontWeight: '600' }} variant='h4'>Welcome</Typography>
                                <Typography sx={{ fontWeight: '600', color: '#FFD500' }} variant='h4'>To Your Travel Gateway!</Typography>
                                <Typography sx={{ padding: '4rem 0', textAlign: 'justify' }}>  <span style={{ fontWeight: 700 }}>Sign Up </span>to access your personalized travel plans, manage bookings, and discover new adventures. </Typography>
                                <Box sx={{ padding: '1rem', backgroundColor: '#0000008C', borderRadius: '20px', boxShadow: ' rgba(0, 0, 0, 0.35) 0px 5px 15px;' }}>
                                    <Typography sx={{ color: '#63DDFF', fontWeight: '600', padding: '1rem 0' }} variant='h6'> Festival Offers</Typography>
                                    <Typography sx={{ padding: '1rem 0', textAlign: 'justify' }}> Special packages and discounts during major festivals and holidays. </Typography>
                                    <Box sx={{ justifyContent: 'end', color: '#63DDFF', display: 'flex' }}>
                                        < ArrowForwardIosIcon />
                                    </Box>
                                </Box>
                                <Box sx={{ textAlign: 'center', margin: '2rem 0', padding: ' 3rem 1rem 1rem 1rem  ' }}>
                                    <Typography sx={{ fontWeight: '600', fontSize: { xs: '1.2rem' } }} variant='h6'>  Already have an account? <a style={{ color: '#63DDFF', }} href='#'>Log In</a> </Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Box sx={{ padding: '1rem' }} >
                                <Box sx={{ padding: '1rem 1rem', display: 'flex', justifyContent: "space-between" }}>
                                    <Typography sx={{ fontWeight: 600 }} variant='h5'> Sign Up</Typography>
                                    <Box sx={{ color: '#E07323', }}>
                                        < CancelRoundedIcon fontSize='large' />
                                    </Box>
                                </Box>
                                <Box>
                                    <Box sx={{ padding: { xs: '0rem  ', sm: '1rem 0' }, display: 'flex', alignItems: 'center', '& > :not(style)': { m: 1 }, }}>
                                        <TextField fullWidth id="demo-helper-text-aligned" label="First Name" />
                                        <TextField fullWidth label="Last Name   " />
                                    </Box>
                                    <Box sx={{ padding: { xs: '0rem  ', sm: '1rem 0' }, display: 'flex', alignItems: 'center', '& > :not(style)': { m: 1 }, }}>
                                        <TextField fullWidth id="demo-helper-text-aligned" label="Email Address" />
                                    </Box>
                                    <Box sx={{ padding: { xs: '0rem  ', sm: '1rem 0' }, display: 'flex', alignItems: 'center', '& > :not(style)': { m: 1 }, }}>
                                        <TextField fullWidth id="demo-helper-text-aligned" label="Phone Number" />

                                    </Box>
                                    <Box sx={{ padding: { xs: '0rem  ', sm: '1rem 0' }, display: 'flex', alignItems: 'center', '& > :not(style)': { m: 1 } }}>
                                        <FormControl fullWidth sx={{ m: 2, borderRadius: "5px" }}>
                                            <InputLabel id="gender-label">Gender</InputLabel>
                                            <Select
                                                labelId="gender-label"
                                                id="gender"
                                                label="Gender"
                                                defaultValue=""
                                            >
                                                <MenuItem value="Male">Male</MenuItem>
                                                <MenuItem value="Female">Female</MenuItem>
                                                <MenuItem value="Other">Other</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Box>
                                    <Box sx={{ padding: { xs: '0rem  ', sm: '1rem 0' }, display: 'flex', alignItems: 'center', '& > :not(style)': { m: 1 }, }}>
                                        <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
                                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                            <OutlinedInput
                                                id="outlined-adornment-password"
                                                type={showPassword ? 'text' : 'password'}
                                                endAdornment={
                                                    <InputAdornment position="end">
                                                        <IconButton
                                                            aria-label="toggle password visibility"
                                                            onClick={handleClickShowPassword}
                                                            onMouseDown={handleMouseDownPassword}
                                                            edge="end"
                                                        >
                                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                                        </IconButton>
                                                    </InputAdornment>
                                                }
                                                label="Password"
                                            />
                                        </FormControl>
                                    </Box>
                                </Box>
                                {/* <Box sx={{ marginTop: '1.5rem' }}>
                                    <Box component="form"
                                        sx={{
                                            '& .MuiTextField-root': { m: 1, },
                                        }}
                                        noValidate
                                        autoComplete="off">
                                        <TextField fullWidth
                                            id="outlined-select-currency"
                                            select
                                            label="Select"
                                            defaultValue="India"
                                        >
                                            {currencies.map((option) => (
                                                <MenuItem key={option.value} value={option.value}>
                                                    {option.label}
                                                </MenuItem>
                                            ))}
                                        </TextField>
                                    </Box>
                                </Box> */}
                                <Box sx={{ padding: '1rem 1rem', justifyContent: 'center', display: 'flex' }}>
                                    <Stack spacing={2} direction="row">
                                        <Button sx={{ fontWeight: '600', borderRadius: '5px', color: "#fff", padding: '0.5rem 2rem', backgroundColor: "#006FFF", '&:hover': { backgroundColor: '#e3711a' } }} >Sign In</Button>
                                    </Stack>
                                </Box>

                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box >
        </>
    )
}
export default SignUp
