import { Card } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

import {
    Box,
    Button,
    CardActions,
    CardContent,
    CardHeader,
    Divider,
    TextField,
    Typography
} from '@mui/material';


import { FcGoogle } from 'react-icons/fc';
import PrimaryButton from '../Shared/PrimaryButton';


const LoginPage = () => {
    return (
        <div
            style={{
                backgroundImage: "url('/Images/HeroImages/blendHero.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
            className="min-h-screen flex flex-col items-center justify-center text-center"
        >
            <Box
                sx={{
                    backdropFilter: 'blur(2.5px)',
                    border: '2px solid rgba(255,255,255,0.2)',
                    borderRadius: 3,
                    py: 5,
                    px: { md: 18 },
                }}
            >
                <Card
                    sx={{
                        width: { xs: '90%', md: '100%' },
                        maxWidth: 420,
                        mx: 'auto',
                        p: { xs: 2, sm: 3 },
                    }}
                >
                    {/* Header */}
                    <CardHeader
                        sx={{ textAlign: 'center', pb: 1 }}
                        title={
                            <>
                                <Box
                                    sx={{
                                        position: 'relative',
                                        width: 150,
                                        height: 70,
                                        mx: 'auto',
                                        mb: 1,
                                    }}
                                >
                                    <Image
                                        src="/Images/logo.png"
                                        alt="Whop Logo"
                                        fill
                                        style={{ objectFit: 'contain' }}
                                        priority
                                    />
                                </Box>

                                <Typography variant="h6" fontWeight={500}>
                                    Sign in to AMPSOCIAL
                                </Typography>
                            </>
                        }
                    />

                    {/* Content */}
                    <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                        <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                            <Box>
                                <Typography variant="body2" align="left" fontWeight={600} color="text.secondary">
                                    Email
                                </Typography>
                                <TextField
                                    fullWidth
                                    type="email"
                                    placeholder="example@example.com"
                                    size="medium"
                                    sx={{ mt: 1 }}
                                />
                            </Box>
                            <Box>
                                <Typography variant="body2" align="left" fontWeight={600} color="text.secondary">
                                    Password
                                </Typography>
                                <TextField
                                    fullWidth
                                    type="password"
                                    placeholder="Min 6 character"
                                    size="medium"
                                    sx={{ mt: 1 }}
                                />
                            </Box>

                            {/* <Button
                                type="submit"
                                size="large"
                                variant="contained"
                                fullWidth
                            >

                            </Button> */}
                            <PrimaryButton  type="submit"
                                size="medium" className='rounded-lg!'>
                                Login
                            </PrimaryButton>
                        </Box>

                        <Divider />

                        {/* Social Login */}
                        {/* <Button
                            variant="outlined"
                            size="large"
                            fullWidth
                            sx={{ height: 48, gap: 1 }}
                        >
                            <FcGoogle size={20} />
                            Google
                        </Button> */}
                    </CardContent>

                    {/* Footer */}
                    <CardActions
                        sx={{
                            flexDirection: 'column',
                            gap: 1,
                            textAlign: 'center',
                            pb: 2,
                        }}
                    >
                        <Typography variant="body2" color="text.secondary">
                            Don&apos;t have an account?{' '}
                            <Link href="/signup" style={{ fontWeight: 700, textDecoration: 'none' }}>
                                Sign up
                            </Link>
                        </Typography>

                        <Typography variant="caption" color="text.secondary">
                            By signing in you agree to Whop&apos;s{' '}
                            <Link href="/terms-condition" style={{ fontWeight: 500 }}>
                                Terms of Service
                            </Link>{' '}
                            and{' '}
                            <Link href="/privacy-policy" style={{ fontWeight: 500 }}>
                                Privacy Policy
                            </Link>
                        </Typography>
                    </CardActions>
                </Card>
            </Box>
        </div>
    )
}

export default LoginPage
