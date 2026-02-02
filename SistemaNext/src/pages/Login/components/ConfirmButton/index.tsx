import Button from "@mui/material/Button";
import VStack from "../../../../components/stacks/Vstack";

export default function ConfirmButton() {
  return (
    <VStack>
      <Button size="large" variant="contained" fullWidth>
        Confirmar
      </Button>
    </VStack>
  );
}
