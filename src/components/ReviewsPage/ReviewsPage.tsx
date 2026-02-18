'use client'
import {
  Avatar,
  Box,
  Button,
  Chip,
  Container,
  Paper,
  Rating,
  Stack,
  styled,
  Tab,
  Tabs,
  Typography,
  useMediaQuery,
  useTheme
} from '@mui/material';
import { ArrowRight, Sparkles, Star } from 'lucide-react';
import React from 'react';
import ReviewStats from './ReviewStats';

const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{
      children: <span className="MuiTabs-indicatorSpan" />,
    }}
  />
))({
  minHeight: 48,
  '& .MuiTabs-indicator': {
    display: 'none',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  '& .MuiTabs-indicatorSpan': {
    maxWidth: 40,
    width: '100%',
    backgroundColor: '#635ee7',
    borderRadius: 4,
  },
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(({ theme }) => ({
  textTransform: 'none',
  fontWeight: 500,
  fontSize: theme.typography.pxToRem(15),
  minHeight: 40,
  padding: theme.spacing(1.2, 2.5),
  borderRadius: 8,
  color: '#000',

  '&.Mui-selected': {
    color: '#000',
    backgroundColor: '#ffffff',
    fontWeight: 600,
  },

  '&.Mui-focusVisible': {
    backgroundColor: 'rgba(99, 94, 231, 0.15)',
  },
}));

// Review Card Component
const ReviewCard = ({ review, isPending = false }: any) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Paper
      elevation={0}
      sx={{
        p: { xs: 2, sm: 3 },
        borderRadius: 3,
        border: '1px solid',
        borderColor: 'divider',
        bgcolor: isPending ? 'white' : 'white', // slight orange tint for pending
        mb: 3,
      }}
    >
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 2, sm: 3 }}
        alignItems={{ xs: 'flex-start', sm: 'center' }}
        justifyContent="space-between"
      >

        <Stack direction="row" spacing={2} alignItems="center" sx={{ flex: 1 }}>
          <Avatar
            sx={{
              width: { xs: 48, sm: 56 },
              height: { xs: 48, sm: 56 },
              bgcolor: '#6C63FF',
              fontSize: '1.5rem',
            }}
          >
            {review.name.charAt(0)}
          </Avatar>

          <Box>
            <Typography variant="subtitle1" fontWeight={600}>
              {review.name}
            </Typography>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              {review.source} • {review.date}
            </Typography>

            <Rating
              value={review.rating}
              precision={0.5}
              readOnly
              size="small"
              icon={<Star fontSize="inherit" />}
            />
          </Box>
        </Stack>

        <Chip
          label={isPending ? 'Pending' : review.rating === 5 ? '5 ★' : `${review.rating} ★`}
          color={isPending ? 'warning' : 'success'}
          size="small"
          variant={isPending ? 'outlined' : 'filled'}
        />
      </Stack>

      <Typography variant="body1" sx={{ mt: 2, mb: 2, lineHeight: 1.6 }}>
        {review.text}
      </Typography>

      {/* AI Reply Section */}
      <Paper
        variant="outlined"
        sx={{
          p: 2,
          borderRadius: 2,
          bgcolor: 'rgba(99, 94, 231, 0.04)',
          borderColor: 'rgba(99, 94, 231, 0.2)',
        }}
      >
        <Typography variant="subtitle2" color="primary" gutterBottom sx={{ fontWeight: 600 }}>
          AI-Generated Reply ✦
        </Typography>

        <Typography variant="body2" sx={{ whiteSpace: 'pre-line', mb: 2 }}>
          {review.aiReply}
        </Typography>

        <Stack direction={{xs: "column", md:"row"}} spacing={1} justifyContent="flex-end"  className='!'>
          <Button size="large" fullWidth variant="outlined" className='text-black! justify-start! border-gray-300! capitalize!' startIcon={<Sparkles size={16} />}>
            Regenerate
          </Button>
          <Button size="large" variant="outlined" sx={{ minWidth: 200 }} className='text-black! border-gray-300! capitalize!'>
            Edit
          </Button>
          <Button
            size="large"
            variant="contained"
            disableElevation
            sx={{ bgcolor: 'black', minWidth: 200 }}
          >
            Post Reply
          </Button>
        </Stack>
      </Paper>
    </Paper>
  );
};

const ReviewsPage = () => {
  const [tab, setTab] = React.useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // Sample data based on your screenshot
  const reviews = [
    {
      name: 'Sarah Johnson',
      source: 'Google',
      date: '2026-01-26',
      rating: 5,
      text: 'Absolutely amazing service! The team went above and beyond to help us grow our social media presence. Highly recommend!',
      aiReply:
        'Thank you so much for your kind words, Sarah! We\'re thrilled to have helped you grow your social media presence. Your success is our success, and we\'re excited to continue supporting your journey! ✨',
    },
    {
      name: 'Michael Chen',
      source: 'Trustpilot',
      date: '2026-01-24',
      rating: 4.5,
      text: 'Great experience overall! The platform is intuitive and the customer support is responsive. Would love to see more analytics features.',
      aiReply: 'Thank you for the feedback, Michael! We\'re glad you\'re enjoying the platform. Your suggestion about analytics features is valuable—we\'re constantly working on improvements!',
    },
    {
      name: 'Emma Rodriguez',
      source: 'Facebook',
      date: '2026-01-22',
      rating: 5,
      text: 'Best investment for our business! The ROI has been incredible and the team is always there to help. Already recommended to 3 other companies!',
      aiReply: 'Emma, thank you so much for being such an amazing advocate for our service! We\'re thrilled about your results and excited to help your referrals succeed too!',
    },
    {
      name: 'James Wilson',
      source: 'Google',
      date: '2026-01-20',
      rating: 3.5,
      text: 'Good service, but onboarding was a bit confusing. Once I got the hang of it, things improved. Support helped explain the features better.',
      aiReply: 'Thanks for sharing your honest feedback, James! We\'re sorry the onboarding was confusing—we\'re working on making it smoother. Glad support could help clarify things!',
    },
    {
      name: 'Lisa Thompson',
      source: 'LinkedIn',
      date: '2026-01-18',
      rating: 5,
      text: 'Outstanding results! Our engagement rates have tripled in just 3 months. The AI-powered suggestions are spot-on. Highly recommend!',
      aiReply: 'Lisa, we\'re absolutely thrilled to hear about your amazing results! Your success story inspires us to keep innovating. Thank you for trusting us with your growth!',
    },
    {
      name: 'David Martinez',
      source: 'Google',
      date: '2026-01-16',
      rating: 4,
      text: 'Solid platform with great features. The pricing is reasonable and the value is definitely there. Minor UI improvements would help.',
      aiReply: 'Thank you for the thoughtful review, David! We appreciate your feedback on the UI—we\'re always refining the experience. We\'re happy to work with you!',
    }
  ];

  return (
    <Box>      

        <Typography variant="h4" fontWeight={600} sx={{ mt: 2 }}>
          Reviews Inbox
        </Typography>

        <Typography variant="body1" fontWeight={500} sx={{ mb: 3, color: "#4A5565", lineHeight: 1.6 }}>
          Manage and respond to customer reviews
        </Typography>

        <ReviewStats />

        {/* ================= Tabs / Filters ================= */}
        <Paper
          elevation={0}
          sx={{
            borderRadius: 3,
            p: 1,
            bgcolor: 'transparent',
          }}
        >
          <Paper
            sx={{
              borderRadius: 3,
              p: 1,
              bgcolor: '#EFF6FF',
              overflowX: 'auto',
            }}
          >
            {/* @ts-ignore */}
            <StyledTabs
              value={tab}
              onChange={(_: any, v: any) => setTab(v)}
              variant={isMobile ? 'scrollable' : 'standard'}
              scrollButtons={isMobile ? 'auto' : false}
              allowScrollButtonsMobile
            >
              {/* @ts-ignore */}
              <StyledTab label="All Reviews" />
              {/* @ts-ignore */}
              <StyledTab label="Replied" />
              {/* @ts-ignore */}
              <StyledTab label="Pending" />
            </StyledTabs>
          </Paper>

          {/* Tab Content – showing same content for simplicity */}
          <Box sx={{ mt: 4 }}>
            {reviews.map((review, idx) => (
              <ReviewCard key={idx} review={review} isPending={tab === 2} />
            ))}

            {/* You can add more cards or a "Load more" button here */}
            {tab === 2 && (
              <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 4 }}>
                4 pending reviews shown above (example data)
              </Typography>
            )}
          </Box>
          <Paper
            elevation={0}
            sx={{
              background: "linear-gradient(135deg, #f5f0ff 0%, #faf7ff 60%, #ede8ff 100%)",
              borderRadius: "20px",
              p: { xs: 3, sm: 4 },
              maxWidth: 720,
              // mx: "auto",
              border: "1px solid rgba(139, 92, 246, 0.1)",
            }}
          >
            <Box sx={{ display: "flex", flexDirection: {xs:"column", md:"row"}, alignItems: {xs:"center", sm:"flex-start"}, justifyContent: {xs: "center", md:"start"}, gap: 2.5 }}>
              {/* Icon */}
              <Box
                sx={{
                  width: {xs:65, sm:52},
                  height: {xs:65, sm:52},
                  borderRadius: "14px",
                  background: "rgba(139, 92, 246, 0.12)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Sparkles color="#7c3aed"  className='text-xl md:text-lg'/>
              </Box>

              {/* Content */}
              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    fontSize: "1.15rem",
                    color: "#111827",
                    mb: 1,
                    lineHeight: 1.3,
                  }}
                >
                  Let a Rep Do This For You
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    color: "#4b5563",
                    fontSize: "0.95rem",
                    lineHeight: 1.65,
                    mb: 2.5,
                    maxWidth: 520,
                  }}
                >
                  Upgrade to Managed Services and our team will execute all these
                  daily tasks while you focus on running your business. Full
                  transparency in your dashboard.
                </Typography>

                <Button
                  variant="contained"
                  endIcon={
                    <ArrowRight
                      size={18}
                      style={{
                        transition: "transform 0.2s ease",
                        transform: "translateX(0)",
                      }}
                    />
                  }
                  sx={{
                    background: "linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)",
                    color: "#fff",
                    textTransform: "none",
                    fontWeight: 600,
                    fontSize: "0.95rem",
                    borderRadius: "12px",
                    px: 3,
                    py: 1.25,
                    boxShadow: "0 4px 14px rgba(109, 40, 217, 0.35)",
                    "&:hover": {
                      background: "linear-gradient(135deg, #6d28d9 0%, #5b21b6 100%)",
                      boxShadow: "0 6px 20px rgba(109, 40, 217, 0.45)",
                    },
                    transition: "all 0.2s ease",
                  }}
                >
                  Upgrade to Managed Services
                </Button>
              </Box>
            </Box>
          </Paper>
        </Paper>      
    </Box>
  );
};

export default ReviewsPage;