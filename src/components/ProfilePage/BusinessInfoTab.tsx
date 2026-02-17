import {
    Box,
    Button,
    Paper,
    Stack,
    TextField,
    Typography,
} from '@mui/material';
import { CheckCircle } from 'lucide-react';

const accounts = [
    { name: 'Instagram', followers: '1.2K followers', connected: true },
    { name: 'Facebook', followers: '890 followers', connected: true },
    { name: 'TikTok', connected: false },
    { name: 'LinkedIn', connected: false },
    { name: 'YouTube', connected: false },
];

const BusinessInfoTab = () => {
    return (
        <Box sx={{display: "flex", flexDirection: "column", gap: 3}}>
            <Paper
                elevation={0}
                sx={{
                    borderRadius: 4,
                    p: { xs: 3, md: 5 },
                     background:
              'linear-gradient(135deg, #fffdf8 0%, #f9fff7 100%)',
                }}
            >
                <Typography fontSize={20} fontWeight={600} mb={3}>
                    Business Information
                </Typography>

                <Stack spacing={3}>
                    <Stack direction={{ xs: 'column', md: 'row' }} spacing={3}>
                        <TextField
                            fullWidth
                            label="Business Name *"
                            placeholder="Enter your business name"
                        />
                        <TextField
                            fullWidth
                            label="City/Region"
                            placeholder="Enter your business name"
                        />
                    </Stack>

                    <Stack direction={{ xs: 'column', md: 'row' }} spacing={3}>
                        <TextField
                            fullWidth
                            label="Website URL"
                            placeholder="https://yourbusiness.com (optional)"
                        />
                        <TextField
                            fullWidth
                            label="Primary goal"
                            placeholder="https://yourbusiness.com (optional)"
                        />
                    </Stack>

                    <TextField
                        label="Bio"
                        multiline
                        minRows={4}
                        placeholder="Write something about yourself..."
                    />

                    <Box display="flex" justifyContent="flex-start">
                        <Button
                            size="large"
                            variant="contained"
                            sx={{
                                px: 4,
                                borderRadius: 2,
                                background:
                                    'linear-gradient(90deg, #0f172a, #1e293b)',
                            }}
                            startIcon={<CheckCircle size={18} />}
                        >
                            Save Changes
                        </Button>
                    </Box>
                </Stack>
            </Paper>
            <Paper sx={{ borderRadius: 4, p: 4,  background:
              'linear-gradient(135deg, #fffdf8 0%, #f9fff7 100%)', }}>
                <Typography fontSize={20} fontWeight={600} mb={3}>
                    Connected account
                </Typography>

                <Stack spacing={2}>
                    {accounts.map((item) => (
                        <Paper
                            key={item.name}
                            variant="outlined"
                            sx={{
                                p: 2,
                                borderRadius: 2,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                            }}
                        >
                            <Box>
                                <Stack direction="row" alignItems="center" spacing={1}>
                                    <Box
                                        sx={{
                                            width: 8,
                                            height: 8,
                                            borderRadius: '50%',
                                            bgcolor: item.connected ? 'green' : 'gray',
                                        }}
                                    />
                                    <Typography fontWeight={500}>{item.name}</Typography>
                                </Stack>

                                {item.followers && (
                                    <Typography fontSize={13} color="text.secondary">
                                        {item.followers}
                                    </Typography>
                                )}
                            </Box>

                            <Button
                                variant={item.connected ? 'outlined' : 'contained'}
                                size="small"
                                className={`${item.connected ? 'border-2! border-black/20! text-black!' : 'bg-black!'} capitalize!`}
                            >
                                {item.connected ? 'Disconnect' : 'Connect'}
                            </Button>
                        </Paper>
                    ))}
                </Stack>
            </Paper>
        </Box>
    );
};

export default BusinessInfoTab;
