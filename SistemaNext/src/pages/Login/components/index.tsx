import HStack from "../../../components/stacks/Hstack";
import VStack from "../../../components/stacks/Vstack";
import { Box, Typography } from "@mui/material";
import nfp from "../../../assets/nfp.png";

export default function Login() {
  return (
    <VStack
      sx={{
        flex: 1,
        display: "flex",
        flexDirection: "row",
        minHeight: "100vh",
        alignItems: "stretch",
        justifyContent: "stretch",
      }}
    >
      <HStack sx={{ flex: 1.1, backgroundColor: "red", minHeight: "100%" }}>
        <Typography>Esqueci minha senha</Typography>
      </HStack>

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
