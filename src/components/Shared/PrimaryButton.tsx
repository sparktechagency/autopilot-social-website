import React from 'react';
import { Button, ButtonProps } from '@mui/material';

type ButtonSize = 'small' | 'medium' | 'large';
type ButtonVariant = 'primary' | 'secondary';

// @ts-ignore
interface PrimaryButtonProps extends ButtonProps {
  gradientFrom?: string;
  gradientTo?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
}

const sizeStyles: Record<ButtonSize, { fontSize: any; padding: any }> = {
  small: {
    fontSize: { xs: '12px', md: '14px' },
    padding: { xs: '8px 24px', md: '10px 40px' },
  },
  medium: {
    fontSize: { xs: '14px', md: '18px' },
    padding: { xs: '10px 30px', md: '12px 50px' },
  },
  large: {
    fontSize: { xs: '16px', md: '20px' },
    padding: { xs: '12px 36px', md: '14px 60px' },
  },
};

export default function PrimaryButton({
  children,
  gradientFrom = '#0A0A0A',
  gradientTo = '#155DFC',
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  sx,
  ...props
}: PrimaryButtonProps) {
  const gradient =
    variant === 'primary'
      ? `linear-gradient(to right, ${gradientFrom}, ${gradientTo})`
      : `linear-gradient(to right, ${gradientTo}, ${gradientFrom})`;

  const hoverGradient =
    variant === 'primary'
      ? `linear-gradient(to right, ${gradientTo}, ${gradientFrom})`
      : `linear-gradient(to right, ${gradientFrom}, ${gradientTo})`;

  return (
    <Button
      {...props}
      sx={{
        background: gradient,
        color: '#fff',
        fontWeight: 600,
        fontSize: sizeStyles[size].fontSize,
        padding: sizeStyles[size].padding,
        borderRadius: '100px',
        textTransform: 'none',
        boxShadow: '0 4px 14px rgba(0,0,0,0.15)',
        transition: 'all 0.3s ease',
        width: fullWidth ? '100%' : 'auto',

        '&:hover': {
          background: hoverGradient,
          boxShadow: '0 6px 20px rgba(0,0,0,0.25)',
          transform: 'translateY(-2px)',
        },

        '&:disabled': {
          background: 'linear-gradient(to right, #666, #999)',
          color: '#ccc',
        },

        ...sx,
      }}
    >
      {children}
    </Button>
  );
}
