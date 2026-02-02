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

export default function Login() {
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
            maxWidth: 550,
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

          <VStack gap={8}>
            <Typography variant="h4" color="primary.main" fontWeight="bold">
              Que bom ter você por aqui! 👋
            </Typography>
            <TitleWithInput />

            <ConfirmButton />
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
                  link="https://www.instagram.com/nextfitoficial/"
                />
                <IconLink
                  icon={ytIcon}
                  link="https://www.youtube.com/@nextfit"
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
          flex: 1,
          backgroundImage: `url(${nfp})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></Box>
    </VStack>
  );
}
