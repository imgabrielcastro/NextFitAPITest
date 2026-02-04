import { TextField, Typography } from "@mui/material";
import VStack from "../../../../components/stacks/Vstack";

export default function TitleWithInput() {
  return (
    <VStack>
    <Typography variant="h6" color="text.primary">
      Acesse sua conta <b>Next Fit</b> inserindo seu e-mail abaixo:
    </Typography>

    <TextField 
      label="E-mail"
      variant="standard"
      type="email"
      fullWidth
    />
  </VStack>
  );
}
