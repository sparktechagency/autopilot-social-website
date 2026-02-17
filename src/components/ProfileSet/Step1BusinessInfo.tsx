// components/onboarding/steps/Step1BusinessInfo.tsx
import { Box, TextField, Typography } from '@mui/material';

type Props = {
  data: any;
  update: (field: string, value: any) => void;
};

export default function Step1BusinessInfo({ data, update }: Props) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      <Box>
        <Typography variant="h6" fontWeight={600} sx={{ paddingBottom: 0 }}>
          Let's start with your business
        </Typography>
        <Typography variant="body2" gutterBottom>
          This should take less than 5 minutes
        </Typography>
      </Box>


      <TextField
        required
        fullWidth
        label="Business Name"
        placeholder="Enter your business name"
        value={data.businessName}
        onChange={(e) => update('businessName', e.target.value)}
      />

      <TextField
        fullWidth
        label="Website URL"
        placeholder="https://yourbusiness.com (optional)"
        value={data.website}
        onChange={(e) => update('website', e.target.value)}
        helperText="No website? You can upload photos in the next step"
      />

      <TextField
        fullWidth
        label="City / Region"
        placeholder="e.g., Los Angeles, CA"
        value={data.cityRegion}
        onChange={(e) => update('cityRegion', e.target.value)}
        helperText="Recommended for local targeting"
      />
    </Box>
  );
}