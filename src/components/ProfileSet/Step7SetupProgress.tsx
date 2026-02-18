// components/onboarding/steps/Step6SetupProgress.tsx
import {
    Box,
    CircularProgress,
    Paper,
    Stack,
    Typography
} from '@mui/material';
import { CheckCircle, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';

type Props = {
    data: any;
    onComplete?: () => void; // called after all steps are "done"
};

export default function Step7SetupProgress({ data, onComplete }: Props) {
    const [progress, setProgress] = useState(0);
    const [phase, setPhase] = useState(0);

    // Phases roughly correspond to the items in the screenshot
    const phases = [
        { text: 'Analyzing your brand', done: false },
        { text: 'Generating Week 1 content pack', done: false },
        { text: 'Creating engagement targets', done: false },
        { text: 'Initializing reviews inbox', done: false },
        { text: 'Pulling baseline analytics', done: false },
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((old) => {
                const next = Math.min(old + 12, 100); // ~8 steps to reach 100%
                return next;
            });
        }, 380); // total ~3.2s to complete progress bar

        return () => clearInterval(timer);
    }, []);

    // Gradually mark phases as completed
    useEffect(() => {
        if (progress < 20) {
            setPhase(0);
        } else if (progress < 38) {
            setPhase(1);
            phases[0].done = true;
        } else if (progress < 55) {
            setPhase(2);
            phases[1].done = true;
        } else if (progress < 72) {
            setPhase(3);
            phases[2].done = true;
        } else if (progress < 88) {
            setPhase(4);
            phases[3].done = true;
        } else if (progress >= 100) {
            phases[4].done = true;
            setTimeout(() => {
                onComplete?.();
            }, 1200); // small delay before calling onComplete
        }
    }, [progress, onComplete]);

    const getGoalLabel = () => {
        switch (data.goal) {
            case 'followers': return 'Followers';
            case 'leads': return 'Leads';
            case 'bookings': return 'Bookings';
            default: return '—';
        }
    };

    return (
        <Box maxWidth={900} mx="auto" textAlign="center" py={4}>



            {/* Progress list */}
            <Paper
                variant="outlined"
                sx={{
                    p: 4,
                    maxWidth: 560,
                    mx: 'auto',
                    borderRadius: 3,
                    background: 'linear-gradient(145deg, #fafbff 0%, #f5faff 100%)',
                }}
            >
                {/* Main title + spinner */}
                <Box sx={{ mb: 5 }}>
                    <Box sx={{ position: 'relative', display: 'inline-flex', mb: 2 }}>
                        <CircularProgress
                            size={80}
                            thickness={4}
                            sx={{
                                color: progress >= 100 ? 'success.main' : 'primary.main',
                                transition: 'color 0.8s',
                            }}
                            variant={progress >= 100 ? 'determinate' : 'indeterminate'}
                            value={progress}
                        />
                        {progress >= 100 && (
                            <Sparkles
                                size={36}
                                color="#3b82f6"
                                style={{
                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',
                                }}
                            />
                        )}
                    </Box>

                    <Typography variant="h5" fontWeight={700} gutterBottom>
                        Setting up your Growth OS...
                    </Typography>

                    <Typography color="text.secondary" sx={{ maxWidth: 480, mx: 'auto' }}>
                        We’re preparing your custom content strategy, engagement plan and analytics baseline
                    </Typography>
                </Box>
                <Stack spacing={2.2}>
                    {phases.map((item, i) => (
                        <Stack
                            key={i}
                            direction="row"
                            alignItems="center"
                            spacing={2}
                            sx={{
                                opacity: i <= phase ? 1 : 0.4,
                                transition: 'opacity 0.6s ease',
                            }}
                        >
                            {!item.done ? (
                                <CheckCircle size={24} color="#16a34a" />
                            ) : i === phase ? (
                                <CircularProgress size={24} thickness={5} />
                            ) : (
                                <Box sx={{ width: 24, height: 24 }} />
                            )}

                            <Typography
                                variant="body1"
                                fontWeight={item.done || i === phase ? 600 : 400}
                                color={item.done ? 'success.main' : 'text.primary'}
                            >
                                {item.text}
                            </Typography>
                        </Stack>
                    ))}
                </Stack>

                {progress >= 100 && (
                    <Box mt={4} textAlign="center">
                        <Typography variant="h6" color="success.main" fontWeight={700}>
                            Setup complete! 🎉
                        </Typography>
                    </Box>
                )}
            </Paper>
        </Box>
    );
}