'use client'
import {
  Box,
  Button,
  Chip,
  IconButton,
  Paper,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import {
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock,
  FileImage,
  Play,
  Sparkles,
  Target,
  XCircle,
} from 'lucide-react';
import React from 'react';

// ─────────────────────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────────────────────
type ContentType = 'Short' | 'Post';
type EventStatus = 'scheduled' | 'failed' | 'published';

interface CalendarEvent {
  id: number;
  title: string;
  time: string;
  type: ContentType;
  status: EventStatus;
  color: string; // left-border accent colour
  bg: string;    // card background
}

interface DayData {
  day: string;   // Mon, Tue …
  date: number;
  events: CalendarEvent[];
}

// ─────────────────────────────────────────────────────────────────────────────
// KPI Stat Card
// ─────────────────────────────────────────────────────────────────────────────
const StatCard = ({
  icon,
  iconBg,
  label,
  value,
}: {
  icon: React.ReactNode;
  iconBg: string;
  label: string;
  value: string | number;
}) => (
  <Paper
    elevation={0}
    sx={{
      p: { xs: 2, sm: 3 },
      borderRadius: 3,
      border: '1px solid',
      borderColor: 'divider',
      bgcolor: '#fff',
      flex: 1,
      minWidth: { xs: '45%', sm: 0 },
    }}
  >
    <Stack direction="row" alignItems="center" spacing={2}>
      <Box
        sx={{
          width: 44,
          height: 44,
          borderRadius: '50%',
          bgcolor: iconBg,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}
      >
        {icon}
      </Box>
      <Box>
        <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.8rem' }}>
          {label}
        </Typography>
        <Typography variant="h5" fontWeight={700}>
          {value}
        </Typography>
      </Box>
    </Stack>
  </Paper>
);

// ─────────────────────────────────────────────────────────────────────────────
// Event Mini-Card (inside calendar cell)
// ─────────────────────────────────────────────────────────────────────────────
const EventCard = ({ event }: { event: CalendarEvent }) => (
  <Box
    sx={{
      p: 1,
      borderRadius: 1.5,
      bgcolor: event.bg,
      borderLeft: `3px solid ${event.color}`,
      mb: 1,
    }}
  >
    {/* Title row */}
    <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={0.5}>
      <Typography
        variant="caption"
        fontWeight={600}
        noWrap
        sx={{ fontSize: '0.72rem', color: '#111827', flex: 1 }}
      >
        {event.title}
      </Typography>
      <Sparkles size={11} color="#7c3aed" style={{ flexShrink: 0 }} />
    </Stack>

    {/* Time */}
    <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.7rem', display: 'block' }}>
      {event.time}
    </Typography>

    {/* Type + status */}
    <Stack direction="row" alignItems="center" spacing={0.5} sx={{ mt: 0.25 }}>
      {event.type === 'Short' ? (
        <Play size={10} color="#6b7280" fill="#6b7280" />
      ) : (
        <FileImage size={10} color="#6b7280" />
      )}
      <Typography variant="caption" sx={{ fontSize: '0.7rem', color: '#6b7280' }}>
        {event.type}
      </Typography>

      {event.status === 'failed' && (
        <Stack direction="row" alignItems="center" spacing={0.25} sx={{ ml: 0.5 }}>
          <XCircle size={10} color="#dc2626" />
          <Typography variant="caption" sx={{ fontSize: '0.7rem', color: '#dc2626', fontWeight: 600 }}>
            Failed
          </Typography>
        </Stack>
      )}
    </Stack>
  </Box>
);

// ─────────────────────────────────────────────────────────────────────────────
// Day Column
// ─────────────────────────────────────────────────────────────────────────────
const DayColumn = ({ day, isToday }: { day: DayData; isToday?: boolean }) => (
  <Box
    sx={{
      flex: 1,
      minWidth: { xs: 120, sm: 0 },
      border: '1px solid',
      borderColor: isToday ? '#6366f1' : '#e5e7eb',
      borderRadius: 2.5,
      p: { xs: 1.25, sm: 1.5 },
      bgcolor: '#fff',
    }}
  >
    {/* Day header */}
    <Typography
      variant="body2"
      fontWeight={600}
      sx={{ color: isToday ? '#6366f1' : '#374151', mb: 0.25, fontSize: '0.85rem' }}
    >
      {day.day}
    </Typography>
    <Typography
      variant="h5"
      fontWeight={800}
      sx={{ color: isToday ? '#6366f1' : '#111827', mb: 1.5, fontSize: { xs: '1.4rem', sm: '1.6rem' } }}
    >
      {day.date}
    </Typography>

    {/* Events */}
    {day.events.map((event) => (
      <EventCard key={event.id} event={event} />
    ))}
  </Box>
);

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
      mt: 3,
      maxWidth: 720,
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
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2, maxWidth: 500, lineHeight: 1.65 }}>
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
const WEEKS: DayData[][] = [
  // Week: Jan 26 – Feb 1, 2026
  [
    { day: 'Mon', date: 26, events: [] },
    { day: 'Tue', date: 27, events: [] },
    {
      day: 'Wed', date: 28, events: [
        { id: 1, title: '5 Tips for Growir', time: '10:00 AM', type: 'Short', status: 'scheduled', color: '#f59e0b', bg: '#fffbeb' },
        { id: 2, title: 'Client Success', time: '2:00 PM', type: 'Post', status: 'scheduled', color: '#6366f1', bg: '#eef2ff' },
      ],
    },
    {
      day: 'Thu', date: 29, events: [
        { id: 3, title: 'Behind the', time: '9:00 AM', type: 'Short', status: 'scheduled', color: '#3b82f6', bg: '#eff6ff' },
        { id: 4, title: 'Product Showcase', time: '3:00 PM', type: 'Post', status: 'scheduled', color: '#f59e0b', bg: '#fffbeb' },
      ],
    },
    {
      day: 'Fri', date: 30, events: [
        { id: 5, title: 'Quick Tip Tuesd…', time: '11:00 AM', type: 'Short', status: 'scheduled', color: '#22c55e', bg: '#f0fdf4' },
        { id: 6, title: 'Customer Testim…', time: '4:00 PM', type: 'Post', status: 'failed', color: '#ef4444', bg: '#fef2f2' },
      ],
    },
    {
      day: 'Sat', date: 31, events: [
        { id: 7, title: 'Weekly Motivati…', time: '8:00 AM', type: 'Short', status: 'scheduled', color: '#3b82f6', bg: '#eff6ff' },
        { id: 8, title: 'Industry Insights', time: '1:00 PM', type: 'Post', status: 'scheduled', color: '#3b82f6', bg: '#eff6ff' },
      ],
    },
    {
      day: 'Sun', date: 1, events: [
        { id: 9, title: 'Friday Feature', time: '5:00 PM', type: 'Short', status: 'scheduled', color: '#f59e0b', bg: '#fffbeb' },
      ],
    },
  ],
  // Week: Feb 2 – 8, 2026
  [
    { day: 'Mon', date: 2, events: [] },
    {
      day: 'Tue', date: 3, events: [
        { id: 10, title: 'Morning Routine', time: '8:00 AM', type: 'Short', status: 'scheduled', color: '#22c55e', bg: '#f0fdf4' },
      ],
    },
    {
      day: 'Wed', date: 4, events: [
        { id: 11, title: 'Growth Hacks', time: '10:00 AM', type: 'Post', status: 'scheduled', color: '#6366f1', bg: '#eef2ff' },
        { id: 12, title: 'Behind Scenes', time: '3:00 PM', type: 'Short', status: 'scheduled', color: '#f59e0b', bg: '#fffbeb' },
      ],
    },
    {
      day: 'Thu', date: 5, events: [
        { id: 13, title: 'Entrepreneur Tips', time: '9:30 AM', type: 'Short', status: 'scheduled', color: '#3b82f6', bg: '#eff6ff' },
      ],
    },
    {
      day: 'Fri', date: 6, events: [
        { id: 14, title: 'Weekend Feature', time: '11:00 AM', type: 'Post', status: 'scheduled', color: '#22c55e', bg: '#f0fdf4' },
        { id: 15, title: 'Client Win Story', time: '4:00 PM', type: 'Short', status: 'scheduled', color: '#6366f1', bg: '#eef2ff' },
      ],
    },
    { day: 'Sat', date: 7, events: [] },
    { day: 'Sun', date: 8, events: [] },
  ],
];

const WEEK_LABELS = ['January 26 - February 1, 2026', 'February 2 - 8, 2026'];

// ─────────────────────────────────────────────────────────────────────────────
// Main Page
// ─────────────────────────────────────────────────────────────────────────────
const CalendarPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [weekIndex, setWeekIndex] = React.useState(0);
  const currentWeek = WEEKS[weekIndex];
  const totalEvents = currentWeek.flatMap((d) => d.events).length;
  const failedEvents = currentWeek.flatMap((d) => d.events).filter((e) => e.status === 'failed').length;

  const handlePrev = () => setWeekIndex((i) => Math.max(0, i - 1));
  const handleNext = () => setWeekIndex((i) => Math.min(WEEKS.length - 1, i + 1));
  const handleToday = () => setWeekIndex(0);

  return (
    <Box>
      {/* ── Page Header ── */}
      <Typography
        variant="h4"
        fontWeight={700}
        sx={{ mt: 2, color: '#1e3a5f', fontSize: { xs: '1.6rem', sm: '2rem' } }}
      >
        Growth Calendar
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        Manage your content schedule and approvals
      </Typography>

      {/* ── KPI Cards ── */}
      <Stack
        direction="row"
        spacing={{ xs: 1.5, sm: 2 }}
        flexWrap="wrap"
        useFlexGap
        sx={{ mb: 4 }}
      >
        <StatCard
          icon={<Clock size={20} color="#ca8a04" />}
          iconBg="#fef9c3"
          label="Pending Today"
          value={5}
        />
        <StatCard
          icon={<CheckCircle2 size={20} color="#16a34a" />}
          iconBg="#dcfce7"
          label="Published"
          value={0}
        />
        <StatCard
          icon={<Target size={20} color="#4f46e5" />}
          iconBg="#ede9fe"
          label="Scheduled"
          value={42}
        />
        <StatCard
          icon={<XCircle size={20} color="#dc2626" />}
          iconBg="#fee2e2"
          label="This Week"
          value={42}
        />
      </Stack>

      {/* ── Calendar Panel ── */}
      <Paper
        elevation={0}
        sx={{
          p: { xs: 2, sm: 3 },
          borderRadius: 3,
          border: '1px solid',
          borderColor: 'divider',
          bgcolor: '#fff',
        }}
      >
        {/* Calendar header: prev / label / next / Today */}
        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 3 }}>
          <Stack direction="row" alignItems="center" spacing={1}>
            <IconButton
              size="small"
              onClick={handlePrev}
              disabled={weekIndex === 0}
              sx={{ border: '1px solid #e5e7eb', borderRadius: 1.5 }}
            >
              <ChevronLeft size={18} />
            </IconButton>

            <Typography variant="h6" fontWeight={800} sx={{ fontSize: { xs: '0.95rem', sm: '1.2rem' } }}>
              {WEEK_LABELS[weekIndex]}
            </Typography>

            <IconButton
              size="small"
              onClick={handleNext}
              disabled={weekIndex === WEEKS.length - 1}
              sx={{ border: '1px solid #e5e7eb', borderRadius: 1.5 }}
            >
              <ChevronRight size={18} />
            </IconButton>
          </Stack>

          <Button
            variant="outlined"
            size="small"
            onClick={handleToday}
            sx={{
              borderColor: '#e5e7eb',
              color: '#374151',
              borderRadius: 2,
              textTransform: 'none',
              fontWeight: 600,
              px: 2,
              '&:hover': { borderColor: '#9ca3af', bgcolor: '#f9fafb' },
            }}
          >
            Today
          </Button>
        </Stack>

        {/* Day columns */}
        <Box
          sx={{
            display: 'flex',
            gap: { xs: 1, sm: 1.5 },
            overflowX: 'auto',
            pb: 1,
          }}
        >
          {currentWeek.map((day, idx) => (
            <DayColumn
              key={day.date}
              day={day}
              isToday={weekIndex === 0 && idx === 2} // Wed 28 highlighted as "today" example
            />
          ))}
        </Box>
      </Paper>

      {/* ── Upgrade Banner ── */}
      <UpgradeBanner />
    </Box>
  );
};

export default CalendarPage;