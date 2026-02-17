// components/onboarding/OnboardingLayout.tsx
import { Box, Button, LinearProgress, Paper, Typography } from '@mui/material';
import { ArrowLeft, Sparkles } from 'lucide-react';
import Step1BusinessInfo from './Step1BusinessInfo';
import Step2GoalSelection from './Step2GoalSelection';
import Step3PhotoUpload from './Step3PhotoUpload';
import Step4SocialConnect from './Step4SocialConnect';
import Step5BusinessDetails from './Step5BusinessDetails';
import Step6Summary from './Step6Summary';

type Props = {
  step: number;
  totalSteps: number;
  canProceed: boolean;
  onNext: () => void;
  onBack: () => void;
  formData: any;
  updateForm: any;
};

export default function ProfileSetLeyout({
  step,
  totalSteps,
  canProceed,
  onNext,
  onBack,
  formData,
  updateForm,
}: Props) {
  const progress = ((step - 1) / totalSteps) * 100;

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return <Step1BusinessInfo data={formData} update={updateForm} />;
      case 2:
        return <Step2GoalSelection data={formData} update={updateForm} />;
      case 3:
        return <Step3PhotoUpload data={formData} update={updateForm} />;
      case 4:
        return <Step4SocialConnect data={formData} update={updateForm} />;
      case 5:
        return <Step5BusinessDetails data={formData} update={updateForm} />;
      case 6:
        return <Step6Summary data={formData} />;
      default:
        return null;
    }
  };

  return (
    <Paper
      elevation={6}
      sx={{
        borderRadius: 4,
        overflow: 'hidden',
        maxWidth: 720,
        mx: 'auto',
      }}
    >
      {/* Header */}
      <Box sx={{ p: 4, pb: 2,  }}>
        <Box sx={{display: "flex", justifyContent: "space-between"}}>

        <Typography variant="h5" fontWeight={600}>
          Welcome to AmpSocial
        </Typography>
        <Typography variant="body2" sx={{ opacity: 0.9, mt: 0.5 }}>
          Step {step} of {totalSteps}
        </Typography>
        </Box>

        <LinearProgress
          variant="determinate"
          value={progress}
          sx={{
            mt: 3,
            height: 8,
            borderRadius: 4,
            bgcolor: 'rgba(0,0,0,0.3)',
            '& .MuiLinearProgress-bar': { bgcolor: 'primary' },
          }}
        />
      </Box>

      {/* Content */}
      <Box sx={{ p: { xs: 3, md: 5 } }}>{renderStepContent()}</Box>

      {/* Footer */}
      <Box
        sx={{
          px: 5,
          py: 3,
          borderTop: 1,
          borderColor: 'divider',
          display: 'flex',
          justifyContent: step === 1 ? 'flex-end' : 'space-between',
          alignItems: 'center',
        }}
      >
        {step > 1 && (
          <Button
            startIcon={<ArrowLeft />}
            onClick={onBack}
            variant="outlined"
          >
            Back
          </Button>
        )}

        {step < 6 ? (
          <Button
            variant="contained"
            size="large"
            disabled={!canProceed}
            onClick={onNext}
            sx={{ minWidth: 140 }}
          >
            Continue
          </Button>
        ) : (
          <Button
            variant="contained"
            size="large"
            endIcon={<Sparkles />}
            onClick={() => alert('Generating your content pack... ✨')}
            sx={{
              background: 'linear-gradient(45deg, #7c3aed 30%, #a78bfa 90%)',
              minWidth: 240,
            }}
          >
            Generate My Content
          </Button>
        )}
      </Box>
    </Paper>
  );
}