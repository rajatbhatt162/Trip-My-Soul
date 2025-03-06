"use client";
import React from "react";
import {
  Accordion,
  AccordionSummary,
  Autocomplete,
  Box,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import Checkbox from "@mui/material/Checkbox";
import CallIcon from "@mui/icons-material/Call";
import MarkunreadIcon from "@mui/icons-material/Markunread";
import UpgradeTrekDetails from "../upgradetrekdetails";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(month, selectedMonth, theme) {
  return {
    fontWeight:
      selectedMonth === month
        ? theme.typography.fontWeightMedium
        : theme.typography.fontWeightRegular,
  };
}

const Batches = ({ months, selectedMonth, handleChange }) => {
  const theme = useTheme();

  return (
    <FormControl sx={{ m: 1, width: "100%", marginTop: 3 }}>
      <InputLabel id="demo-single-month-label">Month</InputLabel>
      <Select
        labelId="demo-single-month-label"
        id="demo-single-month"
        value={selectedMonth}
        onChange={handleChange}
        input={<OutlinedInput label=" Month" />}
        MenuProps={MenuProps}
      >
        {months.map((month) => (
          <MenuItem
            key={month}
            value={month}
            style={getStyles(month, selectedMonth, theme)}
          >
            {month}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

const TrekFrom = () => {
  const [selectedMonth, setSelectedMonth] = React.useState("");
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const handleChange = (event) => {
    setSelectedMonth(event.target.value);
  };

  return (
    <>
      <Box sx={{ margin: "1rem 0" }}>
        <Box sx={{ backgroundColor: "#1976d2" }}>
          <Typography
            variant="h5"
            sx={{
              padding: "1rem 0",
              color: "#fff",
              fontWeight: "700",
              textAlign: "center",
            }}
          >
            Upgrade To Premium Trek
          </Typography>
        </Box>
        <Container>
          <Grid container>
            <Grid item xs={12} sm={12}>
              <Box sx={{ margin: "2rem 0" }}>
                <Accordion>
                  <AccordionSummary
                    sx={{
                      fontSize: { xs: "1rem", sm: "1.5rem" },
                      fontWeight: "700",
                      border: "1px solid #1976d2",
                      color: "#1976d2",
                    }}
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    Know more About Premium Trek
                  </AccordionSummary>
                  <AccordionDetails>
                    <ul style={{ lineHeight: "2rem" }}>
                      <li>
                        Customized premium treks offer tailor-made trekking
                        experiences designed to meet the specific preferences,
                        interests, and requirements of individual or group
                        clients.
                      </li>
                      <li>
                        Opting for customized treks allows adventurers to
                        personalize their trekking journey according to their
                        fitness level, desired destinations, duration, and
                        accommodations.
                      </li>
                      <li>
                        Suitable for adventurers seeking personalized
                        experiences, families with children, corporate groups,
                        or individuals with specific preferences such as
                        photography, birdwatching, or cultural immersion.
                      </li>
                      <li>
                        Customized premium treks differ from normal fixed
                        departure treks in several ways:
                      </li>
                      <ul>
                        <li>
                          Flexibility: Customized treks offer flexibility in
                          choosing departure dates, itinerary, and activities,
                          catering to the preferences and schedules of the
                          participants.
                        </li>
                        <li>
                          Personalization: Participants have the freedom to
                          tailor the trek according to their interests, pace,
                          and fitness level, ensuring a more enjoyable and
                          rewarding experience.
                        </li>
                        <li>
                          Exclusive Services: Customized treks often include
                          exclusive services such as private guides, luxury
                          accommodations, gourmet meals, and personalized
                          transportation, enhancing comfort and convenience.
                        </li>
                        <li>
                          Privacy: Unlike fixed departure treks, customized
                          treks provide privacy and exclusivity, allowing
                          participants to explore remote destinations without
                          the crowds.
                        </li>
                        <li>
                          High-end amenities: Premium customized treks may offer
                          additional amenities such as luxury camping options
                          and hotels, helicopter transfers, providing a higher
                          level of comfort and indulgence.
                        </li>
                        <li>
                          Cost: Customized treks typically involve higher costs
                          compared to fixed departure treks due to the
                          personalized services, exclusive amenities, and
                          flexibility offered.
                        </li>
                      </ul>
                    </ul>
                  </AccordionDetails>
                </Accordion>
              </Box>
              <Box
                sx={{
                  boxShadow:
                    "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;",
                }}
              >
                <Box sx={{ margin: "2rem 0" }}>
                  <Typography
                    sx={{
                      color: "#1976d2",
                      textAlign: "center",
                      fontWeight: 600,
                      padding: "1rem 0",
                    }}
                    variant="h5"
                  >
                    <span style={{ borderBottom: "2px solid #E3711A" }}>
                      Customize Your Tour Below To Create Your Perfect Travel
                      Experience{" "}
                    </span>{" "}
                  </Typography>
                </Box>
                <Box>
                  <Box sx={{ margin: "1rem 0" }}>
                    <Typography>
                      {" "}
                      <span
                        style={{
                          backgroundColor: "#0095F6",
                          padding: "0.5rem 2rem",
                          fontWeight: "600",
                          color: "#fff",
                        }}
                      >
                        {" "}
                        Personal Information
                      </span>{" "}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      flexDirection: { xs: "column", sm: "row" },
                      padding: { xs: "0rem 1rem", sm: " 1rem 3rem" },
                      display: "flex",
                      alignItems: "center",
                      "& > :not(style)": { m: 1 },
                    }}
                  >
                    <TextField
                      fullWidth
                      id="demo-helper-text-aligned"
                      label="First Name"
                    />
                    <TextField fullWidth label="Last Name" />
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
                  <Box
                    sx={{
                      flexDirection: { xs: "column", sm: "row" },
                      padding: { xs: "0rem 1rem", sm: " 1rem 3rem" },
                      display: "flex",
                      alignItems: "center",
                      "& > :not(style)": { m: 1 },
                    }}
                  >
                    <Autocomplete
                      id="country-select-demo"
                      sx={{ width: "100%" }}
                      options={countries}
                      autoHighlight
                      getOptionLabel={(option) => option.label}
                      renderOption={(props, option) => {
                        const { key, ...optionProps } = props;
                        return (
                          <Box
                            key={key}
                            component="li"
                            sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                            {...optionProps}
                          >
                            <img
                              loading="lazy"
                              width="20"
                              srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                              src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                              alt=""
                            />
                            {option.label} ({option.code}) +{option.phone}
                          </Box>
                        );
                      }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label=" country code"
                          inputProps={{
                            ...params.inputProps,
                            autoComplete: "new-password",
                          }}
                        />
                      )}
                    />
                    <TextField fullWidth label="Phone Number" />
                    <TextField fullWidth label="Email" />
                  </Box>

                  <Box sx={{ margin: "1rem 0" }}>
                    <Typography>
                      {" "}
                      <span
                        style={{
                          backgroundColor: "#0095F6",
                          padding: "0.5rem 2rem",
                          fontWeight: "600",
                          color: "#fff",
                        }}
                      >
                        Tour Preferences
                      </span>{" "}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      flexDirection: { xs: "column", sm: "row" },
                      padding: { xs: "0rem 1rem ", sm: " 1rem 3rem" },
                      display: "flex",
                      alignItems: "center",
                      "& > :not(style)": { m: 1 },
                    }}
                  >
                    <TextField fullWidth label="Preferred Location/Trek Name" />
                    <TextField fullWidth label="Trip Duration (In Days)" />
                    <TextField fullWidth label="Age Group of Participants" />
                  </Box>
                  <Box
                    sx={{
                      flexDirection: { xs: "column", sm: "row" },
                      padding: { xs: "0rem 1rem", sm: " 1rem 3rem" },
                      display: "flex",
                      alignItems: "center",
                      "& > :not(style)": { m: 1 },
                    }}
                  >
                    <TextField fullWidth label="City Travelling From" />
                    <Batches
                      months={months}
                      selectedMonth={selectedMonth}
                      handleChange={handleChange}
                    />
                    <TextField
                      fullWidth
                      label="Budget (Approx) For Entire Trip"
                    />
                  </Box>
                  <Box
                    sx={{
                      padding: { xs: "0rem 0.5rem", sm: " 1rem 3rem" },
                      display: "flex",
                      alignItems: "center",
                      "& > :not(style)": { m: 1 },
                    }}
                  >
                    <TextField
                      fullWidth
                      label="Number of Participants in Group"
                    />
                  </Box>

                  <Box sx={{ padding: "1rem 0" }}>
                    <Typography>
                      {" "}
                      <span
                        style={{
                          backgroundColor: "#0095F6",
                          padding: "0.5rem 2rem",
                          fontWeight: "600",
                          color: "#fff",
                        }}
                      >
                        Type of Services
                      </span>{" "}
                    </Typography>
                  </Box>

                  <Box sx={{ padding: { xs: "1rem 0rem", sm: " 1rem 3rem" } }}>
                    <div>
                      <Checkbox {...label} />{" "}
                      <span style={{ borderBottom: "1px solid #E3711A" }}>
                        {" "}
                        Premium Service
                      </span>
                    </div>
                    <div style={{ padding: "1rem 0" }}>
                      <Checkbox {...label} />{" "}
                      <span style={{ borderBottom: "1px solid #E3711A" }}>
                        {" "}
                        Deluxe Service
                      </span>
                    </div>
                  </Box>

                  <Box sx={{ padding: "1rem 0" }}>
                    <Typography>
                      {" "}
                      <span
                        style={{
                          backgroundColor: "#0095F6",
                          padding: "0.5rem 2rem",
                          fontWeight: "600",
                          color: "#fff",
                        }}
                      >
                        Additional Information
                      </span>{" "}
                    </Typography>
                  </Box>
                </Box>
                <UpgradeTrekDetails />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

const countries = [
  { code: "AD", label: "Andorra", phone: "376" },
  {
    code: "AE",
    label: "United Arab Emirates",
    phone: "971",
  },
  { code: "AF", label: "Afghanistan", phone: "93" },
  {
    code: "AG",
    label: "Antigua and Barbuda",
    phone: "1-268",
  },
  { code: "AI", label: "Anguilla", phone: "1-264" },
  { code: "AL", label: "Albania", phone: "355" },
  { code: "AM", label: "Armenia", phone: "374" },
  { code: "AO", label: "Angola", phone: "244" },
  { code: "AQ", label: "Antarctica", phone: "672" },
  { code: "AR", label: "Argentina", phone: "54" },
  { code: "AS", label: "American Samoa", phone: "1-684" },
  { code: "AT", label: "Austria", phone: "43" },
  {
    code: "AU",
    label: "Australia",
    phone: "61",
    suggested: true,
  },
  { code: "AW", label: "Aruba", phone: "297" },
  { code: "AX", label: "Alland Islands", phone: "358" },
  { code: "AZ", label: "Azerbaijan", phone: "994" },
  {
    code: "BA",
    label: "Bosnia and Herzegovina",
    phone: "387",
  },
  { code: "BB", label: "Barbados", phone: "1-246" },
  { code: "BD", label: "Bangladesh", phone: "880" },
  { code: "BE", label: "Belgium", phone: "32" },
  { code: "BF", label: "Burkina Faso", phone: "226" },
  { code: "BG", label: "Bulgaria", phone: "359" },
  { code: "BH", label: "Bahrain", phone: "973" },
  { code: "BI", label: "Burundi", phone: "257" },
  { code: "BJ", label: "Benin", phone: "229" },
  { code: "BL", label: "Saint Barthelemy", phone: "590" },
  { code: "BM", label: "Bermuda", phone: "1-441" },
  { code: "BN", label: "Brunei Darussalam", phone: "673" },
  { code: "BO", label: "Bolivia", phone: "591" },
  { code: "BR", label: "Brazil", phone: "55" },
  { code: "BS", label: "Bahamas", phone: "1-242" },
  { code: "BT", label: "Bhutan", phone: "975" },
  { code: "BV", label: "Bouvet Island", phone: "47" },
  { code: "BW", label: "Botswana", phone: "267" },
  { code: "BY", label: "Belarus", phone: "375" },
  { code: "BZ", label: "Belize", phone: "501" },
  {
    code: "CA",
    label: "Canada",
    phone: "1",
    suggested: true,
  },
  {
    code: "CC",
    label: "Cocos (Keeling) Islands",
    phone: "61",
  },
  {
    code: "CD",
    label: "Congo, Democratic Republic of the",
    phone: "243",
  },
  {
    code: "CF",
    label: "Central African Republic",
    phone: "236",
  },
  {
    code: "CG",
    label: "Congo, Republic of the",
    phone: "242",
  },
  { code: "CH", label: "Switzerland", phone: "41" },
  { code: "CI", label: "Cote d'Ivoire", phone: "225" },
  { code: "CK", label: "Cook Islands", phone: "682" },
  { code: "CL", label: "Chile", phone: "56" },
  { code: "CM", label: "Cameroon", phone: "237" },
  { code: "CN", label: "China", phone: "86" },
  { code: "CO", label: "Colombia", phone: "57" },
  { code: "CR", label: "Costa Rica", phone: "506" },
  { code: "CU", label: "Cuba", phone: "53" },
  { code: "CV", label: "Cape Verde", phone: "238" },
  { code: "CW", label: "Curacao", phone: "599" },
  { code: "CX", label: "Christmas Island", phone: "61" },
  { code: "CY", label: "Cyprus", phone: "357" },
  { code: "CZ", label: "Czech Republic", phone: "420" },
  {
    code: "DE",
    label: "Germany",
    phone: "49",
    suggested: true,
  },
  { code: "DJ", label: "Djibouti", phone: "253" },
  { code: "DK", label: "Denmark", phone: "45" },
  { code: "DM", label: "Dominica", phone: "1-767" },
  {
    code: "DO",
    label: "Dominican Republic",
    phone: "1-809",
  },
  { code: "DZ", label: "Algeria", phone: "213" },
  { code: "EC", label: "Ecuador", phone: "593" },
  { code: "EE", label: "Estonia", phone: "372" },
  { code: "EG", label: "Egypt", phone: "20" },
  { code: "EH", label: "Western Sahara", phone: "212" },
  { code: "ER", label: "Eritrea", phone: "291" },
  { code: "ES", label: "Spain", phone: "34" },
  { code: "ET", label: "Ethiopia", phone: "251" },
  { code: "FI", label: "Finland", phone: "358" },
  { code: "FJ", label: "Fiji", phone: "679" },
  {
    code: "FK",
    label: "Falkland Islands (Malvinas)",
    phone: "500",
  },
  {
    code: "FM",
    label: "Micronesia, Federated States of",
    phone: "691",
  },
  { code: "FO", label: "Faroe Islands", phone: "298" },
  {
    code: "FR",
    label: "France",
    phone: "33",
    suggested: true,
  },
  { code: "GA", label: "Gabon", phone: "241" },
  { code: "GB", label: "United Kingdom", phone: "44" },
  { code: "GD", label: "Grenada", phone: "1-473" },
  { code: "GE", label: "Georgia", phone: "995" },
  { code: "GF", label: "French Guiana", phone: "594" },
  { code: "GG", label: "Guernsey", phone: "44" },
  { code: "GH", label: "Ghana", phone: "233" },
  { code: "GI", label: "Gibraltar", phone: "350" },
  { code: "GL", label: "Greenland", phone: "299" },
  { code: "GM", label: "Gambia", phone: "220" },
  { code: "GN", label: "Guinea", phone: "224" },
  { code: "GP", label: "Guadeloupe", phone: "590" },
  { code: "GQ", label: "Equatorial Guinea", phone: "240" },
  { code: "GR", label: "Greece", phone: "30" },
  {
    code: "GS",
    label: "South Georgia and the South Sandwich Islands",
    phone: "500",
  },
  { code: "GT", label: "Guatemala", phone: "502" },
  { code: "GU", label: "Guam", phone: "1-671" },
  { code: "GW", label: "Guinea-Bissau", phone: "245" },
  { code: "GY", label: "Guyana", phone: "592" },
  { code: "HK", label: "Hong Kong", phone: "852" },
  {
    code: "HM",
    label: "Heard Island and McDonald Islands",
    phone: "672",
  },
  { code: "HN", label: "Honduras", phone: "504" },
  { code: "HR", label: "Croatia", phone: "385" },
  { code: "HT", label: "Haiti", phone: "509" },
  { code: "HU", label: "Hungary", phone: "36" },
  { code: "ID", label: "Indonesia", phone: "62" },
  { code: "IE", label: "Ireland", phone: "353" },
  { code: "IL", label: "Israel", phone: "972" },
  { code: "IM", label: "Isle of Man", phone: "44" },
  { code: "IN", label: "India", phone: "91" },
  {
    code: "IO",
    label: "British Indian Ocean Territory",
    phone: "246",
  },
  { code: "IQ", label: "Iraq", phone: "964" },
  {
    code: "IR",
    label: "Iran, Islamic Republic of",
    phone: "98",
  },
  { code: "IS", label: "Iceland", phone: "354" },
  { code: "IT", label: "Italy", phone: "39" },
  { code: "JE", label: "Jersey", phone: "44" },
  { code: "JM", label: "Jamaica", phone: "1-876" },
  { code: "JO", label: "Jordan", phone: "962" },
  {
    code: "JP",
    label: "Japan",
    phone: "81",
    suggested: true,
  },
  { code: "KE", label: "Kenya", phone: "254" },
  { code: "KG", label: "Kyrgyzstan", phone: "996" },
  { code: "KH", label: "Cambodia", phone: "855" },
  { code: "KI", label: "Kiribati", phone: "686" },
  { code: "KM", label: "Comoros", phone: "269" },
  {
    code: "KN",
    label: "Saint Kitts and Nevis",
    phone: "1-869",
  },
  {
    code: "KP",
    label: "Korea, Democratic People's Republic of",
    phone: "850",
  },
  { code: "KR", label: "Korea, Republic of", phone: "82" },
  { code: "KW", label: "Kuwait", phone: "965" },
  { code: "KY", label: "Cayman Islands", phone: "1-345" },
  { code: "KZ", label: "Kazakhstan", phone: "7" },
  {
    code: "LA",
    label: "Lao People's Democratic Republic",
    phone: "856",
  },
  { code: "LB", label: "Lebanon", phone: "961" },
  { code: "LC", label: "Saint Lucia", phone: "1-758" },
  { code: "LI", label: "Liechtenstein", phone: "423" },
  { code: "LK", label: "Sri Lanka", phone: "94" },
  { code: "LR", label: "Liberia", phone: "231" },
  { code: "LS", label: "Lesotho", phone: "266" },
  { code: "LT", label: "Lithuania", phone: "370" },
  { code: "LU", label: "Luxembourg", phone: "352" },
  { code: "LV", label: "Latvia", phone: "371" },
  { code: "LY", label: "Libya", phone: "218" },
  { code: "MA", label: "Morocco", phone: "212" },
  { code: "MC", label: "Monaco", phone: "377" },
  {
    code: "MD",
    label: "Moldova, Republic of",
    phone: "373",
  },
  { code: "ME", label: "Montenegro", phone: "382" },
  {
    code: "MF",
    label: "Saint Martin (French part)",
    phone: "590",
  },
  { code: "MG", label: "Madagascar", phone: "261" },
  { code: "MH", label: "Marshall Islands", phone: "692" },
  {
    code: "MK",
    label: "Macedonia, the Former Yugoslav Republic of",
    phone: "389",
  },
  { code: "ML", label: "Mali", phone: "223" },
  { code: "MM", label: "Myanmar", phone: "95" },
  { code: "MN", label: "Mongolia", phone: "976" },
  { code: "MO", label: "Macao", phone: "853" },
  {
    code: "MP",
    label: "Northern Mariana Islands",
    phone: "1-670",
  },
  { code: "MQ", label: "Martinique", phone: "596" },
  { code: "MR", label: "Mauritania", phone: "222" },
  { code: "MS", label: "Montserrat", phone: "1-664" },
  { code: "MT", label: "Malta", phone: "356" },
  { code: "MU", label: "Mauritius", phone: "230" },
  { code: "MV", label: "Maldives", phone: "960" },
  { code: "MW", label: "Malawi", phone: "265" },
  { code: "MX", label: "Mexico", phone: "52" },
  { code: "MY", label: "Malaysia", phone: "60" },
  { code: "MZ", label: "Mozambique", phone: "258" },
  { code: "NA", label: "Namibia", phone: "264" },
  { code: "NC", label: "New Caledonia", phone: "687" },
  { code: "NE", label: "Niger", phone: "227" },
  { code: "NF", label: "Norfolk Island", phone: "672" },
  { code: "NG", label: "Nigeria", phone: "234" },
  { code: "NI", label: "Nicaragua", phone: "505" },
  { code: "NL", label: "Netherlands", phone: "31" },
  { code: "NO", label: "Norway", phone: "47" },
  { code: "NP", label: "Nepal", phone: "977" },
  { code: "NR", label: "Nauru", phone: "674" },
  { code: "NU", label: "Niue", phone: "683" },
  { code: "NZ", label: "New Zealand", phone: "64" },
  { code: "OM", label: "Oman", phone: "968" },
  { code: "PA", label: "Panama", phone: "507" },
  { code: "PE", label: "Peru", phone: "51" },
  { code: "PF", label: "French Polynesia", phone: "689" },
  { code: "PG", label: "Papua New Guinea", phone: "675" },
  { code: "PH", label: "Philippines", phone: "63" },
  { code: "PK", label: "Pakistan", phone: "92" },
  { code: "PL", label: "Poland", phone: "48" },
  {
    code: "PM",
    label: "Saint Pierre and Miquelon",
    phone: "508",
  },
  { code: "PN", label: "Pitcairn", phone: "870" },
  { code: "PR", label: "Puerto Rico", phone: "1" },
  {
    code: "PS",
    label: "Palestine, State of",
    phone: "970",
  },
  { code: "PT", label: "Portugal", phone: "351" },
  { code: "PW", label: "Palau", phone: "680" },
  { code: "PY", label: "Paraguay", phone: "595" },
  { code: "QA", label: "Qatar", phone: "974" },
  { code: "RE", label: "Reunion", phone: "262" },
  { code: "RO", label: "Romania", phone: "40" },
  { code: "RS", label: "Serbia", phone: "381" },
  { code: "RU", label: "Russian Federation", phone: "7" },
  { code: "RW", label: "Rwanda", phone: "250" },
  { code: "SA", label: "Saudi Arabia", phone: "966" },
  { code: "SB", label: "Solomon Islands", phone: "677" },
  { code: "SC", label: "Seychelles", phone: "248" },
  { code: "SD", label: "Sudan", phone: "249" },
  { code: "SE", label: "Sweden", phone: "46" },
  { code: "SG", label: "Singapore", phone: "65" },
  { code: "SH", label: "Saint Helena", phone: "290" },
  { code: "SI", label: "Slovenia", phone: "386" },
  {
    code: "SJ",
    label: "Svalbard and Jan Mayen",
    phone: "47",
  },
  { code: "SK", label: "Slovakia", phone: "421" },
  { code: "SL", label: "Sierra Leone", phone: "232" },
  { code: "SM", label: "San Marino", phone: "378" },
  { code: "SN", label: "Senegal", phone: "221" },
  { code: "SO", label: "Somalia", phone: "252" },
  { code: "SR", label: "Suriname", phone: "597" },
  { code: "SS", label: "South Sudan", phone: "211" },
  {
    code: "ST",
    label: "Sao Tome and Principe",
    phone: "239",
  },
  { code: "SV", label: "El Salvador", phone: "503" },
  {
    code: "SX",
    label: "Sint Maarten (Dutch part)",
    phone: "1-721",
  },
  {
    code: "SY",
    label: "Syrian Arab Republic",
    phone: "963",
  },
  { code: "SZ", label: "Swaziland", phone: "268" },
  {
    code: "TC",
    label: "Turks and Caicos Islands",
    phone: "1-649",
  },
  { code: "TD", label: "Chad", phone: "235" },
  {
    code: "TF",
    label: "French Southern Territories",
    phone: "262",
  },
  { code: "TG", label: "Togo", phone: "228" },
  { code: "TH", label: "Thailand", phone: "66" },
  { code: "TJ", label: "Tajikistan", phone: "992" },
  { code: "TK", label: "Tokelau", phone: "690" },
  { code: "TL", label: "Timor-Leste", phone: "670" },
  { code: "TM", label: "Turkmenistan", phone: "993" },
  { code: "TN", label: "Tunisia", phone: "216" },
  { code: "TO", label: "Tonga", phone: "676" },
  { code: "TR", label: "Turkey", phone: "90" },
  {
    code: "TT",
    label: "Trinidad and Tobago",
    phone: "1-868",
  },
  { code: "TV", label: "Tuvalu", phone: "688" },
  {
    code: "TW",
    label: "Taiwan",
    phone: "886",
  },
  {
    code: "TZ",
    label: "United Republic of Tanzania",
    phone: "255",
  },
  { code: "UA", label: "Ukraine", phone: "380" },
  { code: "UG", label: "Uganda", phone: "256" },
  {
    code: "US",
    label: "United States",
    phone: "1",
    suggested: true,
  },
  { code: "UY", label: "Uruguay", phone: "598" },
  { code: "UZ", label: "Uzbekistan", phone: "998" },
  {
    code: "VA",
    label: "Holy See (Vatican City State)",
    phone: "379",
  },
  {
    code: "VC",
    label: "Saint Vincent and the Grenadines",
    phone: "1-784",
  },
  { code: "VE", label: "Venezuela", phone: "58" },
  {
    code: "VG",
    label: "British Virgin Islands",
    phone: "1-284",
  },
  {
    code: "VI",
    label: "US Virgin Islands",
    phone: "1-340",
  },
  { code: "VN", label: "Vietnam", phone: "84" },
  { code: "VU", label: "Vanuatu", phone: "678" },
  { code: "WF", label: "Wallis and Futuna", phone: "681" },
  { code: "WS", label: "Samoa", phone: "685" },
  { code: "XK", label: "Kosovo", phone: "383" },
  { code: "YE", label: "Yemen", phone: "967" },
  { code: "YT", label: "Mayotte", phone: "262" },
  { code: "ZA", label: "South Africa", phone: "27" },
  { code: "ZM", label: "Zambia", phone: "260" },
  { code: "ZW", label: "Zimbabwe", phone: "263" },
];

export default TrekFrom;
