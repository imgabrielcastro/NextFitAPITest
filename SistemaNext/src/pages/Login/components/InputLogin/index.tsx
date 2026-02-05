import { TextField } from "@mui/material";
import VStack from "../../../../components/stacks/Vstack";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { schema } from "../../../../schema/index";
import { useState } from "react";

export default function TitleWithInput({
  step,
  setMail,
  setPass,
}: {
  step: string;
  setMail: (mail: string) => void;
  setPass: (pass: string) => void;
}) {
  const {
    register,
    formState: { errors, isSubmitting },
    trigger,
    getValues,
    setValue,
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const [isEmailSubmitted, setIsEmailSubmitted] = useState(false);

  return (
    <VStack>
      <TextField
        label={step == "email" ? "E-mail" : "Senha"}
        variant="standard"
        type={step == "email" ? "email" : "password"}
        fullWidth
        {...register("email")}
        error={isEmailSubmitted && !!errors.email}
        helperText={isEmailSubmitted ? errors.email?.message : ""}
        onChange={(e) => {
          setValue("email", e.target.value);
          setIsEmailSubmitted(true);
          if (step == "email") {
            setMail(e.target.value);
          } else {
            setPass(e.target.value);
          }
        }}
      />
    </VStack>
  );
}
