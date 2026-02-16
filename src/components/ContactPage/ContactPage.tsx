import {
    Box,
    Button,
    Card,
    CardContent,
    CardHeader,
    Container,
    Grid,
    TextField,
    Typography
} from '@mui/material';
import { Mail, MapPin, Phone } from 'lucide-react';
import Image from 'next/image';

export default function ContactPage() {

    return (
        <Box
            sx={{
                minHeight: '100vh',
                backgroundImage: "url('/Images/HeroImages/blendHero.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                py: { xs: 6, md: 10 },
                px: { xs: 2, sm: 4, md: 6 },
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                
            }}
        >
            <Container maxWidth="xl" className='md:mt-20'>
                {/* Header */}
                <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 9 } }}>
                    <Typography
                        variant="h3"
                        component="h1"
                        fontWeight={800}
                        
                        sx={{
                            fontSize: { xs: '2.1rem', sm: '2.8rem', md: '3.5rem' },
                            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            mb: 2,
                            pt: "00px",
                        }}
                    >
                        Get in <span style={{ color: '#2196f3' }}>Touch</span>
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
                        Our mission is to create a seamless platform where artists can easily promote their
                        music and influencers can earn by sharing music they love.
                    </Typography>
                </Box>

                {/* Main content - Form + Image */}
                <Grid container spacing={4} sx={{ mb: 8 }} justifyContent="center">
                    {/* Image column */}
                    <Grid size={{xs: 12, md:6}}>
                        <Box
                            sx={{
                                height: { xs: 320, sm: 420, md: '100%' },
                                borderRadius: 4,
                                overflow: 'hidden',
                                boxShadow: '0 10px 40px rgba(0,0,0,0.15)',
                                position: "relative",                                
                            }}
                            className="hidden lg:block"
                        >
                            <Image
                                src="/images/contact.jpg"
                                alt="Contact illustration"
                                height={700}
                                width={500}
                                style={{ objectFit: 'cover' }}
                                className='lg:h-full! max-h-[650px]! lg:w-full! rounded-2xl'
                                priority
                            />
                        </Box>
                    </Grid>

                    {/* Form column */}
                    <Grid size={{xs: 12, md:6}}>
                        <Card
                            elevation={6}
                            sx={{
                                height: '100%',
                                borderRadius: 4,
                                p: { xs: 3, sm: 4, md: 5 },
                                background: 'rgba(255, 255, 255, 0.96)',
                                backdropFilter: 'blur(8px)',
                            }}
                        >
                            <CardHeader
                                title={
                                    <Typography variant="h5" fontWeight={700} component="h2">
                                        Fill out the form
                                    </Typography>
                                }
                                sx={{ pb: 1, px: 0, pt: 0 }}
                            />

                            <CardContent sx={{ px: 0, pb: 0 }}>
                                <Box
                                    component="form"
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: 3,
                                    }}
                                >
                                    <Box>
                                        <Typography variant="subtitle2" fontWeight={600} color="text.secondary" mb={1}>
                                            Name *
                                        </Typography>
                                        <TextField fullWidth placeholder="John Doe" variant="outlined" />
                                    </Box>

                                    <Grid container spacing={2}>
                                        <Grid  size={{xs: 12, md:6}}>
                                            <Typography variant="subtitle2" fontWeight={600} color="text.secondary" mb={1}>
                                                Email *
                                            </Typography>
                                            <TextField fullWidth type="email" variant="outlined" />
                                        </Grid>

                                        <Grid  size={{xs: 12, md:6}}>
                                            <Typography variant="subtitle2" fontWeight={600} color="text.secondary" mb={1}>
                                                Phone
                                            </Typography>
                                            <TextField fullWidth type="tel" variant="outlined" />
                                        </Grid>
                                    </Grid>

                                    <Box>
                                        <Typography variant="subtitle2" fontWeight={600} color="text.secondary" mb={1}>
                                            Write your message
                                        </Typography>
                                        <TextField
                                            fullWidth
                                            multiline
                                            rows={5}
                                            placeholder="How can we help you today?"
                                            variant="outlined"
                                        />
                                    </Box>

                                    <Button
                                        size="large"
                                        variant="contained"
                                        sx={{
                                            py: 1.6,
                                            mt: 2,
                                            borderRadius: 3,
                                            fontWeight: 600,
                                            textTransform: 'none',
                                            fontSize: '1.05rem',
                                            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                            '&:hover': {
                                                background: 'linear-gradient(135deg, #764ba2 0%, #667eea 100%)',
                                                transform: 'translateY(-2px)',
                                                boxShadow: '0 12px 30px rgba(102, 126, 234, 0.4)',
                                            },
                                            transition: 'all 0.25s ease',
                                        }}
                                    >
                                        Send Message
                                    </Button>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>

                {/* Short marketing text */}
                <Typography
                    variant="body1"
                    sx={{
                        textAlign: 'center',
                        maxWidth: 900,
                        mx: 'auto',
                        mb: 8,
                        color: 'text.secondary',
                        fontSize: { xs: '0.95rem', md: '1.05rem' },
                        lineHeight: 1.8,
                    }}
                >
                    We built the AmpSocial Growth OS to be your digital marketing department. We combined
                    high-tier AI (OpenAI), industry-leading social infrastructure, and a "compliance-first"
                    engagement strategy to give you the presence of a full-scale agency for the price of a
                    software subscription.
                </Typography>

                {/* Contact Info Cards */}
                <Grid container spacing={3}>
                    {[
                        {
                            icon: Phone,
                            title: 'Phone',
                            value: '03 5432 1234',
                            gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                        },
                        {
                            icon: MapPin,
                            title: 'Location',
                            value: 'California',
                            gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                        },
                        {
                            icon: Mail,
                            title: 'E-mail',
                            value: 'info@marcc.com.au',
                            gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                        },
                    ].map((item, index) => (
                        <Grid size={{xs: 12, sm: 6, md:4}} key={index}>
                            <Card
                                elevation={3}
                                sx={{
                                    p: 3,
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 3,
                                    borderRadius: 3,
                                    transition: 'all 0.22s ease',
                                    '&:hover': {
                                        transform: 'translateY(-6px)',
                                        boxShadow: '0 12px 32px rgba(0,0,0,0.12)',
                                    },
                                }}
                            >
                                <Box
                                    sx={{
                                        width: 64,
                                        height: 64,
                                        borderRadius: 3,
                                        background: item.gradient,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        flexShrink: 0,
                                    }}
                                >
                                    <item.icon size={28} color="white" />
                                </Box>

                                <Box>
                                    <Typography variant="h6" fontWeight={700} sx={{ mb: 0.5 }}>
                                        {item.title}
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        color="primary.main"
                                        fontWeight={500}
                                        sx={{ wordBreak: 'break-word' }}
                                    >
                                        {item.value}
                                    </Typography>
                                </Box>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}