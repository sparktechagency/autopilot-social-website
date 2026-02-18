'use client'
import {
  Box,
  Button,
  Chip,
  Grid,
  LinearProgress,
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
  Sparkles,
  Star,
  Target,
  Timer,
  TrendingUp,
} from 'lucide-react';
import React from 'react';

// ─────────────────────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────────────────────
type Priority = 'high' | 'normal';
type TaskStatus = 'pending' | 'completed';

interface Task {
  id: number;
  title: string;
  description: string;
  priority: Priority;
  mins: number;
  status: TaskStatus;
  icon: React.ReactNode;
  iconBg: string;
  borderColor: string;
}

interface CompletedTask {
  title: string;
  time: string;
  note: string;
}

interface WeekStat {
  label: string;
  value: string;
  current: number;
  total: number;
}

interface RecentWin {
  label: string;
  when: string;
}

interface TimeSavedBreakdown {
  label: string;
  hrs: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// Sub-components
// ─────────────────────────────────────────────────────────────────────────────

/** Top KPI stat card */
const StatCard = ({
  icon,
  iconBg,
  label,
  value,
}: {
  icon: React.ReactNode;
  iconBg: string;
  label: string;
  value: string;
}) => (
  <Paper
    elevation={0}
    sx={{
      p: { xs: 2.5, sm: 3 },
      borderRadius: 3,
      border: '1px solid',
      borderColor: 'divider',
      bgcolor: '#fff',
      flex: 1,
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
        <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.82rem' }}>
          {label}
        </Typography>
        <Typography variant="h5" fontWeight={700}>
          {value}
        </Typography>
      </Box>
    </Stack>
  </Paper>
);

/** Individual task card inside "Today's Tasks" */
const TaskCard = ({
  task,
  onStart,
}: {
  task: Task;
  onStart: (id: number) => void;
}) => (
  <Paper
    elevation={0}
    sx={{
      p: { xs: 2, sm: 2.5 },
      borderRadius: 2.5,
      border: '1.5px solid',
      borderColor: task.borderColor,
      bgcolor: '#fff',
      mb: 2,
    }}
  >
    <Stack direction="row" spacing={2} alignItems="flex-start">
      {/* Icon */}
      <Box
        sx={{
          width: 40,
          height: 40,
          borderRadius: '50%',
          bgcolor: task.iconBg,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          mt: 0.25,
        }}
      >
        {task.icon}
      </Box>

      {/* Content */}
      <Box sx={{ flex: 1, minWidth: 0 }}>
        <Stack direction="row" alignItems="flex-start" justifyContent="space-between" spacing={1}>
          <Typography variant="subtitle1" fontWeight={700} sx={{ lineHeight: 1.3 }}>
            {task.title}
          </Typography>
          <Typography variant="caption" color="text.secondary" sx={{ flexShrink: 0, mt: 0.2 }}>
            {task.mins} mins
          </Typography>
        </Stack>

        {task.priority === 'high' && (
          <Chip
            label="High Priority"
            size="small"
            sx={{
              bgcolor: '#dc2626',
              color: '#fff',
              fontWeight: 700,
              fontSize: '0.7rem',
              height: 22,
              borderRadius: '6px',
              mt: 0.75,
              mb: 0.75,
            }}
          />
        )}

        <Typography variant="body2" color="text.secondary" sx={{ mb: 1.5, fontSize: '0.85rem' }}>
          {task.description}
        </Typography>

        <Button
          variant="contained"
          disableElevation
          endIcon={<ArrowRight size={15} />}
          onClick={() => onStart(task.id)}
          sx={{
            bgcolor: '#111827',
            color: '#fff',
            borderRadius: 2,
            textTransform: 'none',
            fontWeight: 600,
            fontSize: '0.88rem',
            px: 2,
            py: 0.75,
            '&:hover': { bgcolor: '#374151' },
          }}
        >
          Start Task
        </Button>
      </Box>
    </Stack>
  </Paper>
);

/** Progress row used in "Today" and "This Week" panels */
const ProgressRow = ({ label, value, current, total }: WeekStat) => (
  <Box sx={{ mb: 2 }}>
    <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 0.5 }}>
      <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.88rem' }}>
        {label}
      </Typography>
      <Typography variant="body2" fontWeight={700} sx={{ fontSize: '0.88rem' }}>
        {value}
      </Typography>
    </Stack>
    <LinearProgress
      variant="determinate"
      value={(current / total) * 100}
      sx={{
        height: 6,
        borderRadius: 3,
        bgcolor: '#e5e7eb',
        '& .MuiLinearProgress-bar': {
          borderRadius: 3,
          bgcolor: current === total ? '#111827' : '#6366f1',
        },
      }}
    />
  </Box>
);

/** Sidebar: Completed Today */
const CompletedTodayPanel = ({ tasks }: { tasks: CompletedTask[] }) => (
  <Paper
    elevation={0}
    sx={{ p: 3, borderRadius: 3, border: '1px solid', borderColor: 'divider', bgcolor: '#fff', mb: 2.5 }}
  >
    <Typography variant="h6" fontWeight={700} sx={{ mb: 2 }}>
      Completed Today
    </Typography>
    <Stack spacing={1.5}>
      {tasks.map((t, i) => (
        <Stack key={i} direction="row" spacing={1.5} alignItems="flex-start">
          <CheckCircle2 size={18} color="#16a34a" style={{ flexShrink: 0, marginTop: 2 }} />
          <Box>
            <Typography variant="body2" fontWeight={600} sx={{ fontSize: '0.88rem' }}>
              {t.title}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              {t.time}
            </Typography>
            <Typography variant="caption" color="text.secondary" display="block">
              {t.note}
            </Typography>
          </Box>
        </Stack>
      ))}
    </Stack>
  </Paper>
);

/** Sidebar: This Week */
const ThisWeekPanel = ({ stats }: { stats: WeekStat[] }) => (
  <Paper
    elevation={0}
    sx={{ p: 3, borderRadius: 3, border: '1px solid', borderColor: 'divider', bgcolor: '#fff', mb: 2.5 }}
  >
    <Typography variant="h6" fontWeight={700} sx={{ mb: 2 }}>
      This Week
    </Typography>
    {stats.map((s) => (
      <ProgressRow key={s.label} {...s} />
    ))}
  </Paper>
);

/** Sidebar: Recent Wins */
const RecentWinsPanel = ({ wins }: { wins: RecentWin[] }) => (
  <Paper
    elevation={0}
    sx={{ p: 3, borderRadius: 3, border: '1px solid', borderColor: 'divider', bgcolor: '#fff', mb: 2.5 }}
  >
    <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 2 }}>
      <Typography fontSize="1.1rem">🎉</Typography>
      <Typography variant="h6" fontWeight={700}>
        Recent Wins
      </Typography>
    </Stack>
    <Stack spacing={1.25}>
      {wins.map((w, i) => (
        <Stack key={i} direction="row" justifyContent="space-between" alignItems="center">
          <Typography variant="body2" sx={{ fontSize: '0.88rem' }}>
            {w.label}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {w.when}
          </Typography>
        </Stack>
      ))}
    </Stack>
  </Paper>
);

/** Sidebar: Time Saved */
const TimeSavedPanel = ({
  total,
  breakdown,
}: {
  total: string;
  breakdown: TimeSavedBreakdown[];
}) => (
  <Paper
    elevation={0}
    sx={{ p: 3, borderRadius: 3, border: '1px solid', borderColor: 'divider', bgcolor: '#fff' }}
  >
    <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1.5 }}>
      <Timer size={16} color="#6b7280" />
      <Typography variant="body2" fontWeight={600} color="text.secondary">
        Time Saved
      </Typography>
    </Stack>
    <Typography variant="h4" fontWeight={800} sx={{ color: '#4f46e5', mb: 0.25 }}>
      {total}
    </Typography>
    <Typography variant="caption" color="text.secondary" sx={{ mb: 2, display: 'block' }}>
      Saved this week
    </Typography>
    <Stack spacing={0.75}>
      {breakdown.map((b, i) => (
        <Stack key={i} direction="row" justifyContent="space-between">
          <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.85rem' }}>
            {b.label}
          </Typography>
          <Typography variant="body2" fontWeight={600} sx={{ fontSize: '0.85rem' }}>
            {b.hrs}
          </Typography>
        </Stack>
      ))}
    </Stack>
  </Paper>
);

/** Upgrade CTA Banner */
const UpgradeBanner = () => (
  <Paper
    elevation={0}
    sx={{
      background: 'linear-gradient(135deg, #f5f0ff 0%, #faf7ff 60%, #ede8ff 100%)',
      borderRadius: 3,
      p: { xs: 3, sm: 4 },
      border: '1px solid rgba(139, 92, 246, 0.1)',
      mt: 2.5,
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
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2, maxWidth: 520, lineHeight: 1.65 }}>
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
const INITIAL_TASKS: Task[] = [
  {
    id: 1,
    title: 'Approve Week 6 Content Pack',
    description: '5 shorts and 2 posts ready for review',
    priority: 'high',
    mins: 5,
    status: 'pending',
    icon: <CheckCircle2 size={18} color="#16a34a" />,
    iconBg: '#dcfce7',
    borderColor: '#bfdbfe',
  },
  {
    id: 2,
    title: 'Complete Daily Engagement (10 actions)',
    description: 'Like, comment, and engage with target accounts',
    priority: 'high',
    mins: 7,
    status: 'pending',
    icon: <TrendingUp size={18} color="#4f46e5" />,
    iconBg: '#ede9fe',
    borderColor: '#bfdbfe',
  },
  {
    id: 3,
    title: 'Reply to 2 New Google Reviews',
    description: '1 positive, 1 needs attention',
    priority: 'normal',
    mins: 3,
    status: 'pending',
    icon: <Star size={18} color="#ca8a04" />,
    iconBg: '#fef9c3',
    borderColor: '#fde68a',
  },
  {
    id: 4,
    title: 'Fix Failed Post from Yesterday',
    description: 'Instagram story failed to publish',
    priority: 'high',
    mins: 2,
    status: 'pending',
    icon: <AlertCircle size={18} color="#dc2626" />,
    iconBg: '#fee2e2',
    borderColor: '#fca5a5',
  },
];

const COMPLETED_TASKS: CompletedTask[] = [
  { title: 'Scheduled Week 5 content', time: '9:30 AM', note: 'Content will auto-publish this week' },
  { title: 'Completed morning engagement batch', time: '10:15 AM', note: 'Reached 15 potential followers' },
];

const WEEK_STATS: WeekStat[] = [
  { label: 'Content Approved', value: '5/5 pieces', current: 5, total: 5 },
  { label: 'Engagement', value: '68/70 actions', current: 68, total: 70 },
  { label: 'Reviews Replied', value: '12/12', current: 12, total: 12 },
];

const TODAY_STATS: WeekStat[] = [
  { label: 'Content Approved', value: '5/5 pieces', current: 5, total: 5 },
  { label: 'Engagement', value: '68/70 actions', current: 68, total: 70 },
  { label: 'Reviews Replied', value: '12/12', current: 12, total: 12 },
];

const RECENT_WINS: RecentWin[] = [
  { label: 'First post created', when: '5 days ago' },
  { label: '7-day streak achieved', when: 'Today' },
  { label: '50 total engagements', when: 'Yesterday' },
];

const TIME_BREAKDOWN: TimeSavedBreakdown[] = [
  { label: 'Content creation:', hrs: '6 hrs' },
  { label: 'Scheduling:', hrs: '1.5 hrs' },
  { label: 'Analytics:', hrs: '1 hr' },
];

// ─────────────────────────────────────────────────────────────────────────────
// Main Page
// ─────────────────────────────────────────────────────────────────────────────
const DailyTodoPage = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  const [tasks, setTasks] = React.useState<Task[]>(INITIAL_TASKS);

  const pendingTasks = tasks.filter((t) => t.status === 'pending');
  const completedCount = tasks.filter((t) => t.status === 'completed').length;

  const handleStartTask = (id: number) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, status: 'completed' } : t))
    );
  };

  return (
    <Box>
      {/* ── Page Header ── */}
      <Typography
        variant="h4"
        fontWeight={700}
        sx={{ mt: 2, color: '#1e3a5f', fontSize: { xs: '1.6rem', sm: '2rem' } }}
      >
        Daily To-Do
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        Your personalized task list for today
      </Typography>

      {/* ── KPI Cards ── */}
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 3 }}>
        <StatCard
          icon={<CheckCircle2 size={22} color="#16a34a" />}
          iconBg="#dcfce7"
          label="Tasks Completed"
          value={`${completedCount}/${tasks.length}`}
        />
        <StatCard
          icon={<Target size={22} color="#4f46e5" />}
          iconBg="#ede9fe"
          label="Weekly Completion"
          value="87%"
        />
      </Stack>

      {/* ── Main two-column layout ── */}
      <Grid container spacing={3} alignItems="flex-start">
        {/* Left column */}
        <Grid size={{xs:12, md: 7}}>
          {/* Today's Tasks */}
          <Paper
            elevation={0}
            sx={{ p: { xs: 2.5, sm: 3 }, borderRadius: 3, border: '1px solid', borderColor: 'divider', bgcolor: '#fff', mb: 2.5 }}
          >
            <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2.5 }}>
              <Typography variant="h6" fontWeight={700}>
                Today's Tasks
              </Typography>
              <Chip
                label={`${pendingTasks.length} remaining`}
                size="small"
                sx={{ bgcolor: '#f3f4f6', color: '#374151', fontWeight: 600, fontSize: '0.8rem', borderRadius: '8px' }}
              />
            </Stack>

            {pendingTasks.length === 0 ? (
              <Stack alignItems="center" spacing={1} sx={{ py: 4 }}>
                <CheckCircle2 size={40} color="#16a34a" />
                <Typography variant="body1" fontWeight={600} color="text.secondary">
                  All tasks completed! 🎉
                </Typography>
              </Stack>
            ) : (
              pendingTasks.map((task) => (
                <TaskCard key={task.id} task={task} onStart={handleStartTask} />
              ))
            )}
          </Paper>

          {/* Today's Progress */}
          <Paper
            elevation={0}
            sx={{ p: { xs: 2.5, sm: 3 }, borderRadius: 3, border: '1px solid', borderColor: 'divider', bgcolor: '#fff' }}
          >
            <Typography variant="h6" fontWeight={700} sx={{ mb: 2.5 }}>
              Today
            </Typography>
            {TODAY_STATS.map((s) => (
              <ProgressRow key={s.label} {...s} />
            ))}
          </Paper>

          {/* Upgrade Banner */}
          <UpgradeBanner />
        </Grid>

        {/* Right sidebar */}
        <Grid size={{xs:12, md:5}}>
          <CompletedTodayPanel tasks={COMPLETED_TASKS} />
          <ThisWeekPanel stats={WEEK_STATS} />
          <RecentWinsPanel wins={RECENT_WINS} />
          <TimeSavedPanel total="8.5 hrs" breakdown={TIME_BREAKDOWN} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default DailyTodoPage;