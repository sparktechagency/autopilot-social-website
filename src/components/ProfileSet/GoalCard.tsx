// components/ui/GoalCard.tsx
import { Card, CardContent, Typography, alpha } from '@mui/material';
import {
  Users,
  UserPlus,
  CalendarCheck,
  LucideIcon,
} from 'lucide-react';

/**
 * Map icon names → Lucide components
 * (extend this list when needed)
 */
const iconMap: Record<string, LucideIcon> = {
  followers: Users,
  leads: UserPlus,
  bookings: CalendarCheck,
};

type Props = {
  label: string;
  icon: keyof typeof iconMap; // 👈 safer than string
  selected: boolean;
  onClick: () => void;
};

export default function GoalCard({
  label,
  icon,
  selected,
  onClick,
}: Props) {
  const Icon = iconMap[icon];

  return (
    <Card
      onClick={onClick}
      sx={{
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        border: selected ? 2 : 1,
        borderColor: selected ? 'primary.main' : 'grey.300',
        bgcolor: selected ? alpha('#7c3aed', 0.08) : 'white',
        '&:hover': {
          borderColor: 'primary.main',
          boxShadow: 4,
        },
      }}
    >
      <CardContent sx={{ textAlign: 'center', py: 5 }}>
        {Icon && (
          <Icon
            size={48}
            strokeWidth={1.75}
            color={selected ? '#7c3aed' : '#64748b'}
            style={{ marginBottom: 16 }}
          />
        )}

        <Typography variant="subtitle1" fontWeight={selected ? 600 : 500}>
          {label}
        </Typography>
      </CardContent>
    </Card>
  );
}
