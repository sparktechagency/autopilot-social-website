'use client'
import React from 'react';
import { Typography, Box } from '@mui/material';

const PrivacyPolicy = () => {
    const content = `
    <h2>Privacy Policy</h2>

    <p>
      <strong>Last Updated:</strong> February 2026<br />
      At AmpSocial, we are committed to protecting your privacy and ensuring the security of your personal information.
      This Privacy Policy explains how we collect, use, disclose, and safeguard your data when you use our platform.
    </p>

    <p>
      <strong>1. Information We Collect</strong><br />
      <strong>Personal Information:</strong> We collect information you provide directly, including name, email address, 
      phone number, payment details, and business information when you create an account or subscribe to our services.<br />
      <strong>Social Media Data:</strong> When you connect third-party platforms (Instagram, TikTok, YouTube, etc.), 
      we collect profile information, content data, engagement metrics, and follower analytics as authorized by you.<br />
      <strong>Usage Data:</strong> We automatically collect information about how you interact with AmpSocial, 
      including IP address, browser type, device information, pages visited, and time spent on the platform.<br />
      <strong>AI-Generated Content:</strong> Content created using our AI tools is stored to improve service quality 
      and provide you with a content history.
    </p>

    <p>
      <strong>2. How We Use Your Information</strong><br />
      We use the collected information to:<br />
      • Provide, maintain, and improve our services<br />
      • Generate AI-powered content and recommendations tailored to your business<br />
      • Process payments and manage subscriptions<br />
      • Send service updates, marketing communications, and promotional offers<br />
      • Analyze usage patterns to enhance user experience<br />
      • Ensure platform security and prevent fraud<br />
      • Comply with legal obligations and enforce our Terms and Conditions
    </p>

    <p>
      <strong>3. Information Sharing and Disclosure</strong><br />
      <strong>Third-Party Platforms:</strong> We share data with connected social media platforms as necessary 
      to publish content and retrieve analytics on your behalf.<br />
      <strong>Service Providers:</strong> We work with trusted third-party vendors for payment processing, 
      cloud hosting, analytics, and customer support. These providers access data only to perform services on our behalf.<br />
      <strong>Legal Requirements:</strong> We may disclose information to comply with legal obligations, 
      court orders, or government requests.<br />
      <strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, 
      your information may be transferred to the acquiring entity.<br />
      <strong>We do not sell your personal information to third parties.</strong>
    </p>

    <p>
      <strong>4. Data Security</strong><br />
      We implement industry-standard security measures including encryption, secure servers, and regular security audits 
      to protect your data. However, no method of transmission over the internet is 100% secure, and we cannot guarantee 
      absolute security.
    </p>

    <p>
      <strong>5. Data Retention</strong><br />
      We retain your personal information for as long as your account is active or as needed to provide services. 
      After account deletion, we may retain certain data for legal compliance, dispute resolution, and to prevent fraud. 
      AI-generated content history is retained for 90 days after account termination unless otherwise requested.
    </p>

    <p>
      <strong>6. Your Rights and Choices</strong><br />
      <strong>Access and Update:</strong> You can access and update your personal information through your account settings.<br />
      <strong>Data Deletion:</strong> You may request deletion of your account and associated data by contacting support.<br />
      <strong>Marketing Opt-Out:</strong> You can unsubscribe from marketing emails using the link in our communications.<br />
      <strong>Cookie Management:</strong> You can control cookie preferences through your browser settings.<br />
      <strong>Platform Disconnection:</strong> You can disconnect third-party social media accounts at any time.
    </p>

    <p>
      <strong>7. Cookies and Tracking Technologies</strong><br />
      We use cookies, pixels, and similar technologies to enhance user experience, analyze traffic, and personalize content. 
      You can disable cookies in your browser settings, though this may limit platform functionality.
    </p>

    <p>
      <strong>8. Third-Party Links</strong><br />
      Our platform may contain links to external websites or services. We are not responsible for the privacy practices 
      of these third parties. We encourage you to review their privacy policies before providing any personal information.
    </p>

    <p>
      <strong>9. Children's Privacy</strong><br />
      AmpSocial is intended for business use and is not designed for individuals under 18 years of age. 
      We do not knowingly collect information from minors. If we become aware of such data, we will delete it promptly.
    </p>

    <p>
      <strong>10. International Data Transfers</strong><br />
      Your information may be transferred to and processed in countries outside your jurisdiction. 
      We ensure appropriate safeguards are in place to protect your data in accordance with applicable privacy laws.
    </p>

    <p>
      <strong>11. AI and Automated Decision-Making</strong><br />
      Our platform uses AI to generate content suggestions, optimize posting schedules, and provide growth recommendations. 
      You retain full control over all content published and can override any AI-generated suggestions.
    </p>   
  `;

    return (
        <Box sx={{
            minHeight: '100vh',
            backgroundImage: "url('/Images/HeroImages/blendHero.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'fixed',
            backgroundRepeat: 'no-repeat',
            py: { xs: 6, md: 10 },
            px: { xs: 2, sm: 4, md: 6 },
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }} className="text-gray-300">
            {/* Header Section */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
                {/* Header */}
                <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
                    <Typography
                        variant="h5"
                        component="h1"
                        fontWeight={600}
                        sx={{
                            fontSize: { xs: '2.0rem', sm: '2.5rem', md: '2.8rem' },
                            color: "black",
                            mb: 2,
                        }}
                    >
                        Privacy Policy
                    </Typography>

                    <Typography
                        variant="body1"
                        color="text.secondary"
                        sx={{
                            maxWidth: 760,
                            mx: 'auto',
                            fontSize: { xs: '1rem', md: '1.1rem' },
                            lineHeight: 1.7,
                        }}
                    >
                        Your privacy matters to us. Learn how we collect, use, and protect your information when you use AmpSocial.
                    </Typography>
                </Box>

                {/* Privacy Policy Content */}
                <Box 
                    className="max-w-4xl mx-auto text-black"
                    sx={{
                        '& h2': {
                            fontSize: { xs: '1.5rem', md: '1.75rem' },
                            fontWeight: 600,
                            mb: 3,
                            mt: 2,
                        },
                        '& p': {
                            mb: 3,
                            lineHeight: 1.8,
                            fontSize: { xs: '0.95rem', md: '1rem' },
                        },
                        '& strong': {
                            fontWeight: 600,
                            color: '#000',
                        },                                                                                                
                    }}
                    dangerouslySetInnerHTML={{ __html: content }}
                />
            </div>
        </Box>
    );
};

export default PrivacyPolicy;