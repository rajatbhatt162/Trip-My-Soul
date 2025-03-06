
import React from 'react';
import { Box, Typography, Checkbox, FormControlLabel, Grid, Container, TextField, Stack, Button } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';

const categories = [
    {
        name: 'Transport',
        leftOptions: ['Innova Crysta - Mineral water bottle, Chips, Cookies'],
        rightOptions: ['Bolero or equivalent']
    },
    {
        name: 'Hotel Accommodation',
        leftOptions: ['Best available in that place'],
        rightOptions: ['Standard Room - No meals included']
    },
    {
        name: 'Man Power',
        leftOptions: [
            'Standard Room - No meals included',
            'Standard Room - No meals included'
        ],
        rightOptions: [
            'Standard Room - No meals included',
            'Standard Room - No meals included'
        ]
    },
    {
        name: 'Camping',
        leftOptions: ['Trekker Tents (Kailas, North face or equivalent)'],
        rightOptions: ['Trekker Tents (TMS manufacture)']
    },
    {
        name: 'Water while trekking',
        leftOptions: ['Mineral water bottle'],
        rightOptions: ['Creek Water']
    },
    {
        name: 'Food',
        leftOptions: ['North Indian, Chinese, Continental'],
        rightOptions: ['Rice - Parmal, Sharbati or equivalent']
    },
    {
        name: 'Food items',
        leftOptions: ['Jam – Kissan'],
        rightOptions: ['Pickle - Tops/Mother’s/Nilon’s/Priya']
    },
];

const UpgradeTrekDetails = () => {
    return (
        <Box sx={{ margin: '1.5rem 0' }}>
            <Container maxWidth="xl">
                <Grid container>
                    <Grid item xs={12} sm={3} sx={{ border: '1px solid grey' }}>
                        <Box>
                            <Typography sx={{ padding: '1rem', fontWeight: 600, color: '#0095F6' }} variant='h6'>
                                Select the Type of Service Required (Click the box to choose)
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={5} sx={{ border: '1px solid grey' }}>
                        <Box>
                            <Typography sx={{ fontWeight: '700', padding: { xs: '0.5rem', sm: '2rem 2rem' } }} variant='h4'>
                                &#x1F451; Premium
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4} sx={{ border: '1px solid grey' }}>
                        <Box>
                            <Typography sx={{ fontWeight: '700', textAlign: { xs: 'start', sm: 'center' }, padding: { xs: '0.5rem', sm: '2rem 2rem' } }} variant='h4'>
                                &#x1F91D; Deluxe
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
                {categories.map((category, index) => (
                    <Grid container key={category.name}> {/* Using category.name as a unique key */}
                        <Grid item xs={12} sm={3} sx={{ border: '1px solid grey' }}>
                            <Box>
                                <Typography sx={{ alignItems: 'center', padding: '1rem' }}>
                                    {category.name}
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={5} sx={{ border: '1px solid grey' }}>
                            <Box>
                                {category.leftOptions.map((option, idx) => (
                                    <Typography key={idx} sx={{ padding: '1rem' }}>
                                        <FormControlLabel control={<Checkbox />} label={option} />
                                    </Typography>
                                ))}
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={4} sx={{ border: '1px solid grey' }}>
                            <Box>
                                {category.rightOptions.map((option, idx) => (
                                    <Typography key={idx} sx={{ padding: '1rem' }}>
                                        <FormControlLabel control={<Checkbox />} label={option} />
                                    </Typography>
                                ))}
                            </Box>
                        </Grid>
                    </Grid>
                ))}

                <Box sx={{ margin: '2rem 0' }}>
                    <Grid container sx={{ justifyContent: 'space-between', display: 'flex' }}>
                        <Grid item xs={12} sm={7}>
                            <Box>
                                <Box component="form" sx={{ padding: { xs: "0rem 0.5rem 0rem 0rem" }, '& .MuiTextField-root': { m: 1 } }} noValidate autoComplete="off">
                                    <TextField
                                        fullWidth
                                        id="extra-details"
                                        label="Any Extra Details"
                                        multiline
                                        rows={6}
                                        defaultValue=""
                                    />
                                </Box>
                                <Box sx={{ padding: '1rem 0.5rem', display: 'flex' }}>
                                    <Stack spacing={2} direction="row">
                                        <Button
                                            sx={{
                                                fontWeight: '600',
                                                borderRadius: '5px',
                                                color: "#fff",
                                                padding: '0.5rem 3rem',
                                                backgroundColor: "#0095F6",
                                                '&:hover': { backgroundColor: '#e3711a' }
                                            }}
                                        >
                                            Submit
                                        </Button>
                                    </Stack>
                                </Box>
                            </Box>
                        </Grid>

                        <Grid item xs={12} sm={4}>
                            <Box>
                                <Box sx={{ justifyContent: "end", display: 'flex', flexDirection: 'column' }}>
                                    <Box sx={{ padding: '1rem 0' }}>
                                        <Typography sx={{ fontWeight: '600' }} variant='h5'>Help & Support</Typography>
                                    </Box>
                                    <Box sx={{ color: '#0095F6' }}>
                                        <Typography sx={{ lineHeight: '2.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                            <CallIcon /> +91-90685 13438
                                        </Typography>
                                        <Typography sx={{ lineHeight: '2.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                            <EmailIcon /> tripmysoulteam@gmail.com
                                        </Typography>
                                        <Typography sx={{ lineHeight: '2.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                            <AccessTimeFilledIcon /> 10:00 hrs to 18:00 hrs Monday - Saturday
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
}

export default UpgradeTrekDetails;
