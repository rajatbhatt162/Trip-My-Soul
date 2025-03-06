import { Box, Container, Grid, Link, Typography } from '@mui/material';
import React from 'react';

const sections = [
    {
        title: "1. Information We Collect",
        introText: "We collect information to enhance our services, tailor your user experience, process transactions, and for internal analytics and administrative purposes. The types of information we may collect include:",
        subsections: [
            {
                data: [
                    "Personal Identification Information: This includes your name, email address, telephone number, and postal address, collected during registration, tour booking, or newsletter subscription.",
                    "Travel Information: Details about your travel preferences, such as destinations, dates, dietary requirements, and other information relevant to customizing your travel experience.",
                    "Payment Information: To process payments for our services, we collect payment details like credit/debit card numbers and billing addresses. This information is securely processed by our payment processors, and we do not store your debit/credit card, net banking, or UPI details on our servers.",
                    "Technical and Usage Information: When you visit our website, we automatically collect information sent by your browser or mobile device, including IP address, browser type, operating system, referral URLs, device information, and interaction patterns with our services.",
                ]
            }
        ]
    },
    {
        title: "2. How We Use Your Information",
        introText: "Your information is used for the following purposes:",
        data: [
            "Service Provisioning: Managing bookings, providing customer support, and communicating regarding your travel arrangements and inquiries.",
            "Personalization: Offering personalized travel recommendations and content based on your preferences and interactions.",
            "Marketing and Promotions: With your consent, we may send promotional messages, marketing, advertising, and other relevant information.",
            "Improvement and Development: Analyzing service usage to enhance our website and offerings.",
            "Legal Compliance: Complying with applicable laws, regulations, and legal processes."
        ]
    },
    {
        title: "3. Sharing and Disclosure of Information",
        introText: "We do not sell or rent personal information to third parties. However, we may share your information with:",
        data: [
            "Service Providers: Third parties providing services such as payment processing, data analysis, email delivery, hosting, and customer service.",
        ]
    },
    {
        title: "4. Data Security",
        description: "We implement appropriate technical and organizational measures to protect the personal information we collect and process. Despite our efforts, no security measures are completely impenetrable, and we cannot guarantee the security of data transmission over the internet."
    },
    {
        title: "5. International Transfers",
        description: "Your information may be transferred to computers located outside your jurisdiction. We ensure such transfers comply with applicable data protection laws."
    },
    {
        title: "6. Your Rights",
        description: "You have certain rights regarding your personal information, including the right to access, correct, delete, or limit the use of your personal information. You may also have the right to object to processing or to withdraw consent where applicable."
    },
    {
        title: "7. Cookies and Tracking Technologies",
        description: "We use cookies and similar tracking technologies to monitor activity on our service. You can choose to accept or refuse these cookies."
    },
    {
        title: "8. Changes to This Privacy Policy",
        description: "We may update this Privacy Policy periodically. Any changes will be notified by posting the new Privacy Policy on our website."
    },
    {
        title: "9. Contact Us",
        description: "For any questions or concerns about our privacy practices, please reach out to us at:",
    }
];

const PrivacyPolicyContent = () => {
    return (
        <Box >
            <Container>
                <Grid container>
                    <Grid item xs={12}>
                        <Box>
                            <Typography sx={{ fontWeight: '600', fontSize: '20px', color: '#6F6F6F', padding: '2rem 0' }} variant='h5'>
                                Personal Information
                            </Typography>
                            <Typography sx={{ fontSize: '18px', fontWeight: '300', color: '#6F6F6F', lineHeight: '35px' }}>
                                This Privacy Policy applies to any individual ("User") who purchases, intends to purchase, or inquires about any product(s) or service(s) offered by Trip My Soul Pvt. Ltd. through any of our customer interface channels, including our website and mobile site. Throughout this Privacy Policy, "you" or "your" refers to the User, while "we," "us," or "our" refers to Trip My Soul Pvt. Ltd. The term "Website" encompasses both our website and mobile site. By using or accessing the Website, you agree to the terms of this Privacy Policy. If you disagree, please refrain from using or accessing our Website.
                            </Typography>
                            <Typography sx={{ fontSize: '18px', padding: '2rem 0', fontWeight: '300', color: '#6F6F6F', lineHeight: '35px' }}>
                                Please note that this Privacy Policy does not extend to any third-party websites, mobile sites, or mobile apps, even if they are linked to our Website. Users should be aware that the information and privacy practices of our business partners, advertisers, sponsors, or other linked sites may significantly differ from this Privacy Policy. Therefore, we recommend reviewing their privacy statements and policies.
                            </Typography>
                            {sections.map((section, index) => (
                                <Box key={index}>
                                    <Typography sx={{ fontWeight: '600', fontSize: '20px', color: '#6F6F6F', padding: '1rem 0' }}>{section.title}</Typography>
                                    {section.introText && (
                                        <Typography sx={{ fontWeight: '500', fontSize: '18px', color: '#6F6F6F', }}>
                                            {section.introText}
                                        </Typography>
                                    )}
                                    {section.description && (
                                        <Typography sx={{ fontWeight: '500', fontSize: '18px', color: '#6F6F6F' }}>
                                            {section.description}
                                        </Typography>
                                    )}
                                    {section.subsections ? section.subsections.map((subsection, subIndex) => (
                                        <Box key={subIndex}>
                                            <Box>
                                                <ul>
                                                    {subsection.data.map((item, idx) => (
                                                        <li key={idx}>
                                                            <Typography sx={{ fontSize: '18px', fontWeight: '300', color: '#6F6F6F', lineHeight: '37px' }}>
                                                                <span style={{ fontWeight: '700' }}>{item.split(':')[0]}:</span>
                                                                {item.split(':')[1]}
                                                            </Typography>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </Box>
                                            <Typography sx={{ fontSize: '18px', padding: '1rem 0', fontWeight: '300', color: '#6F6F6F', lineHeight: '35px' }}>
                                                For international bookings, Users may need to provide details such as PAN information or passport details to comply with regulations like the Liberalized Remittance Scheme (LRS) of RBI. We only use this information as required by law.
                                            </Typography>
                                        </Box>
                                    )) : (
                                        <Box>
                                            <ul>
                                                {section.data && section.data.map((item, idx) => (
                                                    <li key={idx}>
                                                        <Typography sx={{ fontSize: '18px', fontWeight: '300', color: '#6F6F6F', lineHeight: '37px' }}>
                                                            <span style={{ fontWeight: '700' }}>{item.split(':')[0]}:</span>
                                                            {item.split(':')[1]}
                                                        </Typography>
                                                    </li>
                                                ))}
                                            </ul>
                                        </Box>
                                    )}
                                </Box>
                            ))}
                            <Box>
                                Email:   <Link sx={{ fontWeight: '700' }} href="#">tripmysoulteam@gmail.com </Link>
                            </Box>

                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};
export default PrivacyPolicyContent;
