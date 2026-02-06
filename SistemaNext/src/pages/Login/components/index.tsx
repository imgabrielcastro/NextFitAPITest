import HStack from "../../../components/stacks/Hstack";
import VStack from "../../../components/stacks/Vstack";
import { Box, Typography } from "@mui/material";
import nfp from "../../../assets/nfp.png";
import nfpLogo from "../../../assets/logonf.svg";
import ConfirmButton from "./ConfirmButton";
import TitleWithInput from "./InputLogin";
import TextLogin from "./TextLink";
import IconLink from "./IconNavigate";
import igIcon from "../../../assets/instaP.png";
import ytIcon from "../../../assets/ytIcon.png";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../../schema";
import * as yup from "yup";
import { EmailPreview } from "./EmailPreview";

export type LoginFormData = yup.InferType<typeof schema>;
type Step = "email" | "password";

export default function Login() {
  const [step, setStep] = useState<Step>("email");
  const [emailForPreview, setEmailForPreview] = useState("");

  const {
    control,
    handleSubmit,
    trigger,
    watch,
    getValues,
    formState: { errors, isSubmitting }
  } = useForm<LoginFormData>({
    resolver: yupResolver(schema),
    mode: "onSubmit",
    defaultValues: {
      email: "",
      password: ""
    }
  });

  const emailValue = watch("email");

  const onSubmit = (data: LoginFormData) => {
    console.log("Login payload:", data);
  };

  const handleNext = async () => {
    if (step === "email") {
      const isValid = await trigger("email");
      if (isValid) {
        setEmailForPreview(getValues("email"));
        setStep("password");
      }
      return;
    }

    handleSubmit(onSubmit)();
  };

  return (
    <VStack sx={{ flex: 1, flexDirection: "row", minHeight: "100vh" }}>
      <VStack sx={{ flex: 1, minHeight: "100vh", padding: 4 }}>
        <VStack
          sx={{
            minWidth: 550,
            margin: "0 auto",
            justifyContent: "space-between",
            height: "100%"
          }}
        >
          <Box
            component="img"
            src={nfpLogo}
            alt="Logo"
            sx={{ width: 200, marginTop: 8 }}
          />

          <VStack gap={2}>
            <Typography variant="h4" color="primary.main" fontWeight="bold">
              {step === "email"
                ? "Que bom ter você por aqui! 👋"
                : "Boas-vindas novamente!"}
            </Typography>

            {step === "email" && (
              <Typography variant="h6">
                Acesse sua conta Next Fit inserindo seu e-mail abaixo:
              </Typography>
            )}

            {step === "password" && (
              <EmailPreview email={emailForPreview || emailValue} onBack={() => setStep("email")} />
            )}

            <VStack gap={8}>
              <TitleWithInput step={step} control={control} errors={errors} />
              <ConfirmButton
                step={step}
                loading={isSubmitting}
                onClick={handleNext}
              />
            </VStack>
          </VStack>

          <VStack>
            <HStack justifyContent="space-between">
              <TextLogin
                label="Acessar central de ajuda"
                link="https://ajuda.nextfit.com.br/support/home"
              />

              <HStack gap={1}>
                <IconLink
                  icon={igIcon}
                  link="https://www.instagram.com/nextfitsistema/"
                />
                <IconLink
                  icon={ytIcon}
                  link="https://www.youtube.com/@nextfitsistema"
                />
              </HStack>
            </HStack>

            <HStack justifyContent="space-between">
              <TextLogin
                label="Entre em contato com suporte"
                link="https://api.whatsapp.com/send?phone=554830360419"
              />

              <Typography variant="caption" color="text.secondary">
                Feito com 💜 por José Gabriel
              </Typography>
            </HStack>
          </VStack>
        </VStack>
      </VStack>

      <Box
        sx={{
          display: { xs: "none", md: "block" },
          flex: 1,
          backgroundImage: `url(${nfp})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />
    </VStack>
  );
}