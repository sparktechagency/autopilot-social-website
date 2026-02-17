// components/onboarding/steps/Step6Summary.tsx
import {
  Box,
  Typography,
  Paper,
  List,
  ListItem,
  Divider,
  LinearProgress,
  Button,
  Stack,
} from '@mui/material';
import { CheckCircle, Sparkles } from 'lucide-react';

type Props = {
  data: any;
  onBack?: () => void;
  onSubmit?: () => void;
};

export default function Step6Summary({ data, onBack, onSubmit }: Props) {
  const getGoalLabel = () => {
    switch (data.goal) {
      case 'followers':
        return 'Followers';
      case 'leads':
        return 'Leads';
      case 'bookings':
        return 'Bookings';
      default:
        return '—';
    }
  };

  const connectedSocials = [
    data.instagram && 'Instagram',
    data.facebook && 'Facebook',
    data.tiktok && 'TikTok',
  ].filter(Boolean);

  return (
    <Box maxWidth={900} maxHeight={400} mx="auto" overflow="auto">          
      <Typography variant="h5" fontWeight={700} mb={2}>
        Ready to generate your content!
      </Typography>

      {/* Summary Card */}
      <Paper variant="outlined" sx={{ p: 4, mb: 3 }}>
        <List disablePadding>
          {[
            ['Business', data.businessName || '—'],
            ['Industry', data.industry || '—'],
            ['Goal', getGoalLabel()],
            ['Photos', `${data.photos?.length || 0} uploaded`],
            [
              'Socials',
              connectedSocials.length
                ? connectedSocials.join(', ')
                : '0 connected',
            ],
          ].map(([label, value], index) => (
            <Box key={label}>
              <ListItem
                disableGutters
                sx={{ py: .8, display: 'flex', justifyContent: 'space-between' }}
              >
                <Typography color="text.secondary">{label}:</Typography>
                <Typography fontWeight={500}>{value}</Typography>
              </ListItem>
              {index !== 4 && <Divider />}
            </Box>
          ))}
        </List>
      </Paper>

      {/* What happens next */}
      <Paper
        sx={{
          p: 4,          
          borderRadius: 3,
          background:
            'linear-gradient(135deg, #f0f7ff 0%, #f6f1ff 100%)',
        }}
      >
        <Typography variant="h6" fontWeight={700} mb={2}>
          What happens next?
        </Typography>

        <Stack spacing={1.5}>
          {[
            'AI analyzes your business and creates a custom brand voice',
            'Week 1 content pack generated with 5 shorts + 2 posts',
            'Daily engagement targets and to-do list created',
            'Progress tracking and analytics initialized',
          ].map((text) => (
            <Stack direction="row" spacing={1.5} key={text}>
              <CheckCircle size={20} color="#16a34a" />
              <Typography>{text}</Typography>
            </Stack>
          ))}
        </Stack>
      </Paper>
    </Box>
  );
}
