import { IconButton, Typography, Box } from "@mui/material";
import Back from "@mui/icons-material/ArrowBack";

interface Props {
  email: string;
  onBack: () => void;
}

export function EmailPreview({ email, onBack }: Props) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <IconButton
        onClick={onBack}
        sx={{
          color: "primary.main",
        }}
      >
        <Back fontSize="medium" />
      </IconButton>

      <Typography variant="body1" color="text.primary">
        {email || "email@exemplo.com"}
      </Typography>
    </Box>
  );
}
