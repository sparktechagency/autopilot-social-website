'use client'
import React, { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Box } from '@mui/material';
import { ChevronDown } from 'lucide-react';



const TermsCondition = () => {
    const content = `
    <h2>Terms and Conditions</h2>

    <p>
      <strong>1. Acceptance of Terms</strong><br />
      By accessing AmpSocial, you agree to be bound by these Terms and Conditions.
      This service is provided as a Growth Operating System for business use only.
    </p>

    <p>
      <strong>2. Content Responsibility</strong><br />
      AmpSocial utilizes Artificial Intelligence to generate content drafts.
      All content, scripts, and replies must be reviewed and approved by the User
      prior to publishing. The User assumes full legal responsibility for all
      content posted to their connected platforms.
    </p>

    <p>
      <strong>3. Platform Compliance</strong><br />
      Users must adhere to the terms of service of all connected third-party
      platforms (e.g., Instagram, TikTok, Google). AmpSocial is not liable for
      account restrictions, shadowbans, or suspensions resulting from user
      activity or platform policy changes.
    </p>

    <p>
      <strong>4. Usage Caps and Plans</strong><br />
      Service availability is governed by the specific limits of the selected
      plan (Starter, Growth, or Scale). This includes caps on weekly shorts, feed
      posts, and daily engagement targets.
    </p>

    <p>
      <strong>5. Billing and Subscription</strong><br />
      <strong>Trial Period:</strong> Subscriptions may begin with a trial. Unless
      cancelled, the account will be charged the chosen monthly or yearly rate at
      the end of the trial.<br />
      <strong>Yearly Discount:</strong> The 20% discount on yearly plans is
      applied as a single upfront payment.<br />
      <strong>Cancellation:</strong> Users may cancel at any time. Access
      continues until the end of the current billing cycle.
    </p>

    <p>
      <strong>6. Limitation of Liability</strong><br />
      AmpSocial provides tools to facilitate growth but does not guarantee
      specific financial outcomes, follower counts, or booking increases. The
      service is provided on an "as is" basis.
    </p>
  `
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

        }} className=" text-gray-300">
            {/* Header Section */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
                {/* Header */}
                <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 4 } }}>
                    <Typography
                        variant="h5"
                        component="h1"
                        fontWeight={600}

                        sx={{
                            fontSize: { xs: '2.0rem', sm: '2.5rem', md: '2.8rem' },
                            color: "black",
                            mb: 2,
                            pt: "00px",
                        }}
                    >
                        Terms & Conditions
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
                        Our mission is to create a seamless platform where artists can easily promote their music and influencers can earn by sharing music they love.
                    </Typography>
                </Box>

                {/* FAQ Accordions */}
                <div className="max-w-4xl mx-auto space-y-4 text-black" dangerouslySetInnerHTML={{ __html: content || "No content yet." }} />                
            </div>
        </Box>
    )
}

export default TermsCondition