import {
  Avatar,
  Box,
  Button,
  IconButton,
  Paper,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { Camera, CheckCircle } from 'lucide-react';

const GeneralTab = () => {
  return (
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
            Personal Information
          </Typography>

          <Stack spacing={3}>
            <Stack direction={{ xs: 'column', md: 'row' }} spacing={3}>
              <TextField
                fullWidth
                label="Full Name"
                placeholder="Enter your full name"
              />
              <TextField
                fullWidth
                label="Email Address"
                placeholder="Enter your email"
              />
            </Stack>

            <Stack direction={{ xs: 'column', md: 'row' }} spacing={3}>
              <TextField
                fullWidth
                label="Phone Number"
                placeholder="+880 **********"
              />
              <TextField
                fullWidth
                label="Location"
                placeholder="City, Country"
              />
            </Stack>

            <TextField
              label="Bio"
              multiline
              minRows={4}
              placeholder="Write something about yourself..."
            />

            <Box display="flex" justifyContent="flex-end">
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
  );
};

export default GeneralTab;
``