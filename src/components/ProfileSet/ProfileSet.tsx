// app/onboarding/page.tsx
'use client';

import { useState } from 'react';
import { Box, Container } from '@mui/material';
import ProfileSetLeyout from './ProfileSetLeyout';

type FormData = {
  businessName: string;
  website: string;
  cityRegion: string;
  goal: 'followers' | 'leads' | 'bookings' | '';
  photos: File[];
  instagram: string;
  facebook: string;
  tiktok: string;
  details: string;
};

export default function ProfileSet() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    businessName: '',
    website: '',
    cityRegion: '',
    goal: '',
    photos: [],
    instagram: '',
    facebook: '',
    tiktok: '',
    details: '',
  });

  const updateForm = (field: keyof FormData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const goNext = () => setStep((prev) => Math.min(prev + 1, 6));
  const goBack = () => setStep((prev) => Math.max(prev - 1, 1));

  const canProceed = step === 1 ? !!formData.businessName.trim() : true;

  return (
    <Box
      style={{
        backgroundImage: "url('/Images/HeroImages/blendHero.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      sx={{
        minHeight: '100vh',        
        py: 6,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Container maxWidth="md">
        <ProfileSetLeyout
          step={step}
          totalSteps={5}
          canProceed={canProceed}
          onNext={goNext}
          onBack={goBack}
          formData={formData}
          updateForm={updateForm}
        />
      </Container>
    </Box>
  );
}