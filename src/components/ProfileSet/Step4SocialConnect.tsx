// components/onboarding/steps/Step4SocialConnect.tsx
import {
  Stack,
  Typography,
  TextField,
  InputAdornment,
  Box,
  Alert,
  AlertTitle,
} from '@mui/material';
import { Instagram, Facebook, Music, Lightbulb } from 'lucide-react';

type Props = {
  data: any;
  update: (field: string, value: string) => void;
};

export default function Step4SocialConnect({ data, update }: Props) {
  return (
    <Stack spacing={5}>
      <Box textAlign="center">
        <Typography variant="h5" gutterBottom>
          Connect Your Social Profiles
        </Typography>
        <Typography variant="body1" color="text.secondary">
          We'll use these to schedule and publish your content
        </Typography>
      </Box>

      <Stack spacing={3}>
        {/* Instagram */}
        <TextField
          fullWidth
          label="Instagram (Recommended)"
          placeholder="@yourbusiness"
          value={data.instagram}
          onChange={(e) => update('instagram', e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Instagram size={20} color="#64748b" />
              </InputAdornment>
            ),
          }}
          helperText="Make sure your Instagram is a Business or Creator account"
          FormHelperTextProps={{ sx: { mt: 1 } }}
        />

        {/* Facebook */}
        <TextField
          fullWidth
          label="Facebook"
          placeholder="Your Page Name"
          value={data.facebook}
          onChange={(e) => update('facebook', e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Facebook size={20} color="#64748b" />
              </InputAdornment>
            ),
          }}
        />

        {/* TikTok (Lucide doesn’t have official TikTok icon) */}
        <TextField
          fullWidth
          label="TikTok"
          placeholder="@yourbusiness"
          value={data.tiktok}
          onChange={(e) => update('tiktok', e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Music size={20} color="#64748b" />
              </InputAdornment>
            ),
          }}
        />

        <Alert severity="info"  icon={<Lightbulb size={30} color='#D1A20D'/>}>
          <AlertTitle fontWeight={700}>Tip</AlertTitle>          
          Make sure your Instagram is a Business or Creator account to enable posting and analytics.
        </Alert>
      </Stack>
    </Stack>
  );
}
