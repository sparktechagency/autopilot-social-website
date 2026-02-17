// components/onboarding/steps/Step6Summary.tsx
import {
  Box,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from '@mui/material';
import { CheckCircle } from 'lucide-react';

type Props = {
  data: any;
};

export default function Step6Summary({ data }: Props) {
  const getGoalLabel = () => {
    switch (data.goal) {
      case 'followers':
        return 'Grow Followers';
      case 'leads':
        return 'Generate Leads';
      case 'bookings':
        return 'Drive Bookings';
      default:
        return 'Not selected';
    }
  };

  return (
    <Box sx={{ textAlign: 'center' }}>
      <Typography variant="h5" gutterBottom>
        Ready to generate your content!
      </Typography>

      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        One click and your first week content pack will be created
      </Typography>

      {/* Summary */}
      <Paper variant="outlined" sx={{ p: 4, mb: 5, textAlign: 'left' }}>
        <Typography variant="subtitle1" gutterBottom sx={{ mb: 3 }}>
          Your setup summary
        </Typography>

        <List disablePadding>
          <ListItem>
            <ListItemText
              primary="Business"
              secondary={data.businessName || '—'}
            />
          </ListItem>

          <Divider />

          <ListItem>
            <ListItemText primary="Goal" secondary={getGoalLabel()} />
          </ListItem>

          <Divider />

          <ListItem>
            <ListItemText
              primary="Photos"
              secondary={`${data.photos?.length || 0} uploaded`}
            />
          </ListItem>

          <Divider />

          <ListItem>
            <ListItemText
              primary="Social profiles connected"
              secondary={
                [
                  data.instagram && 'Instagram',
                  data.facebook && 'Facebook',
                  data.tiktok && 'TikTok',
                ]
                  .filter(Boolean)
                  .join(', ') || 'None'
              }
            />
          </ListItem>
        </List>
      </Paper>

      {/* What happens next */}
      <Paper
        sx={{
          p: 4,
          bgcolor: 'grey.50',
          borderRadius: 3,
          textAlign: 'left',
        }}
      >
        <Typography variant="h6" gutterBottom>
          What happens next?
        </Typography>

        <List>
          {[
            'AI analyzes your business and creates a custom brand voice',
            'Week 1 content pack generated (5 shorts + 2 posts)',
            'Daily engagement targets and to-do list created',
            'Progress tracking and analytics initialized',
          ].map((text, i) => (
            <ListItem key={i} disableGutters>
              <ListItemIcon sx={{ minWidth: 36 }}>
                <CheckCircle size={20} color="#16a34a" />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Box>
  );
}
