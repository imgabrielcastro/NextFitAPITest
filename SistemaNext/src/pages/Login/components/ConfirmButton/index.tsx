import Button from "@mui/material/Button";
import VStack from "../../../../components/stacks/Vstack";

export default function ConfirmButton({ step }: { step: string }) {
  return (
    <VStack>
      <Button size="large" variant="contained">
        {step == "email" ? "CONTINUAR" : "ENTRAR"}
      </Button>
    </VStack>
  );
}
