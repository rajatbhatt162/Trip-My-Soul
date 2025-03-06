import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import whychoose from "@/assests/whychoose.jpg";
import ourjourney from "@/assests/ourjourney.jpg";
import ourvalue from "@/assests/ourvalue.jpg";
import Image from 'next/image';

const AboutUsComponent = () => {
    return (
        <>
            <Box sx={{
                background: 'url("/signup1.png")', backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                height: { xs: "40vh", sm: "80vh" },
                position: "relative",
                alignItems: 'center',
                justifyContent: 'center',
                padding: '100px 0',
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'center',
                color: "#fff"
            }} >
                <Container>
                    <Grid container>
                        <Grid item xs={12} sm={12}>
                            <Box>
                                <Box>
                                    <Typography sx={{ fontWeight: 700, fontSize: '2rem', }} variant='h2'>
                                        About Trip My Soul
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box >

            <Container>
                <Grid item xs={12} sm={12}>
                    <Box margin={'3rem 0rem'}>
                        <Typography
                            sx={{
                                padding: "0.5rem  0rem",
                                textAlign: 'center',
                                color: '#fff',
                                fontWeight: 600,
                                fontSize: '2rem',
                                background: 'linear-gradient(to right, #1976d2, #FF8C00)',
                            }}
                            variant='h2'
                        >
                            We Are Trip My Soul
                        </Typography>
                    </Box>
                </Grid>
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={4}>
                        <Box sx={{ borderRadius: '10px', boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px;" }} >
                            <Box sx={{ color: '#1976d2', textAlign: 'center', padding: '4rem 2rem' }}>
                                <Typography>   <AccountCircleIcon style={{ color: '#E3711A' }} fontSize='large' /> </Typography>
                                <Typography sx={{ fontWeight: '600' }} variant='h5'> Activities  300+ </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Box sx={{ borderRadius: '10px', boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px;" }} >
                            <Box sx={{ color: '#1976d2', textAlign: 'center', padding: '4rem 2rem' }}>
                                <Typography>   <AccountCircleIcon style={{ color: '#E3711A' }} fontSize='large' /> </Typography>
                                <Typography sx={{ fontWeight: '600' }} variant='h5'> Destination  100+ </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Box sx={{ borderRadius: '10px', boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px;" }} >
                            <Box sx={{ color: '#1976d2', textAlign: 'center', padding: '4rem 2rem' }}>
                                <Typography>   <AccountCircleIcon style={{ color: '#E3711A' }} fontSize='large' /> </Typography>
                                <Typography sx={{ fontWeight: '600' }} variant='h5'> User/Year 20,000+ </Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>


            <Container>
            <Grid container spacing={3} sx={{ margin: '5rem 0' }}>
                <Grid item xs={12} sm={12}>
                <Typography sx={{ padding: '0.5rem 0', textAlign: 'center', color: '#fff', fontWeight: 600, background: 'linear-gradient(to right, #1976d2, #FF8C00)', }} variant='h5' >Why Choose Trip My Soul</Typography>

                </Grid>
                    <Grid item xs={12} sm={6}>
                        <Box sx={{}} >
                            <Box sx={{ margin: '1.5rem 0' }}>
                                <ul style={{ lineHeight: '1.9rem', fontSize: '1.2rem', padding: '0.5rem 0' }}>
                                    <li style={{ margin: "1rem 0", }}> <span style={{ fontWeight: '600' }}> Trusted Experience:</span>  With nearly a decade in the taxi rental  business, we  are a reliable and experienced servcies provide.</li>
                                    <li style={{ margin: "1rem 0", }} >  <span style={{ fontWeight: '600' }}> Comprehensive Service: </span>  we offer both  local  and  outstation  travel soluation  tailored to your  needs </li>
                                    <li style={{ margin: "1rem 0", }}>  <span style={{ fontWeight: '600' }}> Customer Centric Approch:</span>  Our services  ensure a  stress-free  and enjoyable  travel experiance  </li>
                                    <li style={{ margin: "1rem 0", }}>  <span style={{ fontWeight: '600' }}> Competitive Rates: </span> We Provide affordable  rates without  compromissing  on services  quality  </li>
                                </ul>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Box sx={{ marginTop: '4rem' }}>
                            <Image style={{boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",borderRadius: '10px' }}
                                src={whychoose}
                                alt="why choose"
                                height={330}
                                width={580}
                                objectFit='contain'
                                sx={{width: { xs: '100%', sm: 'auto' },}}/>
                        </Box>
                    </Grid>
                </Grid>

                <Grid container spacing={3} sx={{ margin: '5rem 0' }}>
                <Grid item xs={12} sm={12}>
                <Typography sx={{ padding: '0.5rem 0', textAlign: 'center', color: '#fff', fontWeight: 600, background: 'linear-gradient(to right, #1976d2, #FF8C00)', }} variant='h5' >Our Value</Typography>

                </Grid>
                <Grid item xs={12} sm={6}>
                        <Box sx={{ marginTop: '3rem' }}>
                            <Image style={{boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",borderRadius: '10px' }}
                                src={ourvalue}
                                alt="why choose"
                                height={330}
                                width={550}
                                objectFit='contain'
                                sx={{width: { xs: '100%', sm: 'auto' },}}/>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <Box sx={{}} >
                            <Box sx={{ margin: '1.5rem 0' }}>
                                <ul style={{ lineHeight: '1.9rem', fontSize: '1.2rem', padding: '0.5rem 0' }}>
                                    <li style={{ margin: "1rem 0", }}> <span style={{ fontWeight: '600' }}> Customer Satisfaction:</span>  We go  the extra mile  to ensure  an excellent  travel experiance. </li>
                                    <li style={{ margin: "1rem 0", }} >  <span style={{ fontWeight: '600' }}> Reliability: </span>  Count  on us for depenable  and punctual services.</li>
                                    <li style={{ margin: "1rem 0", }}>  <span style={{ fontWeight: '600' }}> Integrity:</span> We Operate  with honestly  and transparency , ensure fair  rates and high quality</li>
                                </ul>
                            </Box>
                        </Box>
                    </Grid>
                
                </Grid>

                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12}>
                    <Typography sx={{ padding: '0.5rem 0', textAlign: 'center', color: '#fff', fontWeight: 600, background: 'linear-gradient(to right, #1976d2, #FF8C00)', }} variant='h5' >Our Journey</Typography>

                    </Grid>
                  
                    <Grid item xs={12} sm={6}>
                        <Box sx={{ marginTop: '3rem'}}>
                            <Image style={{boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", borderRadius: '10px' }}
                                src={ourjourney}
                                alt="why choose"
                                height={290}
                                width={580}
                                objectFit='contain'
                                sx={{width: { xs: '100%', sm: 'auto' }, height: 'auto', }}/>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Box sx={{}} >
                            <Box sx={{ marginTop: '2rem' }}>
                              <Typography sx={{fontWeight: 100,  lineHeight: '2.3rem', fontSize: '1.3rem', padding: '0.5rem 1rem' }}> Changing  the world through travel has been  goal since 2015. at Trip My Soul, we belive in creating  meaningful experience  and building lasting connection. Over the past 9 year, we've dedicated  ourselves  to providing  exceptional  travel solutions in north india.</Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default AboutUsComponent


// src="https://www.tripmysoul.in/storage/3191901-uhd_3840_2160_25fps.mp4"