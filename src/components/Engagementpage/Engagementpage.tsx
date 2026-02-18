'use client'
import {
  Box,
  Button,
  Chip,
  Paper,
  Stack,
  styled,
  Tab,
  Tabs,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import React from 'react';

// ─────────────────────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────────────────────
interface EngagementTarget {
  id: number;
  platform: string;
  tag: string;
  handle: string;
  post: string;
  whySelected: string;
  comments: string[];
  status: 'pending' | 'completed' | 'skipped';
}

// ─────────────────────────────────────────────────────────────────────────────
// Styled Tabs (same pattern as other pages)
// ─────────────────────────────────────────────────────────────────────────────
const StyledTabs = styled((props: any) => (
  <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />
))({
  minHeight: 48,
  '& .MuiTabs-indicator': { display: 'none' },
});

const StyledTab = styled((props: any) => <Tab disableRipple {...props} />)(({ theme }) => ({
  textTransform: 'none',
  fontWeight: 500,
  fontSize: theme.typography.pxToRem(15),
  minHeight: 40,
  padding: theme.spacing(1.2, 2.5),
  borderRadius: 50,
  color: '#000',
  '&.Mui-selected': {
    color: '#000',
    backgroundColor: '#ffffff',
    fontWeight: 600,
  },
}));

// ─────────────────────────────────────────────────────────────────────────────
// EngagementCard
// ─────────────────────────────────────────────────────────────────────────────
const EngagementCard = ({
  target,
  onMarkDone,
  onSkip,
}: {
  target: EngagementTarget;
  onMarkDone: (id: number) => void;
  onSkip: (id: number) => void;
}) => {
  const [selectedComment, setSelectedComment] = React.useState(0);

  return (
    <Paper
      elevation={0}
      sx={{
        p: { xs: 2, sm: 3 },
        borderRadius: 3,
        border: '1px solid',
        borderColor: 'divider',
        bgcolor: '#fff',
        mb: 2.5,
      }}
    >
      {/* ── Top row: platform tags + Skip ── */}
      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 2 }}>
        <Stack direction="row" spacing={1} alignItems="center">
          <Chip
            label={target.platform}
            size="small"
            variant="outlined"
            sx={{
              borderColor: '#e5e7eb',
              color: '#374151',
              fontWeight: 500,
              fontSize: '0.78rem',
              height: 24,
              borderRadius: '6px',
            }}
          />
          <Chip
            label={target.tag}
            size="small"
            sx={{
              bgcolor: '#eff6ff',
              color: '#2563eb',
              fontWeight: 500,
              fontSize: '0.78rem',
              height: 24,
              borderRadius: '6px',
            }}
          />
        </Stack>

        <Button
          variant="text"
          size="small"
          onClick={() => onSkip(target.id)}
          sx={{
            color: '#2563eb',
            textTransform: 'none',
            fontWeight: 500,
            fontSize: '0.88rem',
            p: 0,
            minWidth: 0,
            '&:hover': { bgcolor: 'transparent', textDecoration: 'underline' },
          }}
        >
          Skip
        </Button>
      </Stack>

      {/* ── Post info + Mark Done ── */}
      <Stack direction="row" alignItems="flex-start" justifyContent="space-between" spacing={2} sx={{ mb: 2 }}>
        <Box>
          <Typography variant="body2" fontWeight={600} sx={{ mb: 0.25 }}>
            {target.handle}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 0.4, fontStyle: 'italic' }}>
            "{target.post}"
          </Typography>
          <Typography variant="caption" color="text.secondary">
            <span style={{ fontWeight: 600, color: '#374151' }}>Why selected: </span>
            {target.whySelected}
          </Typography>
        </Box>

        <Button
          variant="contained"
          disableElevation
          startIcon={<CheckCircle2 size={15} />}
          onClick={() => onMarkDone(target.id)}
          sx={{
            bgcolor: '#16a34a',
            color: '#fff',
            borderRadius: 2,
            textTransform: 'none',
            fontWeight: 600,
            fontSize: '0.88rem',
            px: 2,
            py: 0.9,
            flexShrink: 0,
            whiteSpace: 'nowrap',
            '&:hover': { bgcolor: '#15803d' },
          }}
        >
          Mark Done
        </Button>
      </Stack>

      {/* ── Comment selection ── */}
      <Typography variant="body2" color="text.secondary" sx={{ mb: 1, fontSize: '0.85rem' }}>
        Select a comment to use:
      </Typography>

      <Stack spacing={1} sx={{ mb: 2.5 }}>
        {target.comments.map((comment, idx) => (
          <Box
            key={idx}
            onClick={() => setSelectedComment(idx)}
            sx={{
              p: 1.5,
              borderRadius: 2,
              border: '1.5px solid',
              borderColor: selectedComment === idx ? '#2563eb' : '#e5e7eb',
              bgcolor: selectedComment === idx ? '#eff6ff' : '#fff',
              cursor: 'pointer',
              transition: 'all 0.15s ease',
              '&:hover': {
                borderColor: selectedComment === idx ? '#2563eb' : '#93c5fd',
              },
            }}
          >
            <Typography variant="body2" sx={{ fontSize: '0.88rem', color: '#111827' }}>
              {comment}
            </Typography>
          </Box>
        ))}
      </Stack>

      {/* ── Action buttons ── */}
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5}>
        <Button
          variant="outlined"
          fullWidth
          sx={{
            borderColor: '#e5e7eb',
            color: '#111827',
            borderRadius: 2,
            textTransform: 'none',
            fontWeight: 600,
            fontSize: '0.95rem',
            py: 1.25,
            '&:hover': { borderColor: '#9ca3af', bgcolor: '#f9fafb' },
          }}
        >
          Copy Post
        </Button>
        <Button
          variant="contained"
          fullWidth
          disableElevation
          sx={{
            bgcolor: '#111827',
            color: '#fff',
            borderRadius: 2,
            textTransform: 'none',
            fontWeight: 600,
            fontSize: '0.95rem',
            py: 1.25,
            '&:hover': { bgcolor: '#374151' },
          }}
        >
          View Post
        </Button>
      </Stack>
    </Paper>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// Upgrade Banner (shared pattern)
// ─────────────────────────────────────────────────────────────────────────────
const UpgradeBanner = () => (
  <Paper
    elevation={0}
    sx={{
      background: 'linear-gradient(135deg, #f5f0ff 0%, #faf7ff 60%, #ede8ff 100%)',
      borderRadius: 3,
      p: { xs: 3, sm: 4 },
      border: '1px solid rgba(139, 92, 246, 0.1)',
      mt: 1,
    }}
  >
    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: { xs: 'center', sm: 'flex-start' }, gap: 2.5 }}>
      <Box
        sx={{
          width: 52,
          height: 52,
          borderRadius: '14px',
          bgcolor: 'rgba(139, 92, 246, 0.12)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}
      >
        <Sparkles color="#7c3aed" size={22} />
      </Box>
      <Box>
        <Typography variant="h6" fontWeight={700} sx={{ mb: 0.75, fontSize: '1.1rem' }}>
          Let a Rep Do This For You
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2, maxWidth: 480, lineHeight: 1.65 }}>
          Upgrade to Managed Services and our team will execute all these daily tasks while you focus on
          running your business. Full transparency in your dashboard.
        </Typography>
        <Button
          variant="contained"
          endIcon={<ArrowRight size={17} />}
          sx={{
            background: 'linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)',
            color: '#fff',
            textTransform: 'none',
            fontWeight: 600,
            fontSize: '0.95rem',
            borderRadius: '12px',
            px: 3,
            py: 1.25,
            boxShadow: '0 4px 14px rgba(109, 40, 217, 0.35)',
            '&:hover': {
              background: 'linear-gradient(135deg, #6d28d9 0%, #5b21b6 100%)',
              boxShadow: '0 6px 20px rgba(109, 40, 217, 0.45)',
            },
          }}
        >
          Upgrade to Managed Services
        </Button>
      </Box>
    </Box>
  </Paper>
);

// ─────────────────────────────────────────────────────────────────────────────
// Static data
// ─────────────────────────────────────────────────────────────────────────────
const COMMENTS = [
  'This is exactly what I needed! Your approach to productivity is so refreshing',
  'Love this! Have you found this works well for team management too?',
  'Great insights! We implemented something similar and saw amazing results',
  'This is gold! Following for more content like this',
];

const INITIAL_TARGETS: EngagementTarget[] = [
  {
    id: 1,
    platform: 'Instagram',
    tag: '#hashtag',
    handle: '@businessgrowth_coach',
    post: 'Just launched our new productivity system...',
    whySelected: 'Matched hashtag: #businessgrowth',
    comments: COMMENTS,
    status: 'pending',
  },
  {
    id: 2,
    platform: 'Instagram',
    tag: '#hashtag',
    handle: '@businessgrowth_coach',
    post: 'Just launched our new productivity system...',
    whySelected: 'Matched hashtag: #businessgrowth',
    comments: COMMENTS,
    status: 'pending',
  },
  {
    id: 3,
    platform: 'Instagram',
    tag: '#hashtag',
    handle: '@businessgrowth_coach',
    post: 'Just launched our new productivity system...',
    whySelected: 'Matched hashtag: #businessgrowth',
    comments: COMMENTS,
    status: 'pending',
  },
  {
    id: 4,
    platform: 'Instagram',
    tag: '#hashtag',
    handle: '@businessgrowth_coach',
    post: 'Just launched our new productivity system...',
    whySelected: 'Matched hashtag: #businessgrowth',
    comments: COMMENTS,
    status: 'pending',
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Main Page
// ─────────────────────────────────────────────────────────────────────────────
const EngagementPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [tab, setTab] = React.useState(0);
  const [targets, setTargets] = React.useState<EngagementTarget[]>(INITIAL_TARGETS);

  const handleMarkDone = (id: number) =>
    setTargets((prev) => prev.map((t) => (t.id === id ? { ...t, status: 'completed' } : t)));

  const handleSkip = (id: number) =>
    setTargets((prev) => prev.map((t) => (t.id === id ? { ...t, status: 'skipped' } : t)));

  const pendingTargets   = targets.filter((t) => t.status === 'pending');
  const completedTargets = targets.filter((t) => t.status === 'completed');

  const visibleTargets =
    tab === 0 ? targets.filter((t) => t.status !== 'skipped') :
    tab === 1 ? completedTargets :
    pendingTargets;

  return (
    <Box>
      {/* ── Page Header ── */}
      <Typography
        variant="h4"
        fontWeight={700}
        sx={{ mt: 2, color: '#1e3a5f', fontSize: { xs: '1.6rem', sm: '2rem' } }}
      >
        Engagement
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        Engage with your target accounts and grow your audience
      </Typography>

      {/* ── Tabs ── */}
      <Paper
        elevation={0}
        sx={{
          borderRadius: 50,
          px: 1,
          py: 0.75,
          bgcolor: '#f3f4f6',
          display: 'inline-flex',
          mb: 3,
          overflowX: 'auto',
          maxWidth: '100%',
        }}
      >
        <StyledTabs
          value={tab}
          onChange={(_: any, v: any) => setTab(v)}
          variant={isMobile ? 'scrollable' : 'standard'}
          scrollButtons={isMobile ? 'auto' : false}
          allowScrollButtonsMobile
        >
          <StyledTab label="All Targets" />
          <StyledTab label={`Completed (${completedTargets.length})`} />
          <StyledTab label={`Pending (${pendingTargets.length})`} />
        </StyledTabs>
      </Paper>

      {/* ── Cards ── */}
      {visibleTargets.length === 0 ? (
        <Paper
          elevation={0}
          sx={{ p: 6, borderRadius: 3, border: '1px solid', borderColor: 'divider', bgcolor: '#fff', textAlign: 'center' }}
        >
          <CheckCircle2 size={44} color="#16a34a" style={{ margin: '0 auto 12px' }} />
          <Typography variant="h6" fontWeight={600} color="text.secondary">
            {tab === 1 ? 'No completed targets yet.' : 'All caught up! 🎉'}
          </Typography>
        </Paper>
      ) : (
        visibleTargets.map((target) => (
          <EngagementCard
            key={target.id}
            target={target}
            onMarkDone={handleMarkDone}
            onSkip={handleSkip}
          />
        ))
      )}

      {/* ── Upgrade Banner ── */}
      <UpgradeBanner />
    </Box>
  );
};

export default EngagementPage;