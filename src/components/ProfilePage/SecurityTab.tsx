import {
  Box,
  Button,
  Divider,
  Paper,
  Stack,
  Switch,
  Typography,
} from '@mui/material';
import { Shield, LogOut } from 'lucide-react';

const SecurityTab = () => {
  return (
    <Stack spacing={4}>
      {/* Security */}
      <Paper sx={{ borderRadius: 4, p: 4,  background:
              'linear-gradient(135deg, #fffdf8 0%, #f9fff7 100%)', }}>
        <Typography fontSize={20} fontWeight={600} mb={3}>
          Security
        </Typography>

        {/* 2FA */}
        <Paper
          sx={{
            p: 3,            
             background: '#E5F0FF',
            borderRadius: 2,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Box >
            <Typography fontWeight={500}>
              Two-Factor Authentication
            </Typography>
            <Typography fontSize={14} color="primary">
              Add an extra layer of security to your account
            </Typography>
          </Box>
          <Switch />
        </Paper>

        <Divider sx={{ my: 4 }} />

        {/* Password */}
        <Typography fontWeight={600} mb={1}>
          Password
        </Typography>
        <Typography fontSize={14} color="text.secondary" mb={2}>
          Last changed 45 days ago. We recommend changing your password regularly.
        </Typography>

        <Button
          variant="outlined"
          startIcon={<Shield size={18} />}
        >
          Change Password
        </Button>
      </Paper>

      {/* Danger Zone */}
      <Paper
        sx={{
          borderRadius: 4,
          p: 4,
          bgcolor: '#fff1f1',
          border: '1px solid #ffcaca',
        }}
      >
        <Typography fontSize={22} fontWeight={700} color="#82181A">
          Danger Zone
        </Typography>

        <Typography color="#9F0712" mt={1} mb={3}>
          Logging out will end your current session. You'll need to log in again.
        </Typography>

        <Button
          fullWidth
          variant="outlined"
          color="error"
          startIcon={<LogOut size={18} />}
          sx={{ height: 48, bgcolor: "white", fontWeight:600 }}
        >
          Log Out
        </Button>
      </Paper>
    </Stack>
  );
};

export default SecurityTab;
