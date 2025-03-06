"use client"
import React, { useState } from 'react';
import { Container, Grid, TextField, Select, MenuItem, FormControl, InputLabel, Checkbox, FormControlLabel, Button, Typography, Box } from '@mui/material';

const comparisonData = {
    Premium: {
        vehicles: ["Bolero", "Innova"],
        food: ["Premium"],
        hotels: ["Simple", "Medium", "Full Details"],
        trekLeaderStay: ["Included"],
        camping: ["Included"]
    },
    Deluxe: {
        vehicles: ["Simple"],
        food: ["Medium"],
        hotels: ["Full Details"],
        trekLeaderStay: ["Not Included"],
        camping: ["Not Included"]
    }
};

const CustomizedTripForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        budget: '',
        tripDuration: '',
        city: '',
        travelingFrom: '',
        preferredMonth: '',
        numParticipants: '',
        budgetForTrip: '',
        countryCode: '',
        number: '',
        email: '',
        selectedOption: 'Premium'
    });

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
       
        console.log(formData);
    };

    return (
        <Container>
            <Typography variant="h4" gutterBottom>Customized Trip Form</Typography>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="First Name"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="Last Name"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="Budget"
                            name="budget"
                            value={formData.budget}
                            onChange={handleChange}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="Trip Duration"
                            name="tripDuration"
                            value={formData.tripDuration}
                            onChange={handleChange}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="City"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="Traveling From"
                            name="travelingFrom"
                            value={formData.travelingFrom}
                            onChange={handleChange}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormControl fullWidth>
                            <InputLabel>Preferred Month</InputLabel>
                            <Select
                                name="preferredMonth"
                                value={formData.preferredMonth}
                                onChange={handleChange}
                            >
                                <MenuItem value="January">January</MenuItem>
                                <MenuItem value="February">February</MenuItem>
                                <MenuItem value="February">March</MenuItem>
                                <MenuItem value="February">April</MenuItem>
                                <MenuItem value="February">May</MenuItem>
                                <MenuItem value="February">June</MenuItem>
                                <MenuItem value="February">July</MenuItem>
                                <MenuItem value="February">August</MenuItem>
                                <MenuItem value="February">September</MenuItem>
                                <MenuItem value="February">October</MenuItem>
                                <MenuItem value="February">November</MenuItem>
                                <MenuItem value="February">December</MenuItem>
                             
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="Number of Participants"
                            name="numParticipants"
                            value={formData.numParticipants}
                            onChange={handleChange}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="Budget for Entire Trip"
                            name="budgetForTrip"
                            value={formData.budgetForTrip}
                            onChange={handleChange}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="Country Code"
                            name="countryCode"
                            value={formData.countryCode}
                            onChange={handleChange}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="Number"
                            name="number"
                            value={formData.number}
                            onChange={handleChange}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="Email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button type="submit" variant="contained" color="primary">Submit</Button>
                    </Grid>
                </Grid>
            </form>

            {/* <Typography variant="h5" gutterBottom>Comparison Table</Typography> */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                {/* <Box sx={{ width: '48%' }}>
                    <Typography variant="h6">Premium</Typography>
                    <ul>
                        {comparisonData.Premium.vehicles.map((item, index) => (
                            <li key={index}>
                                <FormControlLabel
                                    control={<Checkbox checked />}
                                    label={item}
                                />
                            </li>
                        ))}
                   
                    </ul>
                </Box> */}
                {/* <Box sx={{ width: '48%' }}>
                    <Typography variant="h6">Deluxe</Typography>
                    <ul>
                        {comparisonData.Deluxe.vehicles.map((item, index) => (
                            <li key={index}>
                                <FormControlLabel
                                    control={<Checkbox />}
                                    label={item}
                                />
                            </li>
                        ))}
                    
                    </ul>
                </Box> */}
            </Box>
        </Container>
    );
};

export default CustomizedTripForm;
