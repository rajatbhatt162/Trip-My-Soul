import React from 'react';
import FaQ from '../faq';
import { Box, Typography } from '@mui/material';

const HomePageFaQ = () => {
  const FaQDetails = [
    {
      title: "How do I sign up with Trip My Soul?",
      answer: "Click the Sign Up button on our Login Page, fill in the required information, and submit. You will receive an email to verify your account.",
    },
    {
      title: "How can I reserve a trek with Trip My Soul?",
      answer: "Browse our Trek section, pick your trek, and click Book Now. Complete the booking by following the steps and making the payment. A confirmation email will be sent to you.",
    },
    {
      title: "What if I made a payment but didn't get a confirmation email?",
      answer: "Check your spam/junk folder. If it's not there, contact our support with your payment details for help.",
    },
    {
      title: "How do I arrange luggage offloading and transportation?",
      answer: "You can add these services while booking your trek or by contacting us at least 48 hours before your trek starts.",
    },
    {
      title: "How can I correct a booking mistake, like the wrong trek or date?",
      answer: "Reach out to our customer service team as soon as possible. We can often accommodate changes based on availability and our policy, possibly with additional fees.",
    },
    {
      title: "I'm new to trekking and unsure which trek to choose. Any advice?",
      answer: "Yes, we offer guidance based on your fitness and preferences. Check our website for beginner treks or contact us for recommendations.",
    },
    {
      title: "Can I rent trekking gear from Trip My Soul?",
      answer: "Yes, we rent out trekking poles, jackets, and other equipment. You can add these rentals during your booking or by contacting our team.",
    },
    {
      title: "Who will guide us on the trek?",
      answer: "Our professional trek leaders and guides will accompany you, ensuring safety and a great experience.",
    },
    {
      title: "Are there any health restrictions for joining a trek?",
      answer: "Yes, individuals with serious health conditions or significant physical limitations may not be suitable for some treks. Contact us to discuss any concerns.",
    },
    {
      title: "Can I drink alcohol during the trek in cold weather?",
      answer: "No, we recommend avoiding alcohol at high altitudes as it can increase the risk of hypothermia and other issues.",
    },
    {
      title: "What are the toilet arrangements on the trek?",
      answer: "We provide clean, eco-friendly toilet tents at our campsites.",
    },
    {
      title: "How should I dress for cold weather at high camps?",
      answer: "Wear multiple layers: thermal base layers, fleece jackets, and a down jacket. Proper gear is essential.",
    },
    {
      title: "Are crampons, micro spikes, and gaiters available?",
      answer: "Yes, we provide these as needed for specific treks, included in your trek package.",
    },
    {
      title: "What documents should I bring for the trek?",
      answer: "Bring a valid photo ID, your booking confirmation, and any required medical certificates or disclaimers.",
    },
    {
      title: "Can you arrange accommodation if I arrive before the trek?",
      answer: "Yes, we can book accommodation for early arrivals. Contact us in advance to arrange this.",
    },
    {
      title: "What type of trekking shoes should I get?",
      answer: "Choose trekking shoes with good ankle support, a strong grip, and waterproofing. Break them in before the trek to avoid blisters.",
    },
    {
      title: "What if someone in our group needs to turn back early?",
      answer: "A guide will accompany anyone needing to turn back and help with necessary arrangements.",
    },
    {
      title: "What makes Trip My Soul the best choice for trekking?",
      answer: "We offer experienced guides, strict safety protocols, quality equipment, and top-notch customer service to ensure memorable trekking experiences.",
    },
  ];

  return (
    <Box>
   
      <FaQ FaQDetails={FaQDetails} />
    </Box>
  );
};

export default HomePageFaQ;
