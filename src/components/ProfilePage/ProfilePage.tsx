'use client'
import {
    Avatar,
    Box,
    Chip,
    Container,
    IconButton,
    Paper,
    Stack,
    styled,
    Tab,
    Tabs,
    Typography
} from '@mui/material';
import { Camera } from 'lucide-react';
import React from 'react';
import BusinessInfoTab from './BusinessInfoTab';
import GeneralTab from './GeneralTab';
import SecurityTab from './SecurityTab';


const StyledTabs = styled((props) => (
    <Tabs
        {...props}
        TabIndicatorProps={{
            children: <span className="MuiTabs-indicatorSpan" />,
        }}
    />
))({
    minHeight: 48,
    '& .MuiTabs-indicator': {
        display: 'none',
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },
    '& .MuiTabs-indicatorSpan': {
        display: 'none',
        maxWidth: 40,
        width: '100%',
        backgroundColor: '#635ee7',
        borderRadius: 4,
    },
});


const StyledTab = styled((props) => (
    <Tab disableRipple {...props} />
))(({ theme }) => ({
    textTransform: 'none',
    fontWeight: 500,
    fontSize: theme.typography.pxToRem(15),
    minHeight: 40,
    padding: theme.spacing(1.2, 2.5),
    borderRadius: 8,

    // default (initial)
    color: '#000',

    // active tab
    '&.Mui-selected': {
        color: '#000',
        backgroundColor: '#ffffff',
        fontWeight: 600
    },

    '&.Mui-focusVisible': {
        backgroundColor: 'rgba(99, 94, 231, 0.15)',
    },
}));


const ProfilePage = () => {
    const [tab, setTab] = React.useState(0);
    const [value, setValue] = React.useState(0);

    return (
        <Box
            sx={{
                minHeight: '100vh',
                backgroundImage: "url('/Images/HeroImages/blendHero.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                py: { xs: 10, sm:15, lg: 20 },
            }}
        >
            <Container maxWidth="lg">

                {/* ================= Profile Header ================= */}
                <Paper
                    elevation={0}
                    sx={{
                        p: 4,
                        borderRadius: 4,
                        border: 2,
                        borderColor: "rgba(173, 216, 230, 0.5)",
                        background:
                            'linear-gradient(135deg, #eef4ff 0%, #f9f9ff 100%)',
                        mb: 5,
                    }}
                >
                    <Stack direction="row" spacing={3} alignItems="center">
                        <Box position="relative">
                            <Avatar
                                sx={{
                                    width: {xs: 60, sm:70, md: 90},
                                    height: {xs: 60, sm:70, md: 90},
                                    fontSize: 36,
                                    bgcolor: '#6C63FF',
                                }}
                            >
                                J
                            </Avatar>

                            <IconButton
                                sx={{
                                    position: 'absolute',
                                    bottom: 0,
                                    right: 0,
                                    bgcolor: '#2563eb',
                                    color: '#fff',
                                    '&:hover': { bgcolor: '#1e40af' },
                                }}
                                size="small"
                            >
                                <Camera size={16} />
                            </IconButton>
                        </Box>

                        <Box>
                            <Typography fontSize={22} fontWeight={600}>
                                John Doe
                            </Typography>
                            <Typography color="text.secondary">
                                john@example.com
                            </Typography>

                            <Stack direction="row"  spacing={1} mt={1}>
                                <Chip
                                    label="Owner"
                                    color="primary"
                                    size="small"
                                />
                                <Chip
                                    label="Workspace: workspace-1"
                                    variant="outlined"
                                    size="small"
                                />
                            </Stack>
                        </Box>
                    </Stack>
                </Paper>

                {/* ================= Tabs ================= */}
                <Paper
                    elevation={0}
                    sx={{
                        borderRadius: 3,
                        p: 1,
                        mb: 4,
                        bgcolor: "transparent"
                    }}
                >

                    {/* Tabs */}
                    <Paper sx={{ borderRadius: 3, p: 1, mb: 4, bgcolor: '#EFF6FF' }}>
                        {/* @ts-ignore */}
                        <StyledTabs value={tab} onChange={(_: any, v: any) => setTab(v)}>
                            {/* @ts-ignore */}
                            <StyledTab label="General" />
                            {/* @ts-ignore */}
                            <StyledTab label="Business Info" />
                            {/* @ts-ignore */}
                            <StyledTab label="Security" />
                        </StyledTabs>
                    </Paper>

                    {/* Tab Content */}
                    {tab === 0 && <GeneralTab />}
                    {tab === 1 && <BusinessInfoTab />}
                    {tab === 2 && <SecurityTab />}

                </Paper>
            </Container>
        </Box>
    );
};

export default ProfilePage;