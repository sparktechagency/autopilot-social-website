'use client'
import {
    Box,
    Card,
    CardContent,
    Grid,
    Typography
} from '@mui/material';
import {
    CheckCircle as CheckIcon,
    Clock,
    Info as InfoIcon,
    Star as StarIcon,
} from 'lucide-react'; // or '@mui/icons-material' if you prefer MUI icons

const StatCard = ({ icon: Icon, color, label, value, bgColor }: any) => {
    return (
        <Card
            elevation={0}
            sx={{
                borderRadius: 3,
                overflow: 'hidden',
                height: '100%',
                border: '1px solid',
                borderColor: 'divider',
                transition: 'all 0.2s ease',
                '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 12px 24px rgba(0,0,0,0.08)',
                },
            }}
        >
            <CardContent
                sx={{
                    px: 2,
                    py: 0,
                    pt: 2,
                    display: 'flex',
                    gap: 2,
                    alignItems: 'center',
                    textAlign: 'center',
                    height: '100%',
                    bgcolor: 'background.paper',
                }}
            >
                <Box
                    sx={{
                        width: 56,
                        height: 56,
                        borderRadius: '50%',
                        bgcolor: `${color}.main`,
                        color: 'white',
                        display: 'flex',
                        flexWrap: "wrap",
                        flexShrink: 0,
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: `0 4px 12px ${color}.main30`,
                    }}>
                    <Icon size={28} />
                </Box>

                <Box textAlign="start">
                    <Typography
                        variant="h5"
                        fontWeight={700}
                        color={color + '.main'}
                    >
                        {value}
                    </Typography>

                    <Typography
                        variant="subtitle1"
                        color="text.primary"
                        fontWeight={500}
                    >
                        {label}
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
};

const ReviewStats = () => {

    const stats = [
        {
            icon: StarIcon,
            color: 'warning', // yellow/orange
            label: 'Avg Rating',
            value: '4.2',
            bgColor: 'rgba(255, 193, 7, 0.08)', // very light yellow
        },
        {
            icon: Clock,
            color: 'error',
            label: 'Pending',
            value: '3',
            bgColor: 'rgba(255, 193, 7, 0.08)',
        },
        {
            icon: CheckIcon,
            color: 'success',
            label: 'Replied',
            value: '2',
            bgColor: 'rgba(76, 175, 80, 0.08)',
        },
        {
            icon: InfoIcon,
            color: 'info',
            label: 'This Week',
            value: '5',
            bgColor: 'rgba(33, 150, 243, 0.08)',
        },
    ];

    return (
        <Box sx={{ p: { xs: 2 }}}>
            <Grid container spacing={{ xs: 1, sm: 2,}}>
                {stats.map((stat, index) => (
                    <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                        <StatCard
                            icon={stat.icon}
                            color={stat.color}
                            label={stat.label}
                            value={stat.value}
                            bgColor={stat.bgColor}
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default ReviewStats;