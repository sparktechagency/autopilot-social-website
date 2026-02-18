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
import { CalendarDays, Check, Instagram, Pencil, Play, RefreshCw } from 'lucide-react';
import React from 'react';

// ─── Styled Tabs (same pattern as ReviewsPage) ────────────────────────────────
const StyledTabs = styled((props: any) => (
    <Tabs {...props} TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }} />
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

// ─── Types ────────────────────────────────────────────────────────────────────
interface ContentItem {
    id: number;
    type: 'SHORT' | 'CONTENT';
    platforms: string[];
    status: 'draft' | 'completed';
    title: string;
    description: string;
    hashtags: string[];
    scheduled: string;
    hasVideo: boolean;
}

// ─── TikTok Icon (simple SVG) ─────────────────────────────────────────────────
const TikTokIcon = ({ size = 14 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.75a8.2 8.2 0 004.79 1.53V6.85a4.85 4.85 0 01-1.02-.16z" />
    </svg>
);

// ─── Video Thumbnail ──────────────────────────────────────────────────────────
const VideoThumbnail = () => (
    <Box
        sx={{
            width: { xs: 90, sm: 110 },
            height: { xs: 90, sm: 110 },
            borderRadius: 2.5,
            background: 'linear-gradient(135deg, #818cf8 0%, #a78bfa 50%, #7c3aed 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
        }}
    >
        <Box
            sx={{
                width: 36,
                height: 36,
                borderRadius: '50%',
                bgcolor: 'rgba(255,255,255,0.25)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Play size={18} color="#fff" fill="#fff" style={{ marginLeft: 2 }} />
        </Box>
    </Box>
);

// ─── Content Card ─────────────────────────────────────────────────────────────
const ContentCard = ({
    item,
    onApprove,
}: {
    item: ContentItem;
    onApprove: (id: number) => void;
}) => {
    const isCompleted = item.status === 'completed';

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
            {/* Top row: badges + actions */}
            <Stack
                direction="row"
                alignItems="flex-start"
                justifyContent="space-between"
                spacing={2}
                sx={{ mb: 1.5 }}
            >
                {/* Left: type + platforms + status */}
                <Stack direction="row" alignItems="center" spacing={1} flexWrap="wrap" useFlexGap>
                    {/* Type badge */}
                    <Chip
                        label={item.type}
                        size="small"
                        sx={{
                            bgcolor: item.type === 'SHORT' ? '#111827' : '#1d4ed8',
                            color: '#fff',
                            fontWeight: 700,
                            fontSize: '0.7rem',
                            height: 22,
                            borderRadius: '6px',
                            letterSpacing: '0.05em',
                        }}
                    />

                    {/* Platforms */}
                    {item.platforms.includes('instagram') && (
                        <Stack direction="row" alignItems="center" spacing={0.4}>
                            <Instagram size={13} color="#6b7280" />
                            <Typography variant="caption" color="text.secondary">instagram</Typography>
                        </Stack>
                    )}
                    {item.platforms.includes('tiktok') && (
                        <Stack direction="row" alignItems="center" spacing={0.4}>
                            <TikTokIcon size={13} />
                            <Typography variant="caption" color="text.secondary">tiktok</Typography>
                        </Stack>
                    )}

                    {/* Status badge */}
                    <Chip
                        label={isCompleted ? 'Completed' : 'draft'}
                        size="small"
                        sx={{
                            bgcolor: isCompleted ? '#dcfce7' : '#fff7ed',
                            color: isCompleted ? '#15803d' : '#c2410c',
                            border: '1px solid',
                            borderColor: isCompleted ? '#bbf7d0' : '#fed7aa',
                            fontWeight: 600,
                            fontSize: '0.72rem',
                            height: 22,
                            borderRadius: '6px',
                        }}
                    />
                </Stack>

                {/* Right: edit + approve (only for pending) */}
                {!isCompleted && (
                    <Stack direction="row" alignItems="center" spacing={1} flexShrink={0}>
                        <Box
                            sx={{
                                width: 36,
                                height: 36,
                                border: '1px solid #e5e7eb',
                                borderRadius: 1.5,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer',
                                '&:hover': { bgcolor: '#f9fafb' },
                            }}
                        >
                            <Pencil size={15} color="#6b7280" />
                        </Box>
                        <Button
                            variant="contained"
                            disableElevation
                            startIcon={<Check size={15} />}
                            onClick={() => onApprove(item.id)}
                            sx={{
                                bgcolor: '#111827',
                                color: '#fff',
                                borderRadius: 2,
                                textTransform: 'none',
                                fontWeight: 600,
                                fontSize: '0.9rem',
                                px: 2,
                                py: 0.8,
                                '&:hover': { bgcolor: '#374151' },
                            }}
                        >
                            Approve
                        </Button>
                    </Stack>
                )}
            </Stack>

            {/* Main content row */}
            <Stack direction="row" spacing={2} alignItems="flex-start">
                {item.hasVideo && <VideoThumbnail />}

                <Box sx={{ flex: 1, minWidth: 0 }}>
                    <Typography variant="h6" fontWeight={700} sx={{ fontSize: { xs: '1rem', sm: '1.15rem' }, mb: 0.5 }}>
                        {item.title}
                    </Typography>

                    <Typography variant="body2" color="text.secondary" sx={{ mb: 0.75, lineHeight: 1.5 }}>
                        {item.description}
                    </Typography>

                    <Typography variant="body2" sx={{ mb: 0.75, fontSize: '0.82rem', textWrap: "wrap" }}>
                        <span style={{ color: '#6b7280' }}>Hashtags: </span>
                        {item.hashtags.map((tag) => (
                            <span key={tag} style={{ color: '#2563eb', marginRight: 4 }}>
                                {tag}
                            </span>
                        ))}
                    </Typography>

                    <Stack direction="row" alignItems="center" spacing={0.6}>
                        <CalendarDays size={13} color="#9ca3af" />
                        <Typography variant="caption" color="text.secondary">
                            Scheduled for {item.scheduled}
                        </Typography>
                    </Stack>
                </Box>
            </Stack>
        </Paper>
    );
};

// ─── Main Page ────────────────────────────────────────────────────────────────
const ContentPage = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [tab, setTab] = React.useState(0);

    const [items, setItems] = React.useState<ContentItem[]>([
        {
            id: 1,
            type: 'SHORT',
            platforms: ['instagram', 'tiktok'],
            status: 'draft',
            title: '5 Tips for for makeup',
            description: 'Want to 10x your business growth? Here are 5 proven strategies that work every time!',
            hashtags: ['#businessgrowth', '#entrepreneur', '#smallbusiness', '#growthhacks', '#businesstips'],
            scheduled: '2026-01-28 10:00 AM',
            hasVideo: true,
        },
        {
            id: 2,
            type: 'CONTENT',
            platforms: ['instagram', 'tiktok'],
            status: 'draft',
            title: '5 Tips for Growing Your Business',
            description: 'Want to 10x your business growth? Here are 5 proven strategies that work every time!',
            hashtags: ['#businessgrowth', '#entrepreneur', '#smallbusiness', '#growthhacks', '#businesstips'],
            scheduled: '2026-01-28 10:00 AM',
            hasVideo: false,
        },
        {
            id: 3,
            type: 'SHORT',
            platforms: ['instagram', 'tiktok'],
            status: 'completed',
            title: '5 Tips for Growing Your Business',
            description: 'Want to 10x your business growth? Here are 5 proven strategies that work every time!',
            hashtags: ['#businessgrowth', '#entrepreneur', '#smallbusiness', '#growthhacks', '#businesstips'],
            scheduled: '2026-01-28 10:00 AM',
            hasVideo: true,
        },
        {
            id: 4,
            type: 'SHORT',
            platforms: ['instagram', 'tiktok'],
            status: 'draft',
            title: '5 Tips for Growing Your Business',
            description: 'Want to 10x your business growth? Here are 5 proven strategies that work every time!',
            hashtags: ['#businessgrowth', '#entrepreneur', '#smallbusiness', '#growthhacks', '#businesstips'],
            scheduled: '2026-01-28 10:00 AM',
            hasVideo: true,
        },
        {
            id: 5,
            type: 'CONTENT',
            platforms: ['instagram', 'tiktok'],
            status: 'completed',
            title: '5 Tips for Growing Your Business',
            description: 'Want to 10x your business growth? Here are 5 proven strategies that work every time!',
            hashtags: ['#businessgrowth', '#entrepreneur', '#smallbusiness', '#growthhacks', '#businesstips'],
            scheduled: '2026-01-28 10:00 AM',
            hasVideo: false,
        },
    ]);

    const handleApprove = (id: number) => {
        setItems((prev) => prev.map((item) => (item.id === id ? { ...item, status: 'completed' } : item)));
    };

    const handleApproveAll = () => {
        setItems((prev) => prev.map((item) => ({ ...item, status: 'completed' })));
    };

    const pendingItems = items.filter((i) => i.status === 'draft');
    const completedItems = items.filter((i) => i.status === 'completed');

    const filteredItems =
        tab === 0 ? items : tab === 1 ? pendingItems : completedItems;

    return (
        <Box>
            {/* Header */}
            <Stack
                direction={{ xs: 'column', sm: 'row' }}
                alignItems={{ xs: 'flex-start', sm: 'center' }}
                justifyContent="space-between"
                spacing={2}
                sx={{ mt: 2, mb: 0.5 }}
            >
                <Box>
                    <Typography
                        variant="h4"
                        fontWeight={700}
                        sx={{ color: '#1e3a5f', fontSize: { xs: '1.6rem', sm: '2rem' } }}
                    >
                        Weekly Content Pack
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mt: 0.25 }}>
                        Week of January 27, 2026
                    </Typography>
                </Box>

                <Stack direction={{ xs: 'column', sm: 'row' }} sx={{ width: {xs: "100%", md:"auto"},}} spacing={1.5}>                
                    <Button
                        variant="contained"
                        size='large'
                        startIcon={<RefreshCw size={16} />}                        
                        sx={{
                            borderColor: '#d1d5db',
                            bgcolor: "white",
                            color: '#111827',
                            borderRadius: 2,
                            textTransform: 'none',
                            fontWeight: 600,                            
                            px: 2.5,
                            '&:hover': { borderColor: '#9ca3af', bgcolor: '#f9fafb' },
                        }}
                    >
                        Generate New Week
                    </Button>

                    {pendingItems.length > 0 && (
                        <Button
                            variant="contained"
                            size='large'
                            startIcon={<Check size={16} />}
                            onClick={handleApproveAll}
                            sx={{
                                borderColor: '#d1d5db',
                                bgcolor: "black",
                                color: '#ffff',                                
                                borderRadius: 2,
                                textTransform: 'none',
                                fontWeight: 600,
                                px: 2.5,                                
                            }}
                        >
                            Approve All ({pendingItems.length})
                        </Button>
                    )}
                </Stack>
            </Stack>

            {/* Tabs */}
            <Paper
                elevation={0}
                sx={{
                    borderRadius: 50,
                    px: 1,
                    py: 0.75,
                    bgcolor: '#f3f4f6',
                    display: 'inline-flex',
                    mb: 3,
                    mt: 2,
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
                    <StyledTab label="All Content & Shorts" />
                    <StyledTab label={`Pending (${pendingItems.length})`} />
                    <StyledTab label={`Completed (${completedItems.length})`} />
                </StyledTabs>
            </Paper>

            {/* Content List */}
            <Box>
                {filteredItems.length === 0 ? (
                    <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 6 }}>
                        No items in this category.
                    </Typography>
                ) : (
                    filteredItems.map((item) => (
                        <ContentCard key={item.id} item={item} onApprove={handleApprove} />
                    ))
                )}
            </Box>
        </Box>
    );
};

export default ContentPage;