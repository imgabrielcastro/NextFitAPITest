import HStack from "../../../components/stacks/Hstack";
import VStack from "../../../components/stacks/Vstack";
import { Box, Typography } from "@mui/material";
import nfp from "../../../assets/nfp.png";
import nfpLogo from "../../../assets/logonf.svg";

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
          backgroundColor: "background.default",
          minHeight: "100%",
          padding: 12,
        }}
      >
        <Box
          component="img"
          src={nfpLogo}
          alt="Logo"
          sx={{
            width: "200px",
            height: "auto",
          }}
        />
        <Typography variant="h4" color="primary.main" fontWeight="bold">
          Que bom ter você por aqui! 👋
        </Typography>
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
