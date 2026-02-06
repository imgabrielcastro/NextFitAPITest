import { Button } from "@mui/material";
import VStack from "../../../../components/stacks/Vstack";

interface Props {
  step: "email" | "password";
  loading: boolean;
  onClick: () => void;
}

export default function ConfirmButton({ step, loading, onClick }: Props) {
  return (
    <VStack>
      <Button
        size="large"
        variant="contained"
        onClick={onClick}
        disabled={loading}
      >
        {step === "email" ? "CONTINUAR" : "ENTRAR"}
      </Button>
    </VStack>
  );
}