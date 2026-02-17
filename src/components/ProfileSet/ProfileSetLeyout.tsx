// components/onboarding/OnboardingLayout.tsx
import { Box, Button, LinearProgress, Paper, Typography } from '@mui/material';
import { ArrowLeft, Sparkles } from 'lucide-react';
import Step1BusinessInfo from './Step1BusinessInfo';
import Step2GoalSelection from './Step2GoalSelection';
import Step3PhotoUpload from './Step3PhotoUpload';
import Step4SocialConnect from './Step4SocialConnect';
import Step5BusinessDetails from './Step5BusinessDetails';
import Step6Summary from './Step6Summary';
import PrimaryButton from '../Shared/PrimaryButton';
import Step7SetupProgress from './Step7SetupProgress';
import { useState } from 'react';

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

  const [openSetupProgress, setOpenSetupProgress] = useState(false);

  if (openSetupProgress) {
    return <Step7SetupProgress
      data={formData}
      onComplete={() => {
        // move to next step, show summary, or redirect to dashboard
        // goToNextStep();
      }}
    />
  }
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
      <Box sx={{ p: 4, pb: 2, }}>
        <Box>
          <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
            <Typography variant="h5" fontWeight={600}>
              Welcome to AmpSocial
            </Typography>
            <Button sx={{ fontSize: 10, fontWeight: 600, opacity: 0.9, mt: 0.5, color: "black", border: "1px solid rgba(0,0,0,0.3)", paddingInline: 1, borderRadius: "25px", whiteSpace: "nowrap" }}>
              Step {step} of {totalSteps}
            </Button>
          </Box>
          {step > 1 && <Typography variant='body2'>See your first week content pack instantly</Typography>}
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
      <Box sx={{ px: { xs: 3, md: 5 } }}>{renderStepContent()}</Box>

      {/* Footer */}
      <Box
        sx={{
          px: { xs: 3, md: 5 },
          py: 3,
          display: 'flex',
          gap: 2,
          justifyContent: step === 1 ? 'flex-end' : 'space-between',
          alignItems: 'center',
        }}
      >
        {step > 1 && (
          <Button
            size="large"            
            onClick={onBack}
            variant="outlined"
            sx={{ width: "100%", color: "black", border:"2px solid rgba(0,0,0,0.1)" }}
          >
            Back
          </Button>
        )}

        {step < 6 ? (
          <PrimaryButton size="small" variant="secondary"
            disabled={!canProceed} onClick={onNext} sx={{ width: "100%", borderRadius: "5px" }}>
            Continue
          </PrimaryButton>
        ) : (
          <Button
            variant="contained"
            size="large"
            endIcon={<Sparkles />}
            onClick={() => setOpenSetupProgress(true)}
            sx={{
              background: 'linear-gradient(45deg, #7c3aed 30%, #a78bfa 90%)',
              minWidth: 240,
              whiteSpace: "nowrap",
              px: 10
            }}
          >
            Generate My Content
          </Button>
        )}

      </Box>
    </Paper>
  );
}