"use server"
import { Box, Grid, Typography } from "@mui/material";
import ContactUs  from ".";
import EmailIcon from "@mui/icons-material/Email";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { IoLogoYoutube } from "react-icons/io5";


const ContactUsSSR = ()=>{
    return (
        <>   
            <ContactUs/>
        </>
    )
}

export { ContactUsSSR};