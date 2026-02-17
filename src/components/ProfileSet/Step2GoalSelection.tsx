// components/onboarding/steps/Step2GoalSelection.tsx
import { Box, Typography, Grid } from '@mui/material';
import GoalCard from './GoalCard';

type Props = {
  data: any;
  update: (field: string, value: string) => void;
};

export default function Step2GoalSelection({ data, update }: Props) {
  const goals = [
    { value: 'followers', label: 'Grow Followers', icon: 'TrendingUp' },
    { value: 'leads', label: 'Generate Leads', icon: 'BusinessCenter' },
    { value: 'bookings', label: 'Drive Bookings', icon: 'CalendarToday' },
  ];

  return (
    <Box sx={{ textAlign: 'center' }}>
      <Typography variant="h5" gutterBottom sx={{ mb: 5 }}>
        What's your goal?
      </Typography>

      <Grid container spacing={3}>
        {goals.map((goal) => (
          <Grid size={{xs: 12, sm:4}} key={goal.value}>
            <GoalCard
              label={goal.label}
              icon={goal.icon}
              selected={data.goal === goal.value}
              onClick={() => update('goal', goal.value)}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}