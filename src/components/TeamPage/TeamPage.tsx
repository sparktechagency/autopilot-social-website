'use client'
import {
  Avatar,
  Box,
  Button,
  Chip,
  FormControl,
  IconButton,
  MenuItem,
  Paper,
  Select,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { Crown, Link, Mail, Trash2 } from 'lucide-react';
import React from 'react';

// ─── Role colours ────────────────────────────────────────────────────────────
const ROLE_COLORS: Record<string, { bg: string; text: string }> = {
  Owner: { bg: '#7c3aed', text: '#fff' },
  Admin: { bg: '#2563eb', text: '#fff' },
  Coach: { bg: '#16a34a', text: '#fff' },
  'Managed Services Rep': { bg: '#ea580c', text: '#fff' },
  Member: { bg: '#374151', text: '#fff' },
};

const ROLES = ['Owner', 'Admin', 'Coach', 'Managed Services Rep', 'Member'];

// ─── Role Permissions Card ────────────────────────────────────────────────────
const RolePermissionsCard = () => {
  const roleData = [
    {
      role: 'Owner',
      perms: ['Full access to all features', 'Manage billing & subscription', 'Manage team members'],
    },
    {
      role: 'Admin',
      perms: ['Approve & schedule content', 'Connect/disconnect profiles', 'Manage team (except billing)'],
    },
    {
      role: 'Coach',
      perms: ['View all content', 'Suggest edits', 'Cannot publish unless granted'],
    },
    {
      role: 'Managed Services Rep',
      perms: ['Complete engagement tasks', 'Handle review tasks', 'Create/edit drafts'],
    },
    {
      role: 'Member',
      perms: ['View analytics', 'Comment on content', 'Limited editing access'],
    },
  ];

  return (
    <Paper
      elevation={0}
      sx={{
        p: { xs: 2.5, sm: 4 },
        borderRadius: 3,
        border: '1px solid',
        borderColor: 'divider',
        mb: 3,
        bgcolor: '#fff',
      }}
    >
      <Typography variant="h6" fontWeight={700} sx={{ mb: 3 }}>
        Role Permissions
      </Typography>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' },
          gap: 3,
        }}
      >
        {roleData.map(({ role, perms }) => (
          <Box key={role}>
            <Chip
              label={role}
              size="small"
              sx={{
                bgcolor: ROLE_COLORS[role]?.bg ?? '#374151',
                color: ROLE_COLORS[role]?.text ?? '#fff',
                fontWeight: 600,
                mb: 1.5,
                borderRadius: '8px',
                fontSize: '0.82rem',
                height: 28,
              }}
            />
            <Stack spacing={0.5}>
              {perms.map((p) => (
                <Typography key={p} variant="body2" color="primary" sx={{ fontSize: '0.88rem' }}>
                  • {p}
                </Typography>
              ))}
            </Stack>
          </Box>
        ))}
      </Box>
    </Paper>
  );
};

// ─── Member Row ───────────────────────────────────────────────────────────────
interface Member {
  name: string;
  email: string;
  joined: string;
  role: string;
  pending?: boolean;
}

const MemberRow = ({
  member,
  onRoleChange,
  onDelete,
}: {
  member: Member;
  onRoleChange: (email: string, role: string) => void;
  onDelete: (email: string) => void;
}) => {
  const isOwner = member.role === 'Owner';

  return (
    <Paper
      elevation={0}
      sx={{
        p: { xs: 2, sm: 2.5 },
        borderRadius: 2.5,
        border: '1px solid',
        borderColor: 'divider',
        mb: 2,
        bgcolor: '#fff',
      }}
    >
      <Stack direction="row" alignItems="center" spacing={2}>
        {/* Avatar */}
        <Avatar
          sx={{
            width: { xs: 44, sm: 52 },
            height: { xs: 44, sm: 52 },
            bgcolor: '#6C63FF',
            fontSize: '1.2rem',
            flexShrink: 0,
          }}
        >
          {member.name.charAt(0)}
        </Avatar>

        {/* Info */}
        <Box sx={{ flex: 1, minWidth: 0 }}>
          <Stack direction="row" alignItems="center" spacing={1} flexWrap="wrap">
            <Typography variant="subtitle1" fontWeight={700} noWrap>
              {member.name}
            </Typography>
            {member.pending && (
              <Chip
                label="Pending"
                size="small"
                sx={{
                  bgcolor: '#fef3c7',
                  color: '#92400e',
                  fontWeight: 600,
                  fontSize: '0.75rem',
                  height: 22,
                  borderRadius: '6px',
                }}
              />
            )}
          </Stack>
          <Stack direction="row" alignItems="center" spacing={0.5}>
            <Mail size={13} color="#9ca3af" />
            <Typography variant="body2" color="text.secondary" noWrap sx={{ fontSize: '0.82rem' }}>
              {member.email} • Joined {member.joined}
            </Typography>
          </Stack>
        </Box>

        {/* Right side */}
        {isOwner ? (
          <Chip
            icon={<Crown size={14} color="#7c3aed" />}
            label="Owner"
            variant="outlined"
            sx={{
              borderColor: 'rgba(124,58,237,0.3)',
              color: '#7c3aed',
              fontWeight: 600,
              fontSize: '0.82rem',
              height: 32,
              borderRadius: '8px',
              '& .MuiChip-icon': { ml: '8px' },
            }}
          />
        ) : (
          <Stack direction="row" alignItems="center" spacing={1}>
            <FormControl size="small" sx={{ minWidth: { xs: 110, sm: 150 } }}>
              <Select
                value={member.role}
                onChange={(e) => onRoleChange(member.email, e.target.value)}
                sx={{
                  borderRadius: 2,
                  fontSize: '0.88rem',
                  '& .MuiOutlinedInput-notchedOutline': { borderColor: '#e5e7eb' },
                }}
              >
                {ROLES.filter((r) => r !== 'Owner').map((r) => (
                  <MenuItem key={r} value={r} sx={{ fontSize: '0.88rem' }}>
                    {r}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <IconButton
              size="small"
              onClick={() => onDelete(member.email)}
              sx={{
                color: '#ef4444',
                '&:hover': { bgcolor: 'rgba(239,68,68,0.08)' },
              }}
            >
              <Trash2 size={18} />
            </IconButton>
          </Stack>
        )}
      </Stack>
    </Paper>
  );
};

// ─── Main Page ────────────────────────────────────────────────────────────────
const TeamPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [members, setMembers] = React.useState<Member[]>([
    { name: 'John Doe', email: 'john@example.com', joined: '2026-01-01', role: 'Owner' },
    { name: 'Sarah Johnson', email: 'sarah@example.com', joined: '2026-01-15', role: 'Admin' },
    { name: 'Mike Chen', email: 'mike@example.com', joined: '2026-01-20', role: 'Member' },
    { name: 'Emily White', email: 'emily@example.com', joined: '2026-01-26', role: 'Coach', pending: true },
  ]);

  const handleRoleChange = (email: string, role: string) => {
    setMembers((prev) => prev.map((m) => (m.email === email ? { ...m, role } : m)));
  };

  const handleDelete = (email: string) => {
    setMembers((prev) => prev.filter((m) => m.email !== email));
  };

  return (
    <Box>
      <Typography variant="h4" fontWeight={600} sx={{ mt: 2 }}>
        Team Management
      </Typography>
      <Typography variant="body1" fontWeight={500} sx={{ mb: 3, color: '#4A5565', lineHeight: 1.6 }}>
        Manage your workspace members and roles
      </Typography>

      {/* Role Permissions */}
      <RolePermissionsCard />

      {/* Team Members */}
      <Paper
        elevation={0}
        sx={{
          p: { xs: 2.5, sm: 4 },
          borderRadius: 3,
          border: '1px solid',
          borderColor: 'divider',
          bgcolor: '#fff',
        }}
      >
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          alignItems={{ xs: 'flex-start', sm: 'center' }}
          justifyContent="space-between"
          spacing={2}
          sx={{ mb: 3 }}
        >
          <Typography variant="h6" fontWeight={700}>
            Team Members
          </Typography>
          <Button
            variant="contained"
            startIcon={<Link size={16} />}
            disableElevation
            sx={{
              bgcolor: '#111827',
              color: '#fff',
              borderRadius: 2,
              textTransform: 'none',
              fontWeight: 600,
              px: 2.5,
              '&:hover': { bgcolor: '#374151' },
            }}
          >
            Invite Role Link
          </Button>
        </Stack>

        {members.map((member) => (
          <MemberRow
            key={member.email}
            member={member}
            onRoleChange={handleRoleChange}
            onDelete={handleDelete}
          />
        ))}
      </Paper>
    </Box>
  );
};

export default TeamPage;