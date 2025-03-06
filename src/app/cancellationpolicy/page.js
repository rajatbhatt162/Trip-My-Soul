import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import CancellationPolicyTable from '@/components/viewitinerarycomponent/cancellationpolicy';

const CancellationPolicy = () => {
  return (
    <Box sx={{ paddingBottom: "25px" }}>
      <Container maxWidth="xl">
        {/* Section Title */}
        <Box sx={{ paddingBottom: "25px", paddingTop: "50px" }}>
          <Typography sx={{ fontSize: "30px", fontWeight: "500", color: '#FF7A00' }} variant="h4">
            Cancellation Policy
          </Typography>
          <Typography variant="body1" sx={{ marginTop: "10px", color: '#666666' }}>
            Please read through our cancellation policy carefully. Our policies are designed to ensure fair treatment for both our customers and the organization. We understand that sometimes plans change, and we try our best to accommodate such changes.
          </Typography>
        </Box>

        {/* Cancellation Policy Table */}
        <CancellationPolicyTable />

        {/* Additional Travel-Related Information */}
        <Box sx={{ paddingTop: "40px" }}>
          <Typography variant="h5" sx={{ fontWeight: "500", color: '#FF7A00' }}>
            Important Travel Considerations
          </Typography>
          <Typography variant="body1" sx={{ marginTop: "10px", color: '#666666' }}>
            We highly recommend purchasing travel insurance to protect yourself against unforeseen circumstances such as illness, injury, or severe weather conditions. Your peace of mind is our priority, and being prepared will ensure a stress-free trip.
          </Typography>
          <Typography variant="body1" sx={{ marginTop: "10px", color: '#666666' }}>
            In case of any cancellation initiated by us due to unavoidable situations like natural disasters or political unrest, you will be entitled to either a full refund or the opportunity to reschedule your trip at no extra cost.
          </Typography>
          <Typography variant="body1" sx={{ marginTop: "10px", color: '#666666' }}>
            For any personal cancellations, please adhere to the deadlines stated in the cancellation policy table above. Our goal is to accommodate your needs while maintaining the quality and service of our trips.
          </Typography>
        </Box>

        {/* Additional Note */}
        <Box sx={{ paddingTop: "40px" }}>
          <Typography variant="h6" sx={{ fontWeight: "500", color: '#FF7A00' }}>
            Refund Process
          </Typography>
          <Typography variant="body1" sx={{ marginTop: "10px", color: '#666666' }}>
            Refunds for cancellations made within the allowed period will be processed within 7-10 business days. Please note that certain payment gateways may apply additional processing time. If you have any questions regarding refunds or cancellations, feel free to contact our support team.
          </Typography>
          <Typography variant="body1" sx={{ marginTop: "10px", color: '#666666' }}>
            Thank you for your understanding and cooperation. We strive to make your travel experience as smooth and enjoyable as possible.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default CancellationPolicy;

export async function generateMetadata({ params }) {
  return {
    title: 'TripMySoul Cancellation Policy: Flexibility for your plans',
    description: 'TripMySoul Cancellation Policy: Discover clear cancellation terms and refund guidelines to make your travel planning seamless and stress-free',
  };
}