// components/onboarding/steps/Step5BusinessDetails.tsx
import { Stack, Typography, TextField } from '@mui/material';

type Props = {
  data: any;
  update: (field: string, value: string) => void;
};

export default function Step5BusinessDetails({ data, update }: Props) {
  return (
    <Stack spacing={4}>
      <Typography variant="h6" gutterBottom>
        Add details about your business
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
        We'll use this to create better content that matches your brand voice
      </Typography>

      <TextField
        fullWidth
        multiline
        rows={6}
        label="Business Details"
        placeholder="Describe your products/services, target audience, brand tone, unique selling points, any slogans, keywords you want to emphasize, etc..."
        value={data.details}
        onChange={(e) => update('details', e.target.value)}
        variant="outlined"
      />
    </Stack>
  );
}