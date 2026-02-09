import { Controller, Control, FieldErrors, useWatch } from "react-hook-form";
import { TextField } from "@mui/material";
import { LoginFormData } from "../index";

interface Props {
  step: "email" | "password";
  control: Control<LoginFormData>;
  errors: FieldErrors<LoginFormData>;
}

export default function TitleWithInput({ step, control, errors }: Props) {
  if (step === "email") {
    return (
      <Controller
        name="email"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label="E-mail"
            type="email"
            error={!!errors.email}
            helperText={errors.email?.message}
            fullWidth
            variant="standard"
          />
        )}
      />
    );
  }

  return (
    <Controller
      name="password"
      control={control}
      render={({ field }) => (
        <TextField
          {...field}
          label="Senha"
          type="password"
          error={!!errors.password}
          helperText={errors.password?.message}
          fullWidth
          variant="standard"
        />
      )}
    />
  );
}
