// components/TermCondition.js
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';

const TermCondition = () => {
  return (
    <Box>
      <Container maxWidth="xl">

  
    <Box
      sx={{

       
       
        textAlign: 'left',
        backgroundColor: '#f9f9f9',
        padding: '20px',
       
        margin: 'auto',
        height: 'auto',
      }}
    >
      <Typography variant="h4" sx={{ marginBottom: '20px', color: '#FF7A00' }}>
        Terms and Conditions
      </Typography>

      <Typography variant="h6" sx={{ marginBottom: '10px', color: '#FF7A00' }}>
        1. Booking and Payment Policy:
      </Typography>
      <Typography sx={{ marginBottom: '20px', color: '#666666' }}>
        A booking is confirmed only after we receive a non-refundable deposit or the full payment as required.
        <br />
        The final balance must be paid according to the payment schedule provided during the booking process.
        <br />
        We reserve the right to cancel your booking if payments are not made on time.
      </Typography>

      <Typography variant="h6" sx={{ marginBottom: '10px', color: '#FF7A00' }}>
        2. Cancellation and Refund Policy:
      </Typography>
      <Typography sx={{ marginBottom: '20px', color: '#666666' }}>
        Cancellations must be made in writing via email.
        <br />
        Refunds will be processed as per our cancellation policy, which varies based on the number of days prior to departure.
        <br />
       Refunds will not be given for any missed tours or accommodations due to failure to arrive on time.
      </Typography>

      <Typography variant="h6" sx={{ marginBottom: '10px', color: '#FF7A00' }}>
        3. Changes and Amendments:
      </Typography>
      <Typography sx={{ marginBottom: '20px', color: '#666666' }}>
        Changes to bookings are subject to availability and may incur additional fees.
        <br />
        Any modifications must be requested in writing and approved by our team.
        <br />
        We reserve the right to make changes to itineraries in case of unforeseen circumstances like weather conditions or natural disasters.
      </Typography>

      <Typography variant="h6" sx={{ marginBottom: '10px', color: '#FF7A00' }}>
        4. Travel Insurance:
      </Typography>
      <Typography sx={{ marginBottom: '20px', color: '#666666' }}>
         All travelers are required to have comprehensive travel insurance covering personal injury, medical expenses, and trip cancellation.
        <br />
         We are not responsible for any personal injury, loss, or damage that may occur during the trip.
      </Typography>

      <Typography variant="h6" sx={{ marginBottom: '10px', color: '#FF7A00' }}>
        5. Health and Safety:
      </Typography>
      <Typography sx={{ marginBottom: '20px', color: '#666666' }}>
         It is your responsibility to ensure you are fit to travel and participate in activities. Any health issues must be disclosed at the time of booking.
        <br />
         We reserve the right to deny participation in activities that may pose a risk to your safety or the safety of others.
      </Typography>

      <Typography variant="h6" sx={{ marginBottom: '10px', color: '#FF7A00' }}>
        6. Documentation and Entry Requirements:
      </Typography>
      <Typography sx={{ marginBottom: '20px', color: '#666666' }}>
        Travelers are responsible for obtaining valid passports, visas, and any other travel documents required for the destination.
        <br />
        We are not responsible for any travel restrictions or denied entry due to incomplete or invalid documentation.
      </Typography>

      <Typography variant="h6" sx={{ marginBottom: '10px', color: '#FF7A00' }}>
        7. Liability:
      </Typography>
      <Typography sx={{ marginBottom: '20px', color: '#666666' }}>
        We act as an agent for travel services and do not own or operate any accommodations, transportation, or activities.
        <br />
       We are not liable for any delays, injuries, or losses caused by third-party service providers.
      </Typography>

      <Typography variant="h6" sx={{ marginBottom: '10px', color: '#FF7A00' }}>
        8. Force Majeure:
      </Typography>
      <Typography sx={{ marginBottom: '20px', color: '#666666' }}>
        We are not responsible for delays, cancellations, or modifications caused by events beyond our control, including but not limited to natural disasters, strikes, or political unrest.
        <br />
      In such cases, refunds or rescheduling will be offered based on the policies of service providers.
      </Typography>

      <Typography variant="h6" sx={{ marginBottom: '10px', color: '#FF7A00' }}>
        9. Governing Law:
      </Typography>
      <Typography sx={{ marginBottom: '20px', color: '#666666' }}>
        These terms and conditions are governed by the laws of [Country/State].
        <br />
        Any disputes arising from bookings or services provided are subject to the exclusive jurisdiction of the courts in [Country/State].
      </Typography>

      <Typography variant="h6" sx={{ marginBottom: '10px', color: '#FF7A00' }}>
        10. Acceptance of Terms:
      </Typography>
      <Typography sx={{ marginBottom: '20px', color: '#666666' }}>
        By booking with us, you acknowledge that you have read, understood, and agreed to these terms and conditions.
      </Typography>
    </Box>
    </Container>
    </Box>
  );
};

export default TermCondition;

export async function generateMetadata({ params }) {
  return {
    title: 'Understand TripMySoul’s terms and conditions for clarity.',
    description: 'Learn about TripMySoul’s Terms and Conditions, including essential policies on bookings, cancellations, and traveler responsibilities for a smooth journey',
  };
}