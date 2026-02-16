'use client'
import React, { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Box } from '@mui/material';
import { ChevronDown } from 'lucide-react';

export default function FAQPage() {
    const [expanded, setExpanded] = useState('panel1');

    const handleChange = (panel: any) => (event: any, isExpanded: any) => {
        setExpanded(isExpanded ? panel : false);
    };

    const faqs = [
        {
            id: 'panel1',
            question: 'How does AmpSocial work?',
            answer: 'AmpSocial connects artists with influencers through an automated platform. Artists submit their music, and our AI matches them with relevant influencers who can promote their tracks to targeted audiences. Influencers share the music they love, earn commissions, and help artists grow their fanbase organically.'
        },
        {
            id: 'panel2',
            question: 'Which platforms are supported?',
            answer: 'AmpSocial currently supports major social media platforms including Instagram, TikTok, YouTube, and Twitter. We continuously work to expand our platform integrations to provide the widest reach possible for artists and influencers.'
        },
        {
            id: 'panel3',
            question: 'How much time will I save?',
            answer: 'Artists typically save 10-15 hours per week that would otherwise be spent on outreach and coordination. Our automated matching system eliminates the need for manual influencer research, negotiations, and follow-ups, letting you focus on creating music.'
        },
        {
            id: 'panel4',
            question: "What if I don't like the AI-generated content?",
            answer: 'You have full control over the content. Our AI provides suggestions and drafts, but you can always edit, customize, or completely rewrite any content before it goes live. We also offer A/B testing to help you find what resonates best with your audience.'
        },
        {
            id: 'panel5',
            question: 'How does billing work?',
            answer: 'We offer flexible pricing plans based on your needs. Artists can choose between monthly subscriptions or pay-per-campaign options. Influencers earn commission-based payments for successful promotions. All transactions are handled securely through our platform with transparent pricing and no hidden fees.'
        }
    ];

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
                        FAQS
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
                <div className="max-w-4xl mx-auto space-y-4">
                    {faqs.map((faq) => (
                        <Accordion
                            key={faq.id}
                            expanded={expanded === faq.id}
                            onChange={handleChange(faq.id)}
                            sx={{
                                backgroundColor: '#f5f5f0',
                                boxShadow: 'none',
                                '&:before': {
                                    display: 'none',
                                },
                                '&.Mui-expanded': {
                                    margin: '0 0 16px 0',
                                },
                                borderRadius: '8px !important',
                            }}
                        >
                            <AccordionSummary
                                expandIcon={
                                    <ChevronDown
                                        className={`w-6 h-6 text-gray-700 transition-transform duration-300 ${expanded === faq.id ? 'rotate-180' : ''
                                            }`}
                                    />
                                }
                                sx={{
                                    padding: '20px 24px',
                                    minHeight: '72px',
                                    '&.Mui-expanded': {
                                        minHeight: '72px',
                                    },
                                    '& .MuiAccordionSummary-content': {
                                        margin: '12px 0',
                                    },
                                    '& .MuiAccordionSummary-content.Mui-expanded': {
                                        margin: '12px 0',
                                    },
                                }}
                            >
                                <Typography
                                    fontWeight={700}
                                    className="text-lg sm:text-xl font-medium text-gray-900"
                                    sx={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                                >
                                    {faq.question}
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails
                                sx={{
                                    padding: '0 24px 24px 24px',
                                    borderTop: '1px solid #e0e0e0',
                                }}
                            >
                                <Typography
                                    className="text-base text-gray-600 leading-relaxed pt-4"
                                    sx={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                                >
                                    {faq.answer}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </div>
            </div>
        </Box>
    );
}