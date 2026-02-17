// components/onboarding/steps/Step3PhotoUpload.tsx
import {
  Box,
  Button,
  IconButton,
  Paper,
  Stack,
  Typography,
  alpha,
} from '@mui/material';
import { Trash2, Upload } from 'lucide-react';
import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

type Props = {
  data: any;
  update: (field: string, value: any) => void;
};

export default function Step3PhotoUpload({ data, update }: Props) {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      update('photos', [...data.photos, ...acceptedFiles]);
    },
    [data.photos, update]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/png': ['.png'],
      'image/jpeg': ['.jpg', '.jpeg'],
    },
    maxSize: 10 * 1024 * 1024, // 10MB
  });

  const removePhoto = (index: number) => {
    const newPhotos = data.photos.filter((_: File, i: number) => i !== index);
    update('photos', newPhotos);
  };

  return (
    <Stack spacing={4}>
      <Box textAlign="left">
        <Typography variant="body1" fontWeight={600} gutterBottom>
          Upload Product/Service Photos (Optional but Recommended)
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          Optional but recommended — these help us create better, more personalized content
        </Typography>
      </Box>

      <Paper
        variant="outlined"
        {...getRootProps()}
        sx={{
          p: 8,
          textAlign: 'center',
          cursor: 'pointer',
          borderStyle: 'dashed',
          borderWidth: 2,
          borderColor: isDragActive ? 'primary.main' : 'grey.400',
          bgcolor: isDragActive ? alpha('#7c3aed', 0.04) : 'transparent',
          transition: 'all 0.2s',
          '&:hover': {
            borderColor: 'primary.main',
            bgcolor: alpha('#7c3aed', 0.02),
          },
        }}
      >
        <input {...getInputProps()} />
        <Upload  size={40} style={{marginInline: "auto", color: "#99A1AF"}}/>
        <Typography variant="h6" gutterBottom>
          Click to upload or drag and drop
        </Typography>
        <Typography variant="body2" color="text.secondary">
          PNG, JPG up to 10MB each
        </Typography>
        <Button variant="outlined" sx={{ mt: 3 }}>
          Choose Files
        </Button>
      </Paper>

      {data.photos.length > 0 && (
        <Box>
          <Typography variant="subtitle1" gutterBottom>
            Uploaded photos ({data.photos.length})
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 2,
              mt: 2,
            }}
          >
            {data.photos.map((file: File, index: number) => (
              <Box
                key={index}
                sx={{
                  position: 'relative',
                  width: 120,
                  height: 120,
                  borderRadius: 2,
                  overflow: 'hidden',
                  border: 1,
                  borderColor: 'divider',
                }}
              >
                <img
                  src={URL.createObjectURL(file)}
                  alt={file.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <IconButton
                  size="small"
                  color="error"
                  onClick={() => removePhoto(index)}
                  sx={{
                    position: 'absolute',
                    top: 4,
                    right: 4,
                    bgcolor: 'background.paper',
                    '&:hover': { bgcolor: 'error.light' },
                  }}
                >
                  <Trash2 fontSize="small" />
                </IconButton>
              </Box>
            ))}
          </Box>
        </Box>
      )}
    </Stack>
  );
}