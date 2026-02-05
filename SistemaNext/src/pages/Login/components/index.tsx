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
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../../schema/index";

export default function Login() {
  type LoginFormData = yup.InferType<typeof schema>;
  type Step = "email" | "password";

  const [step, setStep] = useState<Step>("email");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isEmailSubmitted, setIsEmailSubmitted] = useState(false);
  const [isPassowordSubmitted, setIsPassowordSubmitted] = useState(false);

  // const {
  //   register,
  //   formState: { errors, isSubmitting },
  //   handleSubmit,
  // } = useForm<LoginFormData>({
  //   resolver: yupResolver(schema),
  //   mode: "onSubmit",
  // });

  return (
    <VStack
      sx={{
        flex: 1,
        flexDirection: "row",
        minHeight: "100vh",
      }}
    >
      <VStack
        sx={{
          flex: 1,
          minHeight: "100vh",
          padding: 4,
        }}
      >
        <VStack
          sx={{
            minWidth: 550,
            margin: "0 auto",
            justifyContent: "space-between",
            height: "100%",
          }}
        >
          <Box
            component="img"
            src={nfpLogo}
            alt="Logo"
            sx={{
              width: "200px",
              height: "auto",
              marginTop: 8,
            }}
          />

          <VStack gap={2}>
            <Typography variant="h4" color="primary.main" fontWeight="bold">
              {step == "email"
                ? "Que bom ter você por aqui! 👋"
                : "Boas-vindas novamente!"}
            </Typography>
            {step == "email" && (
              <Typography variant="h6" color="text.primary">
                Acesse sua conta Next Fit inserindo seu e-mail abaixo:
              </Typography>
            )}

            <VStack gap={8}>
              <TitleWithInput step={step} setMail={setEmail} setPass={setPassword}/>
              <ConfirmButton step={step} />
            </VStack>
          </VStack>

          <VStack
            sx={{
              alignItems: { xs: "center", md: "stretch" },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <HStack
              justifyContent="space-between"
              alignItems="center"
              sx={{
                flexDirection: { xs: "column", md: "row" },
                alignItems: { xs: "flex-start", md: "center" },
                gap: { xs: 1, md: 0 },
              }}
            >
              <TextLogin
                label="Acessar central de ajuda"
                link="https://ajuda.nextfit.com.br/support/home"
              />

              <HStack gap={1} sx={{ display: { xs: "none", md: "flex" } }}>
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

            <HStack
              justifyContent="space-between"
              alignItems="center"
              sx={{
                flexDirection: { xs: "column", md: "row" },
                alignItems: { xs: "flex-start", md: "center" },
                gap: { xs: 1, md: 0 },
              }}
            >
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
          backgroundPosition: "center",
        }}
      ></Box>
    </VStack>
  );
}
